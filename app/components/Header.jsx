// 'use client';
import React from 'react'
import Link from 'next/link'
// import { useState } from 'react'

const Header = () => {
  return (
      <header className='header'>
          <div className='container'>
          <div className='logo'>
              <Link href="/">traversay media</Link>
                  <div className="links">
                        <Link href="/about">About</Link>
                        <Link href="/about/team">our team</Link>
                        <Link href="/code/repos">Code</Link>

</div></div></div>   </header >  )
}

export default Header