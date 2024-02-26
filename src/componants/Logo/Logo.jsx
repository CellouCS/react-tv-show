import React from "react";
import s from "./style.module.css";

export const Logo = ({ image, title, subtitle }) => {
  return (
    <>
      <div className={s.container}>
        <img src={image} alt="Logo" className={s.image} loading="lazy" />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </>
  );
};
