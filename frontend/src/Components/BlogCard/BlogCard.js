import React from 'react'
import { Link } from 'react-router-dom'
import "./BlogCard.css"

const BlogCard = () => {
  return (
    <div className='blog-card'>
   
    <img className="blog-card-img" src="https://s3-alpha-sig.figma.com/img/a44e/98a3/13efe90a30703f65fd558bda39f9e869?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-55lZxoIQADn2SzL5qZ11GeEfM1LLLUX2EOWBX7xsN4cashqBpcePZhFq3b8wub8QSBAkw4dG006sNYFJ0zJO~EFXurvOrD-YJvgGhqIXO8gDBfw06DOE4xGpZrP5Bxgq0ZDwY6VVLyl~FBIs5SqRIS~pAE3kQsBEjTaIbcdeGwD29blUW0DL21ksL-7kNW9bbShLRG45cu-4uOvI3E97rMg1NAI3pgH7DhZArPgGWKaRh6nWlaDEKwmNKEBXzN0YaNpcNiwi5GGALeV-iwMinsyKTZbe63g-GDkfvSsoaEa~V9gab8qdrCT4sHWcTzzlOF-N-aHju5OjEw8rEr7w__" alt="blog-img" />

      <div className="blog-card-content">
        <p className="blog-card-date">12/12/12</p>
        <p className="blog-card-heading">hey this is blog</p>
        <p className="blog-card-context">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ab soluta vel incidunt perspiciatis laudantium architecto exercitationem suscipit odit,</p>
        <Link className="blog-card-btn">read more <i class="fa-solid fa-arrow-right"></i></Link>
      </div>
    </div>
  )
}

export default BlogCard
