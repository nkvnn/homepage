var video = document.querySelector('.video-poster');
var preview = document.querySelector('.preview');
var playBtn = document.querySelector('.play_btn');

playBtn.addEventListener('click', function () {
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
})

function test() {
    if (video.paused) {
        preview.style.top = '0';
        console.log(1);
    }
    else {
        preview.style.top = '100%';
        console.log(0);
    }

    setTimeout(() => {
        test();
    }, 100);
}

test();