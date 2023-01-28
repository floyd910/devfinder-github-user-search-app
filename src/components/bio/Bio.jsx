import "./Bio.css";

export default function Bio({ userData }) {
  const noBioStyle = {
    opacity: "0.75"
  };
  return (
    <div className="bio">
      {userData.bio ? (
        <p> {userData.bio}</p>
      ) : (
        <p style={noBioStyle}>This profile has no bio</p>
      )}
    </div>
  );
}
