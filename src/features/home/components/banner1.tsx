import { CSSProperties } from "react";
import { Col } from "../../../common/Col";
import { Row } from "../../../common/Row";
import { Spacing } from "../../../common/Spacing";
import { Text } from "../../../common/Text";

export const Banner1 = () => (
  <>
    <Row height={440} mainAxisAlignment={"center"} style={BackgroundColor}>
      <Col width={1920} style={BackgroundImage}>
        <Col width={1136} crossAxisAlignment={"start"}>
          <Spacing height={58} />
          <Text className="ENHeadline-0 graywhite">
            Home styling with ownroom
          </Text>
          <Spacing height={58} />
          <Text className="KRBody-1 graywhite">
            누구나 나다운 집에 살 수 있도록
          </Text>
          <Text className="ENBody-1 graywhite">Make your own room</Text>
        </Col>
      </Col>
    </Row>
  </>
);

const BackgroundImage: CSSProperties = {
  backgroundImage: `url(${process.env.PUBLIC_URL + "img/home/home1.png"})`,
  backgroundSize: "cover",
};

const BackgroundColor: CSSProperties = {
  backgroundColor: "var(--brand-yellow-001)",
};
