import React from 'react';
import { NavLink } from "react-router-dom";
import './css/Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-main-div">
            <div className="navbar-sub-div">
                
                <div class="navbar-logo">
                    UEA-DJ
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

                        
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
