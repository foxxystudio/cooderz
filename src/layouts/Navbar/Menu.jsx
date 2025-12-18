'use client';
import React, { useRef } from 'react';
import DoubleLayerButtonHoverAnim from '@/components/DoubleLayerButtonHoveAnim';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLenisStore } from '@/stores/lenisStore';

const navItems = [
   {
      title: 'Partners',
      target: '.home-testimonials__wrapper'
   },
   {
      title: 'Services',
      target: '.home-what-we-offer__wrapper'
   },
   {
      title: 'Contact',
      target: '.home-contact__wrapper'
   }
]

export default function Menu({ menuIsActive, setMenuIsActive }) {
   const menuRef = useRef(null);
   const lenis = useLenisStore((state) => state.lenis);

   useGSAP(() => {
      const menuWrapper = menuRef.current;

      if (menuIsActive) {
         gsap.to(menuWrapper, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: .5,
            ease: 'hop'
         });

         if (lenis) {
            lenis.stop();
         }
      } else {
         gsap.to(menuWrapper, {
            clipPath: 'polygon(0 0, 100% 0, 100% 0%, 0 0%)',
            duration: .5,
            ease: 'hop'
         });
         if (lenis) {
            lenis.start();
         }
      };

   }, { scope: menuRef, dependencies: [menuIsActive] });

   const linkClickHandler = (target) => {
      setMenuIsActive(false);
      if (lenis) {
         setTimeout(() => {
            lenis.scrollTo(target, { duration: 1, easing: (t) => 1 - Math.pow(1 - t, 3) });
         }, [300]);
      }
   };

   return (
      <div ref={menuRef} className='menu__wrapper'>
         <div className="menu-inner__wrapper">
            <div className="links__wrapper">
               {
                  navItems.map((item, i) => (
                     <div className="single-link__item" onClick={() => linkClickHandler(item.target)} key={i}>
                        <span className='font-primary-500 font-white'>{item.title}</span>
                     </div>
                  ))
               }
            </div>

            <DoubleLayerButtonHoverAnim
               text={'Get started'}
               font={'font-primary-500'}
               color={'font-white'}
               bg={'bg-blue-outline'}
               bgHover={'bg-hover-primary'}
               href={'https://google.com/'}
               target={'_blank'}
               icon={'arrow-right-up'}
            />
         </div>
      </div>
   )
}
