import {createSlice} from '@reduxjs/toolkit';
import {INITIAL_STATE} from './../store/state';


    
    

export const basketSlice = createSlice({
    name : 'basket',
    initialState : INITIAL_STATE,
    reducers : {

        addProduct : (state : any ,  action : any) =>{

            return state.map((item : any)=>{
                if( item.id !== action.payload.id){
                    return item
                }

                return {
                    ...item,
                    added : true,
                    Qty : 1
                }
            })

        },
        deleteProduct : (state : any ,  action : any) =>{

            return state.map((item : any)=>{
                if( item.id !== action.payload.id){
                    return item
                }

                return {
                    ...item,
                    added : false
                }
            })

        },

        increaseQty : ( state : any , action : any) => {

            return state.map((item : any)=>{
                if( item.id !== action.payload.id){
                    
                    return item
                }

                return {
                    ...item,
                    added : true,
                    Qty : item.Qty + 1
                }
            })
        },

        decreaseQty : ( state : any , action : any) => {

            return state.map((item : any)=>{
                if( item.id !== action.payload.id){
                    return item
                }

                return {
                    ...item,                    
                    Qty : item.Qty-1
                }
            })
        },

    }
})

export const {addProduct, deleteProduct, increaseQty, decreaseQty} = basketSlice.actions;

export const Basket = (state : any) => state.basket;

export default basketSlice.reducer;