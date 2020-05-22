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
background-color: #CD4F39;
height: 12vh;
`

const InputUsuario = styled.input`
width: 12%;
border-radius: 10px;
height: 7vh;
margin-top: 20px;
color: black;
font-family: Verdana;
font-size: 20px;
text-align: center;
`

const Button = styled.button`
width: 10%;
background-color: #8B2500;
border-radius: 10px;
height: 8vh;
margin-top: 20px;
color: white;
font-size: 20px;
font-family: Verdana;
`

const InputMensagem = styled.input`
width: 70%;
border-radius: 10px;
height: 8vh;
margin-top: 16px;
color: black;
font-size: 20px;
font-family: Verdana;
`


class Messenger extends React.Component {
    state = {
        mensager: [],

        valorInputNomeUsuario: "",
        valorInputMessenger: "",
    };

    adicionarMessenger = () => {
        const newMessenger = {
            id: Date.now(),
            nomeUsuario: this.state.valorInputNomeUsuario,
            messenger: this.state.valorInputMessenger
        };
        const novaMensagem = [...this.state.mensager, newMessenger];

        this.setState({ mensager: novaMensagem })
        this.setState({ valorInputNomeUsuario: '' });
        this.setState({ valorInputMessenger: '' });

    };

    excluirMensagem = (id) => {
        const novaMensagem = this.state.mensager.filter(mensagem => mensagem.id !== id)
        this.setState({ mensager: novaMensagem })
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
                <p onDoubleClick={() => {this.excluirMensagem(msg.id)}}>{msg.nomeUsuario} : {msg.messenger}</p>
            )
        })

        return (
            <>
                <div>{listaDeComponentes}</div>
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