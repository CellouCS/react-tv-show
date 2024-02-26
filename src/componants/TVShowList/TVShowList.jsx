import React from "react";
import s from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export const TVShowList = ({ tvShowList, onClickItem }) => {
  return (
    <>
      <div className={s.title}>You may also like</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.list_item}>
              <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
            </span>
          );
        })}
      </div>
    </>
  );
};
