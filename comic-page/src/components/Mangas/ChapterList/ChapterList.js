import React from "react";
import Chapter from "./Chapter";

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
];

const ChapterList = () => {
  return (
    <div>
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
    </div>
  );
};

export default ChapterList;
