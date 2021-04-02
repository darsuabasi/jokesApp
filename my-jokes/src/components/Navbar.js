import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import './css/Navbar.css';
import myLogo4 from '../assets/myLogo4.png';
import myLogoLetters from '../assets/myLogoLetters.png';


const Navbar = () => {
    const [mainLogo, setMainLogo] = useState(false);

    return (
        <div className="navbar-main-div" onMouseEnter={() => setMainLogo(true)} onMouseLeave={() => setMainLogo(false)}>
            <div className="navbar-sub-div">
                <div class="menu-icon">
                    <i class="fa fa-bars fa-2x"></i>
                </div>
                <div class="navbar-logo">
                    <Link className="logo-style"  exact to="/">
                        <img class="set-logo-img1" className="myLogoImg-one" style={{width: '200px', height: '180px', marginTop: "-24%"}} src={myLogo4} />
                        {mainLogo && <img class="set-logo-img2" className="myLogoImg-two" style={{width: '200px', height: '180px', marginTop: "-24%"}} src={myLogoLetters} />}
                    </Link>
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
