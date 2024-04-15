import Box from "@mui/material/Box";
import React, { useState } from "react";
import SideList from "./SideList";
import { appContentWrapper, flexColumnGrow } from "@styles/styles";
import TabList from "./TabList";
import Card from "./Card";
import CardList from "./CardList";
import { fetchFromApi } from "../utils/api";
import { useEffect } from "react";

const AppContentArea = ({ isOpen }) => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [searchText, setSearchText] = useState("All");

  useEffect(() => {
    fetchFromApi("/search?part=snippet", searchText).then((response) => {
      setYoutubeData(response.data.items);
    });
  }, [searchText]);

  if (!youtubeData.length) {
    return;
  }

  const videos = youtubeData.slice(0, 8);

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
        <Box component="div" sx={flexColumnGrow}>
          <Box
            sx={{
              my: 2,
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <TabList />
          </Box>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              p: 1,
              overflowY: "auto",
              overflowX: "hidden",
              width: `calc(100vw - ${sideBarWidth})`,
            }}
          >
            <CardList items={videos} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppContentArea;
