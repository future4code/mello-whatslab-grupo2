import React from 'react';
import styled from 'styled-components';

// estlização dos componentes

const SessaoEnviodeMensangem = styled.div`
position: fixed;
bottom: 0;
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


class Messenger extends React.Component {
    state = {
        mensager: [
            {
                nomeUsuario: '',
                messenger: ''
            },

        ],

        valorInputNomeUsuario: "",
        valorInputMessenger: "",
    };

    adicionarMessenger = () => {
        const newMessenger = {
            nomeUsuario: this.state.valorInputNomeUsuario,
            messenger: this.state.valorInputMessenger
        };
        const novaMensagem = [...this.state.mensager, newMessenger];

        this.setState({ mensager: novaMensagem })
        this.setState({ valorInputNomeUsuario: '' });
        this.setState({ valorInputMessenger: '' });

    };

    excluirMensagem = () => {
        console.log('msg excluida');
    }

    onChangeInputUsuario = (event) => {
        this.setState({ valorInputNomeUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMessenger: event.target.value });
    };

    render() {
        const listaDeComponentes = this.state.mensager.map((msg) => {
            return (
                <p>{msg.nomeUsuario} : {msg.messenger}</p>
            )
        })

        return (
            <>
                <div onClick={this.excluirMensagem}>{listaDeComponentes}</div>
                <SessaoEnviodeMensangem>

                    <InputUsuario value={this.state.valorInputNomeUsuario} onChange={this.onChangeInputUsuario} placeholder="Usuario"></InputUsuario>
                    <InputMensagem value={this.state.valorInputMessenger} onChange={this.onChangeInputMensagem} placeholder="Mensagem"></InputMensagem>
                    <Button onClick={this.adicionarMessenger}>ENVIAR</Button>

                </SessaoEnviodeMensangem>
            </>
        )
    };
};


export default Messenger;