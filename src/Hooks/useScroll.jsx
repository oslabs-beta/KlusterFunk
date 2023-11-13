import { useEffect } from "react";

const useScroll = () => {
    
    const scroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    return scroll;
}

export default useScroll;