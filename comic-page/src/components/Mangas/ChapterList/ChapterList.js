import React from "react";
import Chapter from "./Chapter";
import { styled } from "styled-components";

const listChapter = [
  {
    id: 1,
    index: 1,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
  {
    id: 2,
    index: 2,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
  {
    id: 3,
    index: 3,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
  {
    id: 4,
    index: 4,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
  {
    id: 5,
    index: 5,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
  {
    id: 6,
    index: 6,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
  {
    id: 7,
    index: 7,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
  {
    id: 8,
    index: 8,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
  {
    id: 9,
    index: 9,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
  {
    id: 10,
    index: 10,
    title: "Người đã ly hôn thường rất hút gái",
    comment: 24,
    view: 21800,
  },
];

const StyledChapterList = styled.div`
  margin: 20px;
  width: 65%;
  height: 500px;
  overflow-y: scroll;
`;

const ChapterList = () => {
  return (
    <StyledChapterList>
      {listChapter.toReversed().map((chapter) => {
        return (
          <Chapter
            id={chapter.id}
            title={chapter.title}
            comment={chapter.comment}
            view={chapter.view}
            index={chapter.index}
            primary={chapter.index % 2}
          />
        );
      })}
    </StyledChapterList>
  );
};

export default ChapterList;
