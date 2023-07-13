import React from "react";
import { styled } from "styled-components";

const link = "https://picfiles.alphacoders.com/568/thumb-568329.jpg";

const StyledCard = styled.a`
  height: 330px;
  width: 180px;
  text-decoration: none;
  color: inherit;
`;

const StyledCardImage = styled.img`
  width: 180px;
  height: 250px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 8px;
  transition: 200ms;
  &:hover {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
`;

const StyledCardTitle = styled.h3`
  font-size: 0.95em;
  margin: 3px;
  width: 180px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
  white-space: pre-wrap;
`;

const StyledCardSub = styled.p`
  font-size: 0.9em;
  margin: 3px 5px;
  font-weight: 200;
`;

const Card = () => {
  return (
    <StyledCard href="#">
      <StyledCardImage src={link} alt="" />
      <StyledCardTitle>
        Nàng thiên sứ tới chơi sau khi tôi cầu nguyện
      </StyledCardTitle>
      <StyledCardSub>
        <b>C.1</b> - 26 phút trước
      </StyledCardSub>
    </StyledCard>
  );
};

export default Card;
