'use client';
import React, { useRef } from 'react';
import './style.scss';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CodeBlock() {
   const codeBlock = useRef(null);

   useGSAP(() => {
      const ctx = gsap.context(() => {
         const block = codeBlock.current;
         const codeBlockWrapper = block.querySelector('.code-block__wrapper');
         if (!block) return;

         const anim1 = gsap.to(codeBlockWrapper, {
            opacity: 1,
            duration: .5,
            ease: 'power1.in',
            scrollTrigger: {
               trigger: codeBlockWrapper,
               start: 'top bottom-=25%',
               once: true,
            },
         });

         const texts = gsap.utils.toArray('.code-anim-block', block);
         if (!texts.length) return;

         texts.forEach((text, i) => {
            gsap.fromTo(
               text,
               { opacity: 0 },
               {
                  opacity: 1,
                  duration: 0.5,
                  ease: 'power2.inOut',
                  delay: i * 0.25, // küçük bir gecikme ile doğal geçiş
                  scrollTrigger: {
                     trigger: text,
                     start: 'top bottom-=10%',
                     once: true,
                  },
               }
            );
         });

         return () => {
            [
               anim1
            ].forEach(a => {
               a.kill();
            })
         }
      });

      return () => ctx.revert();
   }, { scope: codeBlock })

   return (
      <div ref={codeBlock} className='home-code-block__wrapper'>
         <div className="code-block-inner__wrapper">
            <div className="code-block__wrapper">
               <div className="header__wrapper">
                  <div className="top-nav__wrapper">
                     <div className="left__items">
                        <div className="options-block">
                           <div className="circle" style={{ background: '#EE6A5F' }}></div>
                           <div className="circle" style={{ background: '#F4BE50' }}></div>
                           <div className="circle" style={{ background: '#5FC454' }}></div>
                        </div>

                        <Image
                           src={'/images/home-code-block/window.svg'}
                           width={22}
                           height={16}
                           alt='Cooderz'
                           draggable={false}
                           quality={100}
                        />
                     </div>

                     <div className="right__items">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                           <rect x="0.712524" y="0.712524" width="19" height="19" rx="9.5" stroke="#5D5D5D" strokeWidth="1.425" />
                           <path d="M10.8911 5.06643C10.8911 4.76049 10.6259 4.51247 10.2989 4.51247C9.97176 4.51247 9.7066 4.76049 9.7066 5.06643L10.8911 5.06643ZM9.88006 14.7529C10.1114 14.9692 10.4864 14.9692 10.7176 14.7529L14.4867 11.2274C14.718 11.011 14.718 10.6603 14.4867 10.4439C14.2555 10.2276 13.8805 10.2276 13.6492 10.4439L10.2989 13.5777L6.94854 10.4439C6.71725 10.2276 6.34224 10.2276 6.11095 10.4439C5.87966 10.6603 5.87966 11.011 6.11095 11.2274L9.88006 14.7529ZM9.7066 5.06643L9.7066 14.3612L10.8911 14.3612L10.8911 5.06643L9.7066 5.06643Z" fill="#5D5D5D" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" fill="none">
                           <rect x="0.75" y="7.25" width="15" height="13.75" rx="1.90909" stroke="#5D5D5D" strokeWidth="1.5" />
                           <path d="M7.53572 14.8671C7.53572 15.1891 7.81484 15.4502 8.15915 15.4502C8.50346 15.4502 8.78257 15.1891 8.78257 14.8671H7.53572ZM8.59998 0.170797C8.35652 -0.0569325 7.96178 -0.0569325 7.71831 0.170797L3.75084 3.88187C3.50737 4.1096 3.50737 4.47883 3.75084 4.70656C3.9943 4.93429 4.38903 4.93429 4.6325 4.70656L8.15915 1.40783L11.6858 4.70656C11.9293 4.93429 12.324 4.93429 12.5675 4.70656C12.8109 4.47883 12.8109 4.1096 12.5675 3.88187L8.59998 0.170797ZM8.78257 14.8671V0.583139H7.53572V14.8671H8.78257Z" fill="#5D5D5D" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                           <path d="M0.75 8.04993L15.75 8.04993" stroke="#5D5D5D" strokeWidth="1.5" strokeLinecap="round" />
                           <path d="M8.25 0.75L8.25 15.75" stroke="#5D5D5D" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                           <rect x="0.75" y="0.75" width="15.3846" height="15.3846" rx="2" stroke="#5D5D5D" strokeWidth="1.5" />
                           <rect x="6.13464" y="5.36536" width="15.3846" height="15.3846" rx="2" stroke="#5D5D5D" strokeWidth="1.5" />
                        </svg>
                     </div>
                  </div>

                  <div className="top-buttons__wrapper">
                     <div className="single-top__btn">
                        <span className='font-code-500 font-white'>SYSTEM_STATUS: <p>ONLINE</p></span>
                     </div>

                     <div className="right__buttons">
                        <div className="single-top__btn">
                           <span className='font-code-500 font-white'>BUILDER MODE: <p>ACTIVE</p></span>
                        </div>

                        <div className="single-top__btn">
                           <span className='font-code-500 font-white'>DESIGN_AI: <p>READY</p></span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="text__block">
                  <span className='font-code-500 font-white'><p className='color-change'>user@cooderz</p>:~$ init_dev_mode --full_stack --creative <p className="text-anim"></p><br />
                     Initializing Cooderz full-stack development environment...<br /><br />

                     <div className='code-anim-block'><p className='color-change'>[✓]</p> Frontend_modules loaded</div><br />
                     <div className='code-anim-block'><p className='color-change'>[✓]</p> Backend_apis connected</div><br />
                     <div className='code-anim-block'><p className='color-change'>[✓]</p> Design_system integrated</div><br />
                     <div className='code-anim-block'><p className='color-change'>[✓]</p> Database linked</div><br />
                     <div className='code-anim-block'><p className='color-change'>[✓]</p> Build_pipeline optimized</div><br />
                     <div className='code-anim-block'><p className='color-change'>[✓]</p> Deployment_ready</div><br /><br />

                     <p className='color-change'>System ready. Code. Create. Cooderz.</p></span>
               </div>
            </div>
         </div>
      </div>
   )
}
