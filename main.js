const btnGenerate = document.querySelector("#generate-pdf");

btnGenerate.addEventListener('click', () =>{
    
    // conteudo do pdf
    const content = document.querySelector("#pdf");

    const options = {
        margin: [10, 10, 10, 10],
        filename: "musica_fogueira.pdf",
        html2canvas: {scale: 3},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }
    // Gerar e baixar o pdf
    html2pdf().set(options).from(content).save();
});