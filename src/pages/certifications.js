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
import article12 from '../../public/images/articles/cert.jpg';
import article13 from '../../public/images/articles/c2.png';
import article14 from '../../public/images/articles/L1.png';
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
              title='Front-End Web Development'
              summary='Completed the Front-End Web Development course at the University of Moratuwa with hands-on experience in assessments and practicals must have strengthened my skills.'
              link='/'
              img={article1}
            />
            <FeaturedArticle
              title='Research Method in Computer Science: Theory and Ethics'
              summary='I recently participated in a Google Research workshop at University of Jaffna. 
              It provided us with valuable insights into the essential components of effective research, from the initial proposal stage to understanding the theoretical underpinning and ensuring ethical conduct throughout the research process. '
              link='/'
              img={article2}
            />
            <FeaturedArticle
              title='Graphic Designing'
              summary='provided you with essential skills in visual design, covering tools and techniques to create compelling graphics. 
              This training likely enhanced my ability to produce professional-grade visual content for various media platforms.'
              link='/'
              img={article8}
            />
            <FeaturedArticle
              title='Web Design for Beginners'
              summary='Successfully completed the Web Design for Beginners course has given me valuable hands-on experience through practicals and assessments, helping you build a strong foundation in web design concepts like HTML, CSS, and layout design. 
              This knowledge is crucial for creating user-friendly and responsive websites.'
              link='/'
              img={article9}
            />
            <FeaturedArticle
              title='Sri Lanka Student Workshop on Computer Science'
              summary='Through my active involvement in the Sri Lanka Students’ Workshop on Computer Science (SLSWCS) at the Department of Computer Science, University of Jaffna, I acquired a wide range of practical skills essential for both academic and professional growth. 

I honed my ability to effectively deliver poster presentations, allowing me to communicate complex research findings and innovative ideas in a visually engaging and concise manner. Additionally, managing spotlight sessions provided me with valuable organizational experience, requiring precise time management and the ability to facilitate productive discussions among peers and professionals.
These experiences significantly improved my communication and presentation abilities, equipping me to share research in clear, persuasive, and engaging formats. Furthermore, they strengthened my organizational and leadership skills, which are vital for successfully navigating collaborative projects, academic forums, and professional environments.

'
              link='/'
              img={article10}
            />

            <ul>

            <FeaturedArticle
              title='Certificate in Web Development'
              summary='I have successfully completed a Certificate in Web Development, gaining the skills to design, build, and maintain websites. 
              Throughout the course, I learned essential technologies such as HTML, CSS, JavaScript, and backend development, providing me with a well-rounded foundation in web development. 
              This certification reflects my proficiency in creating responsive, dynamic, and user-friendly web applications.'
              link='/'
              img={article11} 
            /><br></br>

             <FeaturedArticle
              title='Mastering Deep Learning with Hands-On 2024'
              summary='I recently attended the "Master Deep Learning: Convolutional Neural Networks and Beyond" workshop at the Department of Computer Science, University of Jaffna.
This experience was incredibly rewarding, as I deepened my understanding of advanced deep learning techniques, especially CNNs. 
I’m eager to leverage these new skills in upcoming projects.'
              link='/'
              img={article12} 
            />

            </ul>

            <FeaturedArticle
              title='Python for Beginner'
              summary='I have successfully completed the Python for Beginners course, where I gained a strong understanding of the fundamentals of Python programming. 
              Through hands-on projects and exercises, I learned core concepts such as variables, loops, functions, and data structures. 
              This course also helped me develop problem-solving skills by writing clean and efficient Python code.'
              link='/'
              img={article13} 
            />

<FeaturedArticle
              title='Generative AI'
              summary='I have gained valuable insights into AI-driven content creation through the Generative AI course on LinkedIn Learning. 
              This course broadened my knowledge of machine learning models, neural networks, and the tools used for developing generative AI systems. 
              The practical exercises provided me with hands-on experience in applying AI in creative and innovative ways.'
              link='/'
              img={article14} 
            />
           
            
          </ul>

          <h2 className='font-bold text-4xl w-full text-center my-16'>
            Activities
          </h2>

          <ul>
            <Activity
              title='I recently participated in a Google Research workshop at University of Jaffna.'
              date='November 25, 2023'
              link='/'
              img={article3}
            />
            <Activity
              title='participation in the SLSWCS at the Department of Computer Science, University of Jaffna'
              date='December 09, 2023'
              link='/'
              img={article4}
            />
            <Activity
              title='I attended the "Master Deep Learning: Convolutional Neural Networks and Beyond" workshop at the Department of Computer Science, University of Jaffna'
              date='August 17, 2024'
              link='/'
              img={article5}
            />
            <Activity
              title='Student member of IEEE student branch at University of Jaffna'
              date='September 01, 2021'
              link='/'
              img={article6}
            />
            <Activity

              title='Student member of Gavel Club at University of Jaffna'
              date='September 01, 2021'
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
