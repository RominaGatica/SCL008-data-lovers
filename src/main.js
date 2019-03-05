/* Manejo del DOM */
const data = window.POKEMON.pokemon;
const container = document.getElementById('root');
container.innerHTML ="";

//Filtro por debilidad de pokemon//

const showData = (data) => {
    container.innerHTML += data.forEach(element => {`<div class="col-sm-12 col-md-4 col-lg-3"><div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.weaknesses}">
        <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.weaknesses}</p>
        </div>

        </div>`
})
};

document.getElementById('select-weaknesses').addEventListener('change', () => {
 let condition = document.getElementById('select-weaknesses').value;
 let result = window.filterData(data,condition);

container.innerHTML ="";
 result.forEach(element => {
 })
})
;

//Filtro por tipo de pokemon//

const showData2 = (data) => {
    data.forEach(element => {
    container.innerHTML += `<div class="col-sm col-md-4 col-lg-3"><div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.type}">
        <div class="card-body">
        <p class="card-text">${element.name}</p>
        <p class="card-text">${element.type}</p>
        </div>
        </div>
        </div>`
})
}

document.getElementById('select-type').addEventListener('change', () => {
    let condition = document.getElementById('select-type').value;
    let result = window.filterDataType(data,condition);

    container.innerHTML ="";
    result.forEach(element => {
        container.innerHTML += `<div class="col-sm col-md-4 col-lg-3"><div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.type}">
        <div class="card-body">
        <p class="card-text">${element.name}</p> 
        <p class="card-text">${element.type}</p>
        </div>
        </div>
        </div>`
})   

});

//Ordenar pokemon por nombre//

const sortData2 = (data) => {
    data.sort(element => {
    container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.name}">
        <div class="card-body">
        <p class="card-text">${element.name}</p>
        </div>
        </div>`
})
};

document.getElementById('select-name').addEventListener('change', () => {

   
   let sortOrder = document.getElementById('select-name').value;
 
   let result = window.sortData(data,sortOrder);

container.innerHTML ="";
result.sort(element => {
        container.innerHTML += `<div class="card">
        <img src="${element.img}" class="card-img-top" alt="${element.name}">
        <div class="card-body">
        <p class="card-text">${element.name}</p>
        </div>
        </div>`
})
});

window.onload = sortData(data); 
window.onload = showData(data);
window.onload = showData2(data);
