import React from "react";
import Card from "./Card/Card";
import styled from "styled-components";

const StyledMenuCard = styled.div`
  padding: 100px 120px;
  background: inherit;
`;
const StyledHeading = styled.div`
  color: #414a59;
  font-weight: bold;
  font-size: 1.3em;
`;

const StyledListCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 60px;
`;

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
      </StyledListCard>
    </StyledMenuCard>
  );
};

export default MenuCard;
