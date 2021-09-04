const setColor = color => {
     document.getElementById('body').style.backgroundColor =color;
}

document.getElementById('buttons').addEventListener('click', function(event){
    const getIdColorName = event.target.id;
    setColor(getIdColorName);
})

document.getElementById('default').addEventListener('click', function(){
    document.getElementById('body').style.setProperty('background-color', 'initial');
})

setColor('orange');