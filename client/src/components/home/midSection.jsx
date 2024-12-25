import { Box, styled, Grid } from "@mui/material";
import { imageURL } from "../../constants/data";

const Comp = styled(Grid)`
    margin-top: 10px;
    justify-content: space-between;
`;

const Image = styled('img')(({theme}) =>({
    marginTop:10,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]:{
        objectFit: 'cover',
        height: 120
    }
}));

const MidSection = () => {
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>
            <Comp container spacing={2}> {/* Optional spacing between grid items */}
                {
                    imageURL.map((image, index) => (
                        <Grid item lg={4} sm={4} md={6} xs={12} key={index}> {/* Use item prop here */}
                            <img src={image} alt="image" style={{ width: '100%' }} />
                        </Grid>
                    ))
                }
            </Comp>
            <Image src={url} alt="covid"/>
        </>
    );
}

export default MidSection;
