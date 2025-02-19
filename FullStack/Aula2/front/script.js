//Enviar os dados do formulário para o servidor
const cadastro = document.getElementById('cadastro');
cadastro.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        nome: cadastro.nome.value,
        cpf: cadastro.cpf.value,
        nascimento: cadastro.nascimento.value
    }
    fetch('http://localhost:4000/pacientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Pacientes cadastrado com sucesso');
            } else {
                msg3('Erro ao cadastrar Pacientes');
            }
        });
});

//Receber os dados do servidor e exibir na tabela
fetch('http://localhost:4000/pacientes')
    .then(response => response.json())
    .then(pacientes => {
        const tabela = document.getElementById('pacientes');
        pacientes.forEach((paciente) => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td data-label="Id:">${paciente.id_paciente}</td>
            <td data-label="Nome:" contenteditable="true">${paciente.nome}</td>
            <td data-label="CPF:" contenteditable="true">${paciente.cpf}</td>
            <td data-label="Nascimento:" contenteditable="true">${new Date(paciente.nascimento).toLocaleDateString('pt-BR')}</td>
            <td><button onclick="alterar(this)">*</button><button onclick="excluir(${paciente.id_paciente})">-</button></td>
        `;
            tabela.appendChild(linha);
        });
    });

//Função que edita um cliente enviando o ID e os dados para o servidor
