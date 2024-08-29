var box = document.getElementsByClassName("box")
for (let i = 0; i < box.length; i++) {
  let bntPlus = box[i].children[4].children[2]
  let nombre = box[i].children[4].children[1]
  let total = box[i].children[3].children[1]
  let prixUni = box[i].children[2].children[1]
  let qty = parseInt(nombre.innerText)
  let prixUnit = parseInt(prixUni.innerText)
  //calcule-total-unitaire-des-articles
  bntPlus.addEventListener('click', function () {
    qty++;
    nombre.innerText = qty;
    total.innerText = prixUnit * qty;
    somme()
  })

  let bntmoins = box[i].children[4].children[0]

  bntmoins.addEventListener('click', function () {
    qty--;
    nombre.innerText = qty;
    total.innerText = prixUnit * qty;
    somme()
  })
  let like = box[i].children[5].children[0].children[0]
    like.addEventListener('click',function() {
        if (like.style.color === "red") {
            like.style.color = "black"
        }
        else {
            like.style.color = "red"
        }
    })
    let supprr=box[i]
    let supr=box[i].children[5].children[1]
    if (supprr) {
         supr.addEventListener("click", function () {
                  supprr.remove();
               
             })
         }  
} 
let tota1 = document.getElementById("tyu")
function somme() {
  let sum = 0;
  let total = document.getElementsByClassName("price")
  for (let index = 0; index < total.length; index++) {
    let totalUnit = parseInt(total[index].innerText)
    console.log(totalUnit);
    sum = sum + totalUnit

  }
  tota1.innerHTML = sum
} 



































