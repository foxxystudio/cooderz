'use client';
import React, { useRef } from 'react';
import './style.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const logos = [
   {
      src: '/images/testimonials-logos/1.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/2.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/3.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/4.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/5.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/6.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/7.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/8.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/9.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/10.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/11.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/1.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/2.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/3.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/4.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/5.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/6.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/7.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/8.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/9.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/10.png',
      width: 196,
      height: 196
   },
   {
      src: '/images/testimonials-logos/11.png',
      width: 196,
      height: 196
   },
]

export default function Testimonials() {
   const testimonialsRef = useRef(null);

   useGSAP(() => {
      const ctx = gsap.context(() => {
         const singleTestimonialItem1 = gsap.utils.toArray('.home-testimonials__wrapper .logos__wrapper .single-logo__item');

         const tl1 = horizontalLoop(singleTestimonialItem1, {
            speed: .5,
            repeat: -1,
            paused: false,
            paddingRight: 72
         });

         // Cleanup bu scope'un içinde otomatik yapılır
         return () => {
            tl1?.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
         };
      });

      return () => ctx.revert();
   }, { scope: testimonialsRef })

   return (
      <div ref={testimonialsRef} className='home-testimonials__wrapper'>
         <div className="testimonials-inner__wrapper">
            <div className="title__wrapper">
               <h2 className='font-primary-500 font-white'>A few of the projects we’ve joined forces with, building tools, launches, and results together.</h2>
            </div>

            <div className="logos__wrapper">
               {
                  logos.map((item, i) => (
                     <div className="single-logo__item" key={i}>
                        <Image
                           src={item.src}
                           width={item.width}
                           height={item.height}
                           alt='Cooderz logo'
                           draggable={false}
                           quality={100}
                           loading='lazy'
                        />
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

function horizontalLoop(items, config) {
   items = gsap.utils.toArray(items);
   config = config || {};
   let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
      length = items.length,
      startX = items[0].offsetLeft,
      times = [],
      widths = [],
      xPercents = [],
      curIndex = 0,
      pixelsPerSecond = (config.speed || 1) * 100,
      snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
      totalWidth, curX, distanceToStart, distanceToLoop, item, i;
   gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
      xPercent: (i, el) => {
         let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
         xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
         return xPercents[i];
      }
   });
   gsap.set(items, { x: 0 });
   totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
   for (i = 0; i < length; i++) {
      item = items[i];
      curX = xPercents[i] / 100 * widths[i];
      distanceToStart = item.offsetLeft + curX - startX;
      distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
      tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
         .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
         .add("label" + i, distanceToStart / pixelsPerSecond);
      times[i] = distanceToStart / pixelsPerSecond;
   }
   function toIndex(index, vars) {
      vars = vars || {};
      (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
      let newIndex = gsap.utils.wrap(0, length, index),
         time = times[newIndex];
      if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
         vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
         time += tl.duration() * (index > curIndex ? 1 : -1);
      }
      curIndex = newIndex;
      vars.overwrite = true;
      return tl.tweenTo(time, vars);
   }
   tl.next = vars => toIndex(curIndex + 1, vars);
   tl.previous = vars => toIndex(curIndex - 1, vars);
   tl.current = () => curIndex;
   tl.toIndex = (index, vars) => toIndex(index, vars);
   tl.times = times;
   tl.progress(1, true).progress(0, true); // pre-render for performance
   if (config.reversed) {
      tl.vars.onReverseComplete();
      tl.reverse();
   }
   return tl;
}