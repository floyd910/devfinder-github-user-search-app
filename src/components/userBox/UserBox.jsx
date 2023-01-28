import Activity from "../activity/Activity";
import Bio from "../bio/Bio";
import Profile from "../profile/Profile";
import Additional from "../additional/Additional";
import "./UserBox.css";

export default function UserBox({ userData, lightTheme }) {
  console.log(userData);
  return (
    <div className="user-box">
      <Profile userData={userData} />
      <Bio userData={userData} />
      <Activity userData={userData} />
      <Additional userData={userData} lightTheme={lightTheme} />
    </div>
  );
}
