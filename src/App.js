import React,{Suspense, useState} from 'react';
import { useSelector } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import { Loader } from 'rsuite';
import './App.css';
import FooterApp from './components/footer/FooterApp';
import NavbarApp from "./components/navbar/NavbarApp";
import useUserConnexion from './hooks/useUserConnexion';
import routes from './routes';

import ProtectedRoute from './services/ProtectedRoute'


const loaderApp = (
  <div>
    <Loader backdrop={true} size="lg" />
  </div>
);



function App() {
  const [isLoadingRefresh,setIsLoadingRefresh] = useState(false)
  const {token} = useUserConnexion()
  const {isLoggedIn} = useSelector(state=> state.authUser)

  return (
    <div className="">

      <NavbarApp
      setIsLoadingRefresh ={ setIsLoadingRefresh } 
      isLoadingRefresh ={ isLoadingRefresh }
      />
      <Suspense fallback={loaderApp} >
                <Routes>
                  
                    {routes.map((route, index)=> 
                        !route.private 
                          && <Route 
                                      key={index}
                                      exact={route.exact}
                                      path={route.path}
                                      element={
                                      <route.element setIsLoadingRefresh ={ setIsLoadingRefresh } 
                                      isLoadingRefresh ={ isLoadingRefresh }
                                      />}
                                      name={route.name}
                              />
                            
                        )
                    }

                <Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
                  { routes.map((route, index)=> 
                            route.private
                             && <Route 
                                      key={index}
                                      exact={route.exact}
                                      path={route.path}
                                      element={<route.element/>}
                                      name={route.name}
                                  />
                                                    
                            )
                    }
                </Route>

                </Routes>
        </Suspense>

       { /*<FooterApp/>*/}
       
    </div>
  );
}

export default App;
