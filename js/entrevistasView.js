


export function apresentarEntrevistas(entrevistas){

    let div = document.querySelector(".row");
    let componente = "";

    entrevistas.forEach(entrevistas => {
        componente = componente  + `
        <div class="col-md-6 col-lg-4">
          <div class="box"> <!-- appendChild-->
            <div class="img-box">
              <img src="images/${artista.imagem}" alt="">
            </div>
            <div class="detail-box">
              <h5>
                ${artista.nome_artista}
              </h5>
              <div class="price_box">
                <h6 class="price_heading">
                  ${artista.cidade}
                </h6>
                <a href="">
                  ${artista.estado}
                </a>
              </div>
            </div>
          </div>
        </div>`;                
    });
    div.innerHTML = componente;
    
}
