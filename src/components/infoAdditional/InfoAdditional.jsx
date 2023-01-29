import company from "../../assets/icon-company.svg";
import website from "../../assets/icon-website.svg";
import twitter from "../../assets/icon-twitter.svg";
import location from "../../assets/icon-location.svg";
import companyDark from "../../assets/icon-company-dark.svg";
import locationDark from "../../assets/icon-location-dark.svg";
import websiteDark from "../../assets/icon-website-dark.svg";
import twitterDark from "../../assets/icon-twitter-dark.svg";
import "./InfoAdditional.css";

export default function InfoAdditional({ userData, index, info, lightTheme }) {
  const noInfoStyle = {
    mixBlendMode: "normal",
    opacity: "0.5"
  };

  return (
    <>
      {index === 0 ? (
        <div
          className="info-additional"
          style={!userData[info] ? noInfoStyle : {}}
        >
          {lightTheme ? (
            <img src={location} alt="Location icon" />
          ) : (
            <img src={locationDark} alt="Location icon" />
          )}

          <p>
            {userData[info] ? userData[info] : "Not Available"}
          </p>
        </div>
      ) : index === 1 ? (
        <div
          className="info-additional"
          style={!userData[info] ? noInfoStyle : {}}
        >
          {lightTheme ? (
            <img src={website} alt="Hyperlink icon" />
          ) : (
            <img src={websiteDark} alt="Hyperlink icon" />
          )}

          {userData[info] ? (
            <a href={userData[info]}>{userData[info]}</a>
          ) : (
            <p>Not Available</p>
          )}
        </div>
      ) : index === 2 ? (
        <div
          className="info-additional"
          style={!userData[info] ? noInfoStyle : {}}
        >
          {lightTheme ? (
            <img src={twitter} alt="Twitter icon" />
          ) : (
            <img src={twitterDark} alt="Twitter icon" />
          )}
          {userData[info] ? (
            <a href={"https://twitter.com/" + userData[info]}>
              {userData[info]}
            </a>
          ) : (
            <p>Not Available</p>
          )}
        </div>
      ) : (
        index === 3 && (
          <div
            className="info-additional"
            style={!userData[info] ? noInfoStyle : {}}
          >
            {lightTheme ? (
              <img src={company} alt="Company icon" />
            ) : (
              <img src={companyDark} alt="Company icon" />
            )}
            {/* here i am not linking to github.com/company 
            because most of the links are 404
            (example github.com/traversymedia) */}
            {userData[info] ? <p>{userData[info]}</p> : <p>Not Available</p>}
          </div>
        )
      )}
    </>
  );
}
