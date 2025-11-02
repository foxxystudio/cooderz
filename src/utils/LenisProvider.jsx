'use client';

import Lenis from '@studio-freight/lenis';
import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLenisStore } from '@/stores/lenisStore';

const LenisContext = createContext(null);

export function useLenis() {
   return useContext(LenisContext);
}

export default function LenisProvider({ children }) {
   const lenisRef = useRef(null);
   const pathname = usePathname();
   const [lenisInstance, setLenisInstance] = useState(null);
   const [isInitialLoad, setIsInitialLoad] = useState(true);

   const setLenis = useLenisStore((state) => state.setLenis);

   useEffect(() => {
      const lenis = new Lenis({
         duration: 1.2, // Süreyi kısalttık
         smooth: true,
         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
         // lerp: 0.1, // Daha smooth scroll için
      });

      lenisRef.current = lenis;
      setLenisInstance(lenis);
      setLenis(lenis);

      let rafId;
      const raf = (time) => {
         lenis.raf(time);
         rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      if ('scrollRestoration' in window.history) {
         window.history.scrollRestoration = 'manual';
      }

      return () => {
         if (rafId) {
            cancelAnimationFrame(rafId);
         }
         lenis.destroy();
         lenisRef.current = null;
         setLenisInstance(null);
         if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'auto';
         }
      };
   }, []);

   useEffect(() => {
      if (lenisRef.current) {
         lenisRef.current.scrollTo(0, { immediate: true });
      } else {
         window.scrollTo(0, 0);
      }
   }, [pathname, isInitialLoad]);

   return (
      <LenisContext.Provider value={lenisInstance}>
         {children}
      </LenisContext.Provider>
   );
}