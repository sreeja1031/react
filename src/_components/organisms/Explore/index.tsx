/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable object-curly-newline */
import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import FiberSmartRecordOutlinedIcon from "@mui/icons-material/FiberSmartRecordOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ModeStandbyOutlinedIcon from "@mui/icons-material/ModeStandbyOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { useNavigate } from "react-router-dom";
import ExploreItems from "../../molecules/ExploreItems";

const boxStyling = {
  height: "400px",
  padding: "0px 25% 2% 20%",
  backgroundColor: "backgroundColors.background2",
};
const CustomDiv = styled("div")({
  position: "fixed",
  zIndex: 2,
});

const headings = (
  <Grid container padding="30px 0px 15px">
    <Grid item xs>
      <Typography variant="subtitle3" color="secondary.color">
        Explore by category
      </Typography>
    </Grid>
    <Grid item xs>
      <Typography variant="body1" color="textColors.textColor3">
        See recently added titles
      </Typography>
    </Grid>
    <Grid item xs>
      <Typography variant="body1" color="textColors.textColor3">
        See popular titles
      </Typography>
    </Grid>
  </Grid>
);

interface ExploreMenuProps {
  toggleDrawer: Function;
}

const ExploreMenu: React.FC<ExploreMenuProps> = ({ toggleDrawer }) => {
  const navigator = useNavigate();
  const itemList = [
    { name: "Entrepreneurship", icon: <RocketLaunchOutlinedIcon /> },
    { name: "Science", icon: <ScienceOutlinedIcon /> },
    { name: "Economics", icon: <FiberSmartRecordOutlinedIcon /> },
    { name: "Corporate Culture", icon: <BusinessCenterOutlinedIcon /> },
    { name: "Psychology", icon: <PsychologyOutlinedIcon /> },
    { name: "Nature & Environment", icon: <YardOutlinedIcon /> },
    { name: "Politics", icon: <AccountBalanceOutlinedIcon /> },
    { name: "Health & Nutrition", icon: <LocalHospitalOutlinedIcon /> },
    { name: "History", icon: <PublicOutlinedIcon /> },
    { name: "Motivation & Inspiration", icon: <TipsAndUpdatesOutlinedIcon /> },
    { name: "Productivity", icon: <HourglassBottomOutlinedIcon /> },
    { name: "Career & Success", icon: <ModeStandbyOutlinedIcon /> },
    { name: "Marketing & Sales", icon: <AutoGraphOutlinedIcon /> },
    { name: "Personal Development", icon: <SignalCellularAltOutlinedIcon /> },
    { name: "Communication Skills", icon: <CommentOutlinedIcon /> },
    { name: "Money & Investments", icon: <AccountBalanceWalletOutlinedIcon /> },
    { name: "Sex & Relationship", icon: <FavoriteBorderOutlinedIcon /> },
    { name: "Education", icon: <SchoolOutlinedIcon /> },
  ];
  const iconTitleLists = (
    <Grid container marginTop="15px">
      {itemList.map((e) => {
        const onClick = () => {
          navigator("/entrepreneurship");
          toggleDrawer();
        };
        return (
          <Grid item xs={4} marginBottom="12px">
            <ExploreItems icon={e.icon} title={e.name} onClick={onClick} />
          </Grid>
        );
      })}
    </Grid>
  );

  return (
    <CustomDiv>
      <Box sx={boxStyling}>
        {headings}
        <Divider />
        {iconTitleLists}
      </Box>
    </CustomDiv>
  );
};

export default ExploreMenu;
