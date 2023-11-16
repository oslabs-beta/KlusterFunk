import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [ darkMode, setDarkMode ] = useState(false);

    // On mount, checks for the default theme of users machine
    useEffect(() => {
        const preferDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(preferDark)
    }, [])

    // function that when invoked, flips and reassign the whether dark mode is true or false in the local storage.
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    }

    // returns the current darkMode useState state so it is consistent
    return [darkMode, toggleDarkMode];
}

export default useDarkMode;