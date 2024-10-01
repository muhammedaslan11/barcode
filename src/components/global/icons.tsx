import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiCodefresh } from "react-icons/si";
import { MdOutlineWindPower } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiSquareChevUp } from "react-icons/ci";
import { HiOutlineExternalLink } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FcProcess } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { TbBrandAppgallery } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlinePictureAsPdf  } from "react-icons/md";
import { SlUser } from "react-icons/sl";
import { SlUserFemale } from "react-icons/sl";
import { FaFilter } from "react-icons/fa6";

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
  link: (props) => <HiOutlineExternalLink {...props} />,
  gallery: (props) => <GrGallery {...props} />,
  customers: (props) => <MdOutlinePeopleAlt {...props} />,
  process: (props) => <FcProcess {...props} />,
  location: (props) => <FaLocationDot {...props} />,
  map: (props) => <FaMapLocationDot {...props} />,
  phone: (props) => <FiPhone {...props} />,
  appgallery: (props) => <TbBrandAppgallery {...props} />,
  product: (props) => <AiOutlineProduct {...props} />,
  pdf: (props) => <MdOutlinePictureAsPdf  {...props} />,
  male: (props) => <SlUser {...props} />,
  female: (props) => <SlUserFemale {...props} />,
  filter: (props) => <FaFilter {...props} />,
};

// Dinamik ikon bileşeni
type DynamicIconProps = {
  iconName: 'copyright' | 'code' | 'naturel' | 'powerful' | 'stars' | 'usercircle' | 'mail' | 'arrowupborder' | 'link' | 'gallery' | 'customers' | 'process' | 'location' | 'map' | 'phone' | 'appgallery' | 'product' | 'pdf' | 'male' | 'female' | 'filter';
  size?: number;
  color?: string;
  className?: string;
};

export const DynamicIcon: React.FC<DynamicIconProps> = ({ iconName, className, size = 24, color = "#000" }) => {
  const IconComponent = Icons[iconName];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} style={{ width: size, height: size, fill: color }} />;
};

export default Icons;

// Example Usage
// import { DynamicIcon } from '../global/icons';
// <DynamicIcon iconName="copyright" size={30} color="#fff" />