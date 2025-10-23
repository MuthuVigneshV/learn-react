import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useState, useEffect } from 'react'

function About() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
            const timer = setTimeout(() => {
              setLoading(false)
            }, 2000)
            return () => clearTimeout(timer)
    }, [])

  return (
    <div className='about'>
        <h1>ABOUT <span className='about_me'>ME</span></h1>
        
        <div className='about_container'>
            <div className='about_description_container'>
                <h3><span className='about_education'>EDUCATION : </span>BTECH BIOMEDICAL ENGINEERING</h3>
                <p> 
                    Hi, I'm Muthu, a passionate Web Developer dedicated to helping small businesses, startups, and individuals build a strong online presence. I create engaging and user-friendly websites that reflect each client’s unique identity and goals. Along with web development, I also offer logo design, tagline creation, and ready-to-use social media post templates — everything you need to make your brand stand out in the digital space.
                </p>
                <h5><a>To Know More, read my blog here..</a></h5>
            </div>
            <div className='about_image_container'>
                { loading ? <Skeleton height={400} width={500} /> : (
                <img src='myprofimg.jpg' className='about_image'/>
                )}
            </div>
        </div>
    </div>
  )
}

export default About