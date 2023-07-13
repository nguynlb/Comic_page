import React from "react";
import Card from "./Card/Card";
import styled from "styled-components";
// import { RightCircleFilled } from "@ant-design/icons";

const StyledMenuCard = styled.div`
  margin: 100px 120px;
  background: inherit;
`;
const StyledHeading = styled.div`
  color: #414a59;
  font-weight: bold;
  font-size: 1.3em;
`;

const StyledListCard = styled.div`
  display: flex;
  max-height: 650px;
  flex-wrap: wrap;
  gap: 15px;
  margin: 60px 30px 0 30px;
  position: relative;
  overflow: hidden;
  .nextIcon {
    font-size: 2em;
    position: absolute;
    top: 50%;
    right: 60px;
    z-index: 100;
    opacity: 0.5;
  }
`;

// const StyledIcon = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0px;
//   height: calc(100% + 20px);
//   position: absolute;
//   right: 50px;
//   background-color: #fff;
//   z-index: 10;
//   width: 70px;
//   -webkit-mask-image: linear-gradient(to left, black 10%, transparent 80%);
//   mask-image: linear-gradient(to left, black 10%, transparent 80%);

//   /* opacity: 0.5; */
// `;

const MenuCard = () => {
  return (
    <StyledMenuCard>
      <StyledHeading>MỚI CẬP NHẬT</StyledHeading>
      <StyledListCard>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <StyledIcon />
        <RightCircleFilled className="nextIcon" /> */}
      </StyledListCard>
    </StyledMenuCard>
  );
};

export default MenuCard;
