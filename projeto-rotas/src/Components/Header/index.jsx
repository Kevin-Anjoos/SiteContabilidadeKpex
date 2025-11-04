// src\Components\Header\index.jsx
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './style.css'

export function Header() {
    return (
        <header className='header'>
            <div className='header__'>
                <Link to="/" className="brand">
                    <img src={logo} alt="logo Contabilidade" />
                    <span className="brand__name">Contabilidade <strong>Kpex</strong> Soluções</span>
                </Link>
            </div>
            <nav className='nav' aria-label="Principal">
                <NavLink to='/servicos'>Serviços</NavLink>
                <NavLink to='/fale-conosco'>Contato</NavLink>
                <NavLink to='/sobre-nos'>Sobre Nós</NavLink>
            </nav>
        </header>
    )
}

export default Header;
