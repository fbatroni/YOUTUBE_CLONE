import { AppBar, Toolbar, IconButton, InputBase, Stack } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Stack direction="row" sx={{ position: "stick", background: '#000'}} >
      <Link to="/">
        <img src={logo} alt="youtube logo" height={45} />
      </Link>
    </Stack>
  );
};

export default Header;
