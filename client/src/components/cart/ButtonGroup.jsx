
import{Button, ButtonGroup, styled} from '@mui/material';

const Component = styled(ButtonGroup)`
    margin-top:30px;

`
const Stybtn = styled(Button)`
   border-radius:50%;

`



const GroupBtn = ()=>{
    return (
        <Component>
            <Stybtn>-</Stybtn>
            <Stybtn>1</Stybtn>
            <Stybtn>+</Stybtn>


        </Component>
    )
}
export default GroupBtn;