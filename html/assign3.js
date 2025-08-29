function show(){
    let a = document.getElementById('in').value;
    document.getElementById('dis').innerHTML = a;
}

let lists = ['a','b','c','d'];
let l = "";
for(let i =0;i<lists.length;i++){
l+= "<li>"+lists[i]+"</li>";
}
document.getElementById('list').innerHTML = l;

let c = [];

function showcityfun() {
  let city = document.getElementById('showcity1').value;
  c.push(city);

  let html = "";
  for (let i = 0; i < c.length; i++) {
    html += "<li>" + c[i] + "</li>";
  }

  document.getElementById('showcity').innerHTML = html;
}
