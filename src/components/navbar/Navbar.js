import React, { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"

import "./navbar.scss"

import iconBasket from "./icon-cart.svg"
import iconMenu from "./icon-menu.svg"
import iconClose from "./icon-close.svg"
import avatar from "./image-avatar.png"

import { MainPageContext } from "../../context/mainPage/mainPageContext"

export function Navbar() {
   const { state, visibleBasket, visibleBurger } = useContext(MainPageContext)

   const total = state.currentBasket.reduce((total, amount) => {
      return total + amount.quantity
   }, 0)

   return (
      <div className='navbar-wrapper'>
         <div className='menu-wrapper'>
            <div className='menu-logo navbar-logo'>sneakers</div>
            <img onClick={visibleBurger} src={iconMenu} alt='icon menu' className='menu-icon' />
            <AnimatePresence initial={false}>
               {state.burgerVisible && (
                  <motion.div
                     initial={{ opacity: 0, x: "-100%" }}
                     animate={{ opacity: "1", x: "0" }}
                     exit={{x: "-100%" }}
							transition={{ duration: 0.2 }}
                     className='menu-body'
                  >
                     <img onClick={visibleBurger} src={iconClose} alt='close' className='menu-close' />
                     <ul className='navbar-menu-list'>
                        <li className='navbar-menu-item'>
                           <a href='#Collections'>Collections</a>
                        </li>
                        <li className='navbar-menu-item'>
                           <a href='#Men'>Men</a>
                        </li>
                        <li className='navbar-menu-item'>
                           <a href='#Women'>Women</a>
                        </li>
                        <li className='navbar-menu-item'>
                           <a href='#About'>About</a>
                        </li>
                        <li className='navbar-menu-item'>
                           <a href='#Contact'>Contact</a>
                        </li>
                     </ul>
                  </motion.div>
               )}
            </AnimatePresence>
            <AnimatePresence initial={false}>
               {state.burgerVisible && (
                  <motion.div
                     initial={{ opacity: 0}}
                     animate={{ opacity: "1"}}
                     exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
                     onClick={visibleBurger}
                     className='menu-substrate'
                  ></motion.div>
               )}
            </AnimatePresence>
         </div>
         <div className='navbar-logo'>sneakers</div>
         <nav className='navbar'>
            <ul className='navbar-list'>
               <li className='navbar-list-item'>
                  <a href='#Collections'>Collections</a>
               </li>
               <li className='navbar-list-item'>
                  <a href='#Men'>Men</a>
               </li>
               <li className='navbar-list-item'>
                  <a href='#Women'>Women</a>
               </li>
               <li className='navbar-list-item'>
                  <a href='#About'>About</a>
               </li>
               <li className='navbar-list-item'>
                  <a href='#Contact'>Contact</a>
               </li>
            </ul>
         </nav>
         <div className='navbar-info'>
            <img onClick={visibleBasket} className='navbar-basket' src={iconBasket} alt='iconBasket' />
            <img className='navbar-account' src={avatar} alt='avatar' />
            {total ? <span className='navbar-current-count'>{total}</span> : null}
         </div>
      </div>
   )
}
