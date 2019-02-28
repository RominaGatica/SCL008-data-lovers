/* Manejo del DOM */


const data = window.POKEMON.pokemon;
const container = document.getElementById('root');
container.innerHTML ="";

const showData = (data) => {
    data.forEach(element => {
        container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.weaknesses}">
        <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.weaknesses}</p>
        </div>
        </div>`
})
}

document.getElementById('select-weaknesses').addEventListener('change', () => {
 let condition = document.getElementById('select-weaknesses').value;
 let result = window.filterData(data,condition);

 container.innerHTML ="";
 result.forEach(element => {
     container.innerHTML += `<div class="card">
     <img src="${element.img} " class="card-img-top" alt"${element.weaknesses}">
     <div class="card-body">
     <p class="card-text">${element.name}</p>   
     <p class="card-text">${element.weaknesses}
     </div>
     </div>`
 })
})
;
const showData2 = (data) => {
    data.forEach(element => {
        container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.type}">
        <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.type}</p>
        </div>
        </div>`
    })
}


document.getElementById('select-type').addEventListener('change', () => {
    let condition = document.getElementById('select-type').value;
    let result = window.filterDataType(data,condition);

    container.innerHTML ="";
    result.forEach(element => {
        container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.type}">
        <div class="card-body">
        <p class="card-text">${element.name}</p> 
        <p class="card-text">${element.type}</p>
        </div>
        </div>`
   })   

}); 
 
/* const sortData = (data) => {
    data.sort(element => {

    })
} */

window.onload = showData(data);
window.onload = showData2(data);