function buscaCEP() {
    let cep = document.getElementById("cep").value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let res = document.getElementById("resultado");
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        if (data.error){
            res.innerHTML=`<p id="dataname">CEP não encontrado</p>`;
        }
        else{
            res.innerHTML=`
            <p><span id="dataname">CEP:</span> ${data.logradouro}</p>
            <p><span id="dataname">LOGADOURO:</span> ${data.complemento}</p>
            <p><span id="dataname">BAIRRO:</span> ${data.bairro}</p>
            <p><span id="dataname">LOCALIDADE:</span> ${data.localidade}</p>
            <p><span id="dataname">UNIDADE FEDERATIVA:</span> ${data.uf}</p>
            <p><span id="dataname">ESTADO:</span> ${data.estado}</p>
            <p><span id="dataname">REGIÂO:</span> ${data.regiao}</p>
            <p><span id="dataname">IBGE:</span> ${data.ibge}</p>
            <p><span id="dataname">DDD:</span> ${data.ddd}</p>
            `;
        }
    })
    .catch(error => res.innerHTML=`<p id="dataname">Erro ao buscar CEP</p>`);
    res.style.visibility = "visible";
}