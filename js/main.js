const quadro = document.querySelector('.cor');
const loc = document.querySelector('span');
const btn = document.querySelector('button');
let cores = ['#836FFF', '#00FA9A', '#FF1493', '#FF0000', '#FFFF00', '#D8BFD8'];
alert('Clique no botao mudar cor e permita as açoes que pedir');
function mudaCor() {
    let ale = Math.random() * (cores.length - 0) + 0;
    ale = Math.floor(ale);
    quadro.style.background = cores[ale];
}
function pegaLocalizacao() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(posicao) {
            let lat = posicao.coords.latitude;
            let log = posicao.coords.longitude;
            loc.innerText = `cod 01: ${lat} \n cod 02: ${log}`;
        });
    } else {
        alert('Nao foi possivel gerar o codigo!');
    }
}


btn.addEventListener('click', () => {
    mudaCor();
    pegaLocalizacao();
});