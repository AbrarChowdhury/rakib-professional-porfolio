import React from 'react'
import Card from '../../Components/card/card'
import { tvcs, prints} from '../../data'


function Gallery() 
    {
    return (
        <div>
        <hr/>

            <h2 className='right-align'>Print Ads</h2>
            
            
            <div className = "row">
                {
                    prints.map((data => <Card {...data}/>))
                }
            </div>
        <hr/>
            <h2 className='right-align'>TVCs</h2>
            <div className = "row">
                {
                    tvcs.map((data => <Card {...data}/>))
                }
            </div>
            
        </div>
    )
}

export default Gallery
