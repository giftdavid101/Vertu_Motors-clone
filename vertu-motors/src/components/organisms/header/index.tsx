import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../../assets/img/logo.png";
import { IoMdSearch } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { RxPerson } from "react-icons/rx";
import { FiPhone } from "react-icons/fi";
import { BiInfoCircle } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Input from "../../atom/input";
import "./header.scss";

const Index = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Fleet</Link>
        <Link to={"/"}>Careers</Link>
        <Link to={"/"}>Investor</Link>
        <Link to={"/"}>Contact Us</Link>
        <Link to={"/"}>Newsroom</Link>
        <div>
          <FiPhone />
          Call us on 0330 042 5132 (Sales open until 9pm)
          <BiInfoCircle />
        </div>
      </div>
      <div>
        <div>
          <Link to={"/"}>New cars</Link>
          <Link to={"/"}>Used cars</Link>
          <Link to={"/"}>Servicing</Link>
          <Link to={"/"}>Vans</Link>
          <Link to={"/"}>Electric Cars</Link>
          <Link to={"/"}>Motability</Link>
          <Link to={"/"}>Motorcycles</Link>
          <MdKeyboardArrowDown />
        </div>
        <Input />
      </div>
      <div>
        <div>
          <AiOutlineMenu className={"menu"} />
          <img alt={"logo"} src={logo} />
        </div>
        <div>
          <IoMdSearch />
          <GrLocation />
          <RxPerson />
          <FiPhone />
        </div>
      </div>
    </div>
  );
};

export default Index;
