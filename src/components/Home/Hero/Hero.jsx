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
         if (!hero) return;

         const heroTitle = hero.querySelector('.text__wrapper h1');
         const heroDesc = hero.querySelector('.text__wrapper span');
         const heroBtn = hero.querySelector('.content__wrapper .btn__wrapper');
         const heroImg = hero.querySelector('.hero-image__wrapper');
         const heroGradient = hero.querySelector('.gradient-top');
         const heroGlows = hero.querySelector('.glows-desktop');
         const heroLines = hero.querySelector('.hero-bg__wrapper');

         gsap.set(heroBtn, { opacity: 0, transition: 0 });
         gsap.set(heroImg, { opacity: 0 });

         const anim1 = gsap.to(heroTitle, {
            opacity: 1,
            duration: .5,
            delay: 1,
            ease: 'power1.in',
            onComplete: (item) => {
               gsap.to(heroTitle, {
                  filter: 'blur(0px)',
                  ease: 'power1.in',
                  duration: .5
               });
            }
         });

         const anim2 = gsap.to(heroDesc, {
            opacity: 1,
            delay: 1.25,
            duration: .5,
            ease: 'power1.in',
            onComplete: (item) => {
               gsap.to(heroDesc, {
                  filter: 'blur(0px)',
                  ease: 'power1.in',
                  duration: .5
               });
            }
         });

         const anim3 = gsap.to(heroBtn, {
            opacity: 1,
            duration: .75,
            delay: 2,
            ease: 'power1.in',
            onComplete: () => {
               gsap.set(heroBtn, { transition: 'all 250ms ease-in' });
            }
         });

         const anim4 = gsap.to(heroImg, {
            opacity: 1,
            duration: .75,
            delay: .5,
            ease: 'power1.in',
         });

         const anim5 = gsap.to(heroGradient, {
            opacity: 1,
            duration: .75,
            delay: .25,
            ease: 'hop'
         });

         const anim6 = gsap.to(heroGlows, {
            opacity: 1,
            duration: .75,
            ease: 'hop'
         });

         const anim7 = gsap.to(heroLines, {
            opacity: 1,
            duration: .75,
            ease: 'hop'
         });

         return () => {
            [
               anim1,
               anim2,
               anim3,
               anim4,
               anim5,
               anim6,
               anim7
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
                  <h1 className='font-secondary-600 font-white'>Launch your token the right way.</h1>
                  <span className='font-primary-400'>Full-stack token engineering: contracts, deployment, utilities, and dashboards.</span>
               </div>

               <DoubleLayerButtonHoverAnim
                  text={'Request a Launch'}
                  font={'font-primary-500'}
                  color={'font-white'}
                  bg={'bg-blue-outline'}
                  bgHover={'bg-hover-primary'}
                  href={'https://t.me/cooderzsupport'}
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
