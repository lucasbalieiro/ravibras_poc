'use client'

import Webcam from 'react-webcam'
import jig from './jig.png'
import Image from 'next/image'
export default function Home() {

  const videoConstraints = {
    facingMode: { exact: "environment" }
  };
  return (
    <>
      <h1>POC Ravibras</h1>
      <Image src={jig} alt='jig' style={{
        position: 'absolute',
        top: 10,
        left: 50
      }} />
      <Webcam
        videoConstraints={videoConstraints}
      />

    </>
  )
}
