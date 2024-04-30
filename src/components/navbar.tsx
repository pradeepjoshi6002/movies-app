import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
const Navbar = () => {
  return (
    <Menu fixed="top" size="huge">
      <Menu.Item as={Link} to="/">
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/rated">
        rated
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/auth" style={{ fontSize: "1.5rem" }}>
          Auth
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
