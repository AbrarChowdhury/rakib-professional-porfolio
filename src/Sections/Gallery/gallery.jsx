import React from 'react'

import { ronghonu, apex, rfl, shanta, summit, others, banglalink} from '../../data'
import BrandGroup from '../../Components/brandGroup/BrandGroup'
import { Container } from '@mui/material'
function Gallery()
    {
    return (
			<Container>
				<h1>My Work</h1>
				<hr />
				<BrandGroup brand="Apex" data={apex}/>
				<BrandGroup brand="BanglaLink" data={banglalink}/>
				<BrandGroup brand="Rangdhonu" data={ronghonu}/>
				<BrandGroup brand="RFL" data={rfl}/>
				<BrandGroup brand="Summit" data={summit}/>
				<BrandGroup brand="Shanta" data={shanta}/>
				<BrandGroup brand="Others" data={others}/>
			
			</Container>
    )
}

export default Gallery
