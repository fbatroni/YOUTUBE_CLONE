import { AppBar, Toolbar, IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const Header = () => {
  return (
    // Inside your component return statement
    <AppBar position="static">
      <Toolbar>
        <IconButton>{/* Icons for home, trending, etc. */}</IconButton>
        <div>
          <InputBase placeholder="Search…" />
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
