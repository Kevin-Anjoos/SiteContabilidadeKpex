// src\Components\Footer\index.jsx

import './style.css'

export function Footer() {
    return (
        <footer className='footer'>
            <div>
                <strong>Contabilidade </strong>
                <br />
                CNPJ - 12.345.678/0001-00
            </div>
            <div>
                Rua Conselheiro Zacarias, n 15, Mares, Bahia, Brazil
            </div>
            <div className='copy'>
               Kpex Soluções | &copy; {new Date().getFullYear()}  Todos os direitos reservados.
            </div>

        </footer>
    )
}

export default Footer;
