const useScroll = () => {

    // function that takes in a ref and scrolls to the location of that ref in a smooth way
    const scroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    // returns this reuseable function so it can be accessed when the hook is called
    return scroll;
}

export default useScroll;