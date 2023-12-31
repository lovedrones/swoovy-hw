import { Card } from "antd";
import {
  EnvironmentOutlined,
  HeartOutlined,
  LoginOutlined,
} from "@ant-design/icons";

export default function EventCard(props) {
  const {
    image = "",
    EventName = "",
    EventDate = "",
    EventHost = "",
    location = "",
  } = props;

  return (
    <Card
      hoverable={true}
      style={{ width: 250, marginLeft: "20%", marginTop: 30 }}
      cover={
        <div
          style={{
            background: { image },
          }}
        >
          {image}
        </div>
      }
    >
      <Card.Meta></Card.Meta>
      <div style={{ color: "#f55a47", fontWeight: "Bold" }}>
        Date: {EventDate}
      </div>
      <div style={{ color: "#0c3f65", fontWeight: "Bold", fontSize: 16 }}>
        {EventName}
      </div>
      <br />
      <LoginOutlined />
      {EventHost}
      <br />
      <EnvironmentOutlined /> {location}
      <br />
      <br />
      <HeartOutlined />
    </Card>
  );
}
