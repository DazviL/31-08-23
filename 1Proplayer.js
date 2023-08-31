document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o botão e o conteúdo das dicas
    const preparationButton = document.getElementById("preparation-button");
    const preparationTips = document.getElementById("preparation-tips");

    // Esconder o conteúdo das dicas no início
    preparationTips.style.display = "none";

    // Adicionar um ouvinte de clique ao botão
    preparationButton.addEventListener("click", function() {
        // Alternar a exibição das dicas
        if (preparationTips.style.display === "none") {
            preparationTips.style.display = "block";
        } else {
            preparationTips.style.display = "none";
        }
    });
});
