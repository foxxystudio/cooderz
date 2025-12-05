'use client'
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(SplitText);

export default function DoubleLayerButtonHoverAnim({ text, font, color, bg, bgHover, href, target, icon, onClick }) {
   const btnRef = useRef(null);
   const tl = useRef(null);

   useGSAP(() => {
      const mm = gsap.matchMedia();
      const ctx = gsap.context(() => {
         // sadece 1024px ve yukarısı için aktif
         mm.add("(min-width: 1024px)", () => {
            const btn = btnRef.current;
            const topText = btn.querySelector(".top");
            const bottomText = btn.querySelector(".bottom");

            const topSplit = new SplitText(topText, { type: "chars" });
            const bottomSplit = new SplitText(bottomText, { type: "chars" });

            // Başlangıçta alt text aşağıda
            gsap.set(bottomSplit.chars, { yPercent: 100 });

            tl.current = gsap.timeline({ paused: true })
               .to(topSplit.chars, {
                  yPercent: -100,
                  duration: 0.4,
                  stagger: { each: .15 / topSplit.chars.length },
                  ease: "power2.inOut",
               }, 0)
               .to(bottomSplit.chars, {
                  yPercent: 0,
                  duration: 0.4,
                  stagger: { each: .15 / bottomSplit.chars.length },
                  ease: "power2.inOut",
               }, 0);

            // Hover eventleri sadece 1024px ve üzeri için eklenir
            btn.addEventListener("mouseenter", () => tl.current.play(0));
            btn.addEventListener("mouseleave", () => tl.current.reverse());
         });
      });

      return () => {
         ctx.revert();
         mm.revert();
      };
   }, { scope: btnRef });

   return (
      <div ref={btnRef} onClick={onClick} className={`btn__wrapper hover-text-anim__wrapper ${bg} ${bgHover}`}>
         {href && <Link href={href} target={target} scroll={false}></Link>}
         <div className="btn-inner__wrapper">
            <div className="hover-text-anim__layer">
               <span className={`top ${font} ${color}`}>{text}</span>
               <span className={`bottom ${font} ${color}`}>{text}</span>
            </div>

            {icon === 'arrow-right-up' && (
               <div className="icon__layer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                     <path fillRule="evenodd" clipRule="evenodd" d="M2.15117 0.576925C2.15015 0.257272 2.40844 -0.00102513 2.7281 3.21416e-06L10.3677 0.0245666C10.6873 0.025595 10.9473 0.285558 10.9483 0.605212L10.9729 8.24477C10.9739 8.56443 10.7156 8.82272 10.3959 8.8217C10.0763 8.82067 9.81633 8.5607 9.8153 8.24105L9.79523 1.9988L0.989388 10.8046C0.764085 11.0299 0.397619 11.0288 0.170863 10.802C-0.0558928 10.5753 -0.0570714 10.2088 0.168231 9.98348L8.97407 1.17764L2.73182 1.15757C2.41217 1.15654 2.1522 0.896579 2.15117 0.576925Z" fill="white" />
                  </svg>
               </div>
            )}
         </div>
      </div>
   );
}

