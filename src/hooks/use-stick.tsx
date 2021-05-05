import { useState, useRef, useEffect } from 'react';

export default function useStick() {
    const [isStick, setIsStick] = useState<boolean>(false);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current) {
                const { top } = divRef.current.getBoundingClientRect();
                setIsStick(top < 0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return {
        isStick,
        divRef,
    };
}
