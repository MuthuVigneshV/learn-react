import React from 'react'
import Projects from './Projects'
import Skeleton from 'react-loading-skeleton'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Home() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    const handleResumeDownload = () =>{
        const link = document.createElement("a")
        link.href = "Muthu_Vignesh_Resume.pdf"
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
      }, [])

    return (
        <div className='home_section'>
            <div className='home_image_container'>
                { loading ? <Skeleton circle={true} height={300} width={300} /> : (
                <img src='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg' className='home_image'/>
                )}
            </div>
            
            <div className='home_content_container'>
                {loading ? <Skeleton height={50} width={200}/> : (
                <h1>Hello, I'm a</h1>
                )}
                {loading ? <Skeleton height={60} width={350}/>:(
                <h2>Frontend Developer || Freelancer</h2>
                )}
                {loading ? <Skeleton height={30} width={350}/>:(
                <p>Welcome to my website! I appreciate your interest. If you'd like to know more about me, feel free to check out my resume and projects. I'm looking forward to connecting with you!</p>
                )}
                <div className='home_btn_container'>
                    {loading ? <Skeleton circle={true} height={100} width={100}/>:(
                    <a href='' download>
                        <button className='resume_btn'>Resume</button>
                    </a>
                    )}
                    {loading ? <Skeleton circle={true} height={100} width={100}/>:(
                    <button className='projects_btn 'onClick={() => navigate('/projects')}>Projects</button>
                    )}
                    {loading ? <Skeleton circle={true} height={100} width={100}/>:(
                    <button className='contact_btn' onClick={()=> navigate("/contact")}>Contact</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home
