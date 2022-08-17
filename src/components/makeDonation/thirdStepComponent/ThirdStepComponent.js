

import { MDBRadio,MDBInputGroup,MDBCheckbox } from 'mdb-react-ui-kit';
import { useState } from 'react';

import { Panel,Message,Button } from 'rsuite'
import './ThirdStepComponent.css'




export default function ThirdStepComponent({isLoadingDonation,montantDon,setMontantDon,onSubmitMakeDonation}){

    const [donMensuel,setDonMensuel] = useState(false)
    

    function onChangeDonMensuelRadio(){
        setDonMensuel(!donMensuel)
    }
    return(
        <>
        <div className="third-step-container "  >
            <form >
            <Panel shaded className="third-step-who-container mx-auto p-5 bg-white " >
                <div className="text-center">
                    <h6 className="h6" >
                        Faire un don à
                    </h6>
                    <h2 className="h2 " >
                        Lanfiatech afin de venir en aide aux personne vulnerables
                    </h2>
                </div>
                <div className="py-4">
                    <MDBCheckbox name='flexCheck' checked={donMensuel === true} value={donMensuel} onChange={()=>onChangeDonMensuelRadio()} id='flexCheckDefault12' label='Faire un dom mensuel ' />
                </div>
                   

                <div className="pt-1 pb-5 d-flex justify-content-around" >

                <div className="d-flex justify-content-between  " >
                    <MDBRadio 
                        btn 
                        labelStyle={{
                            backgroundColor:"#0b0d6e",
                            borderRadius:"2rem"
                        }}
                        btnColor='info' 
                        id='btn-radio' 
                        name='options' 
                        wrapperTag='span'                  
                        label='500 FCFA'
                        checked={montantDon==='500'}
                        value='500'
                        onChange={(e)=>{setMontantDon(e.target.value)}}
                        />
                    <MDBRadio
                        labelStyle={{
                            backgroundColor:"#0b0d6e",
                            borderRadius:"2rem"
                        }}
                        btn
                        btnColor='info'
                        id='btn-radio2'
                        name='options'
                        wrapperClass='mx-2'
                        wrapperTag='span'
                        label='1000 FCFA'
                        checked={montantDon==='1000'}
                        value='1000'
                        onChange={(e)=>{setMontantDon(e.target.value)}}
                        
                        
                    /> 
                    <MDBRadio
                        labelStyle={{
                            backgroundColor:"#0b0d6e",
                            borderRadius:"2rem"

                        }}
                    btn
                    btnColor='info'
                    id='btn-radio4'
                    name='options'
                    wrapperClass='mx-2'
                    wrapperTag='span'                        
                    label='2000 FCFA'
                    checked={montantDon==='2000'}
                    value='2000'
                    onChange={(e)=>{setMontantDon(e.target.value)}}
                />


                </div>
                </div>
                <div className="mx-md-5">
                    <MDBInputGroup textClass='text-somme-class' className='mb-3'  textAfter='FCFA'>
                        <input
                            value={montantDon}
                            placeholder="00"
                            onChange={(e)=>{setMontantDon((e.target.value).toString())}}
                            className='form-control montant-don-input' 
                            type='text'
                            required
                             />
                    </MDBInputGroup>
                </div>
                <div className={`mt-4 ${donMensuel !== true && "d-none" } `} >
                    <Message showIcon className="third-message" >
                        <p className="third-message-p" >
                            En Cochant cette case, vous acceptez de faire parler votre générosité chaque mois.
                        </p>
                    </Message>
                </div>

                <div className="mt-5 mb-3" >
                    <Button
                    loading={isLoadingDonation}
                    block
                    size="lg"
                    appearance="primary" 
                    className="mt-2 py-3"
                    style={{borderRadius:'2rem',backgroundColor:"#0b0d6e"}}
                    onClick={onSubmitMakeDonation}
                    >Procéder à la facturation</Button>
                </div>

                
            </Panel>


    

            </form>



        </div>
        </>
    )
}