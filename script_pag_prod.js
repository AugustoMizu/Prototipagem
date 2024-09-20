// zoom over imagem do produto
const conteiner = document.getElementsByClassName("produto_IMG_container");
const img_produto = document.getElementById("img_produto");

for (let i = 0; i < conteiner.length; i++) { // zoom over acompanhando o cursor
    conteiner[i].addEventListener("mousemove", (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;
        console.log(x, y);
        img_produto.style.transformOrigin = `${x}px ${y}px`;
        img_produto.style.transform = "scale(2)";
    });
}

for (let i = 0; i < conteiner.length; i++) { //retorna a posição original ao tirar o cursor
    conteiner[i].addEventListener("mouseleave", (e) => {
        img_produto.style.transformOrigin = "center center";
        img_produto.style.transform = "scale(1)";
    });
} ////

// selecionar a cor do sapato 
const colorBar = document.querySelector('.color_bar');

colorBar.addEventListener('click', (e) => {
  const selectedItem = e.target.closest('.color_img');
  if (selectedItem) {
    const items = colorBar.querySelectorAll('.color_img');

    for (const item of items) {
      item.classList.remove('selecionado');
    }
    selectedItem.classList.add('selecionado');
  }
});////

// selecionar tamanho do sapato 
const sizeBarConteiner = document.querySelector('.size_bar');

sizeBarConteiner.addEventListener('click', (e) => {
    const selectedItem = e.target.closest('.size_bar_item');
    if (selectedItem) {
      const items = sizeBarConteiner.children;
      if(!selectedItem.classList.contains('selecionado')){// Adiciona ou remove a classe selecionado ao tamanho do sapato

        for (const item of items) {
            item.classList.remove('selecionado');
          }
    }
    selectedItem.classList.toggle('selecionado');
    //
}
  });////

// slider multi elements
 

//
