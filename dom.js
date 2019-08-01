let paragraph = document.getElementById('hello_world');
console.log(paragraph);

paragraph.style.color = 'red';
paragraph.style.fontSize = '33px';

function touchme(){
    let div_class = document.getElementsByClassName('div_change_color');
    console.log(div_class);

    div_class[0].style.backgroundColor = 'yellow';
    div_class[0].style.opacity = '1';
}