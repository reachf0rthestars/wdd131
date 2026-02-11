
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      }
    ];

    movies.forEach(movie => {
      const movieSummary = `
        <article class="movie">
        <h2>${movie.title}</h2>
        <img src="${movie.imgSrc}" alt="${movie.imgAlt}">
        <p>${movie.genre} - ${movie.stars}</p>
        <p>${movie.date}</p>
        <p>${movie.description}</p>
        <p>${movie.ages}</p>
        `;
        document.getElementById("movie-list").innerHTML += movieSummary;

        // Code for going through each movie and creating content for that movie
    
    });
     
    

// const movieSummary = `
//   <div class="movie-summary">
//     <h2>${movie.title}</h2>
//     <p>${movie.genre} - ${stars}</p>
//   </div>
// `;




// document.getElementById("movie-list").innerHTML += movieSummary;            

// let html =`<article class="movie">
//       <h2>Spider-Man: Into the Spider-Verse</h2>
//       <img src="https://wddbyui.github.io/wdd131/images/spiderman.png" alt="Miles Morales swinging through the city">
//       <p><strong>Release Date:</strong> Dec 14, 2018</p>
//       <p><strong>Recommended Age:</strong> 10+</p>
//       <p><strong>Genre:</strong> Action/Adventure</p>
//       <p><strong>Rating:</strong> <span aria-label="5 out of 5 stars" role="img">⭐⭐⭐⭐⭐</span></p>
//       <p id='desc'>Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.</p>
//     </article>`
// const movielist = document.getElementById('movie-list');
// movielist.innerHTML = html;