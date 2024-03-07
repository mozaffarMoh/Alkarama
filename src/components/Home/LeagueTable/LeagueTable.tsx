import "./LeagueTable.scss";
import tableMenu from "../../../assets/images/Home/Table.png";
import useGet from "../../../api/useGet";
import endPoints from "../../../api/endPoints";

const LeagueTable = () => {
  const [data]: any = useGet(endPoints.leagueTable);

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
            data.map((item: any) => {
              return item.standings.map((ele: any, index: number) => {
                return (
                  <tr key={index}>
                    <td>{ele["club name"]}</td>
                    <td>{ele.play}</td>
                    <td>{ele.lose}</td>
                    <td>{ele.draw}</td>
                    <td>{ele.win}</td>
                    <td>1</td>
                    <td>{ele.points}</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                );
              });
            })}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
