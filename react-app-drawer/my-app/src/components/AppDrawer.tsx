import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './AppDrawer.css';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  header: string;
  menuItems: MenuItem[];
};
export function AppDrawer({ header, menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex w-full">
      <div className={`menu-drawer ${isOpen ? 'is-open' : ''}`}>
        <FaBars onClick={() => setIsOpen(!isOpen)} className="menu-icon" />
        {isOpen && <h3 className="menu-heading">{header}</h3>}
        <Menu items={menuItems} isOpen={isOpen} />
      </div>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}

type MenuProps = {
  items: MenuItem[];
  isOpen: boolean;
};
function Menu({ items, isOpen }: MenuProps) {
  return (
    <ul className="menu-items">
      {items.map((item, index) => (
        <li key={index} className="menu-item">
          <NavLink to={item.path} className="menu-link">
            <img src={item.iconUrl} className="item-icon" />
            {isOpen && item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
