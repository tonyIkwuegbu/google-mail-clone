import React from "react";
import "./Header.css";
import { IconButton, Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from "@material-ui/icons/Notifications"



function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="data:image/png;base64,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"
          alt="logo"
        />
      </div>
      <div className="header_middle">
       <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header_inputCaret" />
      </div>
      <div className="header_right">
        <IconButton>
            <AppsIcon/>
        </IconButton>
        <IconButton>
        <NotificationsIcon/>
        </IconButton>
        
         <Avatar/>
        
      </div>
    </div>
  );
}

export default Header;
