'use client';
import React from 'react';
import './style.scss';
import Image from 'next/image';

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

export default function Projects() {

   const handleMouseMove = e => {
      const card = e.currentTarget; // <-- her zaman single-card__layer
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
   };

   return (
      <div className='home-projects__wrapper'>
         <div className="projects-inner__wrapper">
            <div className="title__wrapper">
               <span className='font-primary-400'>OUR WORKS</span>
               <h2 className='font-secondary-600 font-white'>What We Do</h2>
            </div>

            <div className="cards__wrapper">
               <div className="cards-row__wrapper">
                  {
                     cards1.map((item, i) => (
                        <div className="single-card__layer" key={i}>
                           <div className="single-card__item">
                              <div onMouseMove={handleMouseMove} className="card-image__wrapper">
                                 <div className="ligth-effect__wrapper">
                                    <Image
                                       src={'/images/what-we-offer/light-effect.svg'}
                                       width={1930}
                                       height={1425}
                                       alt='Cooderz'
                                       draggable={false}
                                    />
                                 </div>

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
                           <div className="single-card__item">
                              <div onMouseMove={handleMouseMove} className="card-image__wrapper">
                                 <div className="ligth-effect__wrapper">
                                    <Image
                                       src={'/images/what-we-offer/light-effect.svg'}
                                       width={1930}
                                       height={1425}
                                       alt='Cooderz'
                                       draggable={false}
                                    />
                                 </div>

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
