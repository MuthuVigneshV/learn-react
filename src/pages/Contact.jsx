import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { useState, useEffect } from 'react'

function Contact() {
    const [loading, setLoading] = useState(true)
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false)
        }, 2000)
        return () => clearTimeout(timer)
      }, [])


    return (
        <div className='contact'>
            <form className='contact_details'>
                <div>
                    {loading ? <Skeleton height={50} width={320}/>: (
                        <input placeholder='Name' type='text' required/>
                    )}
                </div>
                <div>
                    {loading ? <Skeleton height={50} width={320}/> : (
                        <input placeholder='Email' type='email' required/>
                    )}
                </div>
                <div>
                    {loading ? <Skeleton height={50} width={320}/> : (
                        <input placeholder='Phone Number' type='tel' required/>
                    )}
                </div>
                <div>
                    {loading ? <Skeleton height={50} width={320}/> : (
                        <textarea placeholder='Any thing want to say?' type='text' ></textarea>
                    )}
                </div>

                {loading ? <Skeleton height={50} width={320}/>: (
                    <button type='submit'>Submit</button>
                )}
            </form>
            {loading ? <Skeleton height={220} width={320}/>:(
            <div className='contact_content'>
                <h1>Contact</h1>
                <p>Looking forward to connect with you.!</p>
                <div>
                    <strong><h2>Phone</h2></strong>
                    <p>8220832037</p>
                </div>
                <div>
                    <strong><h2>Email</h2></strong>
                    <p>muthuvignesh710@gmail.com</p>
                </div>
            </div>
        )}
        </div>
    )
}

export default Contact