import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { MdOutlineWindPower } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiSquareChevUp } from "react-icons/ci";


type IconType = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Icons: IconType = {
  copyright: (props) => <FaRegCopyright {...props} />,
  code: (props) => <FaCode {...props} />,
  naturel: (props) => <SiCodefresh {...props} />,
  powerful: (props) => <MdOutlineWindPower  {...props} />,
  stars: (props) => <BsStars {...props} />,
  usercircle: (props) => <FaRegUserCircle {...props} />,
  mail: (props) => <IoIosMail {...props} />,
  arrowupborder: (props) => <CiSquareChevUp  {...props} />,
};

// Dinamik ikon bileşeni
type DynamicIconProps = {
  iconName: keyof typeof Icons; // Icons'daki ikonlardan biri olmalı
  size?: number;
  color?: string;
  className?: string;
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, className, size = 24, color = "#000" }) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    return null;
  }

  // Style ile boyut ve renk ayarlama
  return <IconComponent className={className} style={{ width: size, height: size, fill: color }} />;
};

export default Icons;

// Example Usage
// import { DynamicIcon } from '../global/icons';
// <DynamicIcon iconName="copyright" size={30} color="#fff" />