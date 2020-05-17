import React from 'react';
import styled from 'styled-components';

// estlização dos componentes

const SessaoEnviodeMensangem = styled.div`
display: flex;
width: 96%;
align-content: center;
flex-direction: row;
border-radius: 15px;
justify-content:space-evenly;
background-color: #202225;
height: 12vh;
`

const InputUsuario = styled.input`
width: 12%;
border-radius: 10px;
height: 7vh;
margin-top: 5px;
`

const Button = styled.button`
width: 10%;
background-color: #8000FF;
border-radius: 10px;
height: 8vh;
margin-top: 5px;
`

const InputMensagem = styled.input`
width: 70%;
border-radius: 10px;
height: 8vh;
margin-top: 2px;
`

class ListMessenger extends React.Component {
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
        const listaDeComponentes = this.state.listMessenger.map((listMessenger) => {
            return (
                <p>
                    {listMessenger.nomeUsuario} - {listMessenger.messenger}
                </p>
            )
        })

        return (
            <SessaoEnviodeMensangem>
                <InputUsuario value={this.state.valorInputNomeUsuario} onChange={this.onChangeInputUsuario} placeholder="Usuario"></InputUsuario>
                <InputMensagem value={this.state.valorInputMessenger} onChange={this.onChangeInputMensagem} placeholder="Mensagem"></InputMensagem>
                <Button onClick={this.adicionarMessenger}>ENVIAR</Button>
                <div>{listaDeComponentes}</div>
            </SessaoEnviodeMensangem>
        )
    };
};




export default ListMessenger;