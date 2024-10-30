
import { apresentarEntrevistas } from "./entrevistasView.js";

const btnMPB = document.querySelector(".btnMPB");
let idGenero = btnMPB.id;


btnMPB.addEventListener("click",() => {
    fetch(`http://localhost:5000/entrevistas/bygenero/${idGenero}`).then(response => {
        if (!response.ok){
            console.log("Falha");
        }
        return response.json();
    }).then(dados => {
        apresentarEntrevistas(dados);      
    });
});

const btnForro = document.querySelector(".btnForro");
let idGenero1 = btnForro.id;

btnForro.addEventListener("click",() => {
    fetch(`http://localhost:5000/entrevistas/bygenero/${idGenero1}`).then(response => {
        if (!response.ok){
            console.log("Falha");
        }
        return response.json();
    }).then(dados => {
        apresentarentrevistas(dados);      
    });
});

const btnSertanejo= document.querySelector(".btnSertanejo");
let idGenero2= btnSertanejo.id;

btnSertanejo.addEventListener("click",() => {
    fetch(`http://localhost:5000/entrevistas/bygenero/${idGenero2}`).then(response => {
        if (!response.ok){
            console.log("Falha");
        }
        return response.json();
    }).then(dados => {
        apresentarentrevistas(dados);      
    });
});
const btnSamba= document.querySelector(".btnSamba");
let idGenero3= btnSamba.id;

btnSamba.addEventListener("click",() => {
    fetch(`http://localhost:5000/entrevistas/bygenero/${idGenero3}`).then(response => {
        if (!response.ok){
            console.log("Falha");
        }
        return response.json();
    }).then(dados => {
        apresentarentrevistas(dados);      
    });
});