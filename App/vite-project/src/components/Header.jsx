import React from "react";
import './Header.css'; 
import { useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate()

    const navTo = (url) => {
    navigate(url)
    }

    return (
        <>
            <header className="header">
                <h1 className="title">Gerenciamento de Tarefas</h1>
                <div className="container-nav">
                    <nav>
                        <ul className="nav-list">
                            <li className="nav-item"><a className="nav-link"> <button  onClick={navTo('/usuario')}>Cadastro de usuarios</button></a></li>
                            <li className="nav-item"><a className="nav-link"> <button onClick={navTo('/tarefa')}>Cadastro de Tarefas </button></a></li>
                            <li className="nav-item"><a className="nav-link"> <button  onClick={navTo('/')}>Gerenciar Tarefa </button></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;