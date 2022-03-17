import {useEffect, useState} from 'react';

const Breakpoints = {
  base: [0, 479],
  sm: [480, 767],
  md: [768, 991],
  lg: [992, 1279],
  xl: [1280, 1535],
  '2xl': [1536, Infinity],
};

type Breakpoint = keyof typeof Breakpoints;

const getWindow = () => (typeof window !== 'undefined' ? window : {innerWidth: 0});

const getBreakpoint = (): Breakpoint => {
  const {innerWidth: width} = getWindow();

  for (const key in Breakpoints) {
    if (width <= Breakpoints[key as Breakpoint][1]) {
      return key as Breakpoint;
    }
  }
  return '2xl';
};

const getActions = (breakpoint: Breakpoint) => ({
  min: getWindow().innerWidth >= Breakpoints[breakpoint][0],
  max: getWindow().innerWidth <= Breakpoints[breakpoint][1],
});

const useMedia = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint());

  useEffect(() => {
    const handle = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener('resize', handle);
    return () => window.removeEventListener('resize', handle);
  }, []);

  return {
    breakpoint,
    media: {
      base: getActions('base'),
      sm: getActions('sm'),
      md: getActions('md'),
      lg: getActions('lg'),
      xl: getActions('xl'),
      '2xl': getActions('2xl'),
    },
  };
};

export default useMedia;
