import { useState,useContext } from "react";

import { Badge, Box ,Button,Typography,styled} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/dataprovider";
import Profile from "./profile";
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';


const Wrapper = styled(Box)(({theme})=>({
    display: 'flex',
    margin : '0 3 0 auto',
    '& >*':{
        marginRight : '30px important ',
        fontSize : '16px',
        alignItems : 'center'
},
    [theme.breakpoints.down('md')]:{
            display: 'block'
        }
}));
   

const Cointain = styled(Link)(({theme})=>({
    display : 'flex',
    textDecoration:'none',
    color : 'inherit',
    [theme.breakpoints.down('md')]:{
        display: 'block',
    }

}));
    


const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform : none;
    padding : 5px 40px;
    box-shadow : none;
    border-radius : 2px;
    height: 32px;
`;

const CustomButtons = ()=>{
    const [open, setOpen] = useState(false);

    const {account,setAccount} = useContext(DataContext);
    const {cartItems} = useSelector(state => state.cart);



    const openDialog = ()=>{
        setOpen(true);
    }
    return(
        <Wrapper>
            {
                account ? <Profile account = {account}  setAccount= {setAccount}/> :
                    <LoginButton variant="cointained" onClick={()=>openDialog()}> Login</LoginButton>
            }
            

            <Typography style={{marginTop:3,width: 135}}> Become a Seller</Typography>
            <Typography style={{marginTop:3}}> More</Typography>
            <Cointain to = "./cart" >
                <Badge badgeContent = {cartItems?.length} color = "primary">
                     <ShoppingCartIcon />
                </Badge>
                <Typography style = {{marginLeft: 10}}>Cart</Typography>
            </Cointain>
            <LoginDialog open = {open} setOpen = {setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;