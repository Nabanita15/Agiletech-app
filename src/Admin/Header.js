import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
const Header = () => {
  return (
    <>
      <div className="headerBox">
        <div className="searchBox ">
          <div className="iconStyle">
            <SearchIcon />
          </div>
          <input type="search" placeholder="search" />
        </div>

        <div className="iconStyle">
          <NotificationsOutlinedIcon />
        </div>
      </div>
    </>
  );
};

export default Header;
