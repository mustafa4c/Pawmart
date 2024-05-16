import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div>
        <div class="hero min-h-screen"  style={{backgroundImage: 'url(https://img.freepik.com/free-photo/digital-art-portrait-adorable-pet-heaven_23-2151478693.jpg?t=st=1715411721~exp=1715415321~hmac=68a4b064a5b12482e1fa445b225250b811a4999cc791c14a5ec7791320dbeeeb&w=1060)'}}>
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-4xl font-bold">Where Every Dog Finds a Home Online!</h1>
              <p class="mb-5">Welcome to PawMart, your ultimate destination for everything canine! Whether you're searching for your new furry friend, need expert advice on training and care, or want to connect with fellow dog lovers, you've come to the right place.</p>
              <Link href={"/join"}><button class="btn btn-primary text-white">Get Started</button></Link> 
            </div>
          </div>
        </div>
    </div>
  )
}
