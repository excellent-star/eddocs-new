import React from "react";
import Link from "next/link";

import imgL1Logo from "../../assets/image/logo1.png";
import imgL1LogoWhite from "../../assets/image/logo1.png";
import MonStyle from "./style";

const Logo = ({ white, height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`d-block ${className}`} {...rest}>
        {white ? (
          <img src={imgL1LogoWhite.src} style={MonStyle} alt="" />
        ) : (
          <img src={imgL1Logo.src} alt="" style={MonStyle} />
        )}
      </a>
    </Link>
  );
};

export default Logo;
