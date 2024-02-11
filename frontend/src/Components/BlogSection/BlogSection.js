import React from 'react'
import "./BlogSection.css"
import { Link } from 'react-router-dom'
import BlogCard from '../BlogCard/BlogCard'
const BlogSection = () => {
  return (<>
    <section className='blog-section' >
        <div className="blog-section-head">
            <h3 className='blog-section-heading'>Blog by Gaonse</h3>
            <Link className='blog-section-headbtn sidelink'>View all</Link>
        </div>
        <div className="blog-section-card">
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
     
        </div>
      
    <section className='email-section'>
      <p className="email-heading">Subscribe for Special Offers and Join Us</p>
      <form className='email-box'>

      <i className="fa-solid fa-arrow-right"></i>
        <input type="email" placeholder='Your Email' />
      </form>
    </section>
    </section>
    </>
  )
}

export default BlogSection
