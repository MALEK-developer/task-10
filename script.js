let secVar = document.querySelector('.section');
let numVar = document.querySelector('.num');
let plusVar = document.querySelector('.btn-success');
let minVar = document.querySelector('.btn-dark');
let resVar = document.querySelector('.btn-danger');
let showVar = document.querySelector('.show');
let textVar = document.querySelector('.text');
let start = false;
showVar.style.opacity = '0';
setTimeout(() => {
    start = true;
    if (!start) {
        showVar.style.opacity = '0';
    }
    else {
        showVar.style.opacity = '1';
    }
}, 3000);

plusVar.addEventListener('click', () => {
    start = false;
    if (!start) {
        showVar.style.opacity = '0';
    }
    else {
        showVar.style.opacity = '1';
    }
    numVar.innerHTML++;
    if (numVar.innerHTML > 0) {
        secVar.style.backgroundColor = 'green';
    }
    else if (numVar.innerHTML < 0) {
        secVar.style.backgroundColor = 'red';
    }
    else {
        secVar.style.backgroundColor = 'gray';
    }

    setTimeout(() => {
        start = true;
        if (!start) {
            showVar.style.opacity = '0';
        }
        else {
            showVar.style.opacity = '1';
        }
    }, 3000);
    start = false;
});

minVar.addEventListener('click', () => {
    start = false;
    if (!start) {
        showVar.style.opacity = '0';
    }
    else {
        showVar.style.opacity = '1';
    }
    numVar.innerHTML--;
    if (numVar.innerHTML > 0) {
        secVar.style.backgroundColor = 'green';
    }
    else if (numVar.innerHTML < 0) {
        secVar.style.backgroundColor = 'red';
    }
    else {
        secVar.style.backgroundColor = 'gray';
    }

    setTimeout(() => {
        start = true;
        if (!start) {
            showVar.style.opacity = '0';
        }
        else {
            showVar.style.opacity = '1';
        }
    }, 3000);
    start = false;
});

resVar.addEventListener('click', () => {
    start = false;
    if (!start) {
        showVar.style.opacity = '0';
    }
    else {
        showVar.style.opacity = '1';
    }
    setTimeout(() => {
        numVar.innerHTML = 0;
        secVar.style.backgroundColor = 'gray';
        setTimeout(() => {
            start = true;
            if (!start) {
                showVar.style.opacity = '0';
            }
            else {
                showVar.style.opacity = '1';
            }
        }, 3000);
    }, 2000);
    start = false;
});

document.addEventListener('keypress', () => {
    if (event.key) {
        if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8' || event.key == '9' || event.key == '10') {
            textVar.innerHTML = null;
        }
        else {
            textVar.innerHTML = event.key;
        }
    }
    start = false;
    if (!start) {
        showVar.style.opacity = '0';
    }
    else {
        showVar.style.opacity = '1';
    }
    setTimeout(() => {
        start = true;
        if (!start) {
            showVar.style.opacity = '0';
        }
        else {
            showVar.style.opacity = '1';
        }
    }, 3000);
});