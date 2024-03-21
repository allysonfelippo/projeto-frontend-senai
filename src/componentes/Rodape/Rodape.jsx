import './Rodape.css';

const Rodape = () => {

    const anoAtual = new Date().getFullYear();
    const nome = 'Allyson Felippo';

    return (
    <footer>
        <span className='texto-copyright'>
            Copyright &#169; {anoAtual} - Todos os direitos reservados - {nome}. 
        </span>
    </footer>
    )
};

export default Rodape;