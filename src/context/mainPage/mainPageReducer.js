import {VISIBLE_MODAL_GALLERY, 
		 VISIBLE_BASKET, ACTIVE_IMAGE, 
		 CURRENT_COUNTER, CURRENT_BASKET, 
		 DELETE_BASKET, 
		 ACTIVE_IMAGE_TOGGLE_PREV, 
		 ACTIVE_IMAGE_TOGGLE_NEXT,
		 VISIBLE_BURGER
} from '../types'


export function mainPageReducer(state, {type, payload}) {
	switch(type) {
		case VISIBLE_MODAL_GALLERY:
			return {
				...state,
				modalGalleryVisible: !state.modalGalleryVisible
			}
		case VISIBLE_BASKET:
			return {
				...state,
				basketVisible: !state.basketVisible
			}
		case VISIBLE_BURGER:
			return {
				...state,
				burgerVisible: !state.burgerVisible
			}		
		case ACTIVE_IMAGE:
			return {
				...state,
				activeImage: payload
			}
		case ACTIVE_IMAGE_TOGGLE_NEXT:
			return {
				...state,
				activeImage: state.activeImage !== 4 ? state.activeImage + 1 : state.activeImage = 0
								 
			}	
		case ACTIVE_IMAGE_TOGGLE_PREV:
			return {
				...state,
				activeImage: state.activeImage !== 1 ? state.activeImage - 1 : state.activeImage = 5
								 
			}	
		case CURRENT_COUNTER:
			return {
				...state,
				counter: payload.dataset.inc ? 
						state.counter + 1 : payload.dataset.dec &&  state.counter > 0 ? 
						state.counter - 1 : 0
			}
		case CURRENT_BASKET:
			return {
				...state,
				currentBasket: payload,
				counter : 0
			}
		case DELETE_BASKET:
			return {
				...state,
				...payload,
				currentBasket: state.currentBasket.filter(item => item.id !== payload.id)
			}				
		default: return state
	}
}