import React from 'react'
import "./TestimonialsCard.css"
import { Link } from 'react-router-dom'
const TestimonialsCard = () => {
  return (
    <Link className='testimonials-card'>
      <p className='testimonials-card-content'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere illo, incidunt maxime expedita ipsum vero adipisci! Praesentium, adipisci ut dolorem iste laborum rerum!
      </p>
      <div className="testimonials-review">
        <p className='testimonials-name'>ayush dubey</p>
        <p className='testimonials-detail'>hiii</p>
      </div>
    </Link>
  )
}

export default TestimonialsCard
