
import './ButtonHelp.css'
import {ReactComponent as ShapeHelpButton} from '../../img/shapeButtonHelp.svg'


const ButtonHelp = (props) => {
    return (
        <div className={`button-help ${props.disabled ? 'disabled' : '' }`} onClick={() => props.clickButtonHelp()} >

            <ShapeHelpButton/>

            <div className='button-help-content'>   
                {props.children}
            </div>
        </div>
    )
}

export default ButtonHelp