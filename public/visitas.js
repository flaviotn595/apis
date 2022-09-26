// Contador de visita no site
function getvisitor(){
  var xhr = new XMLHttpRequest();
  var url = 'https://api.countapi.xyz/hit/jg-bots_api.herokuapp.com/visits';
  xhr.onloadend = function(){
  data = JSON.parse(this.responseText);
  document.getElementById("visits").textContent = data.value
  };
  xhr.open("GET", url, true);
  xhr.send();
  }
