import css from "./LoadMoreBtn.module.css";
import React, { FC } from "react";

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <button className={css.button} onClick={handleLoadMore}>
      Load more photos
    </button>
  );
};

export default LoadMoreBtn;