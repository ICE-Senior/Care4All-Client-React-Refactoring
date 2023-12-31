import React, { useState, useEffect } from "react";
// import { useSpeechRecognition } from "react-speech-kit";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Transfer from "./pages/Transfer";
import Population from "./pages/Population";
import Safety from "./pages/Safety";
import Mypage from "./pages/Mypage";
import Header from "./components/Header";
import SignModal from "./components/Modal/SignModal";
import LocModal from "./components/Modal/LocModal";
import LoginModal from "./components/Modal/LoginModal";
import CustomModal from "./components/Modal/CustomModal";
import DemoInfo from "./pages/DemoInfo";
import ReportModal from "./components/Modal/ReportModal";

const App = () => {
  const [value, setValue] = useState("");
  const [isSignModalOpen, setIsSignModalOpen] = useState(false);
  const openSignModal = () => {
    setIsSignModalOpen(true);
  };

  const closeSignModal = () => {
    setIsSignModalOpen(false);
  };
  const [isLocModalOpen, setisLocModalOpen] = useState(false);
  const openLocModal = () => {
    setisLocModalOpen(true);
  };

  const closeLocModal = () => {
    setisLocModalOpen(false);
  };

  const [isLoginModalOpen, setisLoginModalOpen] = useState(false);
  const openLoginModal = () => {
    setisLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setisLoginModalOpen(false);
  };

  const [isReportModalOpen, setisReportModalOpen] = useState(false);
  const openReportModal = () => {
    setisReportModalOpen(true);
  };

  const closeReportModal = () => {
    setisReportModalOpen(false);
  };

  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const openCustomModal = () => {
    setIsCustomModalOpen(true);
  };
  const closeCustomModal = () => {
    setIsCustomModalOpen(false);
  };

  // const { listen, listening, stop } = useSpeechRecognition({
  //   onResult: (result) => {
  //     setValue(result);
  //     console.log(result);
  //     if (result.includes("교통")) {
  //       window.location.href = "/transfer";
  //     }
  //     if (result.includes("인구")) {
  //       window.location.href = "/population";
  //     }
  //     if (result.includes("시위")) {
  //       window.location.href = "/get_demo_today";
  //     }
  //     if (result.includes("안전")) {
  //       window.location.href = "/safety";
  //     }
  //     if (result.includes("메인")) {
  //       window.location.href = "/";
  //     }
  //   },
  // });
  useEffect(() => {
    console.log(window);
    console.log(window.kakao);
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              openCustomModal={openCustomModal}
              openSignModal={openSignModal}
              openLocModal={openLocModal}
              openReportModal={openReportModal}
              openLoginModal={openLoginModal}
            />
          }
        ></Route>
        <Route
          path="/population"
          element={
            <Population
              openCustomModal={openCustomModal}
              openSignModal={openSignModal}
              openReportModal={openReportModal}
              openLocModal={openLocModal}
              openLoginModal={openLoginModal}
            />
          }
        ></Route>
        <Route
          path="/transfer"
          element={
            <Transfer
              openCustomModal={openCustomModal}
              openSignModal={openSignModal}
              openLocModal={openLocModal}
              openReportModal={openReportModal}
              openLoginModal={openLoginModal}
            />
          }
        ></Route>
        <Route
          path="/my_page/:id"
          element={
            <Mypage
              openCustomModal={openCustomModal}
              openSignModal={openSignModal}
              openLocModal={openLocModal}
              openReportModal={openReportModal}
              openLoginModal={openLoginModal}
            />
          }
        ></Route>
        <Route
          path="/safety"
          element={
            <Safety
              openCustomModal={openCustomModal}
              openSignModal={openSignModal}
              openLocModal={openLocModal}
              openLoginModal={openLoginModal}
              openReportModal={openReportModal}
            />
          }
        ></Route>
        <Route
          path="/get_demo_today"
          element={
            <DemoInfo
              openCustomModal={openCustomModal}
              openSignModal={openSignModal}
              openLocModal={openLocModal}
              openLoginModal={openLoginModal}
              openReportModal={openReportModal}
            />
          }
        ></Route>
      </Routes>
      {/* <Footer /> */}
      <CustomModal isOpen={isCustomModalOpen} closeModal={closeCustomModal} />
      <SignModal isOpen={isSignModalOpen} closeModal={closeSignModal} />
      <LocModal isOpen={isLocModalOpen} closeModal={closeLocModal} />
      <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
      <ReportModal isOpen={isReportModalOpen} closeModal={closeReportModal} />
    </>
  );
};

export default App;

// 조금 더 끌고와서 가운데만 변하도록 구상해야할듯
