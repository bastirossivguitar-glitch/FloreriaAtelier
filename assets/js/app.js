/**
 * FLORERÍA ATELIER — Almirante Latorre 345
 * Catálogo con fotografías reales de internet de todas las flores nombradas,
 * diseño con flores de fondo, mariposas pasteles y botones de WhatsApp elegantes (sin fosforescente).
 */

const CONTACTS = {
  gabriela: {
    name: "Gabriela",
    phone: "56996780017",
    display: "+56 9 9678 0017",
    role: "Ramos de Novia, Matrimonios & Bouquets"
  },
  magali: {
    name: "Magali",
    phone: "56994726828",
    display: "+56 9 9472 6828",
    role: "Arreglos Florales, Bautizos, Corporativos & Colegios"
  }
};

// Catálogo de todas las Flores Base solicitadas con imágenes reales de internet
const BASE_FLOWERS = [
  {
    id: "rosas",
    name: "Rosas",
    botanical: "Rosa spp. Pastel & Clásicas",
    category: "todo-el-ano",
    seasonLabel: "Todo el Año",
    pastelTag: "Rosa Pastel & Crema",
    pastelColor: "#f6c6d8",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Rosa_rubiginosa_1.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Rosa_Peace_1945.jpg",
    description: "Rosas frescas de pétalos suaves en tonos rosa pastel, blush, crema y blanco. Ideales como flor principal en bouquets, ramos de novia, aniversarios y arreglos personalizados.",
    uses: ["Ramos de Novia", "Bouquets", "Matrimonios"]
  },
  {
    id: "lirios",
    name: "Lirios",
    botanical: "Lilium Oriental & Candidum",
    category: "todo-el-ano",
    seasonLabel: "Todo el Año",
    pastelTag: "Blanco & Rosa Suave",
    pastelColor: "#fff7eb",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/Lilium_candidum_1.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG",
    description: "Lirios perfumados de gran apertura y porte elegante. Aportan altura, pureza y distinción a arreglos para bautizos, eventos corporativos, iglesias y recepciones.",
    uses: ["Bautizos", "Eventos Corporativos", "Arreglos de Salón"]
  },
  {
    id: "girasoles",
    name: "Girasoles",
    botanical: "Helianthus annuus",
    category: "primavera-verano",
    seasonLabel: "Primavera / Verano",
    pastelTag: "Amarillo Mantequilla",
    pastelColor: "#fbf0b9",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
    description: "Girasoles luminosos llenos de alegría y calidez. Muy solicitados en bouquets de regalo, ceremonias de colegios, graduaciones, licenciaturas y arreglos campestres.",
    uses: ["Colegios & Graduaciones", "Bouquets", "Regalos"]
  },
  {
    id: "gerberas",
    name: "Gerberas",
    botanical: "Gerbera jamesonii",
    category: "todo-el-ano",
    seasonLabel: "Todo el Año",
    pastelTag: "Durazno & Coral Pastel",
    pastelColor: "#ffd7c2",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Unidentified_Gerbera.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Gerbera_jamesonii_%28Asteraceae%29.jpg",
    description: "Flores alegres de pétalos radiantes en tonos damasco, rosa pastel y crema. Excelente durabilidad en florero para celebraciones familiares, colegios y nacimientos.",
    uses: ["Arreglos Florales", "Colegios", "Cumpleaños"]
  },
  {
    id: "tulipanes",
    name: "Tulipanes",
    botanical: "Tulipa gesneriana",
    category: "invierno-primavera",
    seasonLabel: "Invierno / Primavera",
    pastelTag: "Lila & Rosa Pastel",
    pastelColor: "#dfd0f7",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%9D.JPG",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/9/9e/%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%9D.JPG",
    description: "Tulipanes de silueta fina y delicada. Una flor de temporada sumamente apreciada para ramos de novia minimalistas, bouquets de autor y detalles corporativos.",
    uses: ["Ramos de Novia", "Bouquets de Temporada", "Corporativos"]
  },
  {
    id: "ranunculos",
    name: "Ranúnculos (Renúnculo)",
    botanical: "Ranunculus asiaticus",
    category: "invierno-primavera",
    seasonLabel: "Según Estación (Inv / Prim)",
    pastelTag: "Durazno & Rosa Seda",
    pastelColor: "#ffd7c2",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Persian_Buttercup_01.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/2/23/Persian_Buttercup_01.jpg",
    description: "El renúnculo destaca por sus múltiples capas de pétalos suaves y redondeados. Aporta una textura romántica única en ramos de novia, tocados y centros de mesa de matrimonio.",
    uses: ["Ramos de Novia", "Matrimonios", "Boutonnieres"]
  },
  {
    id: "orquideas",
    name: "Orquídeas",
    botanical: "Phalaenopsis & Cymbidium",
    category: "alta-gama",
    seasonLabel: "Selección Exclusiva",
    pastelTag: "Blanco & Lila Pastel",
    pastelColor: "#dfd0f7",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Phalaenopsis_philippinensis_NationalOrchidGarden-Singapore.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/3/34/Plant_Orchid_Cymbidium_aloifolium_P1110661_05_-_cropped.jpg",
    description: "Orquídeas de máxima sofisticación y caída elegante. Protagonistas en ramos de novia en cascada, recepciones de eventos corporativos y regalos de lujo.",
    uses: ["Ramos de Novia", "Eventos Corporativos", "Regalos Exclusivos"]
  },
  {
    id: "peonias",
    name: "Peonías",
    botanical: "Paeonia lactiflora",
    category: "primavera-verano",
    seasonLabel: "Estación Primavera",
    pastelTag: "Rosa Peonía Pastel",
    pastelColor: "#f6c6d8",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/PaeoniaSuffruticosa7.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/b/be/Lactiflora1b.UME.jpg",
    description: "Flores frondosas de aroma sutil y pétalos esponjosos en rosa pastel y blanco. La flor favorita de la temporada de primavera para novias y matrimonios.",
    uses: ["Ramos de Novia", "Matrimonios", "Bouquets de Autor"]
  },
  {
    id: "lisianthus",
    name: "Lisianthus (Lisiantu)",
    botanical: "Eustoma grandiflorum",
    category: "primavera-verano",
    seasonLabel: "Primavera / Verano",
    pastelTag: "Lavanda, Blanco & Rosa",
    pastelColor: "#dfd0f7",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Eustoma_grandiflorum_purple_02.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/1/18/Eustoma_grandiflorum_purple_02.jpg",
    description: "El lisiantu ofrece campanas delicadas de aspecto sedoso en tonos lila pastel, blanco y rosa claro. Aporta movimiento natural y dulzura a bautizos, bodas y bouquets.",
    uses: ["Bautizos", "Matrimonios", "Bouquets Pasteles"]
  },
  {
    id: "hortensias",
    name: "Hortensias (Ortencias)",
    botanical: "Hydrangea macrophylla",
    category: "primavera-verano",
    seasonLabel: "Primavera / Verano / Otoño",
    pastelTag: "Celeste, Rosa & Blanco",
    pastelColor: "#c9e4f8",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/21/%28Natural%29_Hydrangea_macrophylla%2C_Iwafune%2C_Isumi%2C_Chiba%2C_Japan_2.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Hydrangea_arborescens_139866012.jpg",
    description: "Las ortencias destacan por su volumen generoso y sus tonos celeste pastel, rosa suave y blanco nube. Fundamentales en bautizos, altares de matrimonio y centros de mesa.",
    uses: ["Bautizos", "Matrimonios", "Centros de Mesa"]
  },
  {
    id: "personalizados",
    name: "Arreglos Personalizados",
    botanical: "Flores Frescas Según Estación",
    category: "alta-gama",
    seasonLabel: "Todo el Año según Estación",
    pastelTag: "Paleta Pastel a Medida",
    pastelColor: "#c7e5c9",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Rose_hydrangea_calla_wedding_bouquet.jpg",
    secondaryImage: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Rosa_Peace_1945.jpg",
    description: "Creamos arreglos y bouquets 100% personalizados combinando las mejores flores de estación disponibles en nuestra tienda de Almirante Latorre 345.",
    uses: ["Diseño a Pedido", "Asesoría Gabriela & Magali", "Todas las Ocasiones"]
  }
];

const customState = {
  occasion: "Ramo de Novia",
  flowers: ["Rosas", "Peonías", "Lisianthus (Lisiantu)"],
  palette: "Rosa Pastel, Blush & Blanco Crema",
  advisor: "gabriela",
  clientName: "",
  dateOrNotes: ""
};

function buildWhatsAppUrl(advisorKey, message) {
  const contact = CONTACTS[advisorKey] || CONTACTS.gabriela;
  return `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
}

// Renderizar Catálogo con fotos reales de internet de todas las flores
function renderCatalog(filter = "all") {
  const grid = document.getElementById("flowersCatalogGrid");
  if (!grid) return;

  const list = filter === "all"
    ? BASE_FLOWERS
    : BASE_FLOWERS.filter(item => item.category === filter);

  grid.innerHTML = list.map(flower => {
    const wspMsgGab = `Hola Gabriela 🌸, vi el catálogo web de *Florería Atelier* (Almirante Latorre 345) y me gustaría consultar por arreglos con *${flower.name}*. ¿Me comentas disponibilidad según la estación?`;
    const wspMsgMag = `Hola Magali 🌷, vi el catálogo web de *Florería Atelier* (Almirante Latorre 345) y me gustaría consultar por arreglos con *${flower.name}*. ¿Me comentas disponibilidad según la estación?`;
    const wspLinkGab = buildWhatsAppUrl("gabriela", wspMsgGab);
    const wspLinkMag = buildWhatsAppUrl("magali", wspMsgMag);

    return `
      <article class="flower-card" data-category="${flower.category}">
        <div class="flower-img-wrap">
          <img
            src="${flower.image}"
            alt="${flower.name} - Florería Atelier Almirante Latorre 345"
            loading="lazy"
            onerror="this.onerror=null;this.src='${flower.secondaryImage}';"
          />
          <span class="flower-season-tag">🌿 ${flower.seasonLabel}</span>
          <span class="flower-pastel-tag" style="background-color: ${flower.pastelColor};">${flower.pastelTag}</span>
        </div>
        <div class="flower-body">
          <div class="flower-title-row">
            <h3 class="flower-title">${flower.name}</h3>
            <span class="flower-botanical">${flower.botanical}</span>
          </div>
          <p class="flower-desc">${flower.description}</p>
          <div class="flower-meta">
            ${flower.uses.map(u => `<span>🦋 ${u}</span>`).join("")}
          </div>
          <div class="flower-wsp-dual">
            <a href="${wspLinkGab}" target="_blank" rel="noopener" class="btn-card-wsp">
              <svg viewBox="0 0 24 24" width="15" height="15"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/></svg>
              WhatsApp Gabriela
            </a>
            <a href="${wspLinkMag}" target="_blank" rel="noopener" class="btn-card-wsp">
              <svg viewBox="0 0 24 24" width="15" height="15"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824z"/></svg>
              WhatsApp Magali
            </a>
          </div>
          <button type="button" class="btn-card-add" style="width: 100%; margin-top: 0.45rem;" onclick="addFlowerToCustomizer('${flower.name}')">
            ✨ + Agregar a Pedido Personalizado
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function addFlowerToCustomizer(flowerName) {
  const chips = document.querySelectorAll("#flowerChips .selectable-chip");
  chips.forEach(chip => {
    if (chip.dataset.value.toLowerCase().includes(flowerName.toLowerCase().slice(0, 5))) {
      chip.classList.add("selected");
    }
  });
  syncCustomizerState();
  const el = document.getElementById("personalizador");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function prefillOccasion(occasionName) {
  const occasionChips = document.querySelectorAll("#occasionChips .selectable-chip");
  occasionChips.forEach(chip => {
    chip.classList.toggle("selected", chip.dataset.value === occasionName);
  });
  syncCustomizerState();
  const el = document.getElementById("personalizador");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function syncCustomizerState() {
  const activeOccasion = document.querySelector("#occasionChips .selectable-chip.selected");
  customState.occasion = activeOccasion ? activeOccasion.dataset.value : "Arreglo Personalizado";

  const activeFlowers = Array.from(document.querySelectorAll("#flowerChips .selectable-chip.selected")).map(el => el.dataset.value);
  customState.flowers = activeFlowers.length > 0 ? activeFlowers : ["Flores frescas según estación"];

  const activePalette = document.querySelector("#paletteChips .selectable-chip.selected");
  customState.palette = activePalette ? activePalette.dataset.value : "Paleta de Colores Pasteles";

  const nameInput = document.getElementById("clientNameInput");
  const notesInput = document.getElementById("clientNotesInput");
  customState.clientName = nameInput ? nameInput.value.trim() : "";
  customState.dateOrNotes = notesInput ? notesInput.value.trim() : "";

  const previewTextGab =
`¡Hola Gabriela! 🌸🦋 Te escribo desde la página web de *Florería Atelier* (Almirante Latorre 345).
Me gustaría coordinar un pedido floral:

• *Categoría / Evento:* ${customState.occasion}
• *Flores Base elegidas:* ${customState.flowers.join(", ")} (según estación)
• *Tonos Pasteles:* ${customState.palette}${customState.clientName ? `\n• *Nombre:* ${customState.clientName}` : ""}${customState.dateOrNotes ? `\n• *Fecha / Comentarios:* ${customState.dateOrNotes}` : ""}

¿Me podrías ayudar a coordinar opciones y valores? ¡Muchas gracias!`;

  const previewTextMag =
`¡Hola Magali! 🌷🦋 Te escribo desde la página web de *Florería Atelier* (Almirante Latorre 345).
Me gustaría coordinar un pedido floral:

• *Categoría / Evento:* ${customState.occasion}
• *Flores Base elegidas:* ${customState.flowers.join(", ")} (según estación)
• *Tonos Pasteles:* ${customState.palette}${customState.clientName ? `\n• *Nombre:* ${customState.clientName}` : ""}${customState.dateOrNotes ? `\n• *Fecha / Comentarios:* ${customState.dateOrNotes}` : ""}

¿Me podrías ayudar a coordinar opciones y valores? ¡Muchas gracias!`;

  const previewBox = document.getElementById("wspMessagePreview");
  if (previewBox) {
    previewBox.textContent = customState.advisor === "magali" ? previewTextMag : previewTextGab;
  }

  const sendBtnGab = document.getElementById("sendCustomWspGab");
  if (sendBtnGab) {
    sendBtnGab.href = buildWhatsAppUrl("gabriela", previewTextGab);
  }
  const sendBtnMag = document.getElementById("sendCustomWspMag");
  if (sendBtnMag) {
    sendBtnMag.href = buildWhatsAppUrl("magali", previewTextMag);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog("all");

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCatalog(btn.dataset.filter);
    });
  });

  ["#occasionChips", "#paletteChips"].forEach(selector => {
    const container = document.querySelector(selector);
    if (!container) return;
    container.querySelectorAll(".selectable-chip").forEach(chip => {
      chip.addEventListener("click", () => {
        container.querySelectorAll(".selectable-chip").forEach(c => c.classList.remove("selected"));
        chip.classList.add("selected");
        syncCustomizerState();
      });
    });
  });

  document.querySelectorAll("#flowerChips .selectable-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("selected");
      syncCustomizerState();
    });
  });

  document.querySelectorAll(".advisor-option").forEach(opt => {
    opt.addEventListener("click", () => {
      document.querySelectorAll(".advisor-option").forEach(o => o.classList.remove("active"));
      opt.classList.add("active");
      customState.advisor = opt.dataset.advisor;
      syncCustomizerState();
    });
  });

  ["clientNameInput", "clientNotesInput"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", syncCustomizerState);
  });

  const wspTrigger = document.getElementById("floatingWspTrigger");
  const wspMenu = document.getElementById("floatingWspMenu");
  const wspClose = document.getElementById("floatingWspClose");

  if (wspTrigger && wspMenu) {
    wspTrigger.addEventListener("click", () => wspMenu.classList.toggle("open"));
  }
  if (wspClose && wspMenu) {
    wspClose.addEventListener("click", () => wspMenu.classList.remove("open"));
  }

  syncCustomizerState();
});
