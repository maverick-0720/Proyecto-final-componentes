
function verificarDatos() {

    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/getdata/getAdmin')
        .then(data => {
            return data.json();
        })
        .then(data => {
            if (login === data.body.Item.user && password === data.body.Item.keyword) {
                alert("Bienvenido administrador");
                window.location.href='index.html'
            }
            else
                alert("Usuario o contraseña incorrecta");
        })


}
