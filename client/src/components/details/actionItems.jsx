import { Box ,Button,styled} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import { useState } from "react";


const Left = styled(Box)(({theme})=> ({
    minWidth: '40%',
    padding: '40px 0  0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }
}));
   


const Image = styled("img")(
    {
        padding: '15px'
    }
)

const ButtonSt = styled(Button)(({theme})=> ({
    width: '48',
    borderRadius: '2px',
    height: '50px',
    [theme.breakpoints.down('lg')]:{
        width :'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }


}))
    


const ActionItems = ({product})=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity,setQuantity] = useState(1);
    const {id} = product;
    const addItemToCart = () =>{
        dispatch(addToCart(id,quantity));
        navigate('/cart');
    }
    return(
        <Left>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}}>
                <Image src={product.detailUrl} alt="Notfound" />
            </Box>    
            <ButtonSt variant="contained" onClick = {()=>addItemToCart()} style={{marginRight: 10,background:'#ff9f00'}}><ShoppingCartIcon/>Add to Cart</ButtonSt>
            <ButtonSt variant="contained" style={{background:'#fb541b'}}><FlashOnIcon/>Buy Now</ButtonSt>
        </Left>
       
    )
}

export default ActionItems;