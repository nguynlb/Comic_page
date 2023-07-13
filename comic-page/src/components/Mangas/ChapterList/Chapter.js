import { MoreOutlined } from "@ant-design/icons";
import React from "react";
import { styled } from "styled-components";

const StyledChapter = styled.div`
  margin-bottom: 8px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: ${(props) => (props.primary ? "#f3f4f6" : "#f9fafb")};
  transition: 200ms;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    left: 0px;
    width: 5px;
    height: 100%;
    background-color: #d1d5db;
  }

  &:hover {
    background-color: rgb(229, 229, 229, 0.7);
  }
`;

const StyledInfo = styled.div`
  display: flex;
  align-items: center;

  .index {
    margin: 0 30px 0 20px;
    font-weight: bold;
    font-size: 1.4em;
  }
  .titleName {
    font-weight: 400;
    font-size: 1.2em;
  }
  .subinfo {
    opacity: 0.9;
    font-weight: 100;
    font-size: 0.9em;
    margin-top: 2px;
  }
`;

const Chapter = ({ index, title, primary, view, comment }) => {
  return (
    <StyledChapter primary={primary}>
      <StyledInfo>
        <div className="index">{`Chương ${index}`}</div>
        <div>
          <div className="titleName">{title ? title : "Không có tiêu đề"}</div>
          <div className="subinfo">{`${view ? view : 0} lượt xem - ${
            comment ? comment : 0
          } bình luận`}</div>
        </div>
      </StyledInfo>
      <div>
        <MoreOutlined style={{ fontSize: "1.7em", marginRight: "40px" }} />
      </div>
    </StyledChapter>
  );
};

export default Chapter;
