import "./Avatar.css";

export default function Avatar({ userData }) {
  return (
    <div className="avatar">
      <img src={userData.avatar_url} alt={userData.login} />
    </div>
  );
}
