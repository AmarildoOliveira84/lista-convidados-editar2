class Convidado{
    constructor(){
        this.id=0
        this.idEdit =""
        this.edit=false
    }
adicionar(){

let convidado = document.getElementById("convidado").value

if(this.edit==true){
document.getElementById(this.idEdit).childNodes[0].innerText=convidado
}else{




    let div = document.createElement("div")
    div.id="conv-"+this.id
    let span = document.createElement("span")
    span.innerText =convidado
    let img = document.createElement("img")
    img.src="img/delete.svg"
    img.classList.add("img")
    img.setAttribute("onclick", "lista.excluir('"+div.id+"')")
    
    let imgEdit = document.createElement("img")
    imgEdit.src="img/edit.svg"
    imgEdit.setAttribute("onclick", "lista.editar('"+div.id+"')")
    imgEdit.classList.add("img")
    
    div.appendChild(span)
    div.appendChild(img)
    div.appendChild(imgEdit)
    
    let lista = document.getElementById("lista")
    
    lista.appendChild(div)

}




this.id=this.id+1
}
excluir(id){
let conv = document.getElementById(id)

let lista = document.getElementById("lista")
lista.removeChild(conv)

}
editar(id){
let nome = document.getElementById(id).childNodes[0].innerText
document.getElementById("convidado").value=nome

this.edit=true
this.idEdit = id

}
}
var lista = new Convidado()