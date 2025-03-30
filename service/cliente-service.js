const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(res => {
            return res.json();
        })
}

const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
        .then(res => {
            return res.body;
        })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    })
}

const editaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then(res => {
            return res.json();
        })
}
const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    }).then(res => {
        return res.json();
    })
}
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    editaCliente,
    atualizaCliente
}

/* browser-sync start --server --file . --host --port 5000 --startPath telas/lista_cliente.html */
/* npx json-server --watch db.json */