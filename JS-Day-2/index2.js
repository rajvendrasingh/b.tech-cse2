// TODAY'S WORK:-
const heading = document.getElementById("myheading");
console.log(heading);

heading.style.color="tomato"
heading.style.backgroundColor="yellow"
heading.textContent="hello students!" 

const subheading= document.getElementsByClassName('subheading')
console.log(subheading)

for(let i=0; i<subheading.length; i++){
    subheading[i].style.color="cyan"
}
