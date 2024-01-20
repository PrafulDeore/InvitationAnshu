'use client'
import Image from "next/image"
import LoveBannerbg from '../../public/Images/loveBG.png'
import ReactPlayer from "react-player"

interface IType {
    heading?: string
    date?: string
    image?: any
    video?: boolean
}
export const SingleCard = ({ heading = 'We Fall in Love', date = "July 20, 2020", image, video = false }: IType) => {

    return (
        <div className="max-w-[400px] xsMax:max-w-full w-full flex flex-col justify-center items-center">
            <p className="text-website-blackBlue text-[52px] xsMax:text-[40px] text-center font-sail leading-[45px] w-full">{heading}</p>
            {/* //*Date */}
            <p className="text-[#9a3e27] text-[32px] xsMax:text-[28px] text-center font-sail font-medium">{date}</p>

            {/* //*Image */}
            <div className="relative xsMax:mt-[-25px]">

                <div className="absolute top-[150px] xsMax:top-[130px] z-0">
                    <Image
                        src={LoveBannerbg}
                        // objectFit=""
                        // layout="fill"
                        // fill={true}
                        alt="Picture of the author"
                    // className="w-full rounded-full h-full"
                    />
                </div>
                <div className="mt-[50px] border-[5px] border-website-blackBlue rounded-full max-w-[350px] xsMax:max-w-[250px] xsMax:h-[250px] w-full h-[350px] relative z-10">
                    {
                        !video ?
                            <Image
                                src={image}
                                objectFit="cover"
                                layout=""
                                alt="Picture of the author"
                                className="w-full rounded-full h-full"
                            /> :
                            <video autoPlay controls muted loop style={{ width: '240px', height: '240px', objectFit: 'cover', borderRadius: '100%' }}  >
                                <source src="/video/oneVideo.mp4" />
                            </video>
                    }
                </div>
            </div>
        </div>
    )
}