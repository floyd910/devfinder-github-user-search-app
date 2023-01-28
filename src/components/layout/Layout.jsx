import { useState, useEffect } from "react";
import Header from "../header/Header";
import SearchBox from "../searchBox/SearchBox";
import UserBox from "../userBox/UserBox";
import "./Layout.css";

export default function Layout() {
  const [lightTheme, setLightTheme] = useState(true);
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const changeTheme = () => {
    setLightTheme(!lightTheme);
  };
  const getUserData = (user) => {
    if (user.toString() !== "") {
      setError("");
      fetch(`https://api.github.com/users/${user}`)
        .then((response) => response.json())
        .then((data) => (data.login ? setUserData(data) : setError(data)));
    }
  };
  useEffect(() => {
    getUserData("octocat");
  }, []);
  return (
    <div className={lightTheme ? "light" : "dark"}>
      <Header changeTheme={changeTheme} lightTheme={lightTheme} />
      <SearchBox getUserData={getUserData} error={error} />
      <UserBox userData={userData} lightTheme={lightTheme} />
    </div>
  );
}
