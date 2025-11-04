// src\Components\Pages\FaleConoscoPage\index.jsx

import './style.css'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export function FaleConoscoPage() {
    const [searchParams] = useSearchParams()
    const service = searchParams.get('service')

    const [nome, setNome] = useState('')
    const [mensagem, setMensagem] = useState('')

    useEffect(() => {
        if (service) {
            setMensagem(`Olá, gostaria de solicitar um orçamento para: ${service}`)
        }
    }, [service])

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aqui você integraria com seu backend (fetch / axios) ou serviço de e-mail
        console.log('form enviado (demo)', { nome, mensagem })
        alert('Mensagem enviada (demo)')
        setNome('')
        setMensagem('')
    }

    return (
        <section className="fale-conosco card">
            <h1>Fale Conosco</h1>

            <p>
            Entre em contato conosco através dos canais de atendimento abaixo. Faça seu orçamento sem compromisso ou tire suas dúvidas.
            </p>

            <div className="contact-actions" style={{display:'flex',gap:12,alignItems:'center',marginBottom:12}}>
                {/* Substitua o número abaixo pelo número real da empresa */}
                <a className="call-link" href="tel:+5571991058433"><button type="button" className="call-btn">Ligar agora</button></a>
                <a className="whatsapp-link" href="https://wa.me/5573999999999" target="_blank" rel="noreferrer"><button type="button">Abrir WhatsApp</button></a>
            </div>

            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input id="nome" name="nome" type="text" placeholder="Seu nome" value={nome} onChange={e => setNome(e.target.value)} />
                </div>
                <div style={{height:12}} />
                <div>
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea id="mensagem" name="mensagem" rows={4} placeholder="Escreva sua mensagem" value={mensagem} onChange={e => setMensagem(e.target.value)} />
                </div>
                <div style={{height:12}} />
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default FaleConoscoPage;