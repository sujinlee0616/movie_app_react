import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      {/* a 태그가 아니라 link 사용.  */}
      {/* a태그 사용 시 단순 HTML이므로 메뉴를 클릭하면 페이지가 refresh됨. */}
      {/* Link 걸고 React 사용해서 페이지 refresh 없이 화면을 빠르게 로딩 가능. */}
      
      {/* <기억할 것> */}
      {/* 1. router 밖에서 Link 사용 불가. */}
      {/*  - App.js 파일에 가면 <BrowserRouter> 안에 <Navigation />이 있다. */}
    </div>
  );
}

export default Navigation;