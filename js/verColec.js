'use strict'

let valor = [];
let opcion = 0;

function traerTablas() {
    fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/getcols')
        .then((res, err) => {
            if (res) {
                return res.json();
            }
        })
        .then(data => {
            console.log(data.body.TableNames);
            let tabla = document.getElementById("coleccion");
            tabla.innerHTML = "";
            for (let i = 0; i < data.body.TableNames.length; i++) {
                let fila = tabla.insertRow();
                let celdaNombre = fila.insertCell();
                let celdaBotones = fila.insertCell();
                let celdaVisualizacion = fila.insertCell();
                let celdaEliminar = fila.insertCell();
                celdaNombre.innerHTML = data.body.TableNames[i];

                let botonAgregar = document.createElement('button');
                botonAgregar.id = data.body.TableNames[i];
                botonAgregar.innerText = "Agregar tarea";
                celdaBotones.appendChild(botonAgregar);
                botonAgregar.addEventListener('click',agregar);

                let botonVisualizar = document.createElement('button');
                botonVisualizar.id = data.body.TableNames[i];
                botonVisualizar.innerText = "Ver To-Do";
                celdaVisualizacion.appendChild(botonVisualizar);
                botonVisualizar.addEventListener('click',verToDos);

                let botonBorrar = document.createElement('button');
                botonBorrar.id = data.body.TableNames[i];
                botonBorrar.innerText = "Eliminar colección";
                celdaEliminar.appendChild(botonBorrar);
                botonBorrar.addEventListener('click',eliminarColec);
            }
        });
}

function agregar() {
    let idTabla = this.id;
    sessionStorage.setItem('nombreTabla',idTabla);
    window.location.href = 'agregarTarea.html';
}

function verToDos() {
    let idTabla = this.id;
    sessionStorage.setItem('nombreTabla',idTabla);
    window.location.href = 'verToDo.html';
}

function eliminarColec() {
    let idTabla = this.id;
    sessionStorage.setItem('nombreTabla',idTabla);

    var params = {
        name: idTabla
    }

    if (confirm("Estás seguro de querer eliminar esa tabla")){
        fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/deletecol',{
            method:'DELETE',
            body: JSON.stringify(params),
            headers: {'Content-Type':'application/json'},
            mode: "cors"
        });
    }

}


