function add(c) {
    document.getElementById('display').value += c;
}
function answer() {
    let operation = document.getElementById('display');
    let result = eval(operation.value);
    operation.value = result;
}
function reset() {
    document.getElementById('display').value = null;
}