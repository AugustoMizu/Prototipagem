// function zoom hover over
const conteiner = document.getElementsByClassName("produto_IMG_container");
const img_produto = document.getElementById("img_produto");

for (let i = 0; i < conteiner.length; i++) {
    conteiner[i].addEventListener("mousemove", (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        console.log(x, y);
        img_produto.style.transformOrigin = `${x}px ${y}px`;
        img_produto.style.transform = "scale(2)";
    });
}

for (let i = 0; i < conteiner.length; i++) {
    conteiner[i].addEventListener("mouseleave", (e) => {
        img_produto.style.transformOrigin = "center center";
        img_produto.style.transform = "scale(1)";
    });
}
/////
// slider multi elements
 

//
