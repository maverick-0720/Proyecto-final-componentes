//TODO: HACER UN GET PARA TRAER LOS DATOS Y LUEGO HACER UN PUT/UPDATE SOBRE EL MISMO


function traerDatos() {

    let nombre = sessionStorage.getItem('nombreTabla');
    let codigo = sessionStorage.getItem('idTabla');

    var params = {
        name: nombre,
        cod: parseInt(codigo)
    }

    fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/getdata/uniquedata', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json'},
        mode: "cors"
    })
        .then(data => {
            return  data.json();
        })
        .then(data => {
            document.getElementById("todo").innerHTML = data.body.Item.ToDo;
        })
}

function actDatos() {
    let nombre = sessionStorage.getItem('nombreTabla');
    let codigo = parseInt(sessionStorage.getItem('idTabla'));
    var actualizacion = document.getElementById("todo").value;

    var params = {
        name:nombre,
        id:codigo,
        todo:actualizacion
    }

    fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/updatedata', {
        method: 'PUT',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json'},
        mode: "cors"
    })
        .then(data => {
            if (data) {
                alert("Se ha hecho la actualización del ToDo")
            }
        })
}
