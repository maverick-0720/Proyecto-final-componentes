'use strict'

function sendNewTable() {

    var name = document.getElementById("coleccion").value;

    if (name) {

        var params = {
            name:name
        }

        fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/createcol', {
            method:'POST',
            body: JSON.stringify(params),
            headers: {'Content-Type':'application/json'},
            mode: "cors"
        })
            .then(data => {
                if (data) {
                    alert("Se ha creado una nueva tabla");
                    window.location.href='verColec.html';
                } else {
                    alert("No se ha podido crear una nueva tabla");
                }
            });

    } else {
        alert("Por favor primero llene el espacio en blanco y dele enviar");
    }
}


