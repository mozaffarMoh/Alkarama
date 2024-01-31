import "./Contact.scss";
import mailIcon from "../../assets/images/Contact/mail.png";
import phoneIcon from "../../assets/images/Contact/phone.png";
import locationIcon from "../../assets/images/Contact/location.png";
import facebookIcon from "../../assets/images/Contact/facebook.png";
import instagramIcon from "../../assets/images/Contact/instagram.png";
import youtubeIcon from "../../assets/images/Contact/youtube.png";
import logoIcon from "../../assets/images/Contact/logo.png";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="contact containar-fuild hero1 px-0">
        <div className="contact-row row m-0">
          <div className="col-md-8 col-sm-12 px-0">
            <div className="contact-all">
              <div className="contact-us">
                <h3>تواصل معنا</h3>
                <div className="form-con">
                  <form>
                    <input type="text" placeholder="الاسم *" />
                    <input type="text" placeholder="البريد الالكتروني" />
                    <input type="text" placeholder="الرقم *" />
                    <textarea
                      name=""
                      id=""
                      cols={10}
                      rows={10}
                      placeholder="رسالتك"
                    ></textarea>
                    <button>ارسال</button>
                  </form>
                </div>
                <div className="contact-text">
                  <div className="text-all">
                    <div className="text-img1">
                      <img src={mailIcon} alt="" />
                    </div>
                    <div className="text1">
                      <h4>البريد الالكتروني</h4>
                      <h5>alkaramah@gmail.com</h5>
                    </div>
                  </div>

                  <div className="text-all">
                    <div className="text-img1">
                      <img src={locationIcon} alt="" />
                    </div>
                    <div className="text1">
                      <h4>الموقع</h4>
                      <h5>حمص -الملعب البلدي</h5>
                    </div>
                  </div>
                  <div className="text-all">
                    <div className="text-img1">
                      <img src={phoneIcon} alt="" />
                    </div>
                    <div className="text1">
                      <h4>رقم الهاتف</h4>
                      <h5>1111 963-1111+</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="contact-icon">
                <div className="d-icon"></div>
                <img src={youtubeIcon} alt="" />
                <img src={facebookIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <div className="d1-icon"></div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 px-0">
            <img src={logoIcon} alt="" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
