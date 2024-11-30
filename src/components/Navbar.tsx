import React from 'react'
import { Link } from 'react-router-dom'
interface Route {
    name: string;
    path: string;
  }
  
  const routes: Route[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "NotFoundPage", path: "/notfoundpage" },
  ];
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <h2>MyApp</h2>
    </div>
    <ul className="navbar-links">
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
  )
}

export default Navbar
