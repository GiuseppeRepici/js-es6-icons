const datiIcone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const iconContainer = document.querySelector(".row");
const selected = document.getElementById("selezione");

selected.addEventListener("change" , function(){
    iconContainer.innerHTML="";
    console.log(selected.value);
    datiIcone.forEach(function (element,i) {
        let contentContainer = document.createElement("div");
        contentContainer.classList.add("mycard" , "col-3" , "justify-content-center" , "align-items-center");
        let icon = document.createElement("i"); 
        let name = document.createElement("p");
       
        if(selected.value===element.type){
            icon.innerHTML +=`<i style="color:${element.color}" style="text-align:center" class="${element.family} ${element.prefix}${element.name}"></i>`;
            name.innerHTML +=`<p>${element.name}</p>`;
            contentContainer.classList.toggle("block");
            contentContainer.append(icon);
            icon.append(name);
            iconContainer.append(contentContainer);
        } else if(selected.value==="all"){
            icon.innerHTML +=`<i style="color:${element.color}" style="text-align:center" class="${element.family} ${element.prefix}${element.name}"></i>`;
            name.innerHTML +=`<p>${element.name}</p>`;
            contentContainer.classList.toggle("block");
            contentContainer.append(icon);
            icon.append(name);
            iconContainer.append(contentContainer);
        }
    })
})




