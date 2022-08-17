import React,{useEffect, useState} from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import {  Message,Button, IconButton, ButtonGroup, Panel } from 'rsuite';

import signInImage from '../../assets/images/login/user.gif';


import './SignIn.css';
//import useToken from '../../hooks/useToken';

//import axiosInstance from '../../api/axiosInstance';
import { useNavigate,Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/features/authUserSlice';
import { clearMessageConnexion } from '../../redux/features/messageConnexionSlice';
import useUserConnexion from '../../hooks/useUserConnexion';

/*
async function loginUser(dataUser) {
  return fetch('https://apidons.herokuapp.com/token/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataUser)
  })
    .then(data => data.json())
    .catch(error => console.log(error));
 }
*/
 


function SignIn(props) {
  
  const dispatch = useDispatch()
  const {isLoggedIn,token} = useSelector(state=> state.authUser)
  const {message} = useSelector(state=> state.messageConnexion)
  const {token1 ,saveUserConnexion } = useUserConnexion()


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isloading, setIsloading] = useState(false);
  const [isErrorSignIn, setIsErrorSignIn] = useState(false);
  //const { token, setToken } = useToken();
  const navigate = useNavigate()

  const submitFunction = async e => {
   // console.log('token 1 : ',token)
    e.preventDefault();
    setIsErrorSignIn(false)
    setIsloading(true)

    const dataUser = { email:email, password:password }

    dispatch(login(dataUser))
    .then((data)=>{
      saveUserConnexion(data.payload)
      setIsloading(false)

    })
    .catch(()=>{
      setIsloading(false)
    })




    //console.log(dataUser)
    //const token = await axiosInstance.post('token/',dataUser)
  /*  const responseUser = await loginUser(dataUser)
    if(responseUser.access){
      const token = {token: responseUser.access}
      //setToken(token);
      console.log(token)
      setIsloading(false)
      props.setIsLoadingRefresh(!props.isLoadingRefresh)
      //navigate('/',{replace:true})
    }
    else{
      setIsErrorSignIn(true)
      setIsloading(false)
    }*/



    
  }


  useEffect(() => {
    dispatch(clearMessageConnexion());
  }, [dispatch]);


  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="sign-in-container ">
      
      <div className="container mt-5">
        
          <div className="sign-in-container-content-side">
            <Panel shaded className="sign-in-form-container bg-white"
      >   
          <h2 className="sign-in-title text-center">Connexion</h2>
          <div className="sign-in-img-container text-center">
            <img src={signInImage} alt="logo login" className="sign-in-img" />
          </div>
         
         { message && 
          (<Message className={`mx-auto mb-4`} closable showIcon type="error" >
              <p>
               {message}
              </p>
            </Message>)
          }

            <form onSubmit={submitFunction} >
                <MDBInput 
                className='mb-4 sign-in-input' 
                type='email' 
                label='Entrer votre adresse electronique' 
                onChange={e => setEmail(e.target.value)}
                
                />
                <MDBInput
                 className='mb-4 sign-in-input' 
                 type='password' 
                 label='Entrer votre mot de passe' 
                 onChange={e => setPassword(e.target.value)}
                 />

                <MDBRow className='mb-4'>
                  <MDBCol>
                    <a href='#!'>Mot de passe oublié ?</a>
                  </MDBCol>
                </MDBRow>

                <Button loading={isloading} className="sign-in-btn text-white" type='submit' block>
                  Connexion
                </Button>
            </form>

        
            </Panel>
          </div>
      </div>
      
   
    </div>
  );
}

export default SignIn;