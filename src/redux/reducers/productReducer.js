import { ActionTypes } from "../contants/action-types";

const initialstate =  {
    products:[
    {
      id: 1,
      title: "mayuri",
      category: "programer",
}
]
} 

export const productReducer = (state = initialstate,{type,payload}) => {
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return state;
     default:
           return state;
        
    }
}








