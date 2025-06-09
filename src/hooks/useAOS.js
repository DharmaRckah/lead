import { useEffect } from 'react';
import AOS from 'aos';

export default function useAOS() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out',
    });
  }, []);
}
