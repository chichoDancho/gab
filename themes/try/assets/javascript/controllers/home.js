window.addEventListener('load', function () {
    const viewportFilm = document.querySelector('.home-main-content-box-films');
    let film = document.getElementById('myFilm')
    viewportFilm.addEventListener('mouseover', function (e) {
        const isPlaying = film.currentTime > 0 && !film.paused && !film.ended
            && film.readyState > 2;

        if (!isPlaying) {
            film.play();
        }
    }, false);

    viewportFilm.addEventListener('mouseout', function (e) {
        const isPlaying = film.currentTime > 0 && !film.paused && !film.ended
            && film.readyState > 2;

        if (isPlaying) {
            film.pause();
        }

    }, false);




    const viewport = document.querySelector('.home-main-content-box-videos');
    let video = document.getElementById('myVideo')
    viewport.addEventListener('mouseover', function (e) {
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > 2;

        if (!isPlaying) {
            video.play();
        }
    }, false);

    viewport.addEventListener('mouseout', function (e) {
        const isPlaying = video.currentTime > 0 && !video.paused && !video.ended
            && video.readyState > 2;

        if (isPlaying) {
            video.pause();
            // video.currentTime = 0;
        }

    }, false);
})