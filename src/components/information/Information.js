import React, { useContext } from "react"

import { MainPageContext } from "../../context/mainPage/mainPageContext"

import "./information.scss"

import iconBasket from "./icon-cart.svg"
import minus from "./icon-minus.svg"
import plus from "./icon-plus.svg"

export function Information() {
   const { state, handleCurrentCounter, addBasket } = useContext(MainPageContext)

   return (
      <div className='info-wrapper'>
         <h3 className='info-subtitle'>Sneaker company</h3>
         <h1 className='info-title'>{state.description}</h1>
         <p className='info-descr'>
            These low-profile sneakers are you perfect casual wear companion. Featuring a durable rubber outer sole, they'll
            withstand everysing the weather can offer.
         </p>
         <div className='info-price-row'>
            <div className='price-new'>${state.price}.00</div>
            <span className='price-discount'>50%</span>
         </div>
         <div className='price-old'>$250.00</div>
         <div className='info-control'>
            <div className='info-current'>
               <img onClick={handleCurrentCounter} className='info-current-correct' data-dec='dec' src={minus} alt='minus' />
               <span className='info-current-num'>{state.counter}</span>
               <img onClick={handleCurrentCounter} className='info-current-correct' data-inc='inc' src={plus} alt='plus' />
            </div>
            <div onClick={addBasket} className='info-button'>
               <img className='navbar-basket' src={iconBasket} alt='iconBasket' />
               <span>Add to cart</span>
            </div>
         </div>
      </div>
   )
}
