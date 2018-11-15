import React, { useState, useEffect } from "react";

function useIsScrolled() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const isScroll = (window.pageYOffset || document.body.scrollTop) > 5;
            if (isScrolled !== isScroll) {
                setIsScrolled(isScroll)
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll, { passive: true });
        }
    });
    return isScrolled;
};

export default useIsScrolled;
