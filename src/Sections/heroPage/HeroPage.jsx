import React from 'react'
import Contacts from '../../Components/contacts/contacts'
import { Container,Grid } from '@mui/material'
function HeroPage() {
    return (
        <Container >
        <Grid container spacing={4} alignItems="center" style={{minHeight:"100vh"}} >
            <Grid item xs={12} md={6} >
                <h3 className = "name">Rakib Hasan Chowdhury</h3>
                <p className='about'>Dedicated professional with over 8 years of active marketing experience. Looking to bring my marketing experience in developing and executing marketing strategies with the unique ability to understand the ongoing market scenario and customers trends using exceptional marketing communication skills.</p>
                <br/>
                <Contacts/>
                <br />
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{maxWidth:"100%", borderRadius:'50px'}} src="/dp.jpeg" alt="rakibul hasan chowdhury"/>
            </Grid>
        </Grid>
        </Container>
    )
}

export default HeroPage
