import { Pessoa } from './Pessoa.js';
import { Handler } from './Handler.js';

export class Lista {
    constructor(listaToAppend) {
        this.listaToAppend = listaToAppend;
        this.itens = [];
    }

    adicionarItem(pessoa) {
        if (!this.emailJaCadastrado(pessoa.email) && Lista.maiorQueDezoito(pessoa.nascimento) && pessoa instanceof Pessoa) {
            this.itens.push(pessoa)
        } else {
            if (this.emailJaCadastrado(pessoa.email)) {
                Handler.mostrarAviso('Email já cadastrado!');
            }

            if (!Lista.maiorQueDezoito(pessoa.nascimento)) {
                Handler.mostrarAviso('só permitido acima de 18 anos');
            }
        }
    }

    listarItens(arrayLista = this.itens) {
        this.listaToAppend.innerText = '';

        arrayLista.forEach(item => {
            let li = document.createElement('li');
            let span1 = document.createElement('span');
            let span2 = document.createElement('span');
            let span3 = document.createElement('span');

            span1.innerText = item.nome;
            span2.innerText = item.email;
            span3.innerText = item.cargo;

            li.append(span1, span2, span3);

            this.listaToAppend.appendChild(li);

        })
    }

    emailJaCadastrado(email) {
        return this.itens.some(item => item.email === email);
    }

    static maiorQueDezoito(nascimento) {
        let anoNascimento = new Date(nascimento).getFullYear();
        let anoAtual = new Date().getFullYear();

        return anoAtual - anoNascimento >= 18;
    }
}