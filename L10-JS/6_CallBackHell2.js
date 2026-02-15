function Download(url, cb) {
    console.log("Download starts")
    setTimeout(() => {
        console.log("Download ends")
        let movie = url.split('/').pop();
        cb(movie);
    }, 2000);
}

function Compression(movie, cb) {
    console.log("Compression starts")
    setTimeout(() => {
        console.log("Compression ends")
        let compressedMovie = movie.split('.')[0] + '.zip';
        cb(compressedMovie);
    }, 2000);
}

function Uploading(compressedMovie, cb) {
    console.log("Uploading starts")
    setTimeout(() => {
        console.log("Uploading ends")
        let newUrl = 'http://codingblocks.com/newMovies/'+compressedMovie
        cb(newUrl)
    }, 2000);
}

let url = 'http://codingblocks.com/movies/datastructures.mp4'
Download(url, function (movie) {
    console.log("Movie Download Complete", movie);
    Compression(movie, function (compressedMovie) {
        console.log("Movie Compression Complete", compressedMovie);
        Uploading(compressedMovie, function(newUrl){
            console.log("Movie uploaded at",newUrl);
        })
    })
})