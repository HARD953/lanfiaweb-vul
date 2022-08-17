import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TabView, TabPanel } from 'primereact/tabview';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import CardMesDonsEspece from '../../components/cardMesDons/CardMesDonsEspece';
import CardMesDonsNature from '../../components/cardMesDons/CardMesDonsNature';
import { getMyDonation } from '../../redux/features/myDonationSlice';
import '../../index.css';
import './MyActions.css';
import donationService from '../../services/donationServices';
import CardDonsViews from '../../components/cardMesDons/CardDonsViews';
import { ProgressSpinner } from 'primereact/progressspinner';




function MyActions() {

  const {loading,dons} = useSelector(state=>state.myDonation)
  const dispatch = useDispatch()

  const [listDonsArgent,setListDonsArgent] = useState([])
  const [loadingDon,setLoadingDon] = useState(true)
  
  useEffect(() => {
   /* dispatch(getMyDonation())
    .then(data=>{
      console.log("mondons : ",data)
    })
    
    console.log("don ",dons)*/

    donationService.getMyDonation()
    .then(data=>{
     // console.log("mondons : ",data.data.results)
      setListDonsArgent(data.data.results)
      setLoadingDon(false)
    })

  },[])


  if(loadingDon){
    return  (
      <div>
         <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s"/>
             
      </div>
    );
  }

  return (
    
    <div className="my-actions-container">

       <div className='container '>

      <h3>Mes Actions</h3><br></br>

      <div className="card"><br></br>
                
                <h5> <p className='m-2'>  Mes Dons </p></h5>
               
                <TabView className="tabview-header-icon">

                    <TabPanel header="_En_Espèces" leftIcon="pi pi-wallet ">
                       
                      <div className='d-flex justify-content-around flex-wrap ' >

                          {listDonsArgent.map((item,index) =>  <CardDonsViews  key={index} {...item} /> )}

                      </div>
            
                                            
                    </TabPanel>

                    <TabPanel header="_En_Nature" leftIcon="pi pi-th-large">
                      
                      <div className='d-flex justify-content-around flex-wrap ' >

                        {/*{infoDons.map((item,index) =>  <CardMesDonsNature key={index} {...item} /> )}*/}

                      </div>
                    </TabPanel>
                    
                </TabView>
            </div>
      
      </div>
     
    </div>
  );
}

export default MyActions;
