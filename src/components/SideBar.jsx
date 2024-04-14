import React from "react";
import { Stack, Button } from '@mui/material';
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {

    return (
        <Stack
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {
                categories.map((category) => (
                    <Button
                        onClick={() => setSelectedCategory(category)}
                        style={{
                            background: category.name === selectedCategory && "#FC1503",
                            color: "white",
                            align: "left"
                          }}
                          key = { category.name}
                    >
                        <span>
                            { category.name }
                        </span>
                    </Button>
                ))
            }
        </Stack>
    )
   
}

export default SideBar;