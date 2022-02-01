import React, { useState } from 'react'
import {Card as MaterialCard ,CardMedia, Modal} from '@mui/material/';
import './card.styles.css'

function Card({ image, title, video}) {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    return (
        <div className="wrapper">
        <Card>
            <MaterialCard>
            {
                video ?
                <video width='100%' height='auto' controls poster={image}>
                    <source src={video} type='video/mp4' />
                </video>        
                : 
                <CardMedia image={image} component="img" alt="" height="300" onClick={handleOpen}/>
            }
            </MaterialCard>
            <Modal open={ open } onClose={handleClose} style={{ display:"flex"}}>
                <img className="modal-image" src={image} alt={title} style={{ margin:"0 auto"}} onDoubleClick={handleClose}/>
            </Modal>
        </Card>
        </div>    
    )
}

export default Card
