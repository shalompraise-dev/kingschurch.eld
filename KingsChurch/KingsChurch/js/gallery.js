const cards = document.querySelectorAll('.category-card');
const viewingSection = document.getElementById('viewing-section');
const activeCategory = document.getElementById('active-category');
const galleryPlaceholder = document.getElementById('gallery-placeholder');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const selected = card.dataset.category;

    // Update active styling
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    // Show viewing section
    viewingSection.classList.remove('hidden');
    activeCategory.textContent = card.querySelector('h3').textContent;

    // Placeholder message
    galleryPlaceholder.innerHTML = `
      <p class="placeholder-message">Loading ${selected} photos sorted by year & month...</p>
    `;

    // Later: fetch and display images here
  });
});






// STEP 1: Configuration
const apiKey = 'AIzaSyBjSpnluTcLGTaSMdiH-IOStlcOIlAq2_Y'; // ← replace with your actual API key

const folderIds = {
  worship: 'YOUR_WORSHIP_FOLDER_ID',
  youths: 'YOUR_YOUTHS_FOLDER_ID',
  events: '1jAC2FoHVzOaTp6qqxRwI2KaoApdPu34l',
  baptism: '10f6Gwd5Orgny3fbrkNsCshL5AC0fHkEG'
};

// Fetch images from a given folder
async function fetchDriveImages(folderId) {
  const query = `q='${folderId}'+in+parents+and+mimeType contains 'image/'&key=${apiKey}`;
  const url = `https://www.googleapis.com/drive/v3/files?${query}&fields=files(id,name,thumbnailLink,webContentLink)`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.files || [];
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
}

// Render the fetched images
function renderImages(images) {
  if (images.length === 0) {
    galleryPlaceholder.innerHTML = `<p class="placeholder-message">No images found in this category.</p>`;
    return;
  }

  const groupedImages = images.map(img => `
    <div class="gallery-image">
      <img src="${img.thumbnailLink}" alt="${img.name}" onclick="openModal('${img.webContentLink}', '${img.name}')"/>
    </div>
  `).join('');

  galleryPlaceholder.innerHTML = `
    <div class="gallery-grid">
      ${groupedImages}
    </div>
  `;
}

// Category card click event
categoryCards.forEach(card => {
  card.addEventListener('click', async () => {
    const category = card.dataset.category;
    const folderId = folderIds[category];

    if (!folderId) return;

    // Show loading
    galleryPlaceholder.innerHTML = `<p class="placeholder-message">Loading ${category} photos...</p>`;
    activeCategorySpan.textContent = category.charAt(0).toUpperCase() + category.slice(1);
    viewingSection.classList.remove('hidden');

    const images = await fetchDriveImages(folderId);
    renderImages(images);
  });
});

// Modal Logic
function openModal(imageUrl, imageName) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');

  modalImg.src = imageUrl;
  modalCaption.textContent = imageName;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('imageModal').style.display = 'none';
}
