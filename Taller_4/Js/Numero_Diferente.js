
app = $("#app")
app.addClass('font_blackout')


function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min)
}


coordenada_row = getRandomArbitrary(1, 12)
coordenada_cell = getRandomArbitrary(1, 12)
console.log(coordenada_row, coordenada_cell) 

for (let row = 0; row < 12; row++) {
    div_row = document.createElement("div")
    div_row.classList.add('row')
    const element_row = row;
    for (let cell = 0; cell < 12; cell++) {
        const element_cell = cell;
        div_cell = document.createElement("div")
        div_cell.classList.add('col')
        div_cell.textContent = "9"
        if (row == coordenada_row && cell == coordenada_cell) { 
            div_cell.textContent = "8" 
            div_cell.setAttribute("id", "win");
        }
        div_row.append(div_cell)
    }
    app.append(div_row)
}

$("#win").click(ganaste)
function ganaste(){
    alert('felicidades ganaste')
}