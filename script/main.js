let count = document.getElementById('count').value;
count = 0;
function increse() {
    count++;
    document.getElementById('count').innerHTML = count;
}
function decrese() {
    count--;
    document.getElementById('count').innerHTML = count;
}
function two() {
    count += 2;
    document.getElementById('count').innerHTML = count;
}