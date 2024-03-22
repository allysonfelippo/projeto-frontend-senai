import './ListaProdutos.css';

const ListaProdutos = () => {
const produtos = [
    {
        nome: 'Smartphone Samsung',
        preco: 2999,
        cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
        nome: 'Notebook Acer',
        preco: 4999,
        cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
        nome: 'Tablet Asus',
        preco: 1499,
        cores: ['#365069', '#47c1c8', '#f95786'],
    },
];

return ( 
    <div>
        <h1>LISTA DE PRODUTOS</h1>
        {produtos.map((item, index) => {
        return (
            <div key={index} className='detalhes-do-produto'> 
            <strong>Nome:</strong>
            <span>{item.nome}</span>
            <br/>
            <strong>Preço:</strong>
            <span>{item.preco}</span>
            <br/>
            <strong>Cores Disponíveis:</strong>
            <div className='cores-disponiveis'>
            {item.cores.map((cor) => {
                return <div key={index} 
                style={{width: 24, height: 24, borderRadius: '50%', backgroundColor: cor }}
                />
            })}
            </div>
            <br />
            <br />
        </div>
        )})}
    </div> 
)};

export default ListaProdutos;