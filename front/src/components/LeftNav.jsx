import React from "react";
import { Link } from "react-router-dom";
import "../styles/leftNav.css";
import Box from "./Box";

function LeftNav(props) {
  const menuStyle = {
    padding: "0.8rem 0.5rem", // 상하 여백을 늘립니다.
  };
  const LNavStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    // padding: "0 5vw",
  };
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    border: "2.5px solid #D9D9D9",
    padding: "0.5rem",
    marginTop: "1.5rem",
    marginBottom: "1.5rem",
  };

  return (
    <nav id="left-nav" style={LNavStyle}>
      <a href="/">
        <img src="/images/Logo.png" />
      </a>
      <Box id="info" style={boxStyle}>
        {/* 메뉴 항목들 */}
        <div style={menuStyle}>
          <Link to="/population">인구혼잡도</Link>
        </div>
        <div style={menuStyle}>
          <Link to="/transfer">교통정보</Link>
        </div>
        <div style={menuStyle}>
          <Link to="/get_demo_today">시위정보</Link>
        </div>
        <div style={menuStyle}>
          <Link to="/safety">안전정보</Link>
        </div>
      </Box>
      <Box id="contact" style={boxStyle}>
        <div style={menuStyle} onClick={props.openCustomModal}>
          커스터마이징
        </div>
        <div style={menuStyle} onClick={props.openReportModal}>
          제보하기
        </div>
      </Box>
    </nav>
  );
}

export default LeftNav;
