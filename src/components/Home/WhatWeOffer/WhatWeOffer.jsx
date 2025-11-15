'use client';
import React, { useRef } from 'react';
import './style.scss';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const cards1 = [
   {
      title: 'Token Creation & Contract Setup',
      desc: 'From token logic to smart contracts, we handle the tech part so you can focus on the launch. Everything built to run smoothly from day one.',
      img: '/images/what-we-offer/1.png',
      width: 1456,
      height: 640
   },
   {
      title: 'Launch Strategy & Deployment',
      desc: 'We help you shape your launch plan and take care of everything technical — contracts, setup, and deployment.',
      img: '/images/what-we-offer/2.png',
      width: 1000,
      height: 640
   },
];

const cards2 = [
   {
      title: 'Post-Launch Support & Growth Engineering',
      desc: 'We monitor, optimize, and upgrade. Think of us as your long-term tech team, keeping everything running.',
      img: '/images/what-we-offer/3.png',
      width: 1000,
      height: 640
   },
   {
      title: 'Custom Tools & Automations',
      desc: 'Need something specific for your token? We build bots, scripts, and dapps that automate and simplify your workflow.',
      img: '/images/what-we-offer/4.png',
      width: 1456,
      height: 640
   }
];

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeOffer() {
   const whatWeOfferWrapper = useRef(null);

   useGSAP(() => {
      const ctx = gsap.context(() => {
         const mainWrapper = whatWeOfferWrapper.current;
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

         const cards = mainWrapper.querySelectorAll('.cards__wrapper .single-card__layer');
         if (!cards.length) return;

         cards.forEach((card, i) => {
            console.log(card);
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
               opacity: 1,
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
   }, { scope: whatWeOfferWrapper })

   return (
      <div ref={whatWeOfferWrapper} className='home-what-we-offer__wrapper'>
         <div className="what-we-offer-inner__section">
            <div className="title__wrapper">
               <span className='font-primary-400'>OUR SERVICES</span>
               <h2 className='font-secondary-600 font-white'>What We Offer</h2>
            </div>

            <div className="cards__wrapper">
               <div className="cards-row__wrapper">
                  {
                     cards1.map((item, i) => (
                        <div className="single-card__layer" key={i}>
                           <div className="ligth-effect__wrapper">
                              <Image
                                 src={'/images/what-we-offer/light-effect.svg'}
                                 width={1930}
                                 height={1425}
                                 alt='Cooderz'
                                 draggable={false}
                              />
                           </div>

                           <div className="single-card__item">
                              <div className="card-image__wrapper">
                                 <Image
                                    src={item.img}
                                    width={item.width}
                                    height={item.height}
                                    alt='Cooderz'
                                    draggable={false}
                                    quality={100}
                                    loading='lazy'
                                 />
                              </div>

                              <div className="card-content__wrapper">
                                 <h5 className='font-secondary-600 font-white'>{item.title}</h5>
                                 <span className='font-primary-400'>{item.desc}</span>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
               <div className="cards-row__wrapper">
                  {
                     cards2.map((item, i) => (
                        <div className="single-card__layer" key={i}>
                           <div className="ligth-effect__wrapper">
                              <Image
                                 src={'/images/what-we-offer/light-effect.svg'}
                                 width={1930}
                                 height={1425}
                                 alt='Cooderz'
                                 draggable={false}
                              />
                           </div>

                           <div className="single-card__item">
                              <div className="card-image__wrapper">
                                 <Image
                                    src={item.img}
                                    width={item.width}
                                    height={item.height}
                                    alt='Cooderz'
                                    draggable={false}
                                    quality={100}
                                    loading='lazy'
                                 />
                              </div>

                              <div className="card-content__wrapper">
                                 <h5 className='font-secondary-600 font-white'>{item.title}</h5>
                                 <span className='font-primary-400'>{item.desc}</span>
                              </div>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </div>
         </div>
      </div>
   )
}
