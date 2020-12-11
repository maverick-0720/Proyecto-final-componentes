function traerToDo() {

    var name = sessionStorage.getItem('idTabla');

    var params = {
        name: name
    }

    fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/getdata', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json'},
        mode: "cors"
    })
        .then((res, err) => {
            if (res) {
                return res.json();
            }
        })
        .then(data => {
            console.log(data.body.Items);
            let tabla = document.getElementById("coleccion");
            tabla.innerHTML = "";
            for (let i = 0; i < data.body.Items.length; i++) {
                let fila = tabla.insertRow();
                let celdaNombre = fila.insertCell();
                let celdaActualizar = fila.insertCell();
                let celdaEliminar = fila.insertCell();
                celdaNombre.innerHTML = data.body.Items[i].ToDo;

                let botonAct = document.createElement('button');
                botonAct.id = data.body.Items[i];
                botonAct.innerText = "Actualizar To Do";
                celdaActualizar.appendChild(botonAct);
                botonAct.addEventListener('click', actualizar);

                let botonEliminar = document.createElement('button');
                botonEliminar.id = data.body.Items[i];
                botonEliminar.innerText = "Eliminar To Do";
                celdaEliminar.appendChild(botonEliminar);
                botonEliminar.addEventListener('click', eliminar);
            }
        })
}

function actualizar() {

}

function eliminar() {
    // fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/deletedata', {
    //     method: 'DELETE',
    //     body: JSON.stringify(params),
    //     headers: {'Content-Type': 'application/json'},
    //     mode: "cors"
    // })
    //     .then(data => {
    //         console.log(data.json());
    //     })
}

