colors = [
    'red',
    'blue',
    'green',
    'orange',
    'yellow',
    'indigo',
    'violet'
]

let input = document.getElementById("color_input");
let btn = document.getElementById("btn");
let github = document.getElementById("github");

function submit(){
    value = input.value;
    if (value.trim().length === 0){
        alert('Sorry but the input cannot be empty.');
    }else{
        if (colors.includes(value.trim().toLowerCase())){
            location.href = `colors/${value}.html`;
        }else{
            alert('Sorry, the entered color is not in library. But, if you want to add it, then you can. Just go to the Github repository of this website and contribute to that. ^_^');
        }
    }
}

btn.addEventListener("click",submit);
github.addEventListener("click",function(){
    window.open('','_blank')
})
