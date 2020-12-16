'use strict'

function agregarToDo() {

    var name = sessionStorage.getItem('nombreTabla');
    var todo = document.getElementById("todo").value;

    if (todo) {

        console.log(name);
        console.log(todo);

        var params = {
            name:name,
            todo:todo
        }

        fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/postdata', {
            method:'POST',
            body: JSON.stringify(params),
            headers: {'Content-Type':'application/json'},
            mode: "cors"
        })
            .then(data => {
                if (data) {
                    alert("Se ha agregado un nuevo ToDo a la coleccion");
                    window.location.href='verToDo.html'
                } else {
                    alert("No se ha podido agregar el ToDo");
                }
            });

    } else {
        alert("Por favor primero llene el espacio en blanco y dele enviar");
    }

}
