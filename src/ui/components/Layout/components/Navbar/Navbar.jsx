import burgerIcon from '../../../../assets/icons/burgerIcon.svg';
import accountIcon from '../../../../assets/icons/accountIcon.svg';
import './Navbar.scss';

const Navbar = ({ toggleSidebar, name }) => (
  <div className="navbar">
    <div className="navbar-menu-toggler">
      <img
        src={burgerIcon}
        alt="Menu"
        onClick={() => {
          toggleSidebar();
        }}
      />
      <h3>Todo List</h3>
    </div>

    <div className="navbar-profile">
      <h3>{name}</h3>
      <img src={accountIcon} alt="Profile" />
    </div>
  </div>
);

export default Navbar;
