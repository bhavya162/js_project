let fruits_basket =[];
function add(){
    let names="";
    let name = document.getElementById('fruits').value;
    let f = fruits_basket.push(name);
    console.log(fruits_basket);  
    for (let i = 1; i<fruits_basket.length  ; i++){
     names += "<li>" +  fruits_basket[i] + "</li>";

    }
    document.querySelector('ol').innerHTML =  names;
}

