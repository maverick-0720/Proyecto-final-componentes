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
                botonVisualizar.addEventListener('click',agregar);

                let botonBorrar = document.createElement('button');
                botonBorrar.id = data.body.TableNames[i];
                botonBorrar.innerText = "Eliminar colección";
                celdaEliminar.appendChild(botonBorrar);
                botonBorrar.addEventListener('click',agregar);

                // valor[i] = data.body.TableNames[i];
                // var linea = "<tr><td id='columnas'>" + "<h2>" +data.body.TableNames[i] + "</h2>" + "</td><td id='columnas'>" +"<h2><button onclick='agregar()' id='3'>"+ "agregar tarea" + "</button>" + "</td></tr>";
                // document.getElementById("coleccion").insertAdjacentHTML("beforeend", linea);
            }
        });
}

function agregar() {
    let idTabla = this.id;
    sessionStorage.setItem('idTabla',idTabla);
    window.location.href = 'agregarTarea.html';
}


