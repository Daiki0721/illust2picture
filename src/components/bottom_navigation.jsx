import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BottomNavigation from "@mui/material/BottomNavigation";

export default function CustomBottomNavigation(props){
  const [value, setValue] = useState(0);
    return (
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {setValue(newValue);}}
        >
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Material UI Footers With PureCode</h1>
            <h3>Bottom Navigation Component</h3>
            <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
            <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
          </div>
        </BottomNavigation>
    );
  };