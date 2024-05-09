fetch("https://thronesapi.com/api/v2/Characters", {
    method: "GET"
}).then(res => res.json())
.then(characters =>{
const select = document.querySelector("select");
let divImage = document.querySelector("div") ;
let image = document.querySelector("img");
let options =  [];
characters.forEach(element => {
    const name = element.fullName;
    if (!options.includes(name)) {
        options.push(name);
        let option = document.createElement("option");
        option.textContent = name;
        select.append(option);
    }
});

    
     
     select.addEventListener("change",function(){
        divImage.innerHTML ="";
        
         let picture = []; 
         let altPicture = [];
        for (let index = 0; index < characters.length; index++) {
           
            if (select.value == characters[index].fullName) {
            picture.push(characters[index].imageUrl);
                altPicture.push(characters[index].fullName)
            }
        }
        image.src = picture; 
        image.alt = altPicture;
        divImage.append(image)
     })
})
.catch(error => 
    alert("Ha ocurrido un error:" + error.message)
)
