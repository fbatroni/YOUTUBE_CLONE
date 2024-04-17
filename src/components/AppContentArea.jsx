import Box from "@mui/material/Box";
import React, { useState, useEffect } from "react";
import SideList from "./SideList";
import { appContentWrapper, flexColumnGrow } from "@styles/styles";
import TabList from "./TabList";
import CardList from "./CardList";
import { fetchFromApi } from "../utils/api";

const AppContentArea = ({ isOpen }) => {
  const [youtubeData, setYoutubeData] = useState([]);

  // categories
  const [searchText, setSearchText] = useState("All");

  useEffect(() => {
    fetchFromApi("/search?part=snippet", searchText).then((response) => {
      setYoutubeData(response.data.items);
    });
  }, [searchText]);

  if (!youtubeData.length) {
    return;
  }

  const sideBarWidth = isOpen ? "70px" : "250px";
  return (
    <Box component="main" sx={appContentWrapper}>
      <Box
        component="div"
        sx={{
          flexBasis: sideBarWidth,
          flexGrow: 0,
          flexShrink: 0,
          overflowY: "auto",
        }}
      >
        <SideList />
      </Box>
      <Box component="div" sx={flexColumnGrow}>
        <Box
          component="div"
          sx={{
            display: "block",
            p: 2,
            minHeight: "100px",
            mb: 4,
            overflow: "hidden",
            overflowY: "auto",
            width: `calc(100vw - ${sideBarWidth})`,
          }}
        >
          <TabList />
          <CardList items={youtubeData} />
        </Box>
      </Box>
    </Box>
  );
};

export default AppContentArea;
