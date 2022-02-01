import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './contact.styles.css'
function Contacts() {
    return (
        <div>
            <div className="social">
                <a href='tel: 0176566568'><FontAwesomeIcon icon='phone' size="2x"/></a>
                <a href='mailto: rakiblf@gmail.com'><FontAwesomeIcon icon='envelope' size="2x"/></a>
                <a href='https://www.facebook.com/rakib.chowdhury.927'><FontAwesomeIcon icon={['fab','facebook']} size="2x"/></a>
                <a href='https://www.linkedin.com/in/rakib-ul-hasan-chowdhury-842711105/'><FontAwesomeIcon icon={['fab','linkedin']} size="2x"/></a>
            </div>
        </div>
    )
}

export default Contacts
