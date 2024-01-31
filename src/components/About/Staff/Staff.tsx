import "./Staff.scss";
import lineRed from "../../../assets/images/About/lineRed.png";
import lineBlue from "../../../assets/images/About/lineBlue.png";
import staff from "../../../assets/images/About/staff.png";

const Staff = () => {
  return (
    <div className="container staff">
      <div className="h-main">
        <div className="h-heads">
          <h3>الطاقم الفني</h3>
          <div className="lines">
            <img src={lineBlue} alt="" className="blue" />
            <img src={lineRed} alt="" className="orange" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 staff-person-1">
          <div className="card" style={{ width: "18rem" }}>
            <div className="staff-person">
              <img src={staff} className="card-img-top" alt="..." />
              <div className="card-body staff-person-content">
                <h5 className="card-title">المدرب المساعد</h5>
                <p className="card-text">احمد العمير</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="staff-person">
              <img src={staff} className="card-img-top" alt="..." />
              <div className="card-body staff-person-content">
                <h5 className="card-title">المدرب المساعد</h5>
                <p className="card-text">احمد العمير</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 staff-person-1">
          <div className="card" style={{ width: "18rem" }}>
            <div className="staff-person">
              <img src={staff} className="card-img-top" alt="..." />
              <div className="card-body staff-person-content">
                <h5 className="card-title">المدرب المساعد</h5>
                <p className="card-text">احمد العمير</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="staff-person">
              <img src={staff} className="card-img-top" alt="..." />
              <div className="card-body staff-person-content">
                <h5 className="card-title">المدرب المساعد</h5>
                <p className="card-text">احمد العمير</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 staff-person-1">
          <div className="card" style={{ width: "18rem" }}>
            <div className="staff-person">
              <img src={staff} className="card-img-top" alt="..." />
              <div className="card-body staff-person-content">
                <h5 className="card-title">المدرب المساعد</h5>
                <p className="card-text">احمد العمير</p>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="staff-person">
              <img src={staff} className="card-img-top" alt="..." />
              <div className="card-body staff-person-content">
                <h5 className="card-title">المدرب المساعد</h5>
                <p className="card-text">احمد العمير</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
