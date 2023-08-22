import './CommonButton.css';
import {Button} from 'react-bootstrap';
// These All class Name Should you pass For Stylying "orangeBtn, "

function CommonButton({btnText, colorClass, variant, size }) {
    return ( 
        <>
            <Button className={colorClass} variant={variant} size={size} >{btnText}</Button>
        </>
     );
}

export default CommonButton;