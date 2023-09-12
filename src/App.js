import "./App.css";
import { Menu } from "antd";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  DashboardOutlined,
  CalendarOutlined,
  BlockOutlined,
  TeamOutlined,
  TrophyOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import EventCard from "./components/events";

function App() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        height: "100%",
      }}
    >
      <Menu
        onClick={({ key }) => {
          navigate(key);
        }}
        style={{
          backgroundColor: "#0c3f65",
          color: "white",
        }}
        items={[
          {
            label: "Dashboard",
            key: "/",
            icon: <DashboardOutlined />,
          },
          { label: "Matches", key: "/matches", icon: <BlockOutlined /> },
          { label: "Events", key: "/events", icon: <CalendarOutlined /> },
          { label: "Teams", key: "/teams", icon: <TeamOutlined /> },
          { label: "Rewards", key: "/rewards", icon: <TrophyOutlined /> },
          { label: "Messaging", key: "/messaging", icon: <MessageOutlined /> },
          { label: "Profile", key: "/profile", icon: <UserOutlined /> },
          { label: "Settings", key: "/settings", icon: <SettingOutlined /> },
        ]}
      ></Menu>
      <Content />
    </div>
  );
}
function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>}></Route>
        <Route path="/matches" element={<div>Matches</div>}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/teams" element={<div>Teams</div>}></Route>
        <Route path="/rewards" element={<div>Rewards</div>}></Route>
        <Route path="/messaging" element={<div>Messaging</div>}></Route>
        <Route path="/profile" element={<div>Profile</div>}></Route>
        <Route path="/settings" element={<div>Settings</div>}></Route>
      </Routes>
    </div>
  );
}
function Events() {
  // Example Names Array
  const eventsArray = [
    {
      EventName: "Create Covid-19",
      EventDate: "Thurday, Feb 18, 5:45 PM CT",
      EventHost: "By Mobile Loaves",
      EventAddress: "11000 N Mopac Expy #100",
    },
    {
      EventName: "Bridges Out of Poverty",
      EventDate: "Friday, Feb 19, 4:45 PM CT",
      EventHost: "By Mobile Loaves",
      EventAddress: "11000 N Mopac Expy #100",
    },
    {
      EventName: "Health and Happiness",
      EventDate: "Saturday, Feb 20, 3:45 PM CT",
      EventHost: "By Mobile Loaves",
      EventAddress: "11000 N Mopac Expy #100",
    },
  ];

  return (
    <div>
      {/* Example for Juan */}
      {/* Remember to use .map() if you need to iterate through things and have something append to the DOM */}
      {eventsArray.map((name, index) => {
        const {
          EventName = "",
          EventDate = "",
          EventHost = "",
          EventAddress = "",
        } = name;

        return (
          <EventCard
            // When you iterate things on the DOM in react. You need to give it a unique key.
            // That way react knows which of the items you're trying to do things too.
            key={`${EventName}-${EventDate}-${index}`}
            EventName={EventName}
            EventDate={EventDate}
            EventHost={EventHost}
            EventAddress={EventAddress}
          ></EventCard>
        );
      })}
    </div>
  );
}

export default App;
