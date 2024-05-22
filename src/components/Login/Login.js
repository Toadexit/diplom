import React from 'react'
import { Form } from 'components/Form/Form'
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router';
import { setUser } from 'store/slices/userSlice'
import { useCookies } from 'react-cookie';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies(['TOKEN', 'NAME']);

    const handleLogin = (email, password, setEmail,setPass) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(response => {
              setCookies('TOKEN', response.user.accessToken)
              setCookies('NAME', response.user.email)
              setEmail('')
              setPass('')
              navigate('/orders')
        }

        )
        .catch(console.error)
    }

  return (
    <Form
        title="sign in"
        handleClick={handleLogin}
    />
  )
}

export {Login}
