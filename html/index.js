function call(){
    let message = document.getElementById("name").value;
    console.log('hello '+ message);
    document.getElementById('output').innerText = 'hello ' + message;
}