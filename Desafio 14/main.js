const apiUrl = "http://hp-api.herokuapp.com/api/characters/students";

const xhr = new XMLHttpRequest();

function respuesta() {
    if (this.readyState === 4 && this.status === 200) {

        const data = JSON.parse(this.response);
        
        const htmlDiv = document.querySelector("#app");

        const htmlIncluir = data.map((user) => `<li>El estudiante ${user.name} pertenece a la casa ${user.house}</li>`);

        htmlDiv.innerHTML = `<ul>${htmlIncluir}</u>`;
    }
}

xhr.addEventListener("load", respuesta);
xhr.open("GET", `${apiUrl}`);
xhr.send();