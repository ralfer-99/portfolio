import React, { useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';
import article1 from '../../public/images/articles/c1.png';
import article2 from '../../public/images/articles/c7.jpg';
import article3 from '../../public/images/articles/create modal component in react using react portals.png';
import article4 from '../../public/images/articles/form validation in reactjs using custom react hook.png';
import article5 from '../../public/images/articles/smooth scrolling in reactjs.png';
import article6 from '../../public/images/articles/What is higher order component in React.jpg';
import article7 from '../../public/images/articles/form validation in reactjs using custom react hook.png';
import article8 from '../../public/images/articles/c6.jpg';
import article9 from '../../public/images/articles/c3.png';
import article10 from '../../public/images/articles/c8.jpg';
import article11 from '../../public/images/articles/c5.jpg';
import TransitionEffect from '@/components/TransitionEffect';

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    if (imgRef.current) {
      imgRef.current.style.display = 'inline-block';
      x.set(event.pageX);
      y.set(event.pageY - 10);
    }
  }

  function handleMouseLeave(event) {
    if (imgRef.current) {
      imgRef.current.style.display = 'none';
      x.set(0);
      y.set(0);
    }
  }

  return (
    <Link
      href={link}
      target='_blank'
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className='capitalize text-xl font-semibold hover:underline'>
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className='z-10 w-96 h-auto hidden absolute rounded-lg'
      />
    </Link>
  );
};

const Activity = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border-solid border-dark border-r border-b-4 dark:border-light dark:bg-dark dark:text-light'
    >
      <MovingImg title={title} img={img} link={link} />
      <span className='text-primary font-semibold pl-4 dark:text-primaryDark'>{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className='relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light'>
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'
      />
      <Link
        href={link}
        target='_blank'
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
      >
        <FramerImage
          src={img}
          alt={title}
          className='w-full h-auto'
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes='(max-width:768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw' />
        
      </Link>

      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>
          {title}
        </h2>
      </Link>

      <p className='text-sm mb-2'>{summary}</p>
      <span className='text-primary font-semibold'>{time}</span>
    </li>
  );
};

const Certificates = () => {
  return (
    <>
      <Head>
        <title>Alfer | Certificate Page</title>
        <meta name='description' content='any description' />
      </Head>

      <TransitionEffect />

      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Professional Certificates!' className='mb-16' />

          <ul className='grid grid-cols-2 gap-16'>
            <FeaturedArticle
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              summary='Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              time='9 min read'
              link='/'
              img={article1}
            />
            <FeaturedArticle
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              summary='Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              time='9 min read'
              link='/'
              img={article2}
            />
            <FeaturedArticle
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              summary='Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              time='9 min read'
              link='/'
              img={article8}
            />
            <FeaturedArticle
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              summary='Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              time='9 min read'
              link='/'
              img={article9}
            />
            <FeaturedArticle
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              summary='Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              time='9 min read'
              link='/'
              img={article10}
            />
            <FeaturedArticle
              title='Build A Custom Pagination Component In Reactjs From Scratch'
              summary='Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project.'
              time='9 min read'
              link='/'
              img={article11}
            />
          </ul>

          <h2 className='font-bold text-4xl w-full text-center my-16'>
            Activities
          </h2>

          <ul>
            <Activity
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              date='February 10, 2024'
              link='/'
              img={article3}
            />
            <Activity
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              date='February 10, 2024'
              link='/'
              img={article4}
            />
            <Activity
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              date='February 10, 2024'
              link='/'
              img={article5}
            />
            <Activity
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              date='February 10, 2024'
              link='/'
              img={article6}
            />
            <Activity
              title='Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling'
              date='February 10, 2024'
              link='/'
              img={article7}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default Certificates;
