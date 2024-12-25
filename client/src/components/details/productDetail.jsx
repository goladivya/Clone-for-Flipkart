
import { Typography,Box, styled,Table,TableRow,TableBody,TableCell  } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const SmallText = styled(Box)`
    font-size: 14px;
    vertical-align: baseline;
    & > p{
        font-size: 14px;
        margin-top: 10px;
    }
`;
const LocalOfferIcons = styled(LocalOfferIcon)`
    color: #00CC00;
    margin-right: 10px;
    font-size: 15px;
`;

const ColumnText =styled(TableRow)`
  font-size;14px;
  vertical-align: baseline;
  &>td {
        font-size:14px;
        margin-top:10px;
        border:none;
     }
`



const ProductDetails = ({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50'
    const date = new Date(new Date().getTime() + (5*24*60*60*1000))
    return(
        
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5,color: '#878787',fontSize: 14}}>
                8 ratings and 1 Review
                <Box component="span"><img src={fassured} alt="done" style={{width: 77,marginLeft: 20}}/></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color: '#388E3C'}}>{product.price.discount}</Box>
            </Typography> 
            <Typography>Available Offers</Typography>  
            <SmallText>
                <Typography><LocalOfferIcons/>5% Unlimited Cashback on Flipkart Axis Bank Credit Card  T&C </Typography>   
                <Typography><LocalOfferIcons/>10% off up to ₹1,500 on Axis Bank Credit Card (incl. migrated ones) on orders of ₹4,990 and aboveT&C</Typography>   
                <Typography><LocalOfferIcons/>10% off up to ₹1,750 on Axis Bank Credit EMI (incl. migrated ones) on orders of ₹4,990 and aboveT&C</Typography>   
                <Typography><LocalOfferIcons/>Extra ₹3,000 off on BOBCARD Transactions, on orders of ₹74,990 and aboveT&C</Typography>   
                <Typography><LocalOfferIcons/>Extra ₹3,000 off on YES BANK Credit and Credit EMI Transactions, on orders of ₹74,990 and aboveT&C</Typography>         
            </SmallText> 
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell  style={{color: '#878787'}}>Delivery</TableCell>
                        <TableCell  style={{fontWeight: 600}}>Delivery By {date.toDateString()} |₹40</TableCell>          
                    </ColumnText>
                    <ColumnText>
                        <TableCell  style={{color: '#878787'}}>Warranty</TableCell>
                        <TableCell >No Warranty</TableCell>          
                    </ColumnText>
                    <ColumnText>
                        <TableCell  style={{color: '#878787'}}>Seller</TableCell>
                        <TableCell  >
                            <Box component="span" style={{color: '#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>          
                    </ColumnText> 
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src = {adURL} style={{width:390}} alt="flipkart points"/>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell  style={{color: '#878787'}}>Description</TableCell>
                        <TableCell >{product.description}</TableCell>          
                    </ColumnText>
                </TableBody> 
            </Table>    
        </>
    )
}


export default ProductDetails;