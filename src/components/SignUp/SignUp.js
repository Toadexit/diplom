import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Form } from "components/Form/Form";
import { setUser } from "store/slices/userSlice";
import { useNavigate } from "react-router";
import React from 'react'

const SignUp = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken
          }));
          navigate('/login');
        })
        .catch(console.error)
    }
  return (
    <Form
        title="register"
        handleClick={handleRegister}
    />
    
  )
}

export default SignUp
