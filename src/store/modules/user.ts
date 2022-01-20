import { useNavigate } from 'react-router-dom';
import { RootState } from '../configureStore';
import {
  createAsyncThunk,
  createSlice,
  configureStore,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
export const setCookie = (
  name: string,
  value: string | undefined,
  option?: any
) => {
  return cookies.set(name, value, { ...option });
};
export const getCookie = (name: string) => {
  return cookies.get(name);
};

export interface User {
  nickname: string;
  isLoggedIn?: boolean;
}

export interface LoginInfo {
  id: string;
  password: string;
}

export interface SignUpInfo {
  id: string;
  password: string;
  userName: string;
  phoneNumber: string;
}

const initialState: User = {
  nickname: '',
  isLoggedIn: false,
};

const userSlice = createSlice({
  // createAction 과 createReducer의 결합임.
  // 슬라이스이름. 이것을 기반으로 액션이름이 자동 생성됨.
  // 슬라이스이름/리듀서이름으로 액션이름이 결정됨.
  name: 'user',
  // 초기상태
  initialState,
  reducers: {
    LOG_OUT: () => {
      return { nickname: '', isLoggedIn: false };
    },
  },
  extraReducers: (builder) => {
    // builder는 Case Reducer로 액션별로 나눠서 액션을 처리할 수 있음.
    // extraReducer를 사용한 이유는 맵핑된 내부 액션 타입이 아니라 외부 액션을 참조하려는 것임.
    builder.addCase(setUserAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      return { ...state, ...action.payload };
    });
    builder.addCase(setUserAsync.rejected, (state, action) => {
      console.log('요청이 거부되었습니다!');

      return { ...state };
    });

    builder.addCase(addUserAsync.fulfilled, (state, action) => {
      console.log('현재 actionpayload 출력!');
      console.log(action.payload);
      return { ...state };
    });
    // 회원가입
    builder.addCase(signUpAsync.fulfilled, (state, action) => {
      alert('회원가입에 성공하였습니다.');
      setCookie('token', action.payload.token);
      return { ...state, nickname: action.payload.nickname, isLoggedIn: true };
    });
    builder.addCase(signUpAsync.rejected, (state, action) => {
      alert('회원가입에 실패했습니다.');
      console.log(action.payload);

      return { ...state };
    });
    // 중복체크
    builder.addCase(duplicateCheckAsync.fulfilled, (state, action) => {
      console.log(action.payload);
      console.log(action.payload.result);
      if (action.payload.result === 'true') {
        alert('이미 사용중인 아이디입니다.');
      } else {
        alert('사용 가능한 아이디입니다.');
      }
    });

    // 로그인
    builder.addCase(logInAsync.fulfilled, (state, action) => {
      alert('로그인에 성공하였습니다.');
      setCookie('token', action.payload.token);
      return { ...state, nickname: action.payload.nickname, isLoggedIn: true };
    });
    builder.addCase(logInAsync.rejected, (state) => {
      alert('아이디 또는 비밀번호가 잘못 입력되었습니다.');
      return { ...state };
    });
  },
});

export default userSlice.reducer;

// createAsyncThunk에는 리듀서를 생성해주는 기능은 없다.
// 이 함수는 thunk action creator
// thunkActionCreator.pending/fulfilled/rejected 라는 세부 액션타입으로 나눠서 슬라이스의 extraReducer로 처리한다.
// response.data는 슬라이스에서 action.payload로 받을 수 있다.

export const addUserAsync = createAsyncThunk('ADD_USER', async (user: User) => {
  const response = await axios.post('http://localhost:8888/user', user);
  console.log(response.data);
  return response.data;
});

export const setUserAsync = createAsyncThunk('SET_USER', async (user: User) => {
  const response = await axios.get(
    `http://localhost:8888/user/${user.nickname}`
  );
  return response.data;
});

export const logInAsync = createAsyncThunk(
  'LOG_IN',
  async (loginInfo: LoginInfo) => {
    const response = await axios.post('http://13.209.143.8/api/users/login', {
      nickname: loginInfo.id,
      password: loginInfo.password,
    });

    return { ...response.data, password: `${loginInfo.password}` };
  }
);
export const signUpAsync = createAsyncThunk(
  'SIGN_UP',
  async (signUpInfo: SignUpInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'http://13.209.143.8/api/users/signup',
        {
          nickname: signUpInfo.id,
          password: signUpInfo.password,
          name: signUpInfo.userName,
          phoneNumber: signUpInfo.phoneNumber,
        }
      );

      return { ...response.data, nickname: `${signUpInfo.id}` };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const duplicateCheckAsync = createAsyncThunk(
  'DUPLICATE_CHECK',
  async (nickname: string) => {
    const response = await axios.post('http://13.209.143.8/api/users/check', {
      nickname: nickname,
    });

    return { ...response.data, result: `${response.data}` };
  }
);

export const getUserInfo = (state: RootState) => state.user;
export const getNickName = (state: RootState) => state.user.nickname;
export const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
