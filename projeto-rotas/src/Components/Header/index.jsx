// src\Components\Header\index.jsx
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './style.css'

export function Header() {
    return (
        <header className='header'>
            <div className='header__'>
                <Link to="/">
                    <img src={logo} alt="logo Contabilidade" />
                    <span>Contabilidade Dendezeiros</span>
                </Link>
            </div>
            <nav className='nav'>
                <NavLink to='/servicos'>Serviços</NavLink>
                <NavLink to='/fale-conosco'><br />Contato</NavLink>
                <NavLink to='/sobre-nos'><br />Sobre Nós</NavLink>
                
            </nav>
        </header>
    )
}

export default Header;
