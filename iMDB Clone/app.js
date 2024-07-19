let movies = document.querySelector(".movies");
let trailerFrame = document.getElementById("trailerFrame");

function movie() {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=99599ce35b020851316897f1a89f5053`)
        .then((res) => res.json())
        .then((data) => {
            let movieData = data.results.map((item) => {
                console.log(item)   
                return `<div class="card" data-id="${item.id}">
               
                    <div class="img">
                        <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.title}">

                        <div class="fav">
                <i class="fa-solid fa-plus"></i>
                </div>
                    </div>
                     
                    <div class="content">

                    <h2 class="title">${item.title}</h2>
                    <div class="trailerPlay">
                    <button class="play-button" data-title="${item.title}">
                    
                    <i class="fa-solid fa-play"></i></button>
                    <h3>Trailer</h3>
                    </div>
                    </div>
                </div>`;
            }).join("");

            movies.innerHTML = movieData;

            document.querySelectorAll(".play-button").forEach(button => {
                button.addEventListener("click", event => {
                    let title = event.target.closest('button').getAttribute("data-title");
                    fetchTrailer(title);
                });
            });
        });
}

function fetchTrailer(title = 'titanic') {
    let apiKey = 'AIzaSyCExTvXD64Z3ndrdB3wLDf_GAoBG8oFq88';
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title} trailer&key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.items && data.items.length > 0) {
                let videoId = data.items[0].id.videoId;
                trailerFrame.src = `https://www.youtube.com/embed/${videoId}`;
                window.scrollTo(0, 0); // Add this line
            } else {
                document.querySelector(".noTrailer").style.display = "block"
                console.log("No trailer found.");
            }
        })
        .catch((error) => {
            console.error("Error fetching trailer:", error);
        });
}
fetchTrailer();

movie();
