const originView = document.querySelector('.links');
const currentView = document.querySelector('.currentview');
const allLinks = document.querySelectorAll('.link');
function search(v) {
    console.log(v);
    console.log(originView);
    console.log(currentView);
    if (v == "") {
        originView.classList.remove('dpnone')
        currentView.classList.add('dpnone');
    } else {
        originView.classList.add('dpnone');
        currentView.classList.remove('dpnone')
    };
    let currentLink = document.querySelectorAll('div
}