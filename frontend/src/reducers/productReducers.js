import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constants/productConstants";

 export const productListReducer=(
    state={ 
        Loading:true,
        Products:[]
    }
    ,action)=>{
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return{Loading:true};
        case PRODUCT_LIST_SUCCESS:
            return{Loading:false,Products:action.payload};
        case PRODUCT_LIST_FAIL:
            return{Loading:false,error:action.payload};
    
        default:
            return state;
    }
};