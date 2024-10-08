import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { TwitterIcon, GithubIcon, LinkedInIcon, FacebookIcon, InstagramIcon, SunIcon, MoonIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = "" }) => {
    const router = useRouter();

    return (
        <Link href={href} className={`${className} relative group`}>
            {title}

            <span className={`
                h-[1px] inline-block bg-dark
                absolute left-0 -bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? 'w-full' : 'w-0'}
                dark:bg-light
            `}>
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
            <nav>
                <CustomLink href='/index' title='Home' className='mr-4' />
                <CustomLink href='/about' title='About' className='mx-4' />
                <CustomLink href='/projects' title='Projects' className='mx-4' />
                <CustomLink href='/certifications' title='Certifications' className='ml-4' />
            </nav>

            <nav className='flex items-center justify-center flex-wrap'>
                <motion.a
                    href='https://x.com/'
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    className='w-6 mr-3'
                    whileTap={{ scale: 0.9 }}
                >
                    <TwitterIcon />
                </motion.a>
                <motion.a
                    href='https://github.com/ralfer-99/'
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    className='w-6 mx-3'
                    whileTap={{ scale: 0.9 }}
                >
                    <GithubIcon />
                </motion.a>
                <motion.a
                    href='https://www.linkedin.com/in/raheethus-alfer-b66963206'
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    className='w-6 mx-3'
                    whileTap={{ scale: 0.9 }}
                >
                    <LinkedInIcon />
                </motion.a>
                <motion.a
                    href='https://www.facebook.com/alfer.majeed?mibextid=ZbWKwL'
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    className='w-6 mx-3'
                    whileTap={{ scale: 0.9 }}
                >
                    <FacebookIcon />
                </motion.a>
                <motion.a
                    href='https://www.instagram.com/alfermajeed?igsh=YWdoeW16bnVhaG9n'
                    target={'_blank'}
                    whileHover={{ y: -2 }}
                    className='w-6 ml-3'
                    whileTap={{ scale: 0.9 }}
                >
                    <InstagramIcon />
                </motion.a>

                <button
                    onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                    className={`ml-3 flex items-center justify-center rounded-full p-1
                    ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
                    `}
                >
                    {mode === 'dark' ?
                        <SunIcon className={'fill-dark'} />
                        : <MoonIcon className={'fill-dark'} />}
                </button>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar
