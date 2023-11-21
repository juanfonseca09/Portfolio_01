import React from 'react';
import { motion } from 'framer-motion';
import { trabajos } from '../data/trabajos';

export const Projects = () => {
  return (
    <motion.div className="home-hero2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <section className='works'>
        {
          trabajos.map(trabajo => {
            return (
              <article className='work-item' key={trabajo.id}>
                <div className='mask'>
                  <a className='ahov' type='button' href={trabajo.url} target='_blank'>
                    <img src={'/png/' + trabajo.id + '.png'} alt={trabajo.nombre} />
                  </a>
                </div>
                <span>{trabajo.desc}</span>
                <a type='button' href={trabajo.url} target='_blank'>
                  <h2>{trabajo.nombre}</h2>
                </a>
                <h3>{trabajo.tecnologias}</h3>
              </article>
            );
          })
        }
      </section>
    </motion.div>
  );
};
