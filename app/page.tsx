'use client'
/* eslint-disable */

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import 'aos/dist/aos.css'
// @ts-ignore
import AOS from 'aos'
// @ts-ignore
import BannerImage2 from '../public/Images/banerTwo.JPEG'
// @ts-ignore
import Song from '../public/Music/shusshaDesi.wav'
import { SingleCard } from './Componets/singleCard'
import { CountdownTimer } from './Componets/Time/time'
import flowerBG from '../public/Images/flowerBG.png'
import FirstImage from '../public/Images/1st date.jpg'
import fellInLove from '../public/Images/firstDate.jpg'
import SimpleImageSlider from 'react-simple-image-slider/dist/index'
import FirstOuting from '../public/Images/firstOuting.jpeg'
import FirstInstaPost from '../public/Images/firstInstaPost.jpeg'
import TimeTogether from '../public/Images/e.jpeg'
import Bhandaradara from '../public/Images/bhandardara.jpeg'
// @ts-ignore
import BackWaters from '../public/Images/backWaters.JPEG'
// @ts-ignore
import BauliDam from '../public/Images/bauliDam.JPEG'
import Enga from '../public/Images/e56.jpeg'
import ShubhVivah from '../public/Images/shubhaVivah.jpg'
import Cartton1 from '../public/Images/CarttonImages/cartoon11.jpg'
import Cartton2 from '../public/Images/CarttonImages/Cartoon2.png'
import Cartoon3 from '../public/Images/CarttonImages/Cartton3.png'
import Cartoon4 from '../public/Images/CarttonImages/Cartoon4.png'

import map from '../public/Images/CarttonImages/AnShu.png'
import UpArrow from './Componets/UpArrow'
import { useRouter } from 'next/router'

const Home = () => {
  const router=useRouter()
  console.log("routerrouter",router);
  
  useEffect(() => {
    AOS.init()
    window.scrollTo(0, 0)
  }, [])

  const images = [
    { url: '/Images/sliderimages/img1.png' },
    { url: '/Images/sliderimages/img2.png' },
    { url: '/Images/sliderimages/img3.png' },
    { url: '/Images/sliderimages/img4.png' },
    { url: '/Images/sliderimages/img5.png' },
    { url: '/Images/sliderimages/img6.png' },

  ]


  return (
    <div className="">
      <UpArrow/>
      <div className="relative flex flex-col justify-center items-center">
        {/* Sticky Image */}
        <div className="w-full h-[850px] fixed top-0 z-[-1] before:w-full before:h-full before:bg-website-black before:opacity-[0.5] before:z-10 before:top-0 before:left-0 before:absolute">
          <Image
            src={BannerImage2}
            objectFit="cover"
            alt="Picture of the author"
            className="w-full"
            fill={true}
          />.
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
            <p className="text-[52px] xsMax:text-[42px] text-white font-ExoFont text font-semibold">
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
                <div className=" w-full  xsMax:my-[20px]">
                  <SimpleImageSlider
                    width={'100%'}
                    height={250}
                    images={images}
                    showBullets={true}
                    showNavs={false}
                    autoPlay={true}
                    autoPlayDelay={3.5}
                    loop={true}
                    slideDuration={1.9}
                    navStyle={1}
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
                  <div className='absolute top-[-25px] z-[-1]  w-[35%] flex justify-center items-center '>
                    <>

                      <Image
                        src={flowerBG}
                        objectFit="cover"
                        alt="Picture of the author"
                        className="w-full"
                      />
                    </>
                  </div>
                  <div className='z-10 '>

                    <p className="text-[65px]  text-left text-website-red
                 xsMax:text-[35px]  xsMax:text-center font-palyfair font-medium mb-[0px]">
                      BRIDE & GROOM
                    </p>
                    <p className="text-[35px] font-palyfair mt-[20px] max-w-[80%] w-full text-website-darkBlue
                xsMax:text-center xsMax:max-w-full  xsMax:text-[25px]
                ">
                      Join us On The 4th of February to Celebrate Our
                      Union
                    </p>
                  </div>
                </div>
                {/* //* Cartoon Image-1 */}
                <div className="m-auto xsMax:max-w-[250px] xsMax:h-[250px] w-full h-[350px]">
                  <Image
                    src={Cartton1}
                    objectFit="cover"
                    layout=""
                    alt="Picture of the author"
                    className="w-full rounded-full h-full"
                  />
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
                <div className='absolute top-[-35px] z-[9] w-[35%] flex justify-center items-center '>
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
                  className='z-[10] text-[65px]  text-left text-website-red xsMax:text-[35px]  xsMax:text-center font-palyfair font-medium mb-[10px]'
                >
                  OUR LOVE STORY
                </p>
              </div>
              {/* //* Cartoon Image-2 */}
              <div className="m-auto xsMax:max-w-[250px] xsMax:h-[250px] w-full h-[350px]">
                <Image
                  src={Cartton2}
                  objectFit="cover"
                  layout=""
                  alt="Picture of the author"
                  className="w-full rounded-full h-full"
                />
              </div>
              <p
                className="text-[25px] font-abolitionOblique text-website-darkBlue mt-[50px] px-[15px]  xsMax:pl-[15px] max-w-[80%] w-full
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

            {/* //*Section -3 */}
            <div className="pt-[140px] pb-[200px] xsMax:pt-[40px] xsMax:pb-[0px] flex xsMax:flex-col justify-center items-center w-full bg-[#fdf7f6] border gap-x-[40px]"            >
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
                <SingleCard heading='1st Outing' date="April 21, 2016" image={fellInLove} />
              </div>

              {/* //&Photo-3 */}

              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[70px] mb-[50px]'
              >
                <SingleCard heading='Treaking Together' date="July 09, 2017" image={FirstOuting} />
              </div>

              {/* //&Photo-4 */}
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[70px] mb-[50px]'
              >
                <SingleCard heading='1st Insta post' date="Aug 12, 2017" image={FirstInstaPost} />
              </div>

              {/* //&Photo-5 */}
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[70px] mb-[50px]'
              >
                <SingleCard heading='Spending Time Together' date="June 01, 2018" image={TimeTogether} />
              </div>

              {/* //&Photo-6 */}
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[70px] mb-[50px]'
              >
                <SingleCard heading='Found Peace Together' date="July 06, 2018" image={BackWaters} />
              </div>
              {/* //&Photo-7 */}
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[70px] mb-[50px]'
              >
                <SingleCard heading='And Twinning Never looked so cute' date="Jan 21, 2021" image={Bhandaradara} />
              </div>

              {/* //&Photo-8 */}

              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[70px] mb-[50px]'
              >
                <SingleCard heading='Spent our Vacation Together' date="Aug 13, 2022" image={BauliDam} />
              </div>

              {/* //&Video-9 */}
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[70px] mb-[50px]'
              >
                <SingleCard heading='I Asked & She said yes' date="Jan 01, 2023" video={true} />

              </div>
              {/* //&Photo-10 */}

              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-duration="600"
                className='mt-[70px] mb-[50px]'
              >
                <SingleCard heading='Yes! We got Promoted as... GF BF -> Fiancée' date="Nov 18, 2023" image={Enga} />
              </div>
              <div className='flex w-full justify-center items-center mt-[0px]'>

              <Image
                src={Cartoon4}
                objectFit="cover"
                layout=""
                alt="Picture of the author"
                className="w-[100px] rounded-full h-full"
                />
                {/* <Image
                src={Cartoon4}
                objectFit="cover"
                layout=""
                alt="Picture of the author"
                className="w-[100px] rounded-full h-full"
                /> */}
                </div>
            </div>


            {/* //*CountDown */}
            <div className='py-[150px] xsMax:py-[10px] bg-website-white w-full relative mt-[-8px]'>
              <div className='z-20 absolute w-full '>
                <p className="text-[65px]   text-left text-website-SelectiveYellow xsMax:text-[35px]  xsMax:text-center font-palyfair font-medium mb-[40px]">
                  Day's Remaining
                </p>
                <CountdownTimer />

              </div>
              <div className="w-full  h-[850px] z-[1] before:w-full before:h-full before:bg-website-black before:opacity-[0.8] before:z-10 before:top-0 before:left-0 before:absolute">
                <Image
                  src={ShubhVivah}
                  objectFit="cover"
                  alt="Picture of the author"
                  className="w-full"
                  fill={true}
                />
              </div>
            <div className='w-full flex justify-between items-center  z-50 sticky'>
              <Image
                src={Cartoon3}
                objectFit="cover"
                layout=""
                alt="Picture of the author"
                className="w-[130px] rounded-full h-full"
              />

               <p className="text-[65px] items-center  text-left text-website-white xsMax:text-[15px]  xsMax:text-center font-palyfair font-medium ">
                  Scan me for Address
                </p>
              <Image
                src={map}
                objectFit="cover"
                layout=""
                alt="Picture of the author"
                className="w-[130px] rounded-full h-full"
              />
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home