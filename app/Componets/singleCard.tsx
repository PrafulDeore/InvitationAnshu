'use client'
import Image from "next/image"
import BannerImage1 from '../../public/Images/BannerImage.jpeg'
import LoveBannerbg from '../../public/Images/loveBackimg.png'

interface IType {
    heading?: string
    date?: string
}
export const SingleCard = ({ heading = 'We Fall in Love', date = "July 20, 2020" }: IType) => {

    return (
        <div className="max-w-[400px] xsMax:max-w-[250px] w-full flex flex-col justify-center items-center">
            <p className="text-website-blackBlue text-[52px] text-center font-dancing font-extrabold">{heading}</p>
            {/* //*Date */}
            <p className="text-[#9a3e27] text-[32px] text-center font-palyfair font-medium">{date}</p>
        
            {/* //*Image */}
            <div className="relative">

                <div className="absolute top-[150px] xsMax:top-[100px] z-0">
                    <Image
                        src={LoveBannerbg}
                        objectFit="cover"
                        // layout=""
                        alt="Picture of the author"
                    // className="w-full rounded-full h-full"
                    />
                </div>
                <div className="mt-[50px] border-[5px] border-website-blackBlue rounded-full max-w-[350px] xsMax:max-w-[250px] xsMax:h-[250px] w-full h-[350px] relative z-10">
                    <Image
                        src={BannerImage1}
                        objectFit="cover"
                        layout=""
                        alt="Picture of the author"
                        className="w-full rounded-full h-full"
                    />

                </div>
            </div>
        </div>
    )
}