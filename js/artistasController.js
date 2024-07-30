
import { apresentarArtistas } from "./artistasView.js";

const btnMPB = document.querySelector(".btnMPB");
let idGenero = btnMPB.id;

btnMPB.addEventListener("click",() => {
    fetch(`http://localhost:5000/artistas/bygenero/${idGenero}`).then(response => {
        if (!response.ok){
            console.log("Falha");
        }
        return response.json();
    }).then(dados => {
        apresentarArtistas(dados);      
    });
});