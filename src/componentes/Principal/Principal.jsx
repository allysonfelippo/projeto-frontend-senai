import React from 'react';
import BotaoContador from "../BotaoContador/BotaoContador";
import BotaoCustomizado from '../BotaoCustomizado/BotaoCustomizado';
import Formulario from '../Formulario/Formulario';
import ListaCompras from '../ListaCompras/ListaCompras';
import ListaProdutos from '../ListaProdutos/ListaProdutos';
import './Principal.css';

const Principal = () => {
    return (
        <main>
            <nav>
                <BotaoCustomizado tipo="primario" onClick={() =>
                    setExemplo("listaProdutos")}>
                    ListaProdutos
                </BotaoCustomizado>

                <BotaoCustomizado tipo="secundario" onClick={() =>
                    setExemplo("botaoContador")}>
                    BotaoContador
                </BotaoCustomizado>

                <BotaoCustomizado tipo="" onClick={() => setExemplo("formulario")}>
                    Formuário	          Formulário
                </BotaoCustomizado>
                
                <BotaoCustomizado tipo="" onClick={() => setExemplo("listaCompras")}>
                    Lista Compras
                </BotaoCustomizado>

            </nav>

            {exemplo === "listaProdutos" && <ListaProdutos />}
            {exemplo === "botaoContador" && <BotaoContador />}
            {exemplo === "formulario" && <Formulario />}
            {exemplo === "listaCompras" && <ListaCompras />}
        </main>
    );

};

export default Principal;