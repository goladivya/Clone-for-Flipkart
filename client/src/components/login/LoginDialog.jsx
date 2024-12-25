import { useState,useContext } from 'react';

import {Dialog,Box,TextField,Button,Typography, styled} from '@mui/material';

import { authenticateSignup,authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/dataprovider';

const Outer = styled(Box)`
    height: 70vh;
    width: 90vh;
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)  center 85% no-repeat;
    height: 86.10%;
    width: 30%;
    padding: 45px 35px;
    & >p,& > h5{
        color: #FFFFFF;
        font-weight: 600;

    }
`;
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 25px;
    flex: 1;
    & > div, & >button,& >p{
        margin-top : 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #FFFFFF;
    height: 48px;
    border-radius: 2px;
`

const OTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`

const Account = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    cursor: pointer;
    font-weight: 600;
`


const Error = styled(Typography)`
    font-size: 12px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const Initial = {
    login: {
        view: 'login',
        heading: 'Login',
        subheading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subheading:'Sign up with your mobile number to get started'
    }

}

const Before =  {
    firstname : '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''

}

const Login = {
    username: '',
    password: ''
}

const LoginDialog = ({open,setOpen})=>{


    const [account, toggleAccount] = useState(Initial.login);

    const [signup, setSignup]    = useState(Before);
    const [login,setLogin] = useState(Login);
    const [error,setError] =useState(false);

    const {setAccount} = useContext(DataContext);

    const handleClose = ()=>{
        setOpen(false);
        toggleAccount(Initial.login);
        setError(false);
    }
    
    const toggleSignup = ()=>{
        toggleAccount(Initial.signup);
    }
    
    const onInputChange = (e) =>{
        setSignup({...signup,[e.target.name]: e.target.value});
    }

    const signUp = async ()=>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange = (e) =>{
        setLogin({...login,[e.target.name]: e.target.value});
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if(response.status === 200){
        handleClose();
        setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }
    }

    return(
        <Dialog open = {open} onClose={handleClose}  PaperProps={{sx : {maxWidth: 'unset'}}}>
            <Outer>
                <Box  style = {{display: 'flex',height:'100%'}}>
                    <Image> 
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop :20}}>{account.subheading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" onChange={(e)=> onValueChange(e)} name='username'  label = "Enter Username"/>
                            {error && <Error>Please enter valid username or password.</Error>}
                            <TextField variant="standard" onChange={(e)=> onValueChange(e)} name='password'  label = "Enter Password"/>
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
                            <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                            <Typography  style = {{textAlign : 'center'}}>OR</Typography>
                            <OTP>Request OTP</OTP>
                            <Account onClick={()=> toggleSignup()}>New to Flipkart? Create an account</Account>
                        </Wrapper>
                    :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='firstname' label = "Enter Firstname"/>
                            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='lastname' label = "Enter Lastname"/>
                            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='username' label = "Enter Username"/>
                            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='email' label = "Enter Email"/>
                            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='password' label = "Enter Password"/>
                            <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='phone' label = "Enter Phone"/>

                            <LoginButton  onClick={()=> signUp()}>Continue</LoginButton>

                        </Wrapper>
                    }        
                </Box>    
            </Outer>
        </Dialog>
    )
}

export default LoginDialog;