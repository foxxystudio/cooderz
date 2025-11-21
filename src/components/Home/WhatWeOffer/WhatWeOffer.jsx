'use client';
import React, { useRef, useEffect, useState } from 'react';
import './style.scss';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ServiceModal from '@/layouts/ServiceModal/ServiceModal';
import { useLenisStore } from '@/stores/lenisStore';

const cards1 = [
   {
      title: 'Smart Contract Engineering',
      desc: 'Secure, scalable, and audit-ready smart contract builds. From standard tokens to custom mechanics, we write and deploy contracts that just work.',
      img: '/images/what-we-offer/1.png',
      width: 1456,
      height: 640,
      target: '.single-service__block-1'
   },
   {
      title: 'Token Launch Infrastructure',
      desc: 'Launch faster with fully-automated, contract-powered token flows. From bonding curves to affiliate systems we help you deploy and scale token ecosystems.',
      img: '/images/what-we-offer/2.png',
      width: 1000,
      height: 640,
      target: '.single-service__block-1'
   },
];

const cards2 = [
   {
      title: 'Post-Launch Support & Growth Engineering',
      desc: 'Keep your project growing long after launch with upgrades, automation, and real-time support. From contract maintenance to new feature rollouts, we make sure your project stays secure, scalable, and relevant.',
      img: '/images/what-we-offer/3.png',
      width: 1000,
      height: 640,
      target: '.single-service__block-2'
   },
   {
      title: 'Protocol & DApp Development',
      desc: 'End-to-end dApp and protocol builds for real users and real demand. We ship full-stack Web3 apps with on-chain logic, wallet integration, and scalable backends.',
      img: '/images/what-we-offer/4.png',
      width: 1000,
      height: 640,
      target: '.single-service__block-2'
   },
   {
      title: 'Custom Tools & Automations',
      desc: 'Need something specific for your token? We build bots, scripts, and dapps that automate and simplify your workflow.',
      img: '/images/what-we-offer/5.png',
      width: 1000,
      height: 640,
      target: '.single-service__block-2'
   }
];

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeOffer() {
   const whatWeOfferWrapper = useRef(null);
   const serviceModal = useRef(null);
   // const [serviceModalIsActive, setServiceModalIsActive] = useState(false);
   const [serviceModal1Data, setServiceModal1Data] = useState(null);
   const [serviceModal2Data, setServiceModal2Data] = useState(null);
   const [serviceModal1IsActive, setServiceModal1IsActive] = useState(false);
   const [serviceModal2IsActive, setServiceModal2IsActive] = useState(false);
   const lenis = useLenisStore((state) => state.lenis);

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
            const cardTitle = card.querySelectorAll('.card-content__wrapper h5');
            const cardDesc = card.querySelectorAll('.card-content__wrapper span');
            const readMore = mainWrapper.querySelector('.card-content__wrapper .read-more');

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

            const anim6 = gsap.to(readMore, {
               opacity: 1,
               duration: .5,
               ease: 'power1.in',
               delay: .5,
               scrollTrigger: {
                  trigger: readMore,
                  start: 'top bottom',
                  once: true,
               },
               onComplete: () => {
                  gsap.to(readMore, {
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
                  anim5,
                  anim6
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
   }, { scope: whatWeOfferWrapper });

   const handleMouseMove = e => {
      const card = e.currentTarget; // <-- her zaman single-card__layer
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
   };

   ///Service Modal Open
   // useGSAP(() => {
   //    const modal = serviceModal.current;
   //    const gradient = modal.querySelector('.gradient__layer');
   //    const modalInner = modal.querySelector('.service-modal__wrapper');
   //    const closeBtn = modal.querySelector('.close__button');

   //    if (!modal) return;

   //    if (serviceModalIsActive) {
   //       gsap.to(modal, {
   //          opacity: 1,
   //          pointerEvents: 'auto',
   //          duration: .5,
   //          ease: 'power1.out'
   //       });
   //       if (lenis) {
   //          lenis.stop();
   //       }
   //    } else {
   //       gsap.to(modal, {
   //          opacity: 0,
   //          pointerEvents: 'none',
   //          duration: .5,
   //          ease: 'power1.out'
   //       });
   //       if (lenis) {
   //          lenis.start();
   //       }
   //    }
   // }, { scope: serviceModal, dependencies: [serviceModalIsActive] });

   useEffect(() => {
      const modal1 = document.querySelectorAll('.home-what-we-offer__wrapper .single-service__block')[0];
      const modal2 = document.querySelectorAll('.home-what-we-offer__wrapper .single-service__block')[1];
      console.log(modal1);
      if (!modal1 || !modal2) return;

      if (serviceModal1IsActive) {
         gsap.to(modal1, {
            width: '100%',
            height: '100%',
            overflow: 'auto',
            duration: .5,
            ease: 'power1.out'
         });
      } else {
         gsap.to(modal1, {
            width: 0,
            height: 0,
            overflow: 'hidden',
            duration: .5,
            ease: 'power1.out'
         });
      }

      if (serviceModal2IsActive) {
         gsap.to(modal2, {
            width: '100%',
            height: '100%',
            overflow: 'auto',
            duration: .5,
            ease: 'power1.out'
         });
      } else {
         gsap.to(modal2, {
            width: 0,
            height: 0,
            overflow: 'hidden',
            duration: .5,
            ease: 'power1.out'
         });
      }
   }, [serviceModal1IsActive, serviceModal2IsActive]);

   const modalClickHandler = (item, index) => {
      if (index === 0) {
         setServiceModal1IsActive(true);
         setServiceModal1Data(item);
      } else {
         setServiceModal2IsActive(true);
         setServiceModal2Data(item);
      }

      if (lenis) {
         lenis.scrollTo(item.target, { duration: 1, offset: -200, easing: (t) => 1 - Math.pow(1 - t, 3) });
      }
   };

   return (
      <>
         {/* Modal */}
         {/* <ServiceModal ref={serviceModal} data={serviceModalData} isActive={serviceModalIsActive} setIsActive={setServiceModalIsActive} /> */}

         <div ref={whatWeOfferWrapper} className='home-what-we-offer__wrapper'>
            <div className="what-we-offer-inner__wrapper">
               <div className="title__wrapper">
                  <span className='font-primary-400'>OUR SERVICES</span>
                  <h2 className='font-secondary-600 font-white'>What We Offer</h2>
               </div>

               <div className="cards__wrapper">
                  <div className="cards-row__wrapper">
                     <div className="single-service__block single-service__block-1">
                        <div className="close__button" onClick={() => setServiceModal1IsActive(false)}>
                           <div className="line line-1"></div>
                           <div className="line line-2"></div>
                        </div>
                        <div className="content__wrapper disable-smooth-scroll" data-lenis-prevent>
                           <h2 className='font-primary-600 font-white'>{serviceModal1Data?.title}</h2>
                           <p className='font-primary-400'>
                              Need something specific for your token? We build bots, scripts, and dapps that automate and simplify your workflow.<br /> <br />

                              From idea to on-chain logic built clean, secure, and optimized.<br /><br />

                              We build smart contracts that form the backbone of your Web3 project. Whether you’re launching a token, NFT collection, or a complex protocol, we write contracts aligned with your roadmap. <br /><br />

                              What we build:<br /><br />

                              ✅ ERC-20, ERC-721, ERC-1155, SPL, and more<br />
                              ✅ Minting contracts with access control and metadata logic<br />
                              ✅ Bonding curve or liquidity-backed supply contracts<br />
                              ✅ Proxy and upgradeable contracts with modular architecture<br />
                              ✅ Tokenomics logic for vesting, burning, rebasing, or rewards<br /><br />

                              What you get:<br /><br />

                              Verified source code on Etherscan or explorer<br />
                              Audit-friendly code with full test coverage<br />
                              Deployment scripts and transfer of ownership/keys<br /><br />

                              Whether you're launching a simple meme coin or a fully-fledged protocol, we build the contracts that make it possible.
                           </p>
                        </div>
                     </div>

                     {
                        cards1.map((item, i) => (
                           <div onMouseMove={handleMouseMove} className="single-card__layer" key={i}>
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
                                    <div className="text__wrapper">
                                       <h5 className='font-secondary-600 font-white'>{item.title}</h5>
                                       <span className='font-primary-400'>{item.desc}</span>
                                    </div>
                                    <span className='read-more font-primary-500 font-white' onClick={() => modalClickHandler(item, 0)}>Read More</span>
                                 </div>
                              </div>
                           </div>
                        ))
                     }
                  </div>

                  <div className="cards-row__wrapper">
                     <div className="single-service__block single-service__block-2">
                        <div className="close__button" onClick={() => setServiceModal2IsActive(false)}>
                           <div className="line line-1"></div>
                           <div className="line line-2"></div>
                        </div>
                        <div className="content__wrapper disable-smooth-scroll" data-lenis-prevent>
                           <h2 className='font-primary-600 font-white'>{serviceModal2Data?.title}</h2>
                           <p className='font-primary-400'>
                              Need something specific for your token? We build bots, scripts, and dapps that automate and simplify your workflow.<br /> <br />

                              From idea to on-chain logic built clean, secure, and optimized.<br /><br />

                              We build smart contracts that form the backbone of your Web3 project. Whether you’re launching a token, NFT collection, or a complex protocol, we write contracts aligned with your roadmap. <br /><br />

                              What we build:<br /><br />
                              ✅ ERC-20, ERC-721, ERC-1155, SPL, and more<br />
                              ✅ Minting contracts with access control and metadata logic<br />
                              ✅ Bonding curve or liquidity-backed supply contracts<br />
                              ✅ Proxy and upgradeable contracts with modular architecture<br />
                              ✅ Tokenomics logic for vesting, burning, rebasing, or rewards<br /><br />

                              What you get:<br /><br />

                              Verified source code on Etherscan or explorer<br />
                              Audit-friendly code with full test coverage<br />
                              Deployment scripts and transfer of ownership/keys<br /><br />

                              Whether you're launching a simple meme coin or a fully-fledged protocol, we build the contracts that make it possible.
                           </p>
                        </div>
                     </div>
                     {
                        cards2.map((item, i) => (
                           <div onMouseMove={handleMouseMove} className="single-card__layer" key={i}>
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
                                    <div className="text__wrapper">
                                       <h5 className='font-secondary-600 font-white'>{item.title}</h5>
                                       <span className='font-primary-400'>{item.desc}</span>
                                    </div>
                                    <span className='read-more font-primary-500 font-white' onClick={() => modalClickHandler(item, 1)}>Read More</span>
                                 </div>
                              </div>
                           </div>
                        ))
                     }
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
