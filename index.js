let imageContainer = document.querySelector(".images-container");
let req =  new XMLHttpRequest();
req.open('get','https://freetestapi.com/api/v1/movies',true);
req.send();
let structure = '';
req.onload = ()=>{
    if (req.status == 200) {
        const responses = JSON.parse(req.response);
        responses.forEach((response)=>{
    structure += `<a class="card-wrap" href = "${response.trailer}" target="_blank>
            <div class="image-wrap">
                <img src="${response.poster}" alt="movies" class="image">
            </div>
            <div class="movies-description">
                <span class="movie-name">${response.title}</span>
                <span class="rating">${response.rating}</span>
            </div>
            <div class="black-card"><i class="fal fa-play"></i></div>
        </a>`
        // console.log(response);
        })
        // console.log(structure);
    imageContainer.innerHTML = structure;
    } else {
        console.log("error");
        
    }
}