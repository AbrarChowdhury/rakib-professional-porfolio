import React from 'react'
import Card from '../card/card'
import { Grid } from '@mui/material'
function BrandGroup({data, brand}) {
  return (
    <div>
			<h4 className='right-align'>{brand}</h4>
			<Grid container spacing={4}>
				{ data.map((data =><Grid item xs={12} sm={6} md={4}> <Card {...data}/> </Grid>)) }
			</Grid>
			<hr />
    </div>
  )
}

export default BrandGroup
