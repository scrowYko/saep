import react, { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/Header";
import './style.css'

function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [userList, setUserList] = useState([])

    useEffect(() => {
        try {
            let userListLS = localStorage.getItem('userList')
            if (userListLS.length > 0) {
                setUserList(JSON.parse(userListLS))
            }
        } catch (error) {
            localStorage.setItem('userList', '')
        }
    }, [])

    const pushNewUser = () => {
        let userListLS = localStorage.getItem('userList');
        let parsedList = [];

        if (userListLS && userListLS.length > 0) {
            parsedList = JSON.parse(userListLS);
        }

        parsedList.push({ nome: nome, email: email });
        localStorage.setItem('userList', JSON.stringify(parsedList));

        setUserList(parsedList);
    }


    const submit = () => {
        if (!nome || !email) {
            return alert('Preencha todos os campos')
        }
        console.log(`Nome: ${nome}, Email: ${email}`)
        let res = emailValidation()
        if (res == false) {
            return alert('Email invalido')
        }
        pushNewUser()
        alert('Cadastro concluido com sucesso')
        return
    }

    const emailValidation = () => {
        if (!email) {
            return false
        }
        console.log(email)
        let usuario = email.substring(0, email.indexOf("@"));
        let dominio = email.substring(email.indexOf("@") + 1, email.length);
        if ((usuario.length >= 1) &&
            (dominio.length >= 3) &&
            (usuario.search("@") == -1) &&
            (dominio.search("@") == -1) &&
            (usuario.search(" ") == -1) &&
            (dominio.search(" ") == -1) &&
            (dominio.search(".") != -1) &&
            (dominio.indexOf(".") >= 1) &&
            (dominio.lastIndexOf(".") < dominio.length - 1)) {
            return true
        } else return false
    }

    return (
        <>
            <Header />
            <main>
                <h1>
                    Cadastro de Usuários
                </h1>
                <form className="form">
                    <label>Nome: <br /><input type="text" className="input" id="nome-input" onChange={(e) => setNome(e.target.value)} /></label>
                    <label >Email: <br /><input type="text" className="input" id="email-input" onChange={(e) => setEmail(e.target.value)} /></label>
                    <button type="submit" className="button" onClick={submit}>Cadastrar</button>
                </form>
            </main>
        </>
    )
}

export default Cadastro