import SidebarItem from './components/SidebarItem/SidebarItem';
import { sidebarItems } from '../../constants/sidebarItems';
import './Sidebar.scss';

const Sidebar = ({ isSidebarExpanded, pathname }) => (
  <div className="sidebar">
    {sidebarItems.map(({ path, ...rest }) => (
      <SidebarItem
        key={rest.title}
        {...rest}
        path={path}
        active={pathname === path}
        isExpanded={isSidebarExpanded}
      />
    ))}
  </div>
);

export default Sidebar;
