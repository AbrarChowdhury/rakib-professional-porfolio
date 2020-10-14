import React from 'react'
import './sideBar.styles.css'
import Contacts from '../../Components/contacts/contacts'
function SideBar() {
    return (
        <div className='side-bar'>
        <img className='profile-pic' src="/dp.jpeg" alt="rakibul hasan chowdhury"/>
            <h3 className = "name">Rakib Hasan Chowdhury</h3>
            <p className='about'>I am a curious person, always love to explore and
            learn, even from the simplest things. I possess the quality of working fruitfully maintaining effective
            communication under pressure and challenging
            conditions.
            </p>
            <br/>
            <Contacts/>
            
        </div>
    )
}

export default SideBar
