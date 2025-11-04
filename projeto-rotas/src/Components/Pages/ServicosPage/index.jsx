import './style.css'
import { useNavigate } from 'react-router-dom'

export function ServicosPage() {
    const navigate = useNavigate()
    const services = [
        { id: 1, title: 'Contabilidade Mensal', desc: 'Gestão completa da contabilidade com envio de obrigações e demonstrações mensais.' },
        { id: 2, title: 'Escrituração Fiscal', desc: 'Apuração e entrega de impostos, SPED e obrigações acessórias.' },
        { id: 3, title: 'Folha de Pagamento', desc: 'Processamento de salários, encargos, férias e 13º com conformidade.' },
        { id: 4, title: 'Abertura de Empresa', desc: 'Abertura e regularização de empresas (MEI, LTDA, EIRELI).'},
        { id: 5, title: 'Consultoria Financeira', desc: 'Análise financeira, fluxo de caixa e planejamento tributário.'}
    ]

    const handleSolicitar = (serviceTitle) => {
        // redireciona para a página de contato com o serviço escolhido como query param
        navigate(`/fale-conosco?service=${encodeURIComponent(serviceTitle)}`)
    }

    return (
        <section className="servicos container">
            <header className="servicos__header">
                <h1>Nossos Serviços</h1>
                <p>Oferecemos soluções contábeis completas para reduzir custos, evitar riscos e ajudar sua empresa a crescer.</p>
            </header>

            <div className="servicos__grid">
                {services.map(s => (
                    <article key={s.id} className="servico card">
                        <h3>{s.title}</h3>
                        <p>{s.desc}</p>
                        <div className="servico__actions">
                            <a href="#" className="btn-link">Saiba mais</a>
                            <button type="button" onClick={() => handleSolicitar(s.title)}>Solicitar orçamento</button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default ServicosPage
