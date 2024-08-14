export function apresentarArtistas(artistas){

    let div = document.querySelector(".row");
    let componente = "";

    artistas.forEach(artista => {
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
                  <span>$</span> ${artista.cidade}
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
