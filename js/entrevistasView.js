
export function apresentarEntrevistas(entrevistas){

    let div = document.querySelector(".row");
    let componente = "";

    entrevistas.forEach(entrevista => {
        componente = componente  + `
        <div class="row">
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
            <img src="images/${entrevista.imagem}" alt="">
            </div>
            <div class="detail-box">
              <h5>
              ${entrevista.nome}
              </h5>
              <p>
              ${entrevista.dados_entrevista}
              </p>
              <a href="">
                Read  ${artista.estado} More
              </a>
            </div>
          </div>
        </div>
      </div>`;                
    });
    div.innerHTML = componente;  
}
