'use client'
/* eslint-disable */

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import 'aos/dist/aos.css'
// @ts-ignore
import AOS from 'aos'
// @ts-ignore
import BannerImage1 from '../public/Images/BannerImage.jpeg'
// @ts-ignore
import BannerImage2 from '../public/Images/banerTwo.JPEG'
// @ts-ignore
import Song from '../public/Music/marathiSong1.wav'
import { SingleCard } from './Componets/singleCard'
import { CountdownTimer } from './Componets/Time/time'
import flowerBG from '../public/Images/flowerBG.png'
import FirstImage from '../public/Images/firstDate.jpg'




const Home = () => {
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])


  

  return (
    <div className="">
      <div className="relative flex flex-col justify-center items-center">
        {/* Sticky Image */}
        <div className="w-full h-[850px] fixed top-0 z-[-1] before:w-full before:h-full before:bg-website-black before:opacity-[0.5] before:z-10 before:top-0 before:left-0 before:absolute">
          <Image
            src={BannerImage2}
            objectFit="cover"
            alt="Picture of the author"
            className="w-full"
            fill={true}
          />
        </div>

        {/* //* Content on top of the Image */}
        <div className="absolute top-[350px] xsMax:top-[210px] flex flex-col justify-center items-center z-[1] w-full overflow-hidden">
          <div
            className="flex flex-col justify-center items-center "
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <p className="!font-dancing text-[40px] text-white  tracking-[0.8px] text-center xsMax:text-[30px] ">
              We are getting married
            </p>
            <p className="text-[52px] xsMax:text-[42px] text-white font-ExoFont font-semibold">
              Anjor & Praful
            </p>
            <p className="text-[28px] xsMax:text-[28px] text-white font-dancing font-extrabold">
              Save The Date
            </p>
            <p className="text-[24px] xsMax:text-[20px] text-white font-dancing font-extrabold">
              04-02-2024
            </p>
          </div>

          {/* //* Audio Element */}
          <div
            className="flex flex-col justify-center items-center mt-[180px] xsMax:mt-[250px] w-full "
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-duration="600"
          >
            <div className="w-full flex justify-center items-center">
              <audio autoPlay controls className="">
                <source src={Song} type="audio/wav" />
                Your browser does not support the audio tag.
              </audio>
            </div>
            {/* //*Section -1 */}
            <div className="mt-[200px] flex xsMax:flex-col w-full bg-website-white xsMax:flex xsMax:justify-center xsMax:items-center">
              {/* //*left */}
              <div
                className="w-[90%] "
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className=" w-full  xsMax:my-[20px] ">
                  <Image
                    src={BannerImage1}
                    objectFit="cover"
                    alt="Picture of the author"
                    className="w-full "
                  />
                </div>
              </div>
              {/* //*right */}
              <div
                className="w-[50%]  xsMax:w-[90%] pl-[50px] xsMax:pl-0 xsMax:mt-[55px]"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                <div className='relative w-full flex justify-center '>
                  <div className='absolute top-[-35px] z-[-1]  w-[60%] flex justify-center items-center '>
                    <Image
                      src={flowerBG}
                      objectFit="cover"
                      alt="Picture of the author"
                      className="w-full"
                    />
                  </div>
                  <div className='z-10 '>

                    <p className="text-[65px]  text-left text-website-red
                 xsMax:text-[35px]  xsMax:text-center font-palyfair font-medium mb-[40px]">
                      BRIDE & GROOM
                    </p>
                    <p className="text-[35px] font-palyfair mt-[20px] max-w-[80%] w-full text-website-darkBlue
                xsMax:text-center xsMax:max-w-full  xsMax:text-[25px]
                ">
                      Join Anjor & Praful On The 4th of February to Celebrate Their
                      Union
                    </p>
                  </div>
                </div>



                <p className="text-[25px] font-abolitionOblique text-website-darkBlue border-l-[2px] border-website-red mt-[50px] pl-[25px]  xsMax:pl-[15px] max-w-[80%] w-full
                xsMax:text-center xsMax:max-w-full xsMax:mt-[25px] font-ExoFont xsMax:text-[20px]                ">
                  Love in marriage is the beautiful melody that two hearts
                  compose together, a symphony of shared dreams, whispered
                  promises, and the harmonious dance of souls choosing each
                  other every day.
                </p>
              </div>
            </div>

            {/* //*Section -2 */}
            <div className="pt-[200px] xsMax:pt-[100px] pb-[50px] flex flex-col justify-center items-center w-full bg-website-white ">
              <div className='relative w-full flex justify-center '>
                <div className='absolute top-[-35px] z-[9]  w-[40%] flex justify-center items-center '>
                  <Image
                    src={flowerBG}
                    objectFit="cover"
                    alt="Picture of the author"
                    className="w-full"
                  />
                </div>

                <p
                  data-aos="fade-down"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  className='z-[10] text-[65px]  text-left text-website-red xsMax:text-[35px]  xsMax:text-center font-palyfair font-medium mb-[40px]'
                >
                  OUR LOVE STORY
                </p>
              </div>

              <p
                className="text-[25px] font-abolitionOblique text-website-darkBlue mt-[50px] pl-[25px]  xsMax:pl-[15px] max-w-[80%] w-full
xsMax:text-center xsMax:max-w-full xsMax:mt-[25px] font-ExoFont xsMax:text-[20px]"
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-duration="600"
              >
                We've been together for eight years, and it's been a mix of good
                times and tough moments. From getting to know each other to
                facing challenges, our love has grown stronger. The hard times
                taught us lessons and made us closer. We shared laughter in
                happy moments and supported each other through difficulties.
                Now, as we're about to get married, we're thankful for the
                experiences that shaped us. Our story is all about sticking
                together through thick and thin, and we're excited about what
                the future holds. Hand in hand, we're ready for the next chapter
                of our journey.
              </p>
            </div>

            {/* //*Section -2 */}
            <div className="pt-[140px] pb-[200px] xsMax:pt-[40px] xsMax:pb-[40px] flex xsMax:flex-col justify-center items-center w-full bg-[#f8e4df] border gap-x-[40px]"            >
              {/* //&Photo-1 */}
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className=''
              >

                <SingleCard heading='1st Date' date="Feb 20, 2016" image={FirstImage} />
              </div>

              {/* //&Photo-2 */}
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[90px]'
              >
                <SingleCard heading='We Fall in Love' date="July 20, 2020" />
              </div>

              {/* //&Photo-3 */}
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[70px] mb-[50px]'
              >
                <SingleCard heading='Engaged' date="July 20, 2020" />
              </div>
            </div>



            {/* //*CountDown */}
            <div className='py-[150px] bg-website-white w-full'>
              <p className='text-[52px] text-website-lightBlue text-center mb-[70px]'>Day's Remaining</p>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home