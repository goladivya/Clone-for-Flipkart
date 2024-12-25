

import {useState,useEffect} from 'react';
import { InputBase ,Box,styled, List,ListItem } from "@mui/material";
//importing icons
import SearchIcon from '@mui/icons-material/Search';
import FindInPageIcon from '@mui/icons-material/FindInPage';

import{useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import {Link} from 'react-router-dom';

const Cointainer = styled(Box)`
    background : #fff;
    width : 38%;
    border-radius: 2px;
    margin-left : 10px;
    display : flex;

`;
const Wrap = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
    font-size : unset;

`;

const Searchicon  = styled(Box)`
    color : blue;
    padding : 5px;
    display: flex;
`;

const ListWrap = styled(List)`
   position: absolute;
   background :#FFFFFF;
   color:#000;
   margin-top :36px;

`


const Search = () =>{
    const [text,setText] = useState('');

    const {products} = useSelector(state =>state.getProducts);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(getProducts())
    },[dispatch])

    const getText = (text) => {
        setText(text);
    }
    return(
        <Cointainer>
            <Wrap
                placeholder="Search for products brand and more"
                onChange = {(e) => getText(e.target.value)}
                value = {text}
            />
            <Searchicon>
                <SearchIcon />
            </Searchicon>
            {
                text &&
                <ListWrap>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product =>(
                            <ListItem>
                                <Link 
                                to = {`/product/${product.id}`}
                                onClick = {() => setText('')}
                                style = {{textDecoration:'none',color:'inherit'}}
                                >
                                {product.title.longTitle}</Link>
                            </ListItem>
                        ))
                    }
                </ListWrap>
            }
        </Cointainer>
    )
}

export default Search;