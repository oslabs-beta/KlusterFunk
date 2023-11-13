import { useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const useAuthenticate = (setUser) => {
    const navigate = useNavigate();
    const location = useLocation();

    const verifyToken = async () => {
        const verifyEndpoint = '/user/auth';
        try {
            const res = await fetch(verifyEndpoint);
            if (res.status === 401 && location.pathname === '/dashboard') {
            return navigate('/login');
            } else if (res.status === 401 && location.pathname === '/') {
            return;
            }
            if (!res.ok) {
            throw Error('failed to authenticate user');
            }
        const { username } = await res.json();
        setUser(username)
        } catch (error) {
            console.error(error.message);
        }
    }

    useLayoutEffect(() => { verifyToken() }, []);

    const signout = async () => {
        try {
            const res = await fetch('/user/signout')
            if (res.status === 202) {
                verifyToken();
                setUser('');
                return;
            }
            if (!res.ok) throw Error('failed to signout');
        } catch (error) {
            console.error(error.message);
        }
    }
    
    return [ signout ];
}

export default useAuthenticate;


