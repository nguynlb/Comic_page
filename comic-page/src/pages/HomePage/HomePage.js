import React from "react";
import { useEffect, useState } from "react";
import styled from 'styled-components'
const StyledWrapper = styled.div`
  background:linear-gradient(132deg, rgb(8, 7, 7) 0%, rgb(163, 116, 118) 100%);
  height:1200px;
  width:100%;
  /* background-color:red; */
  position:relative;
`
const StyledHeader = styled.div`
  position:fixed;
  height: 68px;
  width: 100%;
  background-color: #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const StyledListItem = styled.div`
  width: 420px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 6px;
`
const StyledItem = styled.a`
  font-size:14px;
  font-weight:600;
  &.active {
    color:#e3c940;
  }
`;

const StyledTitle = styled.a`
  font-size: 18px;
  font-weight: 800;
  margin-right: 200px;
`
const StyledAction = styled.div`
  width: 250px;
  display: flex;
  justify-content:space-around;
  align-items:center;
`
const StyledButton = styled.button`
  height: 36px;
  width: 100px;
  background-color:red;
  outline:none;
  border:none;
  border-radius: 4px;
`

const HomePage = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = document.documentElement.scrollTop; // or use document.documentElement.scrollTop;
      if (currentPosition > scrollTop) {
        
        setScrolling(false);
      } else {
        // upscroll code
        setScrolling(true);
      }
      setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);
  return (

    <StyledWrapper>
      <StyledHeader>
        <StyledListItem>
          <StyledItem className="active">CẮT WEBTOON</StyledItem>
          <StyledItem>DISCORD</StyledItem>
          <StyledItem>HỘI KÍN</StyledItem>
          <StyledItem>ĐĂNG TRUYỆN</StyledItem>
          <StyledItem>TIN TỨC</StyledItem>
        </StyledListItem>
        <StyledTitle>CỨU TRUYỆN</StyledTitle>
        <StyledAction>
          <StyledButton>Đăng Nhập</StyledButton>
          <StyledButton>Đăng Kí</StyledButton>
        </StyledAction>
      </StyledHeader>
    </StyledWrapper>

  );
};

export default HomePage;