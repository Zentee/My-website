import React from "react";
import style from "./header.module.scss";

export const Logo = () => {
  return (
    <svg
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style.logo}
    >
      <g className={style.logo_fy}>
        <path
          d="M4.54 6.06L4.34 7.92H2.3V14H0.4V1.86H0.1L0.3 -9.53674e-07H4.94L4.74 1.86H2.3V6.06H4.54ZM9.57203 7.82V14H7.67203V7.82L5.33203 -9.53674e-07H7.23203L8.63203 4.66L10.012 -9.53674e-07H11.912L9.57203 7.82Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default Logo;
