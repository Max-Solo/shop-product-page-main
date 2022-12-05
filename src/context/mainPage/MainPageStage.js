import React, { useReducer } from "react"

import { MainPageContext } from "./mainPageContext"
import { mainPageReducer } from "./mainPageReducer"

import {
   VISIBLE_MODAL_GALLERY,
   VISIBLE_BASKET,
   ACTIVE_IMAGE,
   CURRENT_COUNTER,
   CURRENT_BASKET,
   DELETE_BASKET,
   ACTIVE_IMAGE_TOGGLE_NEXT,
   ACTIVE_IMAGE_TOGGLE_PREV,
} from "../types"

export function MainPageStage({ children }) {
   const [state, dispatch] = useReducer(mainPageReducer, {
      basketVisible: false,
      modalGalleryVisible: false,
      activeImage: 1,
      counter: 0,
      price: 125,
      description: "Fall Limited Edition Sneakers",
      id: "2487",
      currentBasket: [],
   })

   const visibleModalGallery = () => dispatch({ type: VISIBLE_MODAL_GALLERY })

   const visibleBasket = () => dispatch({ type: VISIBLE_BASKET })

   const handleActiveImage = (e) => {
      dispatch({
         type: ACTIVE_IMAGE,
         payload: +e.target.dataset.imgnum,
      })
   }

   const activeImageToggle = (e) => {
      e.target.dataset.toggletype === "prev"
         ? dispatch({ type: ACTIVE_IMAGE_TOGGLE_PREV })
         : dispatch({ type: ACTIVE_IMAGE_TOGGLE_NEXT })
   }

   const handleCurrentCounter = (e) => {
      dispatch({
         type: CURRENT_COUNTER,
         payload: e.target,
      })
   }

   const addBasket = (id) => {
      if (state.counter) {
         const checkItem = state.currentBasket.findIndex((item) => item.id === state.id)

         if (checkItem < 0) {
            dispatch({
               type: CURRENT_BASKET,
               payload: [
                  ...state.currentBasket,
                  {
                     id: state.id,
                     price: state.price,
                     quantity: state.counter,
                     description: state.description,
                  },
               ],
            })
         } else {
            const newBasket = state.currentBasket.map((item, index) => {
               if (index === checkItem) {
                  return {
                     ...item,
                     quantity: item.quantity + state.counter,
                  }
               } else {
                  return item
               }
            })
            return dispatch({
               type: CURRENT_BASKET,
               payload: newBasket,
            })
         }
      }
   }

   const deleteBasket = (e) => {
      dispatch({
         type: DELETE_BASKET,
         payload: e.target.closest(".bakset-info"),
      })
      console.log(e.target.closest(".bakset-info"))
   }

   return (
      <MainPageContext.Provider
         value={{
            state,
            visibleModalGallery,
            visibleBasket,
            handleActiveImage,
            handleCurrentCounter,
            addBasket,
            deleteBasket,
            activeImageToggle,
         }}
      >
         {children}
      </MainPageContext.Provider>
   )
}
