import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react'

const useLocomotiveScroll = () => {
    useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'), // Select the main container
      smooth: true,
    });
})
}

export default useLocomotiveScroll