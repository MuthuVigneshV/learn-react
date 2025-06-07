import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function Projects() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='projects'>
      <h1>{loading ? <Skeleton width={200} /> : 'Projects'}</h1>
      <div className='projects_container'>
        {(loading ? Array(3).fill(0) : [1, 2, 3]).map((_, i) => (
          <div className='projects_inner_container' key={i}>
            <div className='projects_content'>
              <h2>{loading ? <Skeleton width={150} /> : projectTitles[i]}</h2>
              <p>{loading ? <Skeleton count={3} /> : projectDescriptions[i]}</p>
              <button>{loading ? <Skeleton width={60} height={30} /> : 'View'}</button>
            </div>
            <div className='projects_image'>
              {loading ? (
                <Skeleton height={180} max-width={300} width={240} />
              ) : (
                <img
                  src='https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg'
                  alt="project"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const projectTitles = ['Food Munch', 'Pet Connect', 'Portfolio Website']

const projectDescriptions = [
  'A food ordering static website built using HTML, CSS.',
  'PetConnect is a comprehensive pet health care app that monitors and provides insights into pet health.',
  "I've created a personal portfolio using React to showcase my skills and projects."
]

export default Projects
