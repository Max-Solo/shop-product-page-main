import React, { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MainPageContext } from "../../context/mainPage/mainPageContext"

import removeIcon from "./icon-delete.svg"
import thumbnail1 from "./images/image-product-1-thumbnail.jpg"

import "./basket.scss"

export function Basket() {
   const { state, deleteBasket } = useContext(MainPageContext)
   return (
      <AnimatePresence>
         {state.basketVisible && (
            <motion.div
               initial={{ height: 0, opacity: 0 }}
               animate={{ height: "auto", opacity: 1 }}
               exit={{ height: 0, opacity: 0 }}
               className='basket-wrapper'
            >
               <div className='basket-head'>
                  <h3 className='basket-title'>Cart</h3>
               </div>
               <AnimatePresence initial={false}>
                  {state.currentBasket.length && (
                     <motion.div className='bakset-body'>
                        {state.currentBasket.map((item) => (
                           <motion.div
                              initial={{ opacity: 0, x: "100%" }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2 }}
                              key={item.id}
                              id={item.id}
                              className='bakset-info'
                           >
                              <img src={thumbnail1} alt='product img 1' className='basket-thumbnail' />
                              <div className='basket-descr'>
                                 {item.description} <br />
                                 {`$${item.price}.00 x ${item.quantity}`}
                                 <span className='basket-total-price'>{` $${item.price * item.quantity}.00`}</span>
                              </div>
                              <img onClick={deleteBasket} src={removeIcon} alt='delete' className='basket-remove' />
                           </motion.div>
                        ))}
                        <motion.button
                           initial={{ opacity: 0, y: "100%" }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.2 }}
                           className='basket-button'
                        >
                           Checkout
                        </motion.button>
                     </motion.div>
                  )}

                  {!state.currentBasket.length && <div className='basket-empty'>Your cart is empty.</div>}
               </AnimatePresence>
            </motion.div>
         )}
      </AnimatePresence>
   )
}
