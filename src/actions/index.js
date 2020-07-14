import *as types from '../contants/ActionTypes'

export const actAddToCart = (product,quantity)=>{
    return {
        type:types.ADD_TO_CART,
        product,
        quantity
    }
}
export const actChangeMessage = (message)=>{
    return {
        type :types.CHANGE_MESSAGE,
        message
    }
}
export const actDeleteCart = (product) =>{
    return{
        type :types.DELETE_TO_CART,
        product
    }
}
export const actUpdateCart = (product,quantity) =>{
    return{
        type : types.UPDATE_TO_CART,
        product,
        quantity
    }
}


