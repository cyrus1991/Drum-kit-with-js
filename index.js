// e here is an obj full of data
function playSound (e) {
    // is there any element on the page that has a data-key of
    // the keycode that we press?
    // so because I am just looking for one element use
    // querySelector if I was looking for many I would use querySelectorAll
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return // stop func from runnig all to gether
    audio.currentTime=0; // rewind to the start
    audio.play();
    key.classList.add('playing'); // its exactly like key.addclass('playig)
    // so that makes a new class to the element
};
function removeTransition (e) {
    if(e.propertyName !== 'transform')  return // skip it if its not a transform
    this.classList.remove('playing')
};
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
// so here I say whenever I click on the key playSound function
// should get called (run)
window.addEventListener('keydown', playSound)
