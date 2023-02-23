import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';
import './dropdown.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import bandera from '../../assests/images/idioma-ingles.png'
import bandera2 from '../../assests/images/lang-es.png'
import { useTranslation} from "react-i18next";

function Lista() {
    const [dropdown, setDropdown] = useState(false);
    const [t, i18n] = useTranslation("global");
    const abrirCerrarDropdown = () =>{
        setDropdown(!dropdown);
    }

return (
    <div className='lista'>
    
    <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}size="sm">
        <DropdownToggle caret>
            Language
        </DropdownToggle>

        <DropdownMenu>
        
            <DropdownItem>Español<img className='bandera'src={bandera2} alt="es"/></DropdownItem>
            <DropdownItem>English<img className='bandera2'src={bandera} alt="en"/></DropdownItem>
            
        </DropdownMenu>
    </Dropdown>
    
    
    </div>

  )
}

export default Lista