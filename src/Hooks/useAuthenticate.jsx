import { useLayoutEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const useAuthenticate = (setUser) => {
    const navigate = useNavigate();
    const location = useLocation();

    useLayoutEffect(() => {
        const verifyToken = async () => {
          const res = await fetch('/user/auth');
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
        }
        verifyToken();
      }, []);
}

export default useAuthenticate;


