const beginnerBtn = document.getElementById('beginnerBtn');
const intermediateBtn = document.getElementById('intermediateBtn');
const advancedBtn = document.getElementById('advancedBtn');
const mixedBtn = document.getElementById('mixedBtn');
const startBtn = document.getElementById('startBtn');

beginnerBtn.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'flex';
    document.body.classList.add('overlay-active');
    startBtn.href = "初級.html";
});

intermediateBtn.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'flex';
    document.body.classList.add('overlay-active');
    startBtn.href = "中級.html";
});

advancedBtn.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'flex';
    document.body.classList.add('overlay-active');
    startBtn.href = "上級.html";
});

mixedBtn.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'flex';
    document.body.classList.add('overlay-active');
    startBtn.href = "ミックス.html";
});


document.getElementById('closeOverlay').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'none';
    document.body.classList.remove('overlay-active');
});


document.getElementById('overlay').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
        document.body.classList.remove('overlay-active');
    }
});