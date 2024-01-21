// UpArrow.js
import React, { useState, useEffect } from 'react';
import styles from './UpArrow.module.css'; // Import the CSS module
import Image from 'next/image';
import UpArrowPNG from '../../public//Images/CarttonImages/upArrow.png'

const UpArrow = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Adjust the scroll height threshold as needed
            const threshold = 300;
            const currentScroll = window.pageYOffset;

            setIsVisible(currentScroll > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`up-arrow ${isVisible ? 'opacity-100' : 'opacity-0'}  fixed bottom-8 right-8 z-50 transition-opacity duration-300 ease-in-out cursor-pointer`}
            onClick={scrollToTop}
        >
            <Image
                src={UpArrowPNG}
                objectFit="cover"
                alt="Picture of the author"
                className="w-[35px] rounded-[100px]"
            />  
              </div>
    );
};

export default UpArrow;
