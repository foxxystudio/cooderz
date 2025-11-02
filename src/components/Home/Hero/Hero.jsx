'use client';
import React, { useRef } from 'react';
import './style.scss';
import Image from 'next/image';
import DoubleLayerButtonHoverAnim from '@/components/DoubleLayerButtonHoveAnim';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

export default function Hero() {
   const heroWrapper = useRef(null);

   useGSAP(() => {
      const ctx = gsap.context(() => {
         const hero = heroWrapper.current;
         if(!hero) return;

         const heroTitle = hero.querySelector('.text__wrapper h1');
         const heroDesc = hero.querySelector('.text__wrapper span');
         const heroBtn = hero.querySelector('.content__wrapper .btn__wrapper');
         const heroImg = hero.querySelector('.hero-image__wrapper');

         gsap.set(heroBtn, { opacity: 0, transition: 0 });
         gsap.set(heroImg, { opacity: 0 });

         const anim1 = gsap.from(heroTitle, {
            opacity: 0,
            duration: .5,
            ease: 'power2.inOut',
            stagger: 0.035
         });

         const anim2 = gsap.from(heroDesc, {
            opacity: 0,
            duration: .5,
            ease: 'power2.inOut',
            stagger: 0.015,
            delay: .5
         });

         const anim3 = gsap.to(heroBtn, {
            opacity: 1,
            duration: .75,
            delay: .75,
            ease: 'power1.in',
            onComplete: () => {
               gsap.set(heroBtn, { transition: 'all 250ms ease-in' });
            }
         });

         const anim4 = gsap.to(heroImg, {
            opacity: 1,
            duration: 1,
            ease: 'power1.in',
         });

         return () => {
            [
               anim1,
               anim2,
               anim3,
               anim4
            ].forEach(a => {
               a.kill();
            })
         }
      });

      return () => ctx.revert();
   }, { scope: heroWrapper })


   return (
      <div ref={heroWrapper} className='home-hero__wrapper'>
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
         </div>
         <div className="gradient-top"></div>
         <div className="glows-desktop">
            <Image
               src={'/images/home-hero/glows-desktop.png'}
               width={1313}
               height={281}
               alt='Cooderz'
               quality={100}
               draggable={false}
            />
         </div>

         <div className="hero-inner__wrapper">
            <div className="content__wrapper">
               <div className="text__wrapper">
                  <h1 className='font-secondary-600 font-white'>Launch better with Cooderz.</h1>
                  <span className='font-primary-400'>You focus on the vision. We’ll handle the rest.</span>
               </div>

               <DoubleLayerButtonHoverAnim
                  text={'Launch with us'}
                  font={'font-primary-500'}
                  color={'font-white'}
                  bg={'bg-blue-outline'}
                  bgHover={'bg-hover-primary'}
                  href={'https://calendly.com/yunismikayilov/intro-call'}
                  target={'_blank'}
                  icon={'arrow-right-up'}
               />
            </div>

            <div className="hero-image__wrapper">
               <div className="hero-image-layer"></div>
               <Image
                  src={'/images/home-hero/hero-img.png'}
                  width={1374}
                  height={1324}
                  alt='Cooderz'
                  quality={100}
                  draggable={false}
               />
            </div>
         </div>
      </div>
   )
}
