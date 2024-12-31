const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container')
const overlay = document.querySelector('.overlay')

question.addEventListener('click', function(e) {
    overlay.style.display = 'block';
} );

btn.addEventListener('click', function() {
    overlay.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});

