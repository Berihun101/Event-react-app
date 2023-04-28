import React from 'react';
import ReactDOM from 'react-dom';
import App from './componants/App';
import 'semantic-ui-css/semantic.min.css'
import './style.css'

const rootEl=document.getElementById("root")

function reinder(){
    ReactDOM.render(<App />, rootEl )
}

if(module.hot){
    module.hot.accept('./componants/App', ()=>{
        setTimeout(reinder)
    })
}
reinder();




