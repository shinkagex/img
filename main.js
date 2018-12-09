window.onload = function() {
    console.log("Chamou main.js")    
    var fileInput = document.getElementById('imagem')
    var preview = document.getElementById('preview')

    fileInput.addEventListener('change',function(e){
        var file = fileInput.files[0];
        var reader = new FileReader()

        reader.onload = function(e){
            preview.innerHTML = ""

            var img = new Image();
            img.src = reader.result;

            preview.appendChild(img)
            console.log(reader.result+"main.js")
        }

    })
    
}