import React from 'react';
import styled from 'styled-components';

const InputUsuario = styled.input`
border: 1px solid black;
border-radius: 100px; 
text-align: center;
margin: 10px;
`
const InputMessenger = styled.input`
border: 1px solid black;
border-radius: 100px; 
text-align: center;
margin: 5px;
`
const button = styled.input`
border: 1px solid black;
border-radius: 100px; 
text-align: center;
margin:25px;
background-color: orange;
`

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
        <div>
            <header>
                <h2>WhatsLab</h2>
            </header>
        </div>
        <hr></hr>
        <div>
            <footer>
                <InputUsuario placeholder="Usuário"></InputUsuario>
                <InputMessenger placeholder="Mensagem"></InputMessenger>
                <button>ENVIAR</button>
            </footer>
        </div>
    </div>        
        )
    }

}


export default ListMessenger