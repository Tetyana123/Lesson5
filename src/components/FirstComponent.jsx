import React from 'react';

import HeaderMenu from './HeaderMenu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './FirstComponent.css';

function FirstComponent() {
    return (
        <div>
           <header className="headline-header">
             <HeaderMenu/>
           </header> 
           <main>
            <div className="complete-page">
             <h1 className="headline-complete">
               Thank you for your order!
             </h1>
             <h2 className="subtitle-complete">
               Your order is complete <br/>
               and we are working on it  
             </h2>
            </div>
           </main>
        </div>
     );
     }
        
export default FirstComponent;