import { Pessoa } from "src/models/Pessoa.js";
import { Lista } from "src/models/lista.js";
import { Filtro } from "src/models/filtro.js";
import { Validador } from "src/models/Validador.js";
console.log('oi');

let ul = document.querySelector('#lista-de-alunos');
let cadastrar = document.querySelector('.validado');
let pesquisar = document.querySelector('#btn');

let lista = new Lista(ul);

cadastrar.addEventListener('submit', (e) => {
    let validador = new Validador(cadastrar);

    if (validador.handleSubmit(e)) {
        let nome = document.querySelector('input[name="nome"]').value;
        let sobrenome = document.querySelector('input[name="sobrenome"]').value;
        let nascimento = document.querySelector('input[name="dataNascimento"]').value;
        let email = document.querySelector('input[name="email"]').value;
        let contato = document.querySelector('input[name="contato"]').value;
        let telefone = document.querySelector('input[name="telefone"]').value;
        let cargo = document.querySelector('select[name="cargo"]').value;


        let pessoa = new Pessoa(nome, sobrenome, nascimento, email, contato, telefone, cargo);

        console.log(pessoa.nascimento)

        lista.adicionarItem(pessoa);
        lista.listarItens();
    }

})

pesquisar.addEventListener('click', (e) => {
    e.preventDefault();
    let cargoOption = document.querySelector('#cargoOption').value;
    let filtragem = Filtro.filtrarCargos(lista.itens, cargoOption);
    lista.listarItens(filtragem);
})
