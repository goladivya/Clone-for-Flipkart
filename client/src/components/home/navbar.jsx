

import { navData } from "../../constants/data";
import { Box,styled,Typography } from "@mui/material";


const Component = styled(Box)(({theme}) =>({
    display : 'flex',
    margin : '55px 130px 0px 130px',
    justifyContent : 'space-between',
    overflow: 'hidden',
    backgroundColor : '#fff',
    [theme.breakpoints.down('lg')]:{
        margin: 0
    }
}));

const Cointain = styled(Box)`
    padding : 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-family :inherit;
`;
const NavBar = ()=>{
    return(
        <Box style ={{ background : '#fff'}}>
        <Component>
            {
                navData.map(data=>(
                    <Cointain>
                        <img src={data.url} alt="nav" style={{width: 64}}/>
                        <Text>{data.text}</Text>
                    </Cointain>
                ))
            }
        </Component>
        </Box>
    )
}

export default NavBar;