import "./LeagueTable.scss";
import tableMenu from "../../../assets/images/Home/Table.png";
import endPoints from "../../../api/endPoints";
import usePost from "../../../api/usePost";
import React from "react";

const LeagueTable = () => {
  let body = {
    seasone: "39882892-af4f-4d6c-af9d-7a85458b8635",
    sport: "d56d7673-5e04-46a4-843c-65f1545c19c9",
  };
  const [data, getData]: any = usePost(endPoints.leagueTable, body);

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <div className="league-table">
      <div className="league-table-header flexBetween ">
        <p>جدول الدوري السوري</p>
        <img src={tableMenu} alt="" />
      </div>
      <table>
        <thead>
          <tr>
            <th>الفريق</th>
            <th>لعب</th>
            <th>خسارة</th>
            <th>تعادل</th>
            <th>فاز</th>
            <th>المتبقية</th>
            <th>+/-</th>
            <th>فرق</th>
            <th>المتبقية</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.football.map((ele: any, index: number) => {
              return (
                <tr key={index}>
                  <td>{ele.name}</td>
                  <td>{ele.play}</td>
                  <td>{ele.lose}</td>
                  <td>{ele.draw}</td>
                  <td>{ele.win}</td>
                  <td>1</td>
                  <td>{ele.points}</td>
                  <td>{ele.diff}</td>
                  <td>1</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
