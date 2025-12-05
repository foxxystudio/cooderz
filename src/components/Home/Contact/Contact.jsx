'use client';
import React, { useRef, useState } from 'react';
import './style.scss';
import DoubleLayerButtonHoverAnim from '@/components/DoubleLayerButtonHoveAnim';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
   const contactRef = useRef(null);
   const formRef = useRef(null);
   const [contactData, setContactData] = useState({
      name: '',
      email: '',
      message: ''
   });
   const [submitDisabled, setSubmitDisabled] = useState(true);
   const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);

   /// GSAP ANIMATIONS ///
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
   }, { scope: contactRef });

   /// Form Handle Change
   const formHandleChange = (e) => {
      const { name, value } = e.target;

      console.log(contactData);

      const updatedData = {
         ...contactData,
         [name]: value,
      };

      setContactData(updatedData);

      // inputların doluluğunu kontrol et
      const requiredFilled =
         updatedData.name.trim() !== "" &&
         updatedData.email.trim() !== "";
         setSubmitDisabled(requiredFilled ? false : true);
   }

   /// Form Handle Submit
   const formHandleSubmit = async (e) => {
      e.preventDefault();
      if (!formRef.current) return;

      // native HTML validation kontrolü
      if (!formRef.current.checkValidity()) {
         formRef.current.reportValidity(); // kullanıcıya hata gösterir
         return;
      }

      try {
         setSubmitDisabled(true);
         const response = await fetch("/api/send-mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactData),
         });

         const result = await response.json();

         if (result.success) {
            formRef.current.reset();
            setContactData({
               name: '',
               email: '',
               message: '',
            });
            setSubmitDisabled(true);
            setFormSubmitSuccess(true);
         }
      } catch (err) {
         setSubmitDisabled(false);
         console.error(err);
      }
   };

   /// Reload Page Btn func After Success
   const pageReloadAfterSuccess = (e) => {
      e.preventDefault();
      window.location.reload();
   }

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
                     <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 16 16" height="20" width="20">
                        <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" strokeWidth="1"></path>
                     </svg>
                  </div>

                  <div className="single-social__item">
                     <div className="gradient__item"></div>
                     <svg xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 27 22" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M1.79176 9.29865C8.78825 6.25039 13.4537 4.2408 15.788 3.26986C22.4531 0.497636 23.838 0.0160711 24.7407 0.000169546C24.9392 -0.00332783 25.3832 0.0458755 25.6707 0.279201C25.9135 0.476217 25.9803 0.742358 26.0123 0.92915C26.0443 1.11594 26.0841 1.54146 26.0524 1.87395C25.6912 5.66891 24.1284 14.8783 23.3333 19.1287C22.9969 20.9272 22.3345 21.5303 21.6932 21.5893C20.2994 21.7175 19.2411 20.6682 17.8912 19.7833C15.7789 18.3987 14.5856 17.5367 12.5352 16.1856C10.1657 14.6241 11.7017 13.7659 13.0521 12.3633C13.4055 11.9962 19.5463 6.4107 19.6652 5.90401C19.68 5.84064 19.6938 5.60442 19.5535 5.47969C19.4132 5.35496 19.2061 5.39762 19.0566 5.43154C18.8447 5.47962 15.4703 7.71 8.93326 12.1227C7.97543 12.7804 7.10787 13.1009 6.33055 13.0841C5.47363 13.0656 3.82525 12.5995 2.59985 12.2012C1.09685 11.7127 -0.0977048 11.4543 0.00631425 10.6246C0.0604938 10.1924 0.655644 9.75044 1.79176 9.29865Z" fill="white" />
                     </svg>
                  </div>
               </div>
            </div>

            <div className="form__wrapper">
               <form ref={formRef} onSubmit={formHandleSubmit}>
                  <div className="form-inner__wrapper">
                     <div className="single-form__field">
                        <div className="field__title">
                           <label htmlFor="name" className='font-primary-500'>Name</label>
                        </div>
                        <div className="field-input__wrapper">
                           <input
                              type="text"
                              id='name'
                              name='name'
                              value={contactData.name}
                              placeholder='John Smith'
                              className='font-primary-500'
                              autoComplete='off'
                              onChange={formHandleChange}
                              minLength={3}
                              maxLength={50}
                           />
                        </div>
                     </div>
                     <div className="single-form__field">
                        <div className="field__title">
                           <label htmlFor="email" className='font-primary-500'>E-mail</label>
                        </div>
                        <div className="field-input__wrapper">
                           <input
                              type="email"
                              id='email'
                              name='email'
                              value={contactData.email}
                              placeholder='john@gmail.com'
                              autoComplete='off'
                              className='font-primary-500'
                              onChange={formHandleChange}
                              maxLength={72}
                           />
                        </div>
                     </div>
                     <div className="single-form__field">
                        <div className="field__title">
                           <label htmlFor="message" className='font-primary-500'>Message</label>
                        </div>
                        <div className="field-input__wrapper">
                           <input
                              value={contactData.message}
                              name="message"
                              id="message"
                              type='text'
                              onChange={formHandleChange}
                              placeholder='Write your message...'
                              className='font-primary-500'
                              minLength={30}
                              maxLength={500}
                           />
                        </div>
                     </div>
                     <DoubleLayerButtonHoverAnim
                        text={'Book a Consultation'}
                        font={'font-primary-500'}
                        color={submitDisabled ? 'font-disabled' : 'font-white'}
                        bg={submitDisabled ? 'bg-disabled' : 'bg-blue-outline'}
                        bgHover={submitDisabled ? '' : 'bg-hover-primary'}
                        onClick={formHandleSubmit}
                        icon={'arrow-right-up'}
                     />
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}
