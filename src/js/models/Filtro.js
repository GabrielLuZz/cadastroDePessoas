export class Filtro {
    static filtrarCargos(itens, cargo) {
        if (cargo.toLowerCase() === 'todos') {
            return itens;
        }
        return itens.filter(item => item.cargo.toLowerCase() === cargo.toLowerCase());
    }
}