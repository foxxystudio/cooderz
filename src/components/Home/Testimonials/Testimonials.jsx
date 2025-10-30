import React from 'react';
import './style.scss';
import Image from 'next/image';

const logos = [
   {
      src: '/images/testimonials-logo.svg',
      width: 143,
      height: 22
   },
   {
      src: '/images/testimonials-logo.svg',
      width: 143,
      height: 22
   },
   {
      src: '/images/testimonials-logo.svg',
      width: 143,
      height: 22
   },
   {
      src: '/images/testimonials-logo.svg',
      width: 143,
      height: 22
   },
   {
      src: '/images/testimonials-logo.svg',
      width: 143,
      height: 22
   }
]

export default function Testimonials() {
   return (
      <div className='home-testimonials__wrapper'>
         <div className="testimonials-inner__wrapper">
            <div className="title__wrapper">
               <h2 className='font-primary-500 font-white'>Trusted by 50+ Brands & Companies</h2>
            </div>

            <div className="logos__wrapper">
               {
                  logos.map((item, i) => (
                     <div className="single-logo__item" key={i}>
                        <Image
                           src={item.src}
                           width={item.width}
                           height={item.height}
                           alt='Cooderz logo'
                           draggable={false}
                           quality={100}
                           loading='lazy'
                        />
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   )
}
