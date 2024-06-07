alert("Olá!")

const form = document.getElementById('form')
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit',function (e){

    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
    calculaContatos();
});

function adicionaLinha() {
    const nomeContato = document.getElementById('nomeContato');
    const numeroContato = document.getElementById('numeroContato');

    if (telefones.includes(Number(numeroContato.value))) {
        alert(`O telefone ${numeroContato.value} já está na lista!`);
    } else {
        nomes.push(nomeContato.value);
        telefones.push(Number(numeroContato.value));

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nomeContato.value = '';
    numeroContato.value = '';
}

function atualizaTabela() {

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;



};

function calculaContatos() {

    document.getElementById('calculaContatos').innerHTML = telefones.length;
}