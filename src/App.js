import React from 'react';
import{HashRouter , Route} from 'react-router-dom';

import Header from './header';


import Newcustomer from './newcustomer';
import Allcustomer from './allcustomer';



function App() {
  
  return (
            <HashRouter>
              <Header/>
             
              <Route exact path="/" component={Allcustomer}/>
             
              <Route exact path="/newcustomer" component={Newcustomer}/>
            </HashRouter>
        );
  
}

export default App;
