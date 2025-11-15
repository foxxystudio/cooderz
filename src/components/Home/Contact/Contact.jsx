'use client';
import React, { useRef } from 'react';
import './style.scss';
import DoubleLayerButtonHoverAnim from '@/components/DoubleLayerButtonHoveAnim';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
   const contactRef = useRef(null);

   useGSAP(() => {
      const ctx = gsap.context(() => {
         const contact = contactRef.current;
         const form = contact.querySelector('.form__wrapper');
         const titleH2 = contact.querySelector('.text__wrapper h2');
         const titleSpan = contact.querySelector('.text__wrapper span');
         const socials = gsap.utils.toArray('.single-social__item', contact);

         const anim1 = gsap.to(titleH2, {
            opacity: 1,
            duration: .5,
            ease: 'power1.in',
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

         const anim2 = gsap.to(titleSpan, {
            opacity: 1,
            duration: .5,
            ease: 'power1.in',
            delay: .25,
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

         const anim3 = gsap.to(socials, {
            opacity: 1,
            duration: .5,
            ease: 'power1.in',
            delay: .25,
            scrollTrigger: {
               trigger: socials,
               start: 'top bottom',
               once: true,
            },
            stagger: .25
         });

         const anim4 = gsap.to(form, {
            opacity: 1,
            duration: .5,
            ease: 'power1.in',
            scrollTrigger: {
               trigger: form,
               start: 'top bottom-=25%',
               once: true,
            },
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

      return () => {
         ctx.revert();
      }
   }, { scope: contactRef })

   return (
      <div ref={contactRef} className='home-contact__wrapper'>
         <div className="contact-inner__wrapper">
            <div className="content__wrapper">
               <div className="text__wrapper">
                  <h2 className='font-secondary-600 font-white'>Let’s launch together.</h2>
                  <span className='font-primary-400'>Ready to launch? Send us a message. Fill out the form or reach us on social media.</span>
               </div>

               <div className="social__wrapper">
                  <div className="single-social__item">
                     <div className="gradient__item"></div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5.98088 -0.406412H2.8091L17.4088 20.477H20.5806L5.98088 -0.406412ZM0 -1.96094H6.9701L13.0134 6.83407L20.5796 -1.96094H22.6445L13.9303 8.16852L23.4074 21.9609H16.4373L10.0553 12.6729L2.06504 21.9609H0L9.13835 11.3384L0 -1.96094Z" fill="white" />
                     </svg>
                  </div>

                  <div className="single-social__item">
                     <div className="gradient__item"></div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none">
                        <g clipPath="url(#clip0_15320_330)">
                           <path d="M6.12527 11.4228L8.71594 18.7129C8.71594 18.7129 9.03984 19.395 9.38667 19.395C9.7335 19.395 14.8921 13.939 14.8921 13.939L20.6286 2.67432L6.21771 9.54096L6.12527 11.4228Z" fill="#C8DAEA" />
                           <path d="M9.56029 13.2925L9.06297 18.666C9.06297 18.666 8.8548 20.3125 10.4739 18.666C12.0931 17.0195 13.6429 15.7498 13.6429 15.7498" fill="#A9C6D8" />
                           <path d="M6.17205 11.6828L0.842963 9.91757C0.842963 9.91757 0.206077 9.65487 0.411154 9.05917C0.453371 8.93633 0.538531 8.83181 0.793285 8.65217C1.97407 7.81542 22.6486 0.260571 22.6486 0.260571C22.6486 0.260571 23.2324 0.060586 23.5767 0.193601C23.6618 0.220405 23.7385 0.269729 23.7987 0.336527C23.859 0.403325 23.9007 0.485199 23.9197 0.573776C23.9569 0.730225 23.9724 0.891183 23.9659 1.052C23.9643 1.19112 23.9477 1.32007 23.9351 1.52227C23.8092 3.5878 20.041 19.0035 20.041 19.0035C20.041 19.0035 19.8156 19.9055 19.0078 19.9364C18.8093 19.943 18.6116 19.9088 18.4263 19.8359C18.2411 19.7631 18.0722 19.653 17.9297 19.5124C16.3446 18.1262 10.8659 14.3829 9.65527 13.5597C9.62796 13.5407 9.60496 13.5161 9.58783 13.4874C9.57069 13.4587 9.5598 13.4265 9.55592 13.3932C9.53899 13.3064 9.6318 13.1989 9.6318 13.1989C9.6318 13.1989 19.1716 4.57792 19.4255 3.6729C19.4451 3.60278 19.3709 3.56819 19.2711 3.5989C18.6375 3.83588 7.65363 10.8879 6.44137 11.6662C6.3541 11.693 6.26187 11.6987 6.17205 11.6828Z" fill="white" />
                        </g>
                        <defs>
                           <clipPath id="clip0_15320_330">
                              <rect width="24" height="20" fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                  </div>
               </div>
            </div>

            <div className="form__wrapper">
               <div className="form-inner__wrapper">
                  <div className="single-form__field">
                     <div className="field__title">
                        <label htmlFor="name" className='font-primary-500'>Name</label>
                     </div>
                     <div className="field-input__wrapper">
                        <input type="text" id='name' placeholder='John Smith' className='font-primary-500' />
                     </div>
                  </div>
                  <div className="single-form__field">
                     <div className="field__title">
                        <label htmlFor="email" className='font-primary-500'>E-mail</label>
                     </div>
                     <div className="field-input__wrapper">
                        <input type="text" id='email' placeholder='john@gmail.com' className='font-primary-500' />
                     </div>
                  </div>
                  <div className="single-form__field">
                     <div className="field__title">
                        <label htmlFor="message" className='font-primary-500'>Message</label>
                     </div>
                     <div className="field-input__wrapper">
                        <input type="text" id='message' placeholder='Write your message...' className='font-primary-500' />
                     </div>
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
            </div>
         </div>
      </div>
   )
}
