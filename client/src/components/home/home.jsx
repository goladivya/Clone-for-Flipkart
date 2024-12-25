
import { Fragment } from "react";
import { useEffect } from "react";
import Slide from "./slide";
import Midslide from "./midSlide";
import MidSection from "./midSection";

import NavBar from "./navbar";
import Banner from "./banner";

import { styled,Box } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch,useSelector } from "react-redux";


const Style = styled(Box)`
    padding : 10px 10px;
    background : #F2F2F2;
`;
const Home = () =>{

    const {products} = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect (()=>{
        dispatch(getProducts())
    },[dispatch])
    return(
        <Fragment>
            <NavBar/>
            <Style>
                <Banner/>
                <Midslide  products = {products}  title= "Deal of the Day" timer ={true}/>
                <MidSection/>
                <Slide  products = {products}  title= "Discounts for You" timer ={false}/>
                <Slide  products = {products}  title= "Suggesting Items" timer ={false}/>
                <Slide  products = {products}  title= "Top Selection" timer ={false}/>
                <Slide  products = {products}  title= "Recommended Items" timer ={false}/>
                <Slide  products = {products}  title= "Trending Offers" timer ={false}/>
                <Slide  products = {products}  title= "Season's Top Picks" timer ={false}/>
                <Slide  products = {products}  title= "Top Deals on Accessories" timer ={false}/>
            </Style>
            
        </Fragment>
        
    )
}

export default Home;