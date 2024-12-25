import axios from "axios";//used for calling api
import { GET_FAIL,GET_SUCCESS,GET_PRODUCT_DETAILS_FAIL,GET_PRODUCT_DETAILS_REQUEST,GET_PRODUCT_DETAILS_SUCCESS,GET_PRODUCT_DETAILS_RESET } from "../constants/productConstants";

const URL = 'http://localhost:8000';

export const getProducts = ()=> async (dispatch)=>{
    try {
        const {data} = await axios.get(`${URL}/products`);//this is an get Api and unlike prev case it has only one arg
        dispatch({type: GET_SUCCESS,payload: data});
    } catch (error) {
        dispatch({type: GET_FAIL,payload: error.message });
    }
}
export const getProductDetails = (id)=> async (dispatch)=>{
    try {
        
        dispatch({type: GET_PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`${URL}/product/${id}`);//this is an get Api and unlike prev case it has only one arg
        dispatch({type: GET_PRODUCT_DETAILS_SUCCESS,payload: data});
    } catch (error) {
        dispatch({type: GET_PRODUCT_DETAILS_FAIL,payload: error.message });
    }
}