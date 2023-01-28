import Avatar from "../avatar/Avatar";
import GeneralInfo from "../generalInfo/GeneralInfo";
import "./Profile.css";

export default function Profile({ userData }) {
  return (
    <div className="profile">
      <Avatar userData={userData} />
      <GeneralInfo userData={userData} />
    </div>
  );
}
