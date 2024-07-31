const containerEl= document.querySelector(".container");

const careers = ["HOMME", "MACHETTE", "MACHINE", "ROBO"];//les éléments à fait défiler

/*changer le contenu d'une div*/
let st = 0;

let caracteres = 0 

changeContent()
function changeContent() {
    caracteres++;
  containerEl.innerHTML = `<h1>JE SUIS ${careers[st].slice(0,2)=== "MA"?"UNE" : "UN" }  ${careers[st].slice(0,caracteres) }</h1>`;
  
  if (caracteres === careers[st].length) {
    caracteres = 0;
    st++;
    if (st === careers.length) st = 0;
  }
  setTimeout(changeContent, 400);
}