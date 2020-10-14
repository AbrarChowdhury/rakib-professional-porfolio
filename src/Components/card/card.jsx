import React, { useState } from 'react'
import Modal from 'react-modal'
import './card.styles.css'

Modal.setAppElement('#root')
function Card({ image, title, video}) {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const customStyle={
        overlay:{
            backgroundColor: 'rgba(0,0,0,0.5)'
        },
        content:{
            borderRadius: '4px',
            background: 'rgba(20,20,20,.8)',
            padding: '0',
            border: 'none'

        }
    }
    return (
        <div className="wrapper">
            
            {
                video ?
                <div className="box  col s12 m6 l6"> 
                    <div className="card large hoverabl">
                        <video width='100%' height='auto' controls poster={image}>
                            <source src={video} type='video/mp4' />
                        </video>
                        <div className="card-content">
                            <h5>{title}</h5>
                        </div>
                    </div>
                </div>
                
                : 
                <div className="box  col s12 m6 l4">
                    <div className="card medium hoverable">
                        <div className="card-image">
                            <img onClick={ () => setModalIsOpen(true)} src={image}/>
                        </div>
                        <div className="card-content">
                            <h5>{title}</h5>
                        </div>
                        <Modal isOpen={ modalIsOpen } onRequestClose={()=>setModalIsOpen(false)} style={ customStyle }>
                            <div className="modal-div">
                                <img className="modal-image" src={image} alt={title}/>
                            </div>    
                        </Modal>
                    </div>
                </div> 
            }
            
        </div>    
    )
}

export default Card
