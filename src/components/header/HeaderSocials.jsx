import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {FaGithub} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ayush-shrivastava-367a13229/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Ayush-7903" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/ig_ayushrivastava/" target="_blank"><RiInstagramFill/></a>

    </div>
  )
}

export default HeaderSocials