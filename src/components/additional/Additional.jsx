import "./Additional.css";
import InfoAdditional from "../infoAdditional/InfoAdditional";
export default function Additional({ userData, lightTheme }) {
  const additionals = ["location", "blog", "twitter_username", "company"];
  return (
    <div className="additional">
      {additionals.map((info, index) => {
        return (
          <InfoAdditional
            key={info}
            info={info}
            userData={userData}
            index={index}
            lightTheme={lightTheme}
          />
        );
      })}
    </div>
  );
}
