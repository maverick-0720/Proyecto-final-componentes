
function traerToDo() {
    fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/getdata')
        .then((res,err) => {
            if (res) {
                return res.json();
            }
        })
        .then(data => {
            let tabla = document.getElementById("coleccion");
            tabla.innerHTML = "";
        })
}
