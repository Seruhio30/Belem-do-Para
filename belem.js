const slides = [
    {
        eyebrow: "Início",
        title: "Belém do Pará",
        subtitle: "Uma viagem entre rios, sabores e cultura amazônica",
        images: ["assets/bandera-brasil.jpg"],
        notes: [
            "Rios",
            "Sabores",
            "Cultura amazônica"
        ],
        mode: "hero-mode"
    },

    {
        eyebrow: "Localização",
        title: "Brasil",
        subtitle: "Primeiro: onde estamos no mapa?",
        images: [
            "assets/mapa-sur-america.jpg",
            "assets/mapa-brasil.jpg"
        ],
        notes: [
            "América do Sul",
            "Um país muito grande",
            "Zoom para o norte"
        ],
        mode: "brasil-mode"
    },

    {
        eyebrow: "Localização",
        title: "Pará",
        subtitle: "Um estado no norte do Brasil",
        images: [
            "assets/mapa-para.jpg",
            "assets/mapa-do-belem.png",
            "assets/mapa-para1.jpg",
            "assets/mapa-belem-turistico.png"
        ],
        notes: [
            "Região Norte",
            "Amazônia",
            "Belém como capital"
        ],
        mode: "para-mode"
    },

    {
        eyebrow: "Chegada",
        title: "Chegando a Belém",
        subtitle: "De avião ou pelos rios da Amazônia",
        images: [
            "assets/belem-airport.jpg",
            "assets/aeroporto-belem-terminal.jpg",
            "assets/aeroporto-belem-noite.jpg"
        ],
        notes: [
            "Aeroporto Internacional",
            "Entrada para a cidade",
            "Início do passeio"
        ],
        mode: "airport-mode"
    },

    {
        eyebrow: "Rios da Amazônia",
        title: "Chegada por barco",
        subtitle: "Belém também se conecta pelos rios",
        images: [
            "assets/porto1.jpg",
            "assets/porto2.jpg"
        ],
        notes: [
            "Rios como caminhos",
            "Transporte fluvial",
            "Vida perto da água"
        ],
        mode: "place-mode"
    },

    {
        eyebrow: "Cultura e lazer",
        title: "Estação das Docas",
        subtitle: "Um antigo porto transformado em ponto turístico",
        images: [
            "assets/roteiro.jpg",
            "assets/estacao-das-docas1.jpg",
            "assets/estacao-das-docas2.jpg",
            "assets/estacao-das-docas3.jpg",
            "assets/amazom-beer.jpg"
        ],
        notes: [
            "Porto antigo",
            "Restaurantes e cultura",
            "Sabores da Amazônia"
        ],
        mode: "place-mode"
    },

    {
        eyebrow: "História",
        title: "Forte do Presépio",
        subtitle: "A primeira construção da cidade de Belém",
        images: [
            "assets/forte-do-presepio.jpg",
            "assets/forte-do-presepio1.jpg",
            "assets/forte-do-presepio2.jpg",
            "assets/museu.jpg",
            "assets/forte-do-presepio3.jpg"
             
        ],
        notes: [
            "Início da cidade",
            "Construção histórica",
            "Vista para a baía"
        ],
        mode: "place-mode"
    },

    {
        eyebrow: "Sabores e tradição",
        title: "Mercado Ver-o-Peso",
        subtitle: "Um dos lugares mais famosos de Belém",
        images: [
            "assets/mercado-ver-o-peso.jpg",
            "assets/ver-o-peso.jpg",
            "assets/ver-o-peso2.jpg",
            "assets/ver-o-peso3.jpg",
            "assets/mercado.jpg",
           
        ],
        notes: [
            "Frutas da Amazônia",
            "Comida típica",
            "Cores e movimento"
        ],
        mode: "place-mode"
    },

    {
        eyebrow: "Cultura",
        title: "Theatro da Paz",
        subtitle: "Um símbolo da riqueza da época da borracha",
        images: [
            "assets/teatro-da-paz.jpeg",
            "assets/teatro-da-paz3.jpg",
            "assets/teatro-da-paz1.jpg",
            "assets/teatro-da-paz2.jpg"
        ],
        notes: [
            "Época da borracha",
            "Arquitetura elegante",
            "Arte e história"
        ],
        mode: "place-mode"
    },

    {
        eyebrow: "Fé e tradição",
        title: "Basílica de Nazaré",
        subtitle: "Um espaço importante para a fé e a cultura local",
        images: [
            "assets/basilica-de-nazare.jpg",
            "assets/basilica-de-nazare2.jpeg",
            "assets/sirio.jpg",
            "assets/basilica-2.jpg"
            
        ],
        notes: [
            "Nossa Senhora de Nazaré",
            "Círio de Nazaré",
            "Fé, tradição e identidade"
        ],
        mode: "place-mode"
    },

    {
        eyebrow: "Natureza",
        title: "Mangal das Garças",
        subtitle: "Um espaço para ver aves, borboletas e natureza amazônica",
        images: [
            "assets/mangal-garcas.jpg",
            "assets/mangal-garcas-1.jpg",
            "assets/mangal-garcas-2.jpg",
            "assets/mangal-garcas-3.jpg",
            "assets/mangal-garcas-4.jpg"
        ],
        notes: [
            "Aves e borboletas",
            "Natureza amazônica",
            "Um refúgio dentro da cidade"
        ],
        mode: "place-mode"
    },

    {
        eyebrow: "Ilhas próximas",
        title: "Combu e Marajó",
        subtitle: "Duas experiências diferentes perto de Belém",
        images: [
            "assets/ilha-combu.jpg",
            "assets/ilha-combu-1.jpg",
            "assets/ilha-combu-2.jpg",
            "assets/ilha-combu-3.jpg",
            "assets/ilha-marajo.jpg",
            "assets/ilha-marajo-1.jpg"
        ],
        notes: [
            "Combu: chocolate artesanal",
            "Marajó: cultura e búfalos",
            "Natureza, rios e sabores"
        ],
        mode: "place-mode"
    },

    {
        eyebrow: "Encerramento",
        title: "Belém é uma mistura",
        subtitle: "História, rios, fé, cultura, natureza e sabores amazônicos",
        images: [
            "assets/mapa-belem-turistico.png",
            "assets/belem-final.png"
        ],
        notes: [
            "História",
            "Rios",
            "Amazônia"
        ],
        mode: "hero-mode"
    }
];

let currentSlide = 0;
let currentPhoto = 0;

const slideElement = document.getElementById("slide");
const eyebrow = document.getElementById("eyebrow");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const notes = document.getElementById("notes");
const mainImage = document.getElementById("mainImage");
const counter = document.getElementById("counter");

const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");

const photoControls = document.getElementById("photoControls");
const prevPhotoBtn = document.getElementById("prevPhoto");
const nextPhotoBtn = document.getElementById("nextPhoto");
const photoCounter = document.getElementById("photoCounter");

function renderSlide() {
    const slide = slides[currentSlide];

    currentPhoto = 0;

    eyebrow.textContent = slide.eyebrow;
    title.textContent = slide.title;
    subtitle.textContent = slide.subtitle;
    mainImage.src = slide.images[currentPhoto];
    mainImage.alt = slide.title;

    counter.textContent = `${currentSlide + 1} / ${slides.length}`;

    notes.innerHTML = "";

    slide.notes.forEach(note => {
        const li = document.createElement("li");
        li.textContent = note;
        notes.appendChild(li);
    });

    updatePhotoControls();
    updateMode(slide.mode);
    restartAnimation();
}

function updatePhotoControls() {
    const slide = slides[currentSlide];

    if (slide.images.length > 1) {
        photoControls.classList.add("active");
    } else {
        photoControls.classList.remove("active");
    }

    photoCounter.textContent = `${currentPhoto + 1} / ${slide.images.length}`;
}

function updateMode(mode) {
    slideElement.className = "slide active";
    slideElement.classList.add(mode);
}

function restartAnimation() {
    slideElement.classList.remove("active");

    setTimeout(() => {
        slideElement.classList.add("active");
    }, 20);
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        renderSlide();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        renderSlide();
    }
}

function nextPhoto() {
    const slide = slides[currentSlide];

    if (currentPhoto < slide.images.length - 1) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }

    mainImage.src = slide.images[currentPhoto];
    updatePhotoControls();
}

function prevPhoto() {
    const slide = slides[currentSlide];

    if (currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = slide.images.length - 1;
    }

    mainImage.src = slide.images[currentPhoto];
    updatePhotoControls();
}

nextSlideBtn.addEventListener("click", nextSlide);
prevSlideBtn.addEventListener("click", prevSlide);

nextPhotoBtn.addEventListener("click", event => {
    event.stopPropagation();
    nextPhoto();
});

prevPhotoBtn.addEventListener("click", event => {
    event.stopPropagation();
    prevPhoto();
});

document.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
        nextSlide();
    }

    if (event.key === "ArrowLeft") {
        prevSlide();
    }

    if (event.key === "ArrowUp") {
        prevPhoto();
    }

    if (event.key === "ArrowDown") {
        nextPhoto();
    }
});

document.body.addEventListener("click", event => {
    const clickedButton = event.target.tagName === "BUTTON";

    if (!clickedButton) {
        nextSlide();
    }
});

renderSlide();