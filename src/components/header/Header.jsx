import Logo from "../logo/Logo";
import ThemeChooser from "../themeChooser/ThemeChooser";
import "./Header.css";

export default function Header({ changeTheme, lightTheme }) {
  return (
    <header>
      <Logo />
      <ThemeChooser changeTheme={changeTheme} lightTheme={lightTheme} />
    </header>
  );
}
