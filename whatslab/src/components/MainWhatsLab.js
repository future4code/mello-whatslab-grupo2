import React from 'react';
import styled from 'styled-components';
import ListMessenger from './ListMessenger';


const Main = styled.main`
width: 100%;
height: 47vh;
`
const ConteudoMsg = styled.p`
display: inline-block;
background-color: #202225;
color: white;
margin-left: 4px;
border-radius: 5px;
`


class MainWhatsLab extends React.Component {

    state = {
        listMessenger: [
            {
                nomeUsuario: '',
                messenger: ''
            },

            {
                nomeUsuario: '',
                messenger: ''
            }
        ],

        valorInputNomeUsuario: "",
        valorInputMessenger: "",
    };

    adicionarMessenger = () => {
        const newMessenger = {
            nomeUsuario: this.state.valorInputNomeUsuario,
            messenger: this.state.valorInputMessenger
        };
        const novaMensagem = [...this.state.listMessenger, newMessenger];

        this.setState({ listMessenger: novaMensagem })
    };

    onChangeInputUsuario = (event) => {
        this.setState({ valorInputNomeUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMessenger: event.target.value });
    };

    render() {

        return (
            <>
                <Main>
                    <ConteudoMsg>Sou o Main</ConteudoMsg>
                </Main>
                <ListMessenger inputNomeUsuario={this.state.valorInputNomeUsuario} />

            </>

        )
    }
};

export default MainWhatsLab;