import { ReactElement } from "react";
import { NavLink } from "react-router-dom";

export default function NavItem({
  icon,
  title,
  path,
}: {
  icon: ReactElement;
  title: string;
  path: string;
}) {
  return (
    <NavLink to={path} className="menu">
      {icon}
      {title}
    </NavLink>
  );
}
