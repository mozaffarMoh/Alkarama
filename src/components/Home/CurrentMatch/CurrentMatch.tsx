import "./CurrentMatch.scss";
import currentMatchImage1 from "../../../assets/images/Home/current-match-1.svg";
import currentMatchImage2 from "../../../assets/images/Home/current-match-2.svg";

const CurrentMatch = ({ data }: any) => {

  console.log('from current : ', data)
  return (
    <div className="current-match flexCenterColumn">
      <span>المباراة القادمة</span>
      <div className="match flexCenter">
        <div className="match-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="147"
            height="138"
            viewBox="0 0 147 138"
            fill="none"
          >
            <g filter="url(#filter0_d_508_5590)">
              <path
                d="M98.9321 1.64828H46.7456L5 39.8356V87.2406L46.7456 128.939"
                stroke="white"
                strokeWidth="2.63361"
              />
              <path
                d="M45.821 128.939H99.0414L141.509 89.8742V39.8356L99.0414 1.64827"
                stroke="white"
                strokeWidth="2.63361"
              />
            </g>
            <image href={currentMatchImage2} x="20%" y="15%" />
            <defs>
              <filter
                id="filter0_d_508_5590"
                x="0.171627"
                y="0.331482"
                width="146.166"
                height="136.948"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.51148" />
                <feGaussianBlur stdDeviation="1.75574" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_508_5590"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_508_5590"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <p>الجيش</p>
        </div>

        <div className="match-item">
          <h1>VS</h1>
          <h5 dir="ltr">00:14 PM</h5>
        </div>

        <div className="match-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="147"
            height="138"
            viewBox="0 0 147 138"
            fill="none"
          >
            <g filter="url(#filter0_d_508_5590)">
              <path
                d="M98.9321 1.64828H46.7456L5 39.8356V87.2406L46.7456 128.939"
                stroke="white"
                strokeWidth="2.63361"
              />
              <image href={currentMatchImage1} x="20%" y="15%" />

              <path
                d="M45.821 128.939H99.0414L141.509 89.8742V39.8356L99.0414 1.64827"
                stroke="white"
                strokeWidth="2.63361"
              />
            </g>

            <defs>
              <filter
                id="filter0_d_508_5590"
                x="0.171627"
                y="0.331482"
                width="146.166"
                height="136.948"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.51148" />
                <feGaussianBlur stdDeviation="1.75574" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_508_5590"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_508_5590"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <p>الكرامة</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentMatch;
