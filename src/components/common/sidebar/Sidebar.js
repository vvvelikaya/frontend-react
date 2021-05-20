import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'

function Sidebar() {
    return (
        <div>
            {/* <span className="fa fa-bars" onClick={props.onClick}></span>  */}
            <ul>
                <li><Link to="/user">Пользователь</Link></li>
                <li><Link to="/">Подробнее о всех фильмах</Link></li>
                <li><Link to="/">Скоро в прокате</Link></li>
                <li><Link to="/">Все кинотеатры</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar