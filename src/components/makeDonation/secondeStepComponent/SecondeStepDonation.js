

import { MDBRadio,MDBInput } from 'mdb-react-ui-kit';
import { useState } from 'react';

import { Panel,Message,RadioGroup,Radio } from 'rsuite'
import './SecondeStepDonation.css'




export default function SecondeStepDonation(props){

    const [whoRadio,setWhoRadio] = useState('non')
    const [whoGiveRadio,setWhoGiveRadio] = useState('moi-meme')
    const [raisonSocial,setRaisonSocial] = useState(whoGiveRadio === 'moi-meme' ? '' : props.raisonSocial)
    const [cibleDons,setCibleDons] = useState(whoRadio === 'non' ? 'aucun' : props.cibleDons)
    
    function onChangeWhoRadio(e){
        setWhoRadio(e.target.value)
    }

    function onChangeWhoGiveRadio(e){
        setWhoGiveRadio(e.target.value)
    }
    return(
        <>
        <div className="seconde-step-container"  >
            <form >
            <Panel shaded className="seconde-step-who-container bg-white" >
                <h6 className="h6" >
                    Au nom de qui faites-vous ce don ?
                </h6>
                <div className="who-radio-container pt-3">

                    <MDBRadio onChange={(e)=>onChangeWhoGiveRadio(e)} checked={whoGiveRadio== "moi-meme"}  name='inlineRadio' id='inlineRadio1' value='individu' label='Moi-même' inline />

                    <MDBRadio onChange={(e)=>onChangeWhoGiveRadio(e)} checked={whoGiveRadio== "organisation"}  name='inlineRadio' id='inlineRadio2' value='organisation' label='Une organisation' inline />

                </div>

                <div className={`organisation-input-container mt-4 ${whoGiveRadio == "moi-meme" && 'd-none'} ` }>
                    <MDBInput value={raisonSocial} onChange={(e)=>props.setRaisonSocial(e.target.value)} label="Entrez sa raison sociale" id='organisation' type='text' />
                </div>
            </Panel>

            <Panel shaded className="seconde-step-who-container mt-4 bg-white" >
                <h6 className="h6" >
                    Voullez vous specifiez à qui sera transmis votre don ?
                </h6>
                <div className="who-radio-container pt-3">

                    <MDBRadio name='receveurDon' id='receveurDon1' onChange={(e)=>onChangeWhoRadio(e)} checked={whoRadio== "non"} value='non' label='Nom' inline />

                    <MDBRadio name='receveurDon'  onChange={(e)=>onChangeWhoRadio(e)} checked={whoRadio== "oui"} id='receveurDon2' value='oui' label='Oui' inline />

                </div>

                <div className={`organisation-input-container mt-4 ${whoRadio == "non" && 'd-none'} ` }  >
                    <select value={props.cibleDons} onChange={(e)=>props.setCibleDons(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value="aucun" defaultValue>Selectionner une catégorie </option>
                        <option value="Handicappé">Handicappé</option>
                        <option value="Covid">Covid</option>
                        <option value="Paludisme">Paludisme</option>
                    </select>
                </div>

                <div className="mt-2" >
                    <Message showIcon type="info" header="Information">
                        Additional description and informations about copywriting.
                    </Message>
                </div>
            </Panel>

            <Panel shaded className="seconde-step-who-container bg-white mt-4" >
                <h6 className="h6" >
                    Veuillez specifier la provenance du don ?
                </h6>
             
                <div className="organisation-input-container mt-4">
                    <MDBInput value={props.provenanceDon} onChange={(e)=>props.setProvenanceDon(e.target.value)} label="ex: Mon salaire" type='text' />
                </div>

                
            </Panel>


    

            </form>



        </div>
        </>
    )
}