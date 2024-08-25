import React from "react";
import logo from "../Component/image/mob-logo 2.png";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="sideContain ">
        <h1>
          <img src={logo} alt="logo" />
        </h1>
        <div className="sideDIV mt-4">Menu</div>
        <div
          className="sidebox"
          data-bs-toggle="collapse"
          href="#collapseExample1"
          aria-expanded="false"
          aria-controls="collapseExample1"
        >
          <div className="iconStyle">
            <PermIdentityIcon />
          </div>
          <div className="iconStyle  dropdown-toggle ">Profile</div>
        </div>
        <div className="collapse " id="collapseExample1">
          <div className="menubox">
            <div className="side dropdown-item">profile</div>
            <div className="side dropdown-item">setting</div>
          </div>
        </div>
        <div className="sidebox ">
          <div className="iconStyle">
            <OtherHousesOutlinedIcon />
          </div>
          <div className="iconStyle ">Dashboard</div>
        </div>
        <div className="sidebox ">
          <div className="iconStyle">
            <DnsOutlinedIcon />
          </div>
          <Link to="/talentalist" className="iconStyle ">
            Talent List
          </Link>
        </div>
        <div
          className="sidebox "
          data-bs-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <div className="iconStyle">
            <ContactPageOutlinedIcon />
          </div>
          <div className="iconStyle  dropdown-toggle ">Pages</div>
        </div>
        <div className="collapse" id="collapseExample">
          <div className=" menubox">
            <div className="side ">Home page</div>
            <div className="side ">services</div>
            <div className="side ">about company</div>
            <div className="side ">talent list</div>
            <div className="side ">current Openning</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
