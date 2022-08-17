import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './CardDonsViews.css'
import { Panel,Modal } from 'rsuite';

import imgCard from "../../assets/images/donation/money.jpg"

const CardDonsViews = (props) => {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
      setSize(value);
      setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const header = (
        <img alt="Card"  className="img-fluid card-view-dons-img" src={imgCard} />
    );
    const footer = (
        <span>
            <Button onClick={()=>handleOpen()} label="Voir details" icon="pi pi-eye" />
            
        </span>
    );

    return (
            <>
        <Panel  onClick={()=>handleOpen()} shaded className='m-3 card-view-dons-panel' >
          
            <Card title={props.cibleV==="aucun"? 'Aucun cible choisie' :"Cible :"+props.cibleV} subTitle={props.montant} className="card-view-dons" footer={footer} header={header}>
                <p className="m-0" style={{lineHeight: '1.5,',color:props.affecter? "green":"orange"}}>

                {props.affecter?'Distribué':"Pas encore distribué"}
                    
                    </p>
            </Card>
        </Panel>
        <Modal size={size} open={open} onClose={handleClose}>
            <Modal.Header>
            <Modal.Title> <u>Détails du don N* {props.Numero}</u> </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            
            <h5 className="card-title"> <i className='pi pi-money-bill text-success '></i> </h5>
                <h6 className="card-subtitle mb-2 text-muted"> N* <u>{props.id}</u></h6>
                <p className="card-text">  <b>Type :</b> Argent </p>
                <p className="card-text">  <b>Montant :</b> {props.montant} Francs CFA  </p>
               
                <p className="card-text">  <b>Nom Donateur :</b> {props.donateur}   </p>

                <p className="card-text">  <b>Date Distribution :</b> {props.Date} </p>

                <p className="card-text"> <b>Statut :</b> <b className= 'statut badge badge' style={{backgroundColor:props.affecter? "green":"orange" }}> {props.affecter?'Distribué':"Pas encore distribué"} </b> </p>
               
                <br></br>
               
        
            </Modal.Body>
            <Modal.Footer>

            <a className="btn btn-outline-primary mr-5" onClick={handleClose} appearance="primary">
                Ok
            </a>
            
            <a className="btn btn-outline-danger" onClick={handleClose} appearance="subtle">
                Cancel
            </a>
           
            </Modal.Footer>
        </Modal>
        </>
    )
}
               
export default CardDonsViews