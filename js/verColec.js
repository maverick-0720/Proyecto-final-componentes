'use strict'

function traerTablas() {
        fetch('https://nu3t44r9jf.execute-api.us-east-2.amazonaws.com/prod/getcols')
            .then((res, err) => {
                if (res) {
                    return res.json();
                }
            })
            .then(data => {
                console.log(data.body);
            });
}


