export class Pessoa {
    constructor(nome, sobrenome, nascimento, email, contato, telefone, cargo) {
        this.nome = nome.slice(0, 1).toUpperCase() + nome.slice(1);
        this.sobrenome = sobrenome.slice(0, 1).toUpperCase() + sobrenome.slice(1);;
        this._nascimento = nascimento;
        this._email = email;
        this._contato = contato;
        this._telefone = telefone;
        this.cargo = cargo;
    }

    get nascimento() {
        return this._nascimento;
    }

    get email() {
        return this._email;
    }

    get contato() {
        return this._contato;
    }

    get telefone() {
        return this._telefone;
    }

    set nascimento(value) {
        this._nascimento = value;
    }

    set email(value) {
        this._email = value;
    }

    set contato(value) {
        this._contato = value;
    }

    set telefone(value) {
        this._telefone = value;
    }


}