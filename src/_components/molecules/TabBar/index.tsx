/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import TabPanel from "../TabPanel";

const TabBar: React.FC = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const cssRules = {
    height: "39px",
    width: "33%",
    alignItems: "flex-start",
    padding: "0",
    margin: "0",
    textTransform: "none",
    fontSize: "18px",
  };
  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          width: "912px",
        }}
      >
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Currently Reading" sx={cssRules} value={0} />
          <Tab label="Finished Reading" sx={cssRules} value={1} />
        </Tabs>
      </Box>
      <TabPanel value={value} />
    </>
  );
};

export default TabBar;
