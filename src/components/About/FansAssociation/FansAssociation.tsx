import "./FansAssociation.scss";
import lineRed from "../../../assets/images/About/lineRed.png";
import lineBlue from "../../../assets/images/About/lineBlue.png";
import lineWhite from "../../../assets/images/About/lineWhite.png";
import logo from "../../../assets/images/About/logo.png";
import fanzImage from "../../../assets/images/About/fanz.jpeg";

const FansAssociation = () => {
  return (
    <div className="container fanz">
      <div className="fanz-content">
        <h3>رابطة مشجعي النادي</h3>
        <img src={fanzImage} alt="" srcSet="" />
      </div>
      <div className="about-fanz">
        <h3>لمحة عن الرابطة</h3>
        <div className="fanz-lines">
          <img src={lineBlue} alt="" className="blue" />
          <img src={lineRed} alt="" className="orange" />
        </div>
        <p>
          تعدّ رابطة مشجعي الكرامة من أوائل روابط المشجعين التي تشكلت بالقطر فقد
          تشكلت عام 1975، ولها شعار من تلك الأيام وترأسها آنذاك المشجع عمر
          الشاغوري، وكان اهتمامها بالتشجيع وتوجيه الجماهير واختيار الهتافات
          الجميلة البعيدة عن الاستفزاز
        </p>
      </div>
      <div className="about-fanz">
        <h3>مؤسسين الرابطة</h3>
        <div className="fanz-lines">
          <img src={lineBlue} alt="" className="blue" />
          <img src={lineRed} alt="" className="orange" />
        </div>
        <div className="creaters-fanz">
          <div className="creaters-fanz-content">
            <img src={logo} alt="" srcSet="" />
            <div className="creaters-fanz-one">
              <h3>
                <div className="orange-circle"></div>
                رئيس الرابطة
                <div className="orange-circle"></div>
              </h3>
              <h4>السيد باسم محمد نزار زهرة</h4>
            </div>
          </div>
          <img className="line-fanz" src={lineWhite} alt="" />
          <div className="creaters-fanz-two">
            <h3>
              <div className="orange-circle"></div>
              أعضاء الرابطة
              <div className="orange-circle"></div>
            </h3>
            <div className="fanz-members">
              <div>
                <h4>الدكتور ايهاب القاضي</h4>
                <h4>الدكتور كنان بيرقدار</h4>
                <h4>المهندس وسيم أحمد الريس</h4>
              </div>
              <div>
                <h4>السيد عبدالله المغربي</h4>
                <h4>السيد عمار حاضري</h4>
                <h4>السيد نبيل الزامل</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FansAssociation;
