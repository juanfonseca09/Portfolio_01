import React from 'react'
import { motion } from "framer-motion"

export const Home = () => {
  return (
    <motion.div className="home-hero" inicial={{opacity:0,}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.3}}>
      <div className="home-hero__content">
        <h1 className="heading-primary">Hola, Soy Juan Fonseca</h1>
        <div className="home-hero__info">
          <p className="text-primary">
            Desarrollador Web y estudiante de Ingeniería en Computación 
          </p>
        </div>
      </div>
    </motion.div>
  )
}
