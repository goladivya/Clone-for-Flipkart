import { Box, styled } from "@mui/material";
import Slide from "./slide";

const Comp = styled(Box)`
    display:flex;
`

const Left = styled(Box)(({theme}) =>({
    width: '86%',
    [theme.breakpoints.down('md')]:{
        width: '100%'
    }
}));
const Right = styled(Box)(({theme}) =>({
    padding: 5,
    background : '#FFFFFF',
    marginTop: 10,
    marginLeft: 10,
    width: '14%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));

const Midslide = ({ products,title,timer })=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Comp>
            <Left>
                <Slide 
                 products = {products} 
                  title= {title} 
                  timer ={timer}
                  />
            </Left>
            <Right>
                <img src={adURL} alt="ad" style={{width: 217}}/>
            </Right>
        </Comp>
    )
}

export default Midslide;