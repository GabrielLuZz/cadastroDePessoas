export class Handler {
    static mostrarAviso(mensagem) {
        let avisos = document.querySelector('.avisos');

        let aviso = document.createElement('div');
        let divMensagem = document.createElement('div');
        let img = document.createElement('img');
        let info = document.createElement('span');
        let barra = document.createElement('span');

        aviso.classList.add('aviso');
        divMensagem.classList.add('mensagem');
        img.src = 'src/img/atencao.png';
        info.innerText = mensagem;
        barra.classList.add('barra');

        divMensagem.append(img, info)

        aviso.append(divMensagem, barra);

        avisos.appendChild(aviso);

        setTimeout(() => {
            barra.style.width = '0px';
        }, 0)

        setTimeout(() => {
            aviso.style.transform = 'translate(500px)';
            aviso.style.transition = 'all 0.4s ease-out';


        }, 6000)


        setTimeout(() => {
            aviso.remove()


        }, 7000)
    }
}