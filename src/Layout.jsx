import Header from "./components/Header";
import { Stack, Box } from "@mui/material";
import SideBar from "./components/SideBar";
import { useState } from "react";

const Layout = ({ children }) => {
  const [category, setCategory] = useState("New");

  return (
    <>
      <Header />
      {/* two columns - left = sidebar, right = content */}
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        {/* left column */}
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar
            selectedCategory={category}
            setSelectedCategory={setCategory}
          />
        </Box>

        {/* right column */}
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          {children}
        </Box>
      </Stack>
    </>
  );
};

export default Layout;
