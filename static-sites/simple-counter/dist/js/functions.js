function getMultiplier() {
    return parseInt(multiplier.value);
}

function incMultiplier() {
    multiplier.value++;
}

function decMultiplier() {
    multiplier.value--;
}

function incCounter() {
    
    counter.innerHTML = parseInt(counter.innerHTML) + getMultiplier();
}

function decCounter() {
    counter.innerHTML = parseInt(counter.innerHTML) - getMultiplier();
}

function multiplyCounter() {
    counter.innerHTML = parseInt(counter.innerHTML) * getMultiplier();
}

function divideCounter() {
    counter.innerHTML = Math.round(parseInt(counter.innerHTML) / getMultiplier());
}

function resetCounter() {
    counter.innerHTML = 0;
}