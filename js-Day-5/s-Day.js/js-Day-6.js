document.getElementById("btn").addEventListener("click", ()=>{
    // create an image element
    const image = document.createElement("img");
    // set the source of the image
    image.src = "https://th.bing.com/th/id/OIP.ylGmU2gFzeHk8LLizd-T3wHaEJ?w=160&h=108&c=7&qlt=90&bgcl=5109bb&r=0&o=6&dpr=1.3&pid=13.1";
    // set the width and height of the image
    image.width = 300;
    image.height = 200;
    // append the image to the content div
    document.querySelector(".content").appendChild(image);
} );