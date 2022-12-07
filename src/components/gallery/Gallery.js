import React, { useContext, useRef, useEffect, useState } from "react"

import { MainPageContext } from "../../context/mainPage/mainPageContext"

import productImg1 from "./images/image-product-1.jpg"
import productImg2 from "./images/image-product-2.jpg"
import productImg3 from "./images/image-product-3.jpg"
import productImg4 from "./images/image-product-4.jpg"
import iconPrev from "./images/icon-previous.svg"
import iconNext from "./images/icon-next.svg"
import iconClose from "./images/icon-close.svg"

import "./gallery.scss"

export function Gallery() {
   const { state, visibleModalGallery, handleActiveImage, activeImageToggle } = useContext(MainPageContext)
   const [widthImage, setWidthImage] = useState(0)

   const refImg = useRef(null)

   useEffect(() => {
      const widthCurrent = window.getComputedStyle(refImg.current).getPropertyValue("width")

      setWidthImage(
         state.activeImage === 1
            ? 0
            : state.activeImage === 2
            ? +widthCurrent.slice(0, -2)
            : state.activeImage === 3
            ? +widthCurrent.slice(0, -2) * 2
            : state.activeImage === 4
            ? +widthCurrent.slice(0, -2) * 3
            : null
      )
   }, [state.activeImage])

   return (
      <>
         <div ref={refImg} className='gallery-wrapper'>
            <div onClick={visibleModalGallery} className='gallery-main'>
               <div style={{ transform: `translateX(-${widthImage}px)` }} className='gallery-main-container'>
                  <img src={productImg1} alt='product img 1' className='gallery-current-img' />
                  <img src={productImg2} alt='product img 2' className='gallery-current-img' />
                  <img src={productImg3} alt='product img 3' className='gallery-current-img' />
                  <img src={productImg4} alt='product img 4' className='gallery-current-img' />
               </div>
            </div>
            <div className='gallery-nav'>
               <div
                  onClick={handleActiveImage}
                  className={state.activeImage === 1 && !state.modalGalleryVisible ? "gallery-nav-img active" : "gallery-nav-img"}
                  data-imgnum='1'
               >
                  <img src={productImg1} alt='product img 1' />
               </div>
               <div
                  onClick={handleActiveImage}
                  className={state.activeImage === 2 && !state.modalGalleryVisible ? "gallery-nav-img active" : "gallery-nav-img"}
                  data-imgnum='2'
               >
                  <img src={productImg2} alt='product img 2' />
               </div>
               <div
                  onClick={handleActiveImage}
                  className={state.activeImage === 3 && !state.modalGalleryVisible ? "gallery-nav-img active" : "gallery-nav-img"}
                  data-imgnum='3'
               >
                  <img src={productImg3} alt='product img 3' />
               </div>
               <div
                  onClick={handleActiveImage}
                  className={state.activeImage === 4 && !state.modalGalleryVisible ? "gallery-nav-img active" : "gallery-nav-img"}
                  data-imgnum='4'
               >
                  <img src={productImg4} alt='product img 4' />
               </div>
            </div>
         </div>
         {state.modalGalleryVisible ? (
            <div className='gallery-modal'>
               <div onClick={visibleModalGallery} className='gallery-main'>
                  <div style={{ transform: `translateX(-${widthImage}px)` }} className='gallery-main-container'>
                     <img src={productImg1} alt='product img 1' className='gallery-current-img' />
                     <img src={productImg2} alt='product img 2' className='gallery-current-img' />
                     <img src={productImg3} alt='product img 3' className='gallery-current-img' />
                     <img src={productImg4} alt='product img 4' className='gallery-current-img' />
                  </div>
               </div>
               <div className='gallery-nav'>
                  <div
                     onClick={handleActiveImage}
                     className={state.activeImage === 1 ? "gallery-nav-img active" : "gallery-nav-img"}
                     data-imgnum='1'
                  >
                     <img src={productImg1} alt='product img 1' />
                  </div>
                  <div
                     onClick={handleActiveImage}
                     className={state.activeImage === 2 ? "gallery-nav-img active" : "gallery-nav-img"}
                     data-imgnum='2'
                  >
                     <img src={productImg2} alt='product img 2' />
                  </div>
                  <div
                     onClick={handleActiveImage}
                     className={state.activeImage === 3 ? "gallery-nav-img active" : "gallery-nav-img"}
                     data-imgnum='3'
                  >
                     <img src={productImg3} alt='product img 3' />
                  </div>
                  <div
                     onClick={handleActiveImage}
                     className={state.activeImage === 4 ? "gallery-nav-img active" : "gallery-nav-img"}
                     data-imgnum='4'
                  >
                     <img src={productImg4} alt='product img 4' />
                  </div>
               </div>
               <img
                  className='gallery-modal-icon slider-prev'
                  onClick={activeImageToggle}
                  src={iconPrev}
                  alt='previous'
                  data-toggletype='prev'
               />

               <img
                  className='gallery-modal-icon slider-next'
                  onClick={activeImageToggle}
                  src={iconNext}
                  alt='next'
                  data-toggletype='next'
               />
               <img onClick={visibleModalGallery} src={iconClose} alt='close' className='gallery-modal-close' />
            </div>
         ) : null}
         {state.modalGalleryVisible ? <div onClick={visibleModalGallery} className='gallery-substrate'></div> : null}
      </>
   )
}
