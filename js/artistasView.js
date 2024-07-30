export function apresentarArtistas(artistas){

    console.log("ARTISTAS ################");
    console.log(artistas);

    const linhas = document.querySelector(".row");

    artistas.forEach(artista => {
        const div = document.createElement("div");
        div.class = "col-md-6 col-lg-4";
        
        
    });
    
}
