import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosMenu } from 'react-icons/io'
import { ImFilm } from 'react-icons/im'
import { IoIosLogIn } from 'react-icons/io'
import './navbar.scss'


function Navbar(props) {
    const iconsFillColor = 'rgb(255, 255, 255)'

    return (
        <div className="navbar">
            <div className="navbar__icons-left">
                <div>
                    <Link to="/user"><IoIosMenu size="2.5em" fill={iconsFillColor} /></Link>
                    {/* <SideMenu /> */}
                </div>
                <div>
                    <Link to="/home"><ImFilm size="1.5em" fill={iconsFillColor} /></Link>
                </div>
            </div>
            <div className="navbar__icons-right">
                <div>
                    <IoIosLogIn size="2em" fill={iconsFillColor} />
                </div>
                <div>
                    <h4>Укр</h4>
                </div>
            </div>
        </div>
    )
}

export default Navbar