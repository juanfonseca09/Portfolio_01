import React from 'react'
import { motion } from "framer-motion"
import { trabajos } from '../data/trabajos'

export const Projects = () => {
  return (
    <motion.div inicial={{opacity:0,}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
      <section className='works'>
      {
        trabajos.map(trabajo => {
          return (
            <article className='work-item' key={trabajo.id}>
              <div className='mask'>
                <img href={trabajo.url} target='_blank' src={'/png/'+trabajo.id+'.png'}/>
              </div>
              <span>{trabajos.categorias}</span>
              <h2 href={trabajo.url} target='_blank'>{trabajo.nombre}</h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
          )
        })
      }
      </section>
      </motion.div>
  )
}
