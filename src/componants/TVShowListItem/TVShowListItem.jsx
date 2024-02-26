import React from "react";
import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";
import defaultSrc from "../../assets/images/default_image.png";
export const TVShowListItem = ({ tvShow, onClick }) => {
  const imgSrc = `${SMALL_IMG_COVER_BASE_URL}${tvShow.backdrop_path}`;
  return (
    <div onClick={() => onClick(tvShow)} className={s.container}>
      {imgSrc ? (
        <img src={imgSrc} alt="TVShow" className={s.img} />
      ) : (
        <img src={`${defaultSrc}`} alt="TVShow" className={s.img} />
      )}

      <div className={s.title}>{tvShow.name} </div>
    </div>
  );
};
