import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SidebarItem = ({ active = false, title, icon, path, activeIcon, isExpanded = true }) => {
  const [isHovered, setHovered] = useState(active);
  const navigate = useNavigate();

  return (
    <div
      className={`sidebar-item ${active && 'sidebar-item-active'}`}
      key={title}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => {
        navigate(path);
      }}
    >
      {isExpanded && <h3>{title}</h3>}
      <img src={isHovered || active ? activeIcon : icon} alt={title} />
    </div>
  );
};

export default SidebarItem;
