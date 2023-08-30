const heroes = [
    { name: "Superman", power: "vuelo", image: "superman.jpg" },
    { name: "Spiderman", power: "agilidad", image: "spiderman.jpg" },
    { name: "Hulk", power: "fuerza", image: "hulk.jpg" },
    { name: "Flash", power: "velocidad", image: "flash.jpg" },
];

const heroList = document.getElementById("heroList");
const powerFilter = document.getElementById("powerFilter");

function displayHeroes(heroesArray) {
    heroList.innerHTML = "";
    heroesArray.forEach(hero => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-4");
        
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = `images/${hero.image}`;
        img.classList.add("card-img-top");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.textContent = hero.name;

        const power = document.createElement("p");
        power.classList.add("card-text");
        power.textContent = `Poder: ${hero.power}`;

        cardBody.appendChild(title);
        cardBody.appendChild(power);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);

        heroList.appendChild(col);
    });
}

powerFilter.addEventListener("change", () => {
    const selectedPower = powerFilter.value;
    if (selectedPower === "todos") {
        displayHeroes(heroes);
    } else {
        const filteredHeroes = heroes.filter(hero => hero.power === selectedPower);
        displayHeroes(filteredHeroes);
    }
});

displayHeroes(heroes);



// Función para agregar un nuevo héroe al arreglo
function addHero(name, power, image) {
    const newHero = {
      name: name,
      power: power,
      image: image
    };
    heroes.push(newHero);
  }

  
  // Llamada a la función para agregar un nuevo héroe
  // addHero("Iron Man", "tecnología", "ironman.jpg");
  
  // Vuelve a mostrar los héroes después de agregar uno nuevo
  displayHeroes(heroes);

  const addHeroButton = document.getElementById("add-hero");

addHeroButton.addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const powerInput = document.getElementById("power");
    const imageInput = document.getElementById("image");

    const name = nameInput.value;
    const power = powerInput.value;
    const image = imageInput.files[0];

    if (!name || !power || !image) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const newHero = {
        name: name,
        power: power,
        image: image.name
    };

    // Agregar el nuevo héroe al arreglo heroes
    heroes.push(newHero);

    // Actualizar la lista de héroes en la página
    displayHeroes(heroes);

    // Limpiar el formulario
    nameInput.value = "";
    powerInput.value = "";
    imageInput.value = "";
});