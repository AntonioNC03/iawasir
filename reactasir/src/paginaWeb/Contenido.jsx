import React from 'react'
import Nav from './Nav'
import Section from './Section'
import Aside from './Aside'
import './contenido.module.css'


function Contenido() {
  return (
    <>
    <Nav/>
    <main>
      <aside>
        <Aside/>
      </aside>
        <section> 
        <Section/>
        </section>
    
    </main>
    </>
  )
}

export default Contenido
