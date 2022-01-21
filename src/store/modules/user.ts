import { useAppDispatch } from './../configureStore.hooks';
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
  id: number;
  nickname: string;
  password: string;
  name: string;
  phoneNumber: string;
  isLoggedIn?: boolean;
  isConsultant: boolean;
  consultantRegisterStatus: '신청 전' | '신청 후' | '승인 완료';
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
  id: -1,
  nickname: '',
  password: '',
  name: '',
  phoneNumber: '',
  isLoggedIn: false,
  isConsultant: false,
  consultantRegisterStatus: '신청 전',
};

const userSlice = createSlice({
  // createAction 과 createReducer의 결합임.
  // 슬라이스이름. 이것을 기반으로 액션이름이 자동 생성됨.
  // 슬라이스이름/리듀서이름으로 액션이름이 결정됨.
  name: 'user',
  // 초기상태
  initialState,
  reducers: {
    SET_USER: (state, action) => {
      return { ...state, ...action.payload };
    },

    LOG_OUT: (state, action) => {
      setCookie('token', undefined);
      alert('로그아웃되었습니다.');
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    // builder는 Case Reducer로 액션별로 나눠서 액션을 처리할 수 있음.
    // extraReducer를 사용한 이유는 맵핑된 내부 액션 타입이 아니라 외부 액션을 참조하려는 것임.

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

    // 내 정보 가져오기(새로고침해도 로그인상태 유지)
    builder.addCase(fetchMyInfoAsync.fulfilled, (state, action) => {
      return { ...state, ...action.payload, isLoggedIn: true };
    });

    // 컨설턴트, 고객 전환
    builder.addCase(switchStatusAsync.fulfilled, (state, action) => {
      alert(action.payload.message);
      return { ...state, isConsultant: !state.isConsultant };
    });
    builder.addCase(switchStatusAsync.rejected, (state, action) => {
      alert(
        '먼저 컨설턴트 신청을 진행해주세요.\n승인 후에 전환할 수 있습니다.'
      );

      return { ...state };
    });
  },
});

export default userSlice.reducer;

// createAsyncThunk에는 리듀서를 생성해주는 기능은 없다.
// 이 함수는 thunk action creator
// thunkActionCreator.pending/fulfilled/rejected 라는 세부 액션타입으로 나눠서 슬라이스의 extraReducer로 처리한다.
// response.data는 슬라이스에서 action.payload로 받을 수 있다.

export const logInAsync = createAsyncThunk(
  'user/LOG_IN',
  async (loginInfo: LoginInfo) => {
    const response = await axios.post(
      'https://api.ownroom.link/api/users/login',
      {
        nickname: loginInfo.id,
        password: loginInfo.password,
      }
    );

    return { ...response.data };
  }
);
export const signUpAsync = createAsyncThunk(
  'user/SIGN_UP',
  async (signUpInfo: SignUpInfo, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://api.ownroom.link/api/users/signup',
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
  'user/DUPLICATE_CHECK',
  async (nickname: string) => {
    const response = await axios.post(
      'https://api.ownroom.link/api/users/check',
      {
        nickname: nickname,
      }
    );

    return { ...response.data, result: `${response.data}` };
  }
);

export const fetchMyInfoAsync = createAsyncThunk(
  'user/FETCH_MY_INFO',
  async () => {
    const response = await axios.get(`https://api.ownroom.link/api/users/me`, {
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
    });
    return { ...response.data };
  }
);

const switchStatus = (isConsultant: boolean) => {
  if (isConsultant === true) return 'customer';
  else return 'consultant';
};
export const switchStatusAsync = createAsyncThunk(
  'user/SWITCH_STATUS',
  async (isConsultant: boolean, { rejectWithValue }) => {
    try {
      const response = await axios({
        url: `https://api.ownroom.link/api/users/switch`,
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${getCookie('token')}`,
        },
        data: {
          switchTo: `${switchStatus(isConsultant)}`,
        },
      });
      return { ...response.data };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const fetchConsultingInfoAsync = createAsyncThunk(
  'user/FETCH_CONSULTING_INFO',
  async () => {
    const response = await axios({
      url: `https://api.ownroom.link/api/consultings`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
    });
    return { ...response.data };
  }
);

export const downloadConsultingapplicationAsync = createAsyncThunk(
  'user/DOWNLOAD_APPLICATION',
  async () => {
    const response = await axios({
      url: `https://api.ownroom.link/api/consultings/application/download`,
      method: `POST`,
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
      data: {
        userId: 4,
      },
    });
    console.log(response.data);
    return { ...response.data };
  }
);

export const getUserInfo = (state: RootState) => state.user;
export const getNickName = (state: RootState) => state.user.nickname;
export const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
