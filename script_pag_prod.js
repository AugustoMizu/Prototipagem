const conteiner = document.getElementsByClassName("produto_IMG_container");
const img_produto = document.querySelector("img_produto");

conteiner.addEventeListiner("mousemove", (e) => {
    const x = e.

    console.log(x, y);
    img_produto.style.transformOrigin = `${x}px ${y}px`;
    img_produto.style.transform = "scale(2)";
});

conteiner.addEventeListiner("mouseleave", () => {
    img_produto.style.transformOrigin = "center center";
    img_produto.style.transform = "scale(1)";
});
