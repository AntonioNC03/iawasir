import React from 'react'
import './section.module.css'
import ControlledCarousel from '../Carousel'
import { Card } from '@mui/material'
import Tarjeta from './Cards'

function Section() {
  return (
    <section>
      <article> 
      <Tarjeta/> 
      <Tarjeta/>  
      <Tarjeta/> 
      <ControlledCarousel/>
      </article>
    </section>
  )
}

export default Section