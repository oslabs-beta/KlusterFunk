import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(preferDark)
    }, [])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    }

    return [darkMode, toggleDarkMode];
}

export default useDarkMode;