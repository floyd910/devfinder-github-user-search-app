import "./GeneralInfo.css";

export default function GeneralInfo({ userData }) {
  let date = new Date(userData.created_at);
  let joinedAt = date.toUTCString().substring(5, 17);
  return (
    <div className="general-info">
      <h2>{userData.name ? userData.name : userData.login}</h2>
      <h3>@{userData.login}</h3>
      <p>Joined {joinedAt}</p>
    </div>
  );
}
