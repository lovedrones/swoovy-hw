import { Card } from "antd";

export default function EventCard(props) {
  const {
    EventName = "",
    EventDate = "",
    EventHost = "",
    EventAddress = "",
  } = props;

  return (
    <Card
      hoverable={true}
      style={{ width: 320 }}
      cover={
        <div
          style={{
            height: 150,
            width: "100%",
            background: "linear-gradient(#e66465, #9198e5)",
            color: "white",
            fontSize: 30,

            fontFamily: "cursive",
          }}
        >
          Event Image!
        </div>
      }
    >
      <Card.Meta title="Event"></Card.Meta>
      Name: {EventName}
      <br />
      Date: {EventDate}
      <br />
      Host: {EventHost}
      <br />
      Address: {EventAddress}
    </Card>
  );
}
