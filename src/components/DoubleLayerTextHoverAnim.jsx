'use client'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(SplitText);

export default function DoubleLayerTextHoverAnim({
   item,
   text,
   font,
   color,
   outerIcon,
   triggerRef
}) {
   const btnRef = useRef(null);
   const tl = useRef(null);

   useGSAP(() => {
      const mm = gsap.matchMedia();
      const ctx = gsap.context(() => {
         // sadece 1024px ve yukarısı için aktif
         mm.add("(min-width: 1024px)", () => {
            const btn = btnRef.current;
            const triggers = [btn];
            if (triggerRef?.current) triggers.push(triggerRef.current);

            const topText = btn.querySelector(".top");
            const bottomText = btn.querySelector(".bottom");

            // Eski SplitText instance’larını temizle (önemli!)
            topText.innerHTML = text;
            bottomText.innerHTML = text;

            const topSplit = new SplitText(topText, { type: "lines, chars" });
            const bottomSplit = new SplitText(bottomText, { type: "lines, chars" });

            // Satırları relative, karakterleri absolute hizalayarak düzgün animasyon
            gsap.set([topSplit.lines, bottomSplit.lines], { overflow: "hidden", position: "relative" });
            gsap.set([topSplit.chars, bottomSplit.chars], { display: "inline-block" });

            // Her satır kendi içinde animasyon yapacak şekilde ayarlama
            bottomSplit.lines.forEach((line) => {
               gsap.set(line.querySelectorAll("div"), { yPercent: 100 });
            });

            tl.current = gsap.timeline({ paused: true });

            topSplit.lines.forEach((line, i) => {
               const topChars = line.querySelectorAll("div");
               const bottomChars = bottomSplit.lines[i]?.querySelectorAll("div");

               tl.current.to(
                  topChars,
                  {
                     yPercent: -100,
                     duration: 0.4,
                     stagger: { each: 0.15 / topChars.length },
                     ease: "power2.inOut"
                  },
                  0
               );

               if (bottomChars) {
                  tl.current.to(
                     bottomChars,
                     {
                        yPercent: 0,
                        duration: 0.4,
                        stagger: { each: 0.15 / bottomChars.length },
                        ease: "power2.inOut"
                     },
                     0
                  );
               }
            });

            const play = () => tl.current.play(0);
            const reverse = () => tl.current.reverse();

            triggers.forEach((el) => {
               el.addEventListener("mouseenter", play);
               el.addEventListener("mouseleave", reverse);
            });

            return () => {
               triggers.forEach((el) => {
                  el.removeEventListener("mouseenter", play);
                  el.removeEventListener("mouseleave", reverse);
               });
               // SplitText cleanup
               topSplit.revert();
               bottomSplit.revert();
            };
         });
      });

      return () => {
         ctx.revert();
         mm.revert();
      }
   }, { scope: btnRef, dependencies: [item, text, font, color, outerIcon, triggerRef] });

   return (
      <div ref={btnRef} className="hover-text-anim__wrapper">
         <div className="hover-text-anim__layer">
            <span className={`top ${font} ${color}`}>{text}</span>
            <span className={`bottom ${font} ${color}`}>{text}</span>
         </div>

         {item?.icon && (
            <div className="arrow-icon__layer">
               <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.5148 0.155061C10.7164 0.361809 10.7164 0.697014 10.5148 0.903763L5.69764 5.84494C5.49608 6.05169 5.16929 6.05169 4.96772 5.84494L0.150521 0.903762C-0.0510407 0.697014 -0.0510407 0.361809 0.150521 0.155061C0.352081 -0.0516875 0.678877 -0.0516875 0.880437 0.155061L5.33268 4.72189L9.78493 0.155061C9.98649 -0.0516871 10.3133 -0.0516871 10.5148 0.155061Z" fill="white" />
               </svg>
            </div>
         )}

         {outerIcon === "arrow-top-right" && (
            <div className="icon__layer">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
               >
                  <path
                     d="M18.0109 14.5737L18.0109 5.9894L9.42661 5.9894"
                     stroke="black"
                     strokeWidth="2"
                     strokeMiterlimit="10"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
                  <path
                     d="M5.99002 18.01L17.8906 6.10938"
                     stroke="black"
                     strokeWidth="2"
                     strokeMiterlimit="10"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                  />
               </svg>
            </div>
         )}
      </div>
   );
}
