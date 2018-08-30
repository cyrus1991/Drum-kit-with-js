

// so here we say whenever i click on the key that function 
// should get called (run)
// nad the e here is an obj full of data

window.addEventListener('keydown',function (e) {
    // is there any element on the page that has a data-key of 
    // the keycode that we press?
    // so because I am just looking for one element use 
   // querySelector if I was looking for many I would use querySelectorAll
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
if (!audio) return // stop func from runnig all to gether
audio.currentTime=0; // rewind to the start 
audio.play();
    console.log(key)
});


