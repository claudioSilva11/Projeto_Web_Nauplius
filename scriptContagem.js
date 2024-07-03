document.getElementById('botaoBaixarImagem').addEventListener('click', function() {
    const imageDiv = document.getElementById('upload-imagem');
    const style = window.getComputedStyle(imageDiv);
    const backgroundImage = style.getPropertyValue('background-image');
    const imageUrl = backgroundImage.slice(5, -2);

    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'imagem-contada.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});