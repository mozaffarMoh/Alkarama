import "./AllMatches.scss";
import searchIcon from "../../../assets/images/Matches/searchIcon.png";
import calendarIcon from "../../../assets/images/Matches/calendar.png";
import { daysArray } from "./DaysArray";
import React from "react";
import { LeaguesArray } from "./LeaguesArray";

const AllMatches = () => {
  const [dayActive, setDayActive] = React.useState(0);

  return (
    <div className="all-matches">
      <div className="all-matches-navigations">
        <div className="search-field flexCenter">
          <input type="text" placeholder="ابحث عن مباراة" />
          <img src={searchIcon} />
        </div>
        <div className="days">
          <div className="watch-all flexCenter">
            <img src={calendarIcon} />
            <div className="watch-all-text flexCenterColumn">
              <span>مشاهدة</span>
              <span>الكل</span>
            </div>
          </div>
          {daysArray.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={`day-item flexCenterColumn ${
                  index === dayActive && "day-active"
                }`}
                onClick={() => setDayActive(index)}
              >
                <span>{item.day}</span>
                <span>{item.date}</span>
              </div>
            );
          })}
        </div>
      </div>

      {LeaguesArray.map((item: any, index: number) => {
        return (
          <div className="league-container" key={index}>
            <div className="league-caption flexStart">
              <div className="league-name flexCenter">
                <img src={item.leagueImage} />
                <h5>{item.leagueName}</h5>
              </div>
              <div className="league-phase flexCenter">
                <p>({item.phase})</p>
              </div>
            </div>
            {item.matches.map((match: any, matchIndex: number) => {
              return (
                <div
                  className={`league-matches flexCenter ${
                    matchIndex % 2 === 0 ? "even-bg-color" : "odd-bg-color"
                  }`}
                  key={matchIndex}
                >
                  <div className="league-matches-item flexEnd">
                    <div className="item-details flexCenter">
                      <p>{match.team1Name}</p>
                      <img src={match.team1Image} />
                      <p>
                        {match.team1Result}-{match.team2Result}
                      </p>
                      <img src={match.team2Image} />
                      <p>{match.team2Name}</p>
                    </div>

                    <div
                      className={`item-time flexCenter ${
                        match.time === "Live" && "live-red"
                      }`}
                    >
                      <p>{match.time}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default AllMatches;
