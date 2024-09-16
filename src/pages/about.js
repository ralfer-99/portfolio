import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Image from 'next/image';
import profilePic from '../../public/images/profile/Alfer.png';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Alfer | About Page</title>
        <meta name='description' content='any description' />
      </Head>
<TransitionEffect />

      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />

          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col place-items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>ABOUT ME</h2>

              <div className='my-4 font-medium'>
                Hi, I&apos;m Raheethus Alfer, a Software Engineer and Web Developer committed to crafting elegant, functional, and user-centric digital experiences with 1 years of industry experience. 
                I consistently seek innovative methods to realize my clients&apos; visions.
              </div>
             

              <div className='my-4 font-medium'>
                I&apos;m currently pursuing a Bachelor of Science in Computer Science at the University of Jaffna. My enthusiasm for learning motivates me to continuously expand my skills and knowledge. 
                As a self-driven, detail-oriented, and creative professional, I am always looking for opportunities to refine my work and advance in my career.
              </div>
            </div>

            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light' />
              <Image src={profilePic} alt='Alfer' className='w-full h-auto rounded-2xl' />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Certifications</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Projects</h2>
              </div>

              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75'>Years Of Experience</h2>
              </div>
            </div>
          </div>

          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
