import {useState, useEffect} from 'react'
import {auth} from '../services/fireBaseConection'
import {onAuthStateChanged} from 'firebase/auth'
import { Navigate } from 'react-router-dom';

export default function Private ({children}){
  const [loading, setLoading] = useState(true);
  const [signed, setSignet] = useState(false);

  useEffect(()=> {
    async function checkLogin(){
      const onsub = onAuthStateChanged(auth, (user) => {
        if(user){
          const userData = {
            uid: user.uid,
            email: user.email
          };
          localStorage.setItem("@detailUser", JSON.stringify(userData));
          setLoading(false);
          setSignet(true);
        }else{
          setLoading(false);
          setSignet(false);
        }
      });
    }

    checkLogin();
  }, []);

  if(loading){
    return (<div></div>)
  }
  if(!signed){
    return <Navigate to="/login" />
  }

  return children;
}