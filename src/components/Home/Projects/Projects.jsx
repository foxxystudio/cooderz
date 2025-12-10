'use client';
import React, { useRef } from 'react';
import './style.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
   const projectsWrapper = useRef(null);

   useGSAP(() => {
      const ctx = gsap.context(() => {
         const mainWrapper = projectsWrapper.current;
         const titleSpan = mainWrapper.querySelector('.title__wrapper span');
         const titleH2 = mainWrapper.querySelector('.title__wrapper h2');
         if (!mainWrapper) return;

         const anim1 = gsap.to(titleSpan, {
            opacity: 1,
            duration: .5,
            ease: 'power1.in',
            scrollTrigger: {
               trigger: titleSpan,
               start: 'top bottom',
               once: true,
            },
            onComplete: () => {
               gsap.to(titleSpan, {
                  filter: 'blur(0px)',
                  ease: 'power1.in',
                  duration: .5
               });
            }
         });

         const anim2 = gsap.to(titleH2, {
            opacity: 1,
            duration: .5,
            ease: 'power1.in',
            delay: .25,
            scrollTrigger: {
               trigger: titleH2,
               start: 'top bottom',
               once: true,
            },
            onComplete: () => {
               gsap.to(titleH2, {
                  filter: 'blur(0px)',
                  ease: 'power1.in',
                  duration: .5
               });
            }
         });

         const cards = mainWrapper.querySelectorAll('.cards__wrapper .single-card__item');
         if (!cards.length) return;

         cards.forEach((card, i) => {
            const cardTitle = card.querySelectorAll('.card-content__wrapper h5');
            const cardDesc = card.querySelectorAll('.card-content__wrapper span');

            const anim3 = gsap.to(card, {
               opacity: 1,
               duration: .5,
               ease: 'power1.in',
               scrollTrigger: {
                  trigger: card,
                  start: 'top bottom-=25%',
                  once: true,
               },
               stagger: 0.05
            });

            const anim4 = gsap.to(cardTitle, {
               opacity: 1,
               duration: .5,
               ease: 'power1.in',
               scrollTrigger: {
                  trigger: cardTitle,
                  start: 'top bottom',
                  once: true,
               },
               onComplete: () => {
                  gsap.to(cardTitle, {
                     filter: 'blur(0px)',
                     ease: 'power1.in',
                     duration: .5
                  });
               }
            });

            const anim5 = gsap.to(cardDesc, {
               opacity: .5,
               duration: .5,
               ease: 'power1.in',
               delay: .25,
               scrollTrigger: {
                  trigger: cardDesc,
                  start: 'top bottom',
                  once: true,
               },
               onComplete: () => {
                  gsap.to(cardDesc, {
                     filter: 'blur(0px)',
                     ease: 'power1.in',
                     duration: .5
                  });
               }
            });

            return () => {
               [
                  anim3,
                  anim4,
                  anim5
               ].forEach(a => {
                  a.kill();
               })
            }
         });

         return () => {
            [
               anim1,
               anim2
            ].forEach(a => {
               a.kill();
            })
         }
      });

      return () => ctx.revert();
   }, { scope: projectsWrapper });

   const handleMouseMove = e => {
      const card = e.currentTarget; // <-- her zaman single-card__layer
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
   };

   return (
      <div ref={projectsWrapper} className='home-projects__wrapper'>
         <div className="projects-inner__wrapper">
            <div className="title__wrapper">
               <span className='font-primary-400'>CASE STUDIES</span>
               <h2 className='font-secondary-600 font-white'>What we have built</h2>
            </div>

            <div className="cards__wrapper">
               <div className="single-card__item" onMouseMove={handleMouseMove}>
                  <div className="card-image__wrapper">
                     <Image
                        src={'/images/case-studies/2.png'}
                        width={143}
                        height={142}
                        alt='Cooderz'
                        quality={100}
                        draggable={false}
                     />
                  </div>
                  <div className="card-content__wrapper">
                     <h5 className='font-secondary-600 font-white'>Ponke</h5>
                     <span className='font-primary-400'>SOL | 596M ATH</span>
                  </div>
               </div>

               <div className="single-card__item" onMouseMove={handleMouseMove}>
                  <div className="card-image__wrapper">
                     <Image
                        src={'/images/case-studies/1.png'}
                        width={129}
                        height={161}
                        alt='Cooderz'
                        quality={100}
                        draggable={false}
                     />
                  </div>
                  <div className="card-content__wrapper">
                     <h5 className='font-secondary-600 font-white'>Neiro</h5>
                     <span className='font-primary-400'>ETH | 289M ATH</span>
                  </div>
               </div>

               <div className="single-card__item" onMouseMove={handleMouseMove}>
                  <div className="card-image__wrapper">
                     <Image
                        src={'/images/case-studies/3.png'}
                        width={149}
                        height={116}
                        alt='Cooderz'
                        quality={100}
                        draggable={false}
                     />
                  </div>
                  <div className="card-content__wrapper">
                     <h5 className='font-secondary-600 font-white'>Ovpp</h5>
                     <span className='font-primary-400'>ETH | 226M ATH</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
