import React,{useState} from 'react'
import {
  CCol,
  CRow,
  CContainer,
  CSpinner,

} from '@coreui/react'


import './CardInfoUserActivite.css'


const UserCardActivite=(props)=>{
    return(
        <CRow>
            <CCol xs={12} md={6} >
                <p className="userCardInfos-titre">
                     {props.titre}
                </p>
            </CCol>
            <CCol xs={12}  md={6} className="userCardInfos-info-container" >
                <p className="userCardInfos-info" >
                    {props.info}
                </p>
            </CCol>
        </CRow>
    )
}


const CardInfoUserActivite = () => {

  return (
     <div className="container">
            <div className='card  border p-4 m-2'>
      
        <h5 style={{fontWeight:'bold'}} >Informations sur ses Activités</h5>
      
        <div >
           
            <CRow>
                <UserCardActivite titre="Etat de connexion" info="En ligne" />
            </CRow>
            <CRow>
                <UserCardActivite titre="Date Derniere connexion" info="10/05/2020 à 20h50" />
            </CRow>
            <CRow>
                <UserCardActivite titre="Dernier mofication du compte" info="10/01/2022" />
            </CRow>
            <CRow>
                <UserCardActivite titre="Date creation du compte" info="10/01/2022" />
            </CRow>
            <CRow>
                <h5 style={{fontWeight:'bold'}} >Les Activités</h5>

            </CRow>
            </div>
            </div>
     </div>

  )
}

export default CardInfoUserActivite
