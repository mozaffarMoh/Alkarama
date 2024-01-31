import "./Footer.scss";
import googlePlayImage from "../../assets/images/Footer/googlePlay.png";
import appStoreImage from "../../assets/images/Footer/appStore.png";
import instagramIcon from "../../assets/images/Footer/instagram.png";
import twitterIcon from "../../assets/images/Footer/twitter.png";
import facebookIcon from "../../assets/images/Footer/facebook.png";
import youtubeIcon from "../../assets/images/Footer/youtube.png";
import logoIcon from "../../assets/images/Footer/logo.png";
import emptyCircle from "../../assets/images/Footer/emptyCircle.png";

const Footer = () => {
  return (
    <div className="containar-fuild footer px-0 mt-4">
      <div className="row m-0">
        <div className="col-md-12 col-sm-12 px-0">
          <div className="lin1"></div>
          <div className="text-con">
            <div className="alka">
              <img src={logoIcon} className="footer-logo-icon" />
              <div className="alka-content">
                <h5>الكرامة</h5>
                <p>الاخبار</p>
                <p>المباريات</p>
                <p>حول النادي</p>
                <p>اللاعبين</p>
              </div>
            </div>
            <div className="help">
              <h5>المساعدة</h5>
              <p>اتصل بنا</p>
              <p>الابلاغ والشكوى</p>
            </div>
            <div className="down">
              <h5>حمل التطبيق</h5>
              <div className="googl">
                <img src={googlePlayImage} alt="" />
              </div>
              <img src={appStoreImage} alt="" />
            </div>
          </div>
          <div className="all-f">
            <h6>اتصل بنا, سياسة الخصوصية, تفضيلات ملفات تعريف الارتباط</h6>
            <div className="all-icon-f">
              <img src={instagramIcon} alt="" className="social-icon" />
              <img src={twitterIcon} alt="" className="social-icon" />
              <img src={facebookIcon} alt="" className="social-icon" />
              <img src={youtubeIcon} alt="" className="social-icon" />
            </div>
            <p>جميع الحقوق محفوظة لنادي الكرامة</p>
          </div>
          <div className="lin2"></div>
          <div className="te">
            <p>SPONSORS</p>
          </div>
          <div className="all-im">
            <img src={emptyCircle} alt="" />
            <img src={emptyCircle} alt="" />
            <img src={emptyCircle} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
