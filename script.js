const inputFile = document.querySelector("#picture__input");
const upload_imagem = document.querySelector("#upload-imagem");
const mensagem = document.querySelector("#mensagem");

inputFile.addEventListener("change", function (e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function (e) {
            const readerTarget = e.target;
            upload_imagem.style.backgroundImage = `url("${readerTarget.result}")`;
            upload_imagem.style.backgroundSize = "cover";
            upload_imagem.style.backgroundPosition = "center";
            upload_imagem.style.backgroundRepeat = "no-repeat";
            mensagem.innerHTML = "Imagem Carregada";
            const submitButton = document.createElement("button");
            submitButton.type = "submit";
            submitButton.textContent = "Enviar";
            submitButton.className = "btn btn-submit";

            const resetButton = document.createElement("button");
            resetButton.type = "reset";
            resetButton.textContent = "Cancelar";
            resetButton.className = "btn btn-reset";

            upload_imagem.appendChild(submitButton);
            upload_imagem.appendChild(resetButton);

            document.querySelector("#upload-btn").style.visibility = "hidden";
        });

        reader.readAsDataURL(file);
    } else {
        upload_imagem.style.backgroundImage = "";
        mensagem.innerHTML = "Realize contagem de Nauplios em segundos";
    }
});
