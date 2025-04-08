// Vintage Movie Posters Collection
// This file contains all the data and functionality for the movie posters website

// Poster data with accurate metadata
// Each poster has detailed information about its design elements and cultural significance
const postersData = {
    "posters": [
      {
        "id": 1,
        "title": "Metropolis",
        "year": 1927,
        "director": "Fritz Lang",
        "genre": ["Science Fiction", "Drama"],
        "country": "Germany",
        "colorPalette": ["Gold", "Black", "White"],
        "artisticStyle": "Art Deco",
        "typographyStyle": "Geometric Sans-Serif",
        "composition": "Symmetrical",
        "visualTechnique": "Illustration",
        "culturalSignificance": "One of the most influential science fiction posters, showcasing German Expressionism and Art Deco influences",
        "designer": "Heinz Schulz-Neudamm",
        "decade": "1920s",
        "image": "Metropolis.jpg"
      },
      {
        "id": 2,
        "title": "Casablanca",
        "year": 1942,
        "director": "Michael Curtiz",
        "genre": ["Romance", "Drama", "War"],
        "country": "United States",
        "colorPalette": ["Brown", "Sepia", "Black"],
        "artisticStyle": "Romantic Realism",
        "typographyStyle": "Bold Script",
        "composition": "Character-focused",
        "visualTechnique": "Illustration with Photography",
        "culturalSignificance": "Classic Hollywood golden age poster style emphasizing star power",
        "designer": "Bill Gold",
        "decade": "1940s",
        "image": "Casablanca.jpg"
      },
      {
        "id": 3,
        "title": "Vertigo",
        "year": 1958,
        "director": "Alfred Hitchcock",
        "genre": ["Thriller", "Mystery", "Romance"],
        "country": "United States",
        "colorPalette": ["Red", "Black", "White"],
        "artisticStyle": "Surrealism",
        "typographyStyle": "Clean Sans-Serif",
        "composition": "Spiral Motif",
        "visualTechnique": "Graphic Illustration",
        "culturalSignificance": "Iconic Saul Bass design that revolutionized movie poster art with its minimalist approach",
        "designer": "Saul Bass",
        "decade": "1950s",
        "image": "Vertigo.jpg"
      },
      {
        "id": 4,
        "title": "The Seventh Seal",
        "year": 1957,
        "director": "Ingmar Bergman",
        "genre": ["Drama", "Fantasy"],
        "country": "Sweden",
        "colorPalette": ["Black", "White", "Gray"],
        "artisticStyle": "Expressionism",
        "typographyStyle": "Serif Gothic",
        "composition": "Character Silhouettes",
        "visualTechnique": "High Contrast Photography",
        "culturalSignificance": "Represents European art cinema aesthetics with stark imagery",
        "designer": "Unknown",
        "decade": "1950s",
        "image": "The Seventh Seal.jpg"
      },
      {
        "id": 5,
        "title": "Anatomy of a Murder",
        "year": 1959,
        "director": "Otto Preminger",
        "genre": ["Crime", "Drama", "Mystery"],
        "country": "United States",
        "colorPalette": ["Black", "Red", "White"],
        "artisticStyle": "Minimalism",
        "typographyStyle": "Sans-Serif",
        "composition": "Fragmented Silhouette",
        "visualTechnique": "Graphic Design",
        "culturalSignificance": "Another groundbreaking Saul Bass design that influenced graphic design beyond movie posters",
        "designer": "Saul Bass",
        "decade": "1950s",
        "image": "Anatomy of a Murder.jpg"
      },
      {
        "id": 6,
        "title": "Psycho",
        "year": 1960,
        "director": "Alfred Hitchcock",
        "genre": ["Horror", "Thriller", "Mystery"],
        "country": "United States",
        "colorPalette": ["Black", "White", "Red"],
        "artisticStyle": "Minimalism",
        "typographyStyle": "Fragmented Sans-Serif",
        "composition": "Torn Paper Effect",
        "visualTechnique": "Typography as Image",
        "culturalSignificance": "Demonstrates how typography itself can create visual tension and horror",
        "designer": "Saul Bass",
        "decade": "1960s",
        "image": "Psycho.jpg"
      },
      {
        "id": 7,
        "title": "The Cabinet of Dr. Caligari",
        "year": 1920,
        "director": "Robert Wiene",
        "genre": ["Horror", "Thriller", "Silent"],
        "country": "Germany",
        "colorPalette": ["Orange", "Black", "Yellow"],
        "artisticStyle": "German Expressionism",
        "typographyStyle": "Hand-drawn Gothic",
        "composition": "Distorted Perspective",
        "visualTechnique": "Painted Illustration",
        "culturalSignificance": "Epitomizes German Expressionist cinema with its distorted visuals and shadows",
        "designer": "Erich Ludwig Stahl",
        "decade": "1920s",
        "image": "The Cabinet of Dr. Caligari.jpg"
      },
      {
        "id": 8,
        "title": "Gone With The Wind",
        "year": 1939,
        "director": "Victor Fleming",
        "genre": ["Romance", "Drama", "War"],
        "country": "United States",
        "colorPalette": ["Orange", "Blue", "Black"],
        "artisticStyle": "Romantic Realism",
        "typographyStyle": "Elegant Serif",
        "composition": "Character Embrace",
        "visualTechnique": "Painted Illustration",
        "culturalSignificance": "Classic Hollywood epic styling with romantic imagery dominating the composition",
        "designer": "Howard Terpning",
        "decade": "1930s",
        "image": "Gone With The Wind.jpg"
      },
      {
        "id": 9,
        "title": "Forbidden Planet",
        "year": 1956,
        "director": "Fred M. Wilcox",
        "genre": ["Science Fiction", "Adventure"],
        "country": "United States",
        "colorPalette": ["Blue", "Red", "Black"],
        "artisticStyle": "Pulp Science Fiction",
        "typographyStyle": "Block Sans-Serif",
        "composition": "Dynamic Diagonal",
        "visualTechnique": "Illustration",
        "culturalSignificance": "Represents the golden age of sci-fi posters with vivid colors and dramatic space scenes",
        "designer": "Unknown",
        "decade": "1950s",
        "image": "Forbidden Planet.jpg"
      },
      {
        "id": 10,
        "title": "La Dolce Vita",
        "year": 1960,
        "director": "Federico Fellini",
        "genre": ["Comedy", "Drama"],
        "country": "Italy",
        "colorPalette": ["Blue", "Yellow", "Red"],
        "artisticStyle": "Italian Neorealism",
        "typographyStyle": "Classical Italian",
        "composition": "Character Portrait",
        "visualTechnique": "Illustration",
        "culturalSignificance": "Exemplifies Italian cinema's marketing approach focusing on star power and glamour",
        "designer": "Unknown",
        "decade": "1960s",
        "image": "La Dolce Vita.jpg"
      },
      {
        "id": 11,
        "title": "The Third Man",
        "year": 1949,
        "director": "Carol Reed",
        "genre": ["Film Noir", "Mystery", "Thriller"],
        "country": "United Kingdom",
        "colorPalette": ["Yellow", "Black", "Orange"],
        "artisticStyle": "Film Noir",
        "typographyStyle": "Bold Block Letters",
        "composition": "Shadowy Figure",
        "visualTechnique": "Dramatic Lighting",
        "culturalSignificance": "Captures the post-war noir aesthetic with its use of shadow and mystery",
        "designer": "Unknown",
        "decade": "1940s",
        "image": "The Third Man.jpg"
      },
      {
        "id": 12,
        "title": "2001: A Space Odyssey",
        "year": 1968,
        "director": "Stanley Kubrick",
        "genre": ["Science Fiction", "Adventure", "Mystery"],
        "country": "United States",
        "colorPalette": ["Red", "Yellow", "Black"],
        "artisticStyle": "Minimalism",
        "typographyStyle": "Clean Futuristic",
        "composition": "Cosmic Alignment",
        "visualTechnique": "Photography with Graphic Elements",
        "culturalSignificance": "Revolutionized sci-fi marketing with its quiet, philosophical approach rather than action-packed scenes",
        "designer": "Robert McCall",
        "decade": "1960s",
        "image": "A Space Odyssey.jpg"
      }
    ]
  };
  
// DOM Elements - getting references to HTML elements we'll need
const posterContainer = document.getElementById('poster-container');
const detailModal = document.getElementById('detail-modal');
const closeDetail = document.getElementById('close-detail');
const decadeFilter = document.getElementById('decade-filter');
const genreFilter = document.getElementById('genre-filter');
const styleFilter = document.getElementById('style-filter');

// Initialize the page when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate filter dropdowns with unique values from our data
    populateFilters();
    
    // Display all posters initially
    displayPosters(postersData.posters);
    
    // Set up event listeners for filters
    decadeFilter.addEventListener('change', filterPosters);
    genreFilter.addEventListener('change', filterPosters);
    styleFilter.addEventListener('change', filterPosters);
    
    // Close detail view when clicking the close button
    closeDetail.addEventListener('click', function() {
        detailModal.classList.remove('show');
    });
    
    // Close detail view when clicking outside the content
    detailModal.addEventListener('click', function(event) {
        if (event.target === detailModal) {
            detailModal.classList.remove('show');
        }
    });
});

// Populate filter dropdowns with unique values from our data
function populateFilters() {
    // Get unique genres from all posters
    const genres = new Set();
    postersData.posters.forEach(poster => {
        poster.genre.forEach(genre => genres.add(genre));
    });
    
    // Add genre options to the dropdown
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
    
    // Get unique artistic styles from all posters
    const styles = new Set();
    postersData.posters.forEach(poster => {
        styles.add(poster.artisticStyle);
    });
    
    // Add style options to the dropdown
    styles.forEach(style => {
        const option = document.createElement('option');
        option.value = style;
        option.textContent = style;
        styleFilter.appendChild(option);
    });
}

// Filter posters based on the current dropdown selections
function filterPosters() {
    const selectedDecade = decadeFilter.value;
    const selectedGenre = genreFilter.value;
    const selectedStyle = styleFilter.value;
    
    // Start with all posters
    let filteredPosters = postersData.posters;
    
    // Apply decade filter if not set to "all"
    if (selectedDecade !== 'all') {
        filteredPosters = filteredPosters.filter(poster => poster.decade === selectedDecade);
    }
    
    // Apply genre filter if not set to "all"
    if (selectedGenre !== 'all') {
        filteredPosters = filteredPosters.filter(poster => poster.genre.includes(selectedGenre));
    }
    
    // Apply style filter if not set to "all"
    if (selectedStyle !== 'all') {
        filteredPosters = filteredPosters.filter(poster => poster.artisticStyle === selectedStyle);
    }
    
    // Display the filtered posters
    displayPosters(filteredPosters);
}

// Display posters in the container
function displayPosters(posters) {
    // Clear the container first
    posterContainer.innerHTML = '';
    
    // If no posters match the filters, show a message
    if (posters.length === 0) {
        posterContainer.innerHTML = '<p class="no-results">No posters match your selected filters. Try adjusting your criteria.</p>';
        return;
    }
    
    // Create and add poster cards for each poster
    posters.forEach(poster => {
        const posterCard = document.createElement('div');
        posterCard.className = 'poster-card';
        posterCard.dataset.id = poster.id;
        
        // Build the HTML for the poster card
        posterCard.innerHTML = `
            <div class="poster-image">
                <img src="posters/${poster.image}" alt="${poster.title} poster">
            </div>
            <div class="poster-info">
                <h3 class="poster-title">${poster.title}</h3>
                <div class="poster-meta">${poster.year} • ${poster.director}</div>
                <div class="tags">
                    <span class="tag decade-tag">${poster.decade}</span>
                    <span class="tag style-tag">${poster.artisticStyle}</span>
                    <span class="tag genre-tag">${poster.genre[0]}</span>
                </div>
            </div>
        `;
        
        // Add a click event listener to show detail view
        posterCard.addEventListener('click', function() {
            showDetailView(poster.id);
        });
        
        // Add the poster card to the container
        posterContainer.appendChild(posterCard);
    });
}

// Show detailed view of a poster
function showDetailView(posterId) {
    // Find the selected poster by ID
    const poster = postersData.posters.find(p => p.id === parseInt(posterId));
    
    // If poster not found, exit the function
    if (!poster) return;
    
    // Populate the detail view with poster information
    document.getElementById('detail-poster').src = `posters/${poster.image}`;
    document.getElementById('detail-title').textContent = `${poster.title} (${poster.year})`;
    document.getElementById('detail-year').textContent = poster.year;
    document.getElementById('detail-director').textContent = poster.director;
    document.getElementById('detail-country').textContent = poster.country;
    document.getElementById('detail-genre').textContent = poster.genre.join(', ');
    document.getElementById('detail-decade').textContent = poster.decade;
    document.getElementById('detail-style').textContent = poster.artisticStyle;
    document.getElementById('detail-colors').textContent = poster.colorPalette.join(', ');
    document.getElementById('detail-typography').textContent = poster.typographyStyle;
    document.getElementById('detail-composition').textContent = poster.composition;
    document.getElementById('detail-technique').textContent = poster.visualTechnique;
    document.getElementById('detail-designer').textContent = poster.designer || 'Unknown';
    document.getElementById('detail-significance').textContent = poster.culturalSignificance;
    
    // Show related posters based on shared properties
    showRelatedPosters(poster);
    
    // Show the modal by adding the "show" class
    detailModal.classList.add('show');
}

// Show related posters in the detail view
function showRelatedPosters(currentPoster) {
    const relatedContainer = document.getElementById('related-container');
    relatedContainer.innerHTML = '';
    
    // Find posters related by decade, style, or genre
    const relatedPosters = postersData.posters.filter(poster => 
        poster.id !== currentPoster.id && 
        (poster.decade === currentPoster.decade || 
         poster.artisticStyle === currentPoster.artisticStyle ||
         poster.genre.some(g => currentPoster.genre.includes(g)))
    ).slice(0, 4); // Limit to 4 related posters
    
    // If no related posters found, show a message
    if (relatedPosters.length === 0) {
        relatedContainer.innerHTML = '<p>No related posters found.</p>';
        return;
    }
    
    // Create related poster elements
    relatedPosters.forEach(poster => {
        const relatedPoster = document.createElement('div');
        relatedPoster.className = 'related-poster';
        relatedPoster.dataset.id = poster.id;
        
        // Add poster image
        relatedPoster.innerHTML = `
            <img src="posters/${poster.image}" alt="${poster.title}">
        `;
        
        // Add click event to show detail view of the related poster
        relatedPoster.addEventListener('click', function() {
            showDetailView(poster.id);
        });
        
        // Add to the related posters container
        relatedContainer.appendChild(relatedPoster);
    });
}