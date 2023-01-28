import { useState } from "react";
import dark from "../../assets/icon-moon.svg";
import light from "../../assets/icon-sun.svg";
import darkHover from "../../assets/icon-moon-hover.svg";
import lightHover from "../../assets/icon-sun-hover.svg";
import "./ThemeChooser.css";

export default function ThemeChooser({ changeTheme, lightTheme }) {
  const [hover, setHover] = useState(false);
  const hoverStyles = [
    {
      color: "#222731"
    },
    { color: "#90A4D4" }
  ];
  const casualStyles = [
    {
      color: "#4b6a9b"
    },
    {
      color: "#ffffff"
    }
  ];
  return (
    <>
      {lightTheme ? (
        <button
          className="dark-light-btn"
          onClick={() => {
            changeTheme();
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p style={hover ? hoverStyles[0] : casualStyles[0]}>Dark</p>
          {!hover ? (
            <img src={dark} alt="Moon icon" />
          ) : (
            <img src={darkHover} alt="Moon icon" />
          )}
        </button>
      ) : (
        <button
          className="dark-light-btn"
          onClick={() => {
            changeTheme();
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p style={hover ? hoverStyles[1] : casualStyles[1]}>Light</p>
          {!hover ? (
            <img src={light} alt="Sun icon" />
          ) : (
            <img src={lightHover} alt="Sun icon" />
          )}
        </button>
      )}
    </>
  );
}
