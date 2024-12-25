

import {useState} from 'react';

import {AppBar,Toolbar,Typography,Box,styled, IconButton, Drawer,colors, List, ListItem} from '@mui/material'
import { Link } from 'react-router-dom';

import {Menu} from '@mui/icons-material';


import Search from './search'
import CustomButtons from './custombuttons';

const Styled = styled(AppBar)`
    background : #2874f0;
    height : 55px;
`;

const Component = styled(Link)`
    margin-left :12%;
    line-height : 0;
    text-decoration:none;
    color: inherit;
`;

const SubHeading = styled(Typography)`
    font-size : 10px;
    font-style : italic
`;

const Plus = styled("img")(
    {
        width : 10,
        height : 10,
        marginLeft : 4
    }
)


const Customwrap = styled(Box)(({theme})=>({
  margin : '0 5% 0 auto',
  [theme.breakpoints.down('sm')]:{
      display:'none'
  }

}));
const MenuBtn= styled(IconButton)(({theme})=>({
   display:'none',
   [theme.breakpoints.down('md')]:{
      display:'block'
   }
}))
 


function Header() {

  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'; 
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';   
  

  const [open, setOpen] = useState(false);

  const handleopen = () =>{
      setOpen(true);
  }

  const handleclose = () =>{
    setOpen(false);
  }

  const list = () =>{
    <Box style = {{width:200}} onClick = {handleclose}>
      <List>
        <ListItem button>
            <CustomButtons/>
        </ListItem>
      </List>
    </Box>
  }
  return (
    <div className="App">
      <Styled>
        <Toolbar  style={{ minHeight : 55}}>
        <MenuBtn color='Inherit' onClick = {handleopen}>
            <Menu/>
        </MenuBtn>
        <Drawer open = {open} onClose = {handleclose}>
          {list()}
        </Drawer>
          <Component to = {`/`}>
            <img src={logoURL} alt='Not Found' style={{width : 75}}/>
            <Box style = {{display : 'flex'}}>
                <SubHeading>Explore&nbsp;
                    <Box component="span" style={{color : "#FFE500"}}> Plus </Box>
                </SubHeading>
                <Plus src={subURL} alt='Not Found' />
            </Box>
          </Component> 
          <Search/> 
          <Customwrap>
                <CustomButtons/>
          </Customwrap>
        </Toolbar>
      </Styled>
      
    </div>
  );
}

export  default Header;