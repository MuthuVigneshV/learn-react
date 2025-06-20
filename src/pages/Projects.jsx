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
        {(loading ? Array(4).fill(0) : [1, 2, 3, 4]).map((_, i) => (
          <div className='projects_inner_container' key={i}>
            <div className='projects_content'>
              <h2>{loading ? <Skeleton width={150} /> : projectTitles[i]}</h2>
              <p>{loading ? <Skeleton count={3} /> : projectDescriptions[i]}</p>
              {loading ? (
                <button>
                  <Skeleton width={60} height={30} />
                </button>
              ) : i === 3 ? (
                <a href={projectLinks[i]} download>
                  <button>Download</button>
                </a>
              ) : (
                <a href={projectLinks[i]} target='_blank' rel='noopener noreferrer'>
                  <button>View</button>
                </a>
              )}

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

const projectTitles = ['Food Munch', 'Pet Connect', 'Portfolio Website', 'Todo App']

const projectDescriptions = [
  'A food ordering static website built using HTML, CSS.',
  'PetConnect is a comprehensive pet health care app that monitors and provides insights into pet health.',
  "I've created a personal portfolio using React to showcase my skills and projects.",
  "A simple and responsive ToDo application built with React that allows users to add, delete, and manage their daily tasks efficiently."
]

const projectLinks = [
  'https://mv-food-munch.netlify.app/',
  'https://mv-pet-connect.netlify.app/',
  '/',
  'https://drive.google.com/uc?export=download&id=1yNo8nHo-2AzikQtqHn-u-V5tcJrTYc1w'
]

export default Projects
