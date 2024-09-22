import { FaRegCopyright } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import React from "react";

// Mevcut IconType tanımı
type IconType = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

// Icons nesnesine react-icons ikonu ekleyin
const Icons: IconType = {
  copyright: (props) => <FaRegCopyright {...props} />,
  code: (props) => <FaCode {...props} />,
};

// Dinamik ikon bileşeni
type DynamicIconProps = {
  iconName: keyof typeof Icons; // Icons'daki ikonlardan biri olmalı
  size?: number;
  color?: string;
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, size = 24, color = "#000" }) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    return null;
  }

  // Style ile boyut ve renk ayarlama
  return <IconComponent style={{ width: size, height: size, fill: color }} />;
};

export default Icons;

// Example Usage
// import { DynamicIcon } from '../global/icons';
// <DynamicIcon iconName="copyright" size={30} color="#fff" />