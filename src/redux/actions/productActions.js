import { actions} from '../constants/actions-type';

export const setproducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        patload: products,
    };
    
};

export const selectedproducts = (products) => {
    return {
        type: ActionType.selected_PRODUCTS,
        patload: products,
    };
};     

