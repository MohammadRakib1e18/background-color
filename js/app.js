// two-dimensional array to contain RGB color-set.
let choice = [
    // initial picker's color
    // red       green        cyan        blue       yellow
    [255,0,0], [0,128,0], [0,255,255], [0,0,255], [255,255,0]
]

let setPickerColor = () => {
    console.log(choice[0]);
    document.getElementById('red').style.backgroundColor   = `rgb(${choice[0][0]},${choice[0][1]},${choice[0][2]})`;
    document.getElementById('green').style.backgroundColor = `rgb(${choice[1][0]},${choice[1][1]},${choice[1][2]})`;
    document.getElementById('cyan').style.backgroundColor  = `rgb(${choice[2][0]},${choice[2][1]},${choice[2][2]})`;
    document.getElementById('blue').style.backgroundColor  = `rgb(${choice[3][0]},${choice[3][1]},${choice[3][2]})`;
    document.getElementById('yellow').style.backgroundColor= `rgb(${choice[4][0]},${choice[4][1]},${choice[4][2]}`;
}
// Set the background color with the selected color.
const setBackgroundColor = color => {
     document.getElementById('body').style.backgroundColor =`rgb(${color[0]},${color[1]},${color[2]})`;
}
// initial background color.
setBackgroundColor([136, 171, 0]);

// get the selected color.
document.getElementById('buttons').addEventListener('click', function(event){
    const getIdColorName = event.target.id;

    switch (getIdColorName) {
        case 'red': setBackgroundColor(choice[0]);
            break;
        case 'green': setBackgroundColor(choice[1]);
            break;
        case 'cyan': setBackgroundColor(choice[2]);
            break;
        case 'blue': setBackgroundColor(choice[3]);
            break;
        case 'yellow': setBackgroundColor(choice[4]);
    }
})

// set initial/default color(white) 
document.getElementById('default').addEventListener('click', function(){
    document.getElementById('body').style.setProperty('background-color', 'initial');
})



// generate new color set using Random-number
// 255 indicates the highest possible value of rgb()-parameters.
document.getElementById('new-colorSet').addEventListener('click', function(){
    for(let i=0; i<5; i++){
        choice[i][0]=parseInt(Math.random()*255);
        choice[i][1]=parseInt(Math.random()*255);
        choice[i][2]=parseInt(Math.random()*255);
    }
    setPickerColor();
})