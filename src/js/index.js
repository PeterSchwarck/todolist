//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components


function Home(){
return (
    <div className="container">
        <div className="row">
            <div className="col-2">
      
            </div>
            <div className="col-8">
                <h1>todos</h1>  
                <ul>
                    <li> <input type='text' /></li>
                    <li> <input type='text' /></li>
                    <li> <input type='text' /></li>
                    <li> <input type='text' /></li>
                </ul>
                    
            </div>
            <div className="col-2">
      
            </div>
        </div>
    </div>
    );
  
    
}

//render your react application
ReactDOM.render(
    <Home />,
    document.querySelector('#app')
);  