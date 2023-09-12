import "./App.css";
import { Menu, Image } from "antd";
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
          //Menu items array with icons @antd-icons
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
// Routes to pages from the menu
//Events Pages only page with mock content
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
  // Mock Data
  const eventsArray = [
    {
      image: (
        <Image
          width={250}
          src="https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/2023/05/end-covid.jpg"
        ></Image>
      ),
      EventName: "Create Covid-19",
      EventDate: "Thurday, Feb 18, 5:45 PM CT",
      EventHost: "By Mobile Loaves",
      location: "11000 N Mopac Expy #100",
    },
    {
      image: (
        <Image
          width={250}
          src="https://images.wsj.net/im-626352/?width=700&height=521"
        ></Image>
      ),
      EventName: "Bridges Out of Poverty",
      EventDate: "Friday, Feb 19, 4:45 PM CT",
      EventHost: "By Mobile Loaves",
      location: "11000 N Mopac Expy #100",
    },
    {
      image: (
        <Image
          width={250}
          src="https://capital-services.com/wp-content/uploads/2023/06/Health-Happy.jpg"
        ></Image>
      ),
      EventName: "Health and Happiness",
      EventDate: "Saturday, Feb 20, 3:45 PM CT",
      EventHost: "By Mobile Loaves",
      location: "11000 N Mopac Expy #100",
    },
  ];

  return (
    <div>
      {eventsArray.map((name, index) => {
        const {
          image = "",
          EventName = "",
          EventDate = "",
          EventHost = "",
          location = "",
        } = name;

        return (
          <EventCard
            key={`${EventName}-${EventDate}-${index}`}
            image={image}
            EventName={EventName}
            EventDate={EventDate}
            EventHost={EventHost}
            location={location}
          ></EventCard>
        );
      })}
    </div>
  );
}

export default App;
