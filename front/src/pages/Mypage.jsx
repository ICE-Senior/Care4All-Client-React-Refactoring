import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import Box from "../components/Box";

const Mypage = (props) => {
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const csrftoken = getCookie("csrftoken");
  let { id } = useParams();

  useEffect(() => {
    // Django 서버에서 사용자 이름을 가져오는 요청
    console.log(id);
    axios
      .get(`/api/my_page/${id}/`, {
        headers: {
          "X-CSRFToken": csrftoken,
        },
      })
      .then((response) => {
        if (response) {
          // setUserUsername(response.data.username);
          console.log(response);
        } else {
          // 로그인되지 않은 경우 또는 사용자 이름을 가져오지 못한 경우 다른 처리
          // 예: 로그인 페이지로 이동하도록 리다이렉트
          // history.push("/login");
          console.log("error");
        }
      })
      .catch((error) => {
        console.error("사용자 이름 가져오기 오류:", error);
      });
  }, []);

  const wrapperStyle = {
    height: "80%",
    display: "flex",
    padding: "10vh 15vw",
  };
  return (
    <div id="wrapper" style={wrapperStyle}>
      <LeftNav openCustomModal={props.openCustomModal} />
      <Box>test</Box>
      <RightNav
        openSignModal={props.openSignModal}
        openLocModal={props.openLocModal}
        openLoginModal={props.openLoginModal}
      />
    </div>
  );
};

export default Mypage;

// 상위에서 설정할 속성에 대해서 props로 넘겨줘야함
