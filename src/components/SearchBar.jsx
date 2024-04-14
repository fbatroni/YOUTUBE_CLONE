import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm !== '') {
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }

    }
    return (
        <>
        <input 
            value={searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" />
        </>
    )
}

export default SearchBar;