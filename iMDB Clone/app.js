let movies = document.querySelector(".movies");
let trailerFrame = document.getElementById("trailerFrame");
let currentPage = 1;
const defaultMovieId = 
748783; // Default movie ID for initial load

function movie(page) {
    console.log("Fetching movies for page:", page); // Debugging
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=99599ce35b020851316897f1a89f5053&page=${page}`)
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
                            <button class="play-button" data-id="${item.id}">
                                <i class="fa-solid fa-play"></i>
                            </button>
                            <h3>Trailer</h3>
                        </div>
                    </div>
                </div>`;
            }).join("");

            movies.innerHTML = movieData;

            document.querySelectorAll(".play-button").forEach(button => {
                button.addEventListener("click", event => {
                    let movieId = event.target.closest('button').getAttribute("data-id");
                    fetchTrailer(movieId);
                });
            });
        });
}

function fetchTrailer(movieId) {
    let apiKey = 'AIzaSyCExTvXD64Z3ndrdB3wLDf_GAoBG8oFq88';
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=99599ce35b020851316897f1a89f5053&language=en-US`)
        .then(response => response.json())
        .then(movieData => {
            console.log("Movie Data:", movieData); // Debugging
            let trailerTitle = movieData.title + " trailer";
            fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${trailerTitle}&key=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    if (data.items && data.items.length > 0) {
                        let videoId = data.items[0].id.videoId;
                        trailerFrame.src = `https://www.youtube.com/embed/${videoId}`;
                        window.scrollTo(0, 0); // Scroll to top
                        showMovieDetails(movieData); // Show movie details
                    } else {
                        document.querySelector(".noTrailer").style.display = "block";
                        console.log("No trailer found.");
                    }
                })
                .catch(error => {
                    console.error("Error fetching trailer:", error);
                });
        })
        .catch(error => {
            console.error("Error fetching movie details:", error);
        });
}

function showMovieDetails(movieData) {
    let trailerList = document.querySelector(".trailer-list");
    trailerList.innerHTML = `
        <div class="movie-banner">
            <img src="https://image.tmdb.org/t/p/w500${movieData.backdrop_path}" alt="${movieData.title}">
        </div>
        <h2>${movieData.title}</h2>
        <p class="Mrating"><strong>Rating:</strong> ${movieData.vote_average}</p>
        <p><strong>Language:</strong> ${movieData.original_language}</p>
        <p><strong>Overview:</strong> ${movieData.overview}</p>
    `;

    // Fetch cast details
    // fetch(`https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=99599ce35b020851316897f1a89f5053`)
    //     .then(response => response.json())
    //     .then(data => {
    //         let castList = data.cast.slice(0, 5).map(actor => actor.name).join(", ");
    //         let castElement = document.createElement("p");
    //         castElement.innerHTML = `<strong>Cast:</strong> ${castList}`;
    //         trailerList.appendChild(castElement);
    //     })
    //     .catch(error => {
    //         console.error("Error fetching cast details:", error);
    //     });
}



function addToWatchlist(movieId) {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=99599ce35b020851316897f1a89f5053`)
        .then((response) => response.json())
        .then((movie) => {
            let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            let isAlreadyInWatchlist = watchlist.some(item => item.id === movie.id);
            if (!isAlreadyInWatchlist) {
                watchlist.push(movie);
                localStorage.setItem('watchlist', JSON.stringify(watchlist));
                console.log(`${movie.title} added to watchlist`);
            } else {
                console.log(`${movie.title} is already in the watchlist`);
            }
        })
        .catch((error) => {
            console.error("Error adding movie to watchlist:", error);
        });
}





document.addEventListener("DOMContentLoaded", () => {
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    nextButton.addEventListener("click", () => {
        currentPage++;
        console.log("Next button clicked. Current page:", currentPage); // Debugging
        document.querySelector(".page-number").textContent = currentPage;
        movie(currentPage);
    });

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            console.log("Prev button clicked. Current page:", currentPage); // Debugging
            document.querySelector(".page-number").textContent = currentPage;
            movie(currentPage);
        }
    });

    movie(currentPage); // Initial call to load the first page
    fetchTrailer(defaultMovieId); // Initial call to load default trailer and details
});
