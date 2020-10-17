import React from 'react'
import './sideBar.styles.css'
import Contacts from '../../Components/contacts/contacts'
function SideBar() {
    return (
        <div className='side-bar'>
        <img className='profile-pic' src="/dp.jpeg" alt="rakibul hasan chowdhury"/>
            <h3 className = "name">Rakib Hasan Chowdhury</h3>
            <p className='about'>Dedicated professional with 6 years of active marketing experience. Looking to bring my marketing experience in developing and executing marketing strategies with the unique ability to understand the ongoing market scenario and customers trends using exceptional marketing communication skills.
            </p>
            <br/>
            <Contacts/>
            
        </div>
    )
}

export default SideBar
