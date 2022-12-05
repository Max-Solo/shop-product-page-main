import React, {useContext} from "react";

import './navbar.scss'

import iconBasket from './icon-cart.svg'
import avatar from './image-avatar.png'

import {MainPageContext } from "../../context/mainPage/mainPageContext";

export function Navbar() {
	const {state, visibleBasket} = useContext(MainPageContext)

	const total = state.currentBasket.reduce((total, amount) => {
		return total + amount.quantity
	}, 0)

	return(
		<div className="navbar-wrapper">
			<div className="navbar-logo">sneakers</div>
			<nav className="navbar">
				<ul className="navbar-list">
					<li className="navbar-list-item"><a href="#Collections">Collections</a></li>
					<li className="navbar-list-item"><a href="#Men">Men</a></li>
					<li className="navbar-list-item"><a href="#Women">Women</a></li>
					<li className="navbar-list-item"><a href="#About">About</a></li>
					<li className="navbar-list-item"><a href="#Contact">Contact</a></li>
				</ul>
			</nav>
			<div className="navbar-info">
				<img onClick={visibleBasket} className="navbar-basket" src={iconBasket} alt="iconBasket" />
				<img className="navbar-account" src={avatar} alt="avatar" />
				{total ? <span className="navbar-current-count">{total}</span> : null}
			</div>
		</div>
	)
}