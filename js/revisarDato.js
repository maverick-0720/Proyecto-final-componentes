function cerrarSesion() {
    sessionStorage.clear();
    window.location.href='loginToDo.html';
}

function verificarUser(){
    if (sessionStorage.getItem('idUsuario')) {}
    else {
        alert("Por favor, ingrese datos");
        window.location.href='loginToDo.html';
    }
}
