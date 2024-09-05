import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light
    '>
         
         <Layout className='py-8 flex items-center justify-between'>

            <span>{new Date().getFullYear()} &copy; All Rights Reserved. </span>
            
            <div className='flex-items-center'>
                Build With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span>
                by&nbsp; <a href='https://devdreaming.com'
                className='underline underline-offset-2'
                target={'_blank'}
                >Alfer</a>
            </div>
                   
                   <a href='https://devdreaming.com' target={'_blank'}>Say Hello!</a>

         </Layout>
         

    </footer>
  )
}

export default Footer
