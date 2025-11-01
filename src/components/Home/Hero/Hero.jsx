'use client';
import React from 'react';
import './style.scss';
import Image from 'next/image';
import DoubleLayerButtonHoverAnim from '@/components/DoubleLayerButtonHoveAnim';

export default function Hero() {
   return (
      <div className='home-hero__wrapper'>
         <div className="hero-bg__wrapper">
            <div className="lines__wrapper">
               <Image
                  src={'/images/home-hero/lines.svg'}
                  width={1536}
                  height={829}
                  quality={100}
                  alt='Cooderz'
                  draggable={false}
               />
            </div>

            <div className="blur-gradient__wrapper">
               <Image
                  src={'/images/home-hero/blur-gradient.png'}
                  width={890}
                  height={744}
                  quality={100}
                  alt='Cooderz'
                  draggable={false}
               />
            </div>

            <div className="blur-gradient-circle__wrapper">
               {/* <Image
                  src={'/images/home-hero/blur-gradient-circle.svg'}
                  width={1250}
                  height={410}
                  quality={100}
                  alt='Cooderz'
                  draggable={false}
               /> */}

               <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="830" viewBox="0 0 1440 830" fill="none">
                  <g filter="url(#filter0_f_15320_221)">
                     <path d="M100.5 195C100.5 746 1351 727.5 1351 223" stroke="url(#paint0_linear_15320_221)" strokeOpacity="0.4" strokeWidth="50" />
                  </g>
                  <defs>
                     <filter id="filter0_f_15320_221" x="-124.5" y="-5" width="1700.5" height="834.82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_15320_221" />
                     </filter>
                     <linearGradient id="paint0_linear_15320_221" x1="-203.78" y1="103.626" x2="378.72" y2="1161.49" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0F1417" />
                        <stop offset="0.452776" stopColor="#3E3CFF" />
                        <stop offset="1" stopColor="#74FFF0" />
                     </linearGradient>
                  </defs>
               </svg>
            </div>

            <div className="gradient-top"></div>
            {/* <div className="gradient-bottom"></div> */}
         </div>

         <div className="hero-inner__wrapper">
            <div className="content__wrapper">
               <div className="text__wrapper">
                  <h1 className='font-secondary-600 font-white'>Launch better with us.</h1>
                  <span className='font-primary-400'>You focus on the vision. We’ll handle the rest.</span>
               </div>

               <DoubleLayerButtonHoverAnim
                  text={'Book a Consultation'}
                  font={'font-primary-500'}
                  color={'font-white'}
                  bg={'bg-blue-outline'}
                  bgHover={'bg-hover-primary'}
                  href={'https://calendly.com/yunismikayilov/intro-call'}
                  target={'_blank'}
                  icon={'arrow-right-up'}
               />
            </div>

            <div className="glass__wrapper">
               <div className="glass__layer"></div>

               <div className="items__wrapper">
                  <div className="single-glass__item">
                     <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112" fill="none">
                        <path d="M41.5313 13.9414L25.3352 44.0332C24.7228 45.1709 25.13 46.5271 26.2677 47.1395L33.6057 51.089C34.7434 51.7013 36.0997 51.2942 36.712 50.1565L46.7848 31.4415C47.3972 30.3038 48.7535 29.8967 49.8911 30.509L68.6061 40.5819C69.7438 41.1942 71.1001 40.787 71.7124 39.6493L75.6619 32.3113C76.2742 31.1736 75.8671 29.8173 74.7294 29.205L44.6376 13.0088C43.513 12.4403 42.113 12.8606 41.5313 13.9414Z" fill="white" />
                        <path d="M67.0505 98.4715L36.9587 82.2754C35.821 81.6631 35.4139 80.3068 36.0262 79.1691L39.9757 71.831C40.588 70.6933 41.9443 70.2862 43.082 70.8985L61.7969 80.9713C62.9346 81.5837 64.2909 81.1765 64.9032 80.0388L74.976 61.3239C75.5884 60.1862 76.9447 59.779 78.0823 60.3914L85.4204 64.3409C86.5581 64.9532 86.9652 66.3095 86.3529 67.4472L70.1568 97.539C69.5314 98.6329 68.1313 99.0532 67.0505 98.4715Z" fill="white" />
                        <path d="M88.6794 36.7497L97.4396 41.4646C98.5772 42.077 98.9844 43.4332 98.3721 44.5709L93.6572 53.3311C93.0448 54.4688 91.6885 54.876 90.5508 54.2636L81.7907 49.5487C80.653 48.9363 80.2458 47.5801 80.8582 46.4424L85.5731 37.6822C86.1985 36.5883 87.5986 36.168 88.6794 36.7497Z" fill="white" />
                        <path d="M20.8661 57.1074L29.6263 61.8223C30.7639 62.4346 31.1711 63.7909 30.5588 64.9286L25.8439 73.6888C25.2315 74.8265 23.8752 75.2336 22.7376 74.6213L13.9774 69.9063C12.8397 69.294 12.4325 67.9377 13.0449 66.8001L17.7598 58.0399C18.3852 56.9459 19.7853 56.5256 20.8661 57.1074Z" fill="white" />
                        <path d="M54.4837 45.966L64.5522 51.3852C65.6899 51.9975 66.097 53.3538 65.4847 54.4914L60.0656 64.56C59.4533 65.6977 58.097 66.1048 56.9593 65.4925L46.8908 60.0734C45.7531 59.461 45.3459 58.1048 45.9582 56.9671L51.3774 46.8986C51.9897 45.7609 53.3898 45.3406 54.4837 45.966Z" fill="white" />
                     </svg>
                  </div>
                  <div className="single-glass__item">
                     <svg xmlns="http://www.w3.org/2000/svg" width="72" height="68" viewBox="0 0 72 68" fill="none">
                        <path d="M67.9968 0H9.99682C8.75682 0 7.55687 0.6 6.79687 1.6L0.796865 9.6C-1.16313 12.24 0.716817 16 3.99682 16H61.9968C63.2368 16 64.4368 15.4 65.1968 14.4L71.1968 6.4C73.1568 3.76 71.2768 0 67.9968 0Z" fill="white" />
                        <path d="M3.99682 26H61.9968C63.2368 26 64.4368 26.6 65.1968 27.6L71.1968 35.6C73.1568 38.24 71.2768 42 67.9968 42H9.99682C8.75682 42 7.55687 41.4 6.79687 40.4L0.796865 32.4C-1.16313 29.76 0.716817 26 3.99682 26Z" fill="white" />
                        <path d="M67.9968 52H9.99682C8.75682 52 7.55687 52.6 6.79687 53.6L0.796865 61.6C-1.16313 64.24 0.716817 68 3.99682 68H61.9968C63.2368 68 64.4368 67.4 65.1968 66.4L71.1968 58.4C73.1568 55.76 71.2768 52 67.9968 52Z" fill="white" />
                     </svg>
                  </div>
                  <div className="single-glass__item">
                     <svg xmlns="http://www.w3.org/2000/svg" width="75" height="101" viewBox="0 0 75 101" fill="none">
                        <path d="M19.2942 31.2754L42.4805 28.3246C43.4969 28.209 44.5263 28.518 45.2682 29.1615L62.9958 44.3948C64.5524 45.7504 66.8814 44.0652 66.1012 42.1479L52.5244 9.50672C51.6069 7.26773 49.2053 6.54676 47.2064 7.91026L17.8966 27.6767C16.2322 28.8601 17.2483 31.5495 19.2942 31.2754Z" fill="white" />
                        <path d="M11.8266 56.1496L29.5969 71.3958C30.3817 72.0521 31.4111 72.3611 32.3847 72.2326L55.6139 69.2948C57.6597 69.0207 58.6758 71.71 56.9686 72.8806L27.6587 92.647C25.6598 94.0105 23.2582 93.2895 22.3408 91.0505L8.76389 58.4093C7.94078 56.4792 10.2271 54.7812 11.8266 56.1496Z" fill="white" />
                        <path d="M39.7207 39.2308L19.3562 42.7482C17.5376 43.0438 16.8553 45.3168 18.2103 46.5651L33.2704 60.7171C33.7807 61.1975 34.5095 61.4163 35.2001 61.2964L55.5645 57.779C57.3831 57.4834 58.0655 55.2104 56.7104 53.9621L41.6504 39.8101C41.0972 39.3168 40.4112 39.1109 39.7207 39.2308Z" fill="white" />
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
