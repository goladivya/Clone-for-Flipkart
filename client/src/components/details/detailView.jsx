import { useEffect } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import {Box,Button,Grid,styled,Typography} from "@mui/material"
import ActionItems from "./actionItems";
import ProductDetails from "./productDetail";

const Component  = styled(Box)`
    background: #F2F2F2;
    margin-top:55px;
`

const Cointainer = styled(Grid)(({theme})=>({
  background: '#FFFFFF',
    display:'flex',
[theme.breakpoints.down('md')]: {
    margin:0
}
}))
    

const RightCointainer = styled(Grid)`
    margin-top: 50px;
`

export const DetailView = ()=>{
    const dispatch = useDispatch();
    const {id} = useParams();

    const {loading,product}=useSelector(state => state.getProductDetails);

    useEffect(()=>{
        if(product && id !== product.id)
            dispatch(getProductDetails(id))
    },[dispatch,id,product,loading])

    
    return(
        <Component>
            {
                product && Object.keys(product).length && 

                    <Cointainer container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItems  product = {product}/>
                        </Grid>
                        <RightCointainer item lg={8} md={8} sm={8} xs={12}>
                            <ProductDetails product={product}/>
                        </RightCointainer>
                    </Cointainer>
            }
        </Component>
    )
}
export default DetailView;