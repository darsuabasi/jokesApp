import React from 'react';
import { NavLink } from "react-router-dom";
import './css/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-main-div">
            <div className="navbar-sub-div">
                <div class="menu-icon">
                    <i class="fa fa-bars fa-2x"></i>
                </div>
                <div class="navbar-logo">
                    <NavLink className="logo-style"  exact to="/">
                        UEA-DJ
                    </NavLink>
                </div>

                <div className="menu-div">
                    <ul navbar-main-ul>
                        <li className="nav-item">
                            <NavLink className="navlink-style"  exact to="/">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="navlink-style" exact to="/dashboard">
                                Dashboard
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="navlink-style"  exact to="/dashboard/search-jokes">
                                Search
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
