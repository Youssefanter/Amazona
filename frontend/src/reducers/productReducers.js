const { PRODUCT_LIST_FAIL, 
        PRODUCT_LIST_REQUEST,
        PRODUCT_LIST_SUCCESS ,
        PRODUCT_DETAILS_FAIL, 
        PRODUCT_DETAILS_REQUEST, 
        PRODUCT_DETAILS_SUCCESS, 
    }=require("../Constants/productConstants") ;

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
            return{Loading:false,Error:action.payload};
    
        default:
            return state;
    }
};

export const productDetailsReducer=(
    state={
        Products:{},
        Loading:true
    },
    action)=>{
        switch (action.type) {
            case PRODUCT_DETAILS_REQUEST:
                return{Loading:true};
            case PRODUCT_DETAILS_SUCCESS:
                return{Loading:false, Products: action.payload};
            case PRODUCT_DETAILS_FAIL:
                return{Loading:false,Error:action.payload};
        
            default:
                return state;
        }
    }
