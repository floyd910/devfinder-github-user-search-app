import "./Activity.css";

export default function Activity({ userData }) {
  return (
    <div className="activity">
      <table>
        <thead>
          <tr>
            <th>Repos</th>
            <th>Followers</th>
            <th>Following</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userData.public_repos}</td>
            <td>{userData.followers}</td>
            <td>{userData.following}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
