import React from 'react';

class ListMessenger extends React.Component {
    state = {
        listMensager: [
            {
            nomeUsuario: '',
            messenger: ''
            },

            {
            nomeUsuario: '',
            messenger: ''
            }
        ]
    };

render(){
return (
    <div>
        <h2>WhatsLab</h2>
        <input placeholder="Usuário"></input>
        <input placeholder="Mensagem"></input>
        <button>ENVIAR</button>
    </div>        
        )
    }

}


export default ListMessenger