const CLOUD_NAME = "dzomy7ivj";
const BASE_FOLDER = "church-gallery";

const IMAGE_MAP = {
    worship: ["worship1.jpg"],
    youths: ["youths1.jpg"],
    events: ["event1.jpg"],
    baptism: ["baptism_day.jpeg"]
};


const categoryCards = document.querySelectorAll(".category-card");
const viewingSection = document.getElementById("viewing-section");
const activeCategoryText = document.getElementById("active-category");
const galleryPlaceholder = document.getElementById("gallery-placeholder");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");

window.closeModal = function () {
    modal.style.display = "none";
};

function setupImageClickEvents() {
    document.querySelectorAll(".gallery-image").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            modalCaption.textContent = img.alt || "";
        });
    });
}

function loadImages(category) {
    const filenames = IMAGE_MAP[category] || [];
    if (filenames.length === 0) {
        return `<p class="placeholder-message">No images found in this category.</p>`;
    }

    return filenames.map(filename => {
        const imageUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${BASE_FOLDER}/${category}/${filename}`;
        return `
            <img src="${imageUrl}"
                 alt="${filename}"
                 class="gallery-image"
                 onerror="this.src='https://via.placeholder.com/300x200?text=Unavailable'" />
        `;
    }).join("");
}

categoryCards.forEach(card => {
    card.addEventListener("click", () => {
        const category = card.dataset.category;

        categoryCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");

        activeCategoryText.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        viewingSection.classList.remove("hidden");
        galleryPlaceholder.innerHTML = `<p class="placeholder-message">Loading images...</p>`;

        const galleryHTML = loadImages(category);
        galleryPlaceholder.innerHTML = `<div class="gallery-grid">${galleryHTML}</div>`;
        setupImageClickEvents();
    });
});
