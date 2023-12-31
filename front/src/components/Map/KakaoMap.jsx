import React, { useEffect } from "react";
import "../../styles/kakao.css";

// const apiKey = process.env.REACT_APP_KAKAO_KEY;
// if (apiKey) {
//   const script = document.createElement("script");
//   script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}`;
//   script.async = true;
//   document.head.appendChild(script);
// }

const { kakao } = window;

const KakaoMap = () => {
  useEffect(() => {
    script.onload = () => {
      const continer = document.getElementById("content-display");
      const options = {
        center: new kakao.maps.LatLng(
          sessionStorage.getItem("latitude"),
          sessionStorage.getItem("longitude")
        ),
        level: 3,
      };
      const map = new kakao.maps.Map(continer, options);
      console.log(map);
    };
  }, []);

  return (
    <>
      <div className="content-box">
        <div id="content-display"></div>
      </div>
    </>
  );
};

export default KakaoMap;
