const changeTheme = (n) => {
    let modeDiv = document.getElementById("innerModeDiv");
    if (n == 1) {
        modeDiv.style.transform = "translateX(-50%)";
        document.querySelector("html").className = "dark";
        localStorage.setItem("theme", "dark");
    } else {
        modeDiv.style.transform = "translateX(0)";
        document.querySelector("html").className = "light";
        localStorage.setItem("theme", "light");
    }
}

window.onload = () => {
    let getTheme = localStorage.getItem("theme");
    if (getTheme == null) {
        // Check screen width - tablets and smaller (~768px or less) use light theme
        if (window.innerWidth <= 768) {
            changeTheme(2); // light
        } else {
            changeTheme(1); // dark
        }
    } else {
        if (getTheme === "light") {
            changeTheme(2);
        } else {
            changeTheme(1);
        }
    }
};

window.addEventListener('scroll', function () {
    var scrollBox = document.getElementById('scrollBox');
    var nav = document.querySelector('nav');
    if (window.scrollY >= 100) {
        scrollBox.classList.add('show');
        nav.classList.add('scrolled');
    } else {
        scrollBox.classList.remove('show');
        nav.classList.remove('scrolled');
    }
});

document.getElementById('scrollBox').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animation
 // Parallax effect on mouse movement
 document.addEventListener('DOMContentLoaded', function () {
     const landingPage = document.querySelector('.landing-page');
     const parallaxLayers = document.querySelectorAll('.parallax-layer');

     landingPage.addEventListener('mousemove', function (e) {
         const x = e.clientX / window.innerWidth;
         const y = e.clientY / window.innerHeight;

         parallaxLayers.forEach(layer => {
             const depth = parseFloat(layer.getAttribute('data-depth')) || 0.2;
             const translateX = (x * 100 - 50) * depth;
             const translateY = (y * 100 - 50) * depth;

             layer.style.transform = `translate(${translateX}px, ${translateY}px)`;
         });
     });

     // Interactive logo effect
     const logo = document.querySelector('.growthBubbleIcon img');
     logo.addEventListener('mouseover', function () {
         this.style.transform = 'scale(1.1) rotate(5deg)';
     });

     logo.addEventListener('mouseout', function () {
         this.style.transform = '';
     });

     // Bubble animation on click
     landingPage.addEventListener('click', function (e) {
         // Create a new bubble at click position
         const bubble = document.createElement('div');
         bubble.classList.add('click-bubble');
         bubble.style.position = 'absolute';
         bubble.style.left = `${e.clientX}px`;
         bubble.style.top = `${e.clientY}px`;
         bubble.style.width = '10px';
         bubble.style.height = '10px';
         bubble.style.background = 'rgba(255,255,255,0.5)';
         bubble.style.borderRadius = '50%';
         bubble.style.pointerEvents = 'none';
         bubble.style.zIndex = '100';
         bubble.style.transform = 'translate(-50%, -50%)';
         bubble.style.animation = 'bubble-expand 1s forwards';

         document.body.appendChild(bubble);

         // Remove bubble after animation completes
         setTimeout(() => {
             bubble.remove();
         }, 1000);
     });

     // Add keyframe animation for click bubbles
     const style = document.createElement('style');
     style.textContent = `
        @keyframes bubble-expand {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0.8;
            }
            100% {
                transform: translate(-50%, -50%) scale(10);
                opacity: 0;
            }
        }
    `;
     document.head.appendChild(style);
 });



// Modify the Card class render method to handle popup cards
class Card {
    constructor(id, title, imageUrl, date, readTime, content, link, iconLink) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.date = date;
        this.readTime = readTime;
        this.content = content;
        this.link = link;
        this.iconLink = iconLink;
    }

    render() {
        const card = document.createElement('div');
        card.classList.add('card');

        // Check if this card has popup data
        const hasPopup = popupLinksData.hasOwnProperty(this.id);

        if (hasPopup) {
            card.classList.add('popup-card'); // Add class to indicate this card has a popup
            card.onclick = () => {
                showPopup(this.title, popupLinksData[this.id].links);
            };
        } else {
            card.onclick = () => {
                if (!this.link.startsWith('https')) {
                    window.location.href = this.link;
                } else {
                    window.open(this.link, '_blank');
                }
            };
        }

        const cardImage = document.createElement('img');
        cardImage.src = this.imageUrl;
        cardImage.loading = "lazy";

        const textBody = document.createElement('div');
        textBody.classList = "textBody";

        const cardTitle = document.createElement('p');
        cardTitle.classList = "cardTitle";
        cardTitle.textContent = this.title;

        const cardDate = document.createElement('p');
        cardDate.classList = "cardReadTime";
        cardDate.textContent = `Date: ${this.date}`;

        const cardTime = document.createElement('p');
        cardTime.classList = "cardReadTime2";
        cardTime.textContent = `Read Time: ${this.readTime}`;

        const cardContent = document.createElement('p');
        cardContent.classList = "cardMiniContent";
        cardContent.textContent = this.content;

        const iconContainer = document.createElement('div');
        iconContainer.classList = "ani-icon";
        var iconId = 'ani-icon-' + this.id;
        iconContainer.id = iconId;

        // Append elements to the card
        card.appendChild(cardImage);
        textBody.appendChild(cardTitle);
        textBody.appendChild(cardDate);
        textBody.appendChild(cardTime);
        textBody.appendChild(cardContent);
        card.appendChild(textBody);
        card.appendChild(iconContainer);

        // After the iconContainer is appended to the DOM, load the Lottie animation
        if (this.iconLink) {
            setTimeout(() => {
                lottie.loadAnimation({
                    container: document.getElementById(iconId),
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    path: this.iconLink,
                    speed: 2
                });
            }, 0);
        }

        return card;
    }
}

// Define a state variable to store the current filter text
let filterText = '';

function createOtherCard() {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('otherCard');
    const cardImage = document.createElement('img');
    cardImage.alt = 'plus';
    cardImage.src = 'image/plus.svg';
    const cardText = document.createElement('p');
    cardText.textContent = 'Stay tuned for a fresh perspective on these fields!';
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardText);
    return cardContainer;
}


function getCards() {
    return fetch('cards.json')
        .then(response => response.json())
        .catch(error => console.error('Error fetching cards:', error));
}

// Define the categories and their keywords
const filterCategories = [{
        name: "Consumer",
        keywords: ["consumer behavior", "buying habits", "purchase decisions", "brand loyalty", "customer journey", "consumer psychology", "shopping trends", "online shopping", "e-commerce", "digital retail"]
    },
    {
        name: "Startups",
        keywords: ["startups", "startup", "unicorns", "growth-stage", "early-stage", "product-market fit", "startup failures", "startup scaling", "startup sustainability", "startup ecosystem"]
    },
    {
        name: "Funding",
        keywords: ["venture capital", "funding", "Series A", "fundraising", "investment", "limited partners", "valuations", "funding winter", "capital calls", "VC insights", "strategic investment", "seed funding"]
    },
    {
        name: "Business Models",
        keywords: ["business model", "revenue model", "subscription economy", "marketplace", "platform business", "vertical integration", "asset-light model", "freemium", "recurring revenue", "unit economics"]
    },
    {
        name: "Market Trends",
        keywords: ["market trends", "industry insights", "competitive landscape", "market expansion", "growth opportunities", "technology trends", "consumer behavior", "disruptive innovation"]
    },
    {
        name: "Tech",
        keywords: ["AI", "machine learning", "cloud computing", "InsurTech", "FinTech", "SaaS", "Space Technology", "EV market", "cybersecurity", "blockchain"]
    },
    {
        name: "Finance",
        keywords: ["financial performance", "quantitative finance", "risk analysis", "profitability", "EBITDA", "cash burn", "capital efficiency", "revenue diversification", "valuation multiples", "financial strategy"]
    },
    {
        name: "Case Studies",
        keywords: ["business breakdown", "strategic analysis", "case study", "success stories", "failure analysis", "company profiles"]
    }
];

// Active filters
let activeFilters = [];

// Function to initialize filters
function initializeFilters() {
    const filterTagsContainer = document.getElementById('filter-tags');

    // Clear existing filters
    filterTagsContainer.innerHTML = '';

    // Create filter tags
    filterCategories.forEach(category => {
        const filterTag = document.createElement('div');
        filterTag.className = 'filter-tag';
        filterTag.textContent = category.name;
        filterTag.dataset.category = category.name;

        filterTag.addEventListener('click', () => {
            toggleFilter(filterTag, category);
        });

        filterTagsContainer.appendChild(filterTag);
    });
}

// Function to toggle filter selection
function toggleFilter(element, category) {
    const isActive = element.classList.toggle('active');

    if (isActive) {
        // Add to active filters
        activeFilters.push(category.name);
    } else {
        // Remove from active filters
        activeFilters = activeFilters.filter(filter => filter !== category.name);
    }

    // Apply filters to cards
    applyFilters();
}

// Function to check if card matches active filters
function cardMatchesFilters(card) {
    // If no filters are active, show all cards
    if (activeFilters.length === 0) {
        return true;
    }

    // Check if the card has any keywords matching the active filters
    return activeFilters.some(activeFilter => {
        const category = filterCategories.find(cat => cat.name === activeFilter);
        if (!category) return false;

        return category.keywords.some(keyword =>
            card.keywords.some(cardKeyword =>
                cardKeyword.toLowerCase().includes(keyword.toLowerCase())
            )
        );
    });
}

// Function to apply filters to cards
function applyFilters() {
    // Get the current search filter text
    const searchText = document.getElementById('search-input').value.toLowerCase().trim();

    // Update the global filterText variable using your existing logic
    filterText = searchText;

    // Override the displayCards function to include category filtering
    displayCards();
}

// // Update the displayCards function to load popup data first
// async function displayCards() {
//     // Ensure popup links data is loaded
//     if (Object.keys(popupLinksData).length === 0) {
//         await fetchPopupLinks();
//     }

//     const cardContainer = document.querySelector('.card-container');
//     cardContainer.innerHTML = '';
//     const cards = await getCards();
//     for (const card of cards) {
//         if (filterText && !card.keywords.some(keyword => keyword.toLowerCase().includes(filterText))) {
//             continue;
//         }
//         const cardElement = new Card(card.id, card.title, card.imageUrl, card.date, card.readTime, card.content, card.link, card.iconLink);
//         cardContainer.appendChild(cardElement.render());
//     }
//     const dynamicCard = createOtherCard();
//     cardContainer.appendChild(dynamicCard);

//     // Initialize Intersection Observer for lazy loading
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.src = entry.target.dataset.src;
//                 entry.target.classList.add('loaded');
//                 observer.unobserve(entry.target);
//             }
//         });
//     });

//     // Observe each card image for lazy loading
//     const cardImages = cardContainer.querySelectorAll('img');
//     cardImages.forEach(img => {
//         img.dataset.src = img.src;
//         img.src = '';
//         observer.observe(img);
//     });
// }

// Modified displayCards function to include category filtering
async function displayCards() {
    // Ensure popup links data is loaded
    if (Object.keys(popupLinksData).length === 0) {
        await fetchPopupLinks();
    }

    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';
    const cards = await getCards();

    for (const card of cards) {
        // Check if card matches both text search and category filters
        const matchesTextFilter = !filterText || card.keywords.some(keyword => keyword.toLowerCase().includes(filterText));
        const matchesCategoryFilter = cardMatchesFilters(card);

        if (matchesTextFilter && matchesCategoryFilter) {
            const cardElement = new Card(card.id, card.title, card.imageUrl, card.date, card.readTime, card.content, card.link, card.iconLink);
            cardContainer.appendChild(cardElement.render());
        }
    }

    const dynamicCard = createOtherCard();
    cardContainer.appendChild(dynamicCard);

    // Initialize Intersection Observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    });

    // Observe each card image for lazy loading
    const cardImages = cardContainer.querySelectorAll('img');
    cardImages.forEach(img => {
        img.dataset.src = img.src;
        img.src = '';
        observer.observe(img);
    });
}

// Get the input element
const searchInput = document.getElementById('search-input');

// Add an input event listener to the search input
searchInput.addEventListener('input', () => {
    filterText = searchInput.value.toLowerCase().trim();
    displayCards();
});



const sortButton = document.getElementById('sort-button');
sortButton.addEventListener('click', sortCardsByDate);
const dateChangeImage = document.getElementById("dateChangeImage");
let isSortDescending = true;

function sortCardsByDate() {
    // Toggle the sorting order
    isSortDescending = !isSortDescending;
    // Create a copy of the cards array before sorting
    const sortedCards = [...cards];
    // Sort the copied cards array by date
    sortedCards.sort((a, b) => {
        const dateA = new Date(a.date.replace(/(\d+)(st|nd|rd|th)/, '$1')); // Remove the ordinal suffix from the date string
        const dateB = new Date(b.date.replace(/(\d+)(st|nd|rd|th)/, '$1')); // Remove the ordinal suffix from the date string
        if (isSortDescending) {
            dateChangeImage.src = "image/dateAsce.svg";
            return dateB.getTime() - dateA.getTime(); // Sort in descending order (newest to oldest)
        } else {
            dateChangeImage.src = "image/dateDesc.svg";
            return dateA.getTime() - dateB.getTime(); // Sort in ascending order (oldest to newest)
        }
    });
    // Update the displayed cards with the sorted array
    displayCards(sortedCards);
}

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-com'), // the DOM element to render the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'image/icons/communication.json' // the path to the animation JSON file
});




// ----------------------

// Create the popup functionality
function showPopup(title, links) {
    // Create popup container
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    // Create popup content
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Create header
    const header = document.createElement('div');
    header.classList.add('popup-header');

    const popupTitle = document.createElement('h2');
    popupTitle.textContent = title;

    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.classList.add('popup-close');
    closeButton.onclick = () => {
        document.body.removeChild(popupContainer);
        document.body.classList.remove('popup-open'); // Remove class when closing
    };

    header.appendChild(popupTitle);
    header.appendChild(closeButton);

    // Create content
    const content = document.createElement('div');
    content.classList.add('popup-content');

    // Add the document links
    links.forEach(doc => {
        const linkContainer = document.createElement('div');
        linkContainer.classList.add('document-link-container');

        const linkTitle = document.createElement('h3');
        linkTitle.textContent = doc.title;

        const linkDescription = document.createElement('p');
        linkDescription.textContent = doc.description;

        const link = document.createElement('a');
        // Check if the URL is external (starts with http or https)
        if (doc.url.startsWith('http://') || doc.url.startsWith('https://')) {
            // For external links, open directly in a new tab
            link.href = doc.url;
            link.target = "_blank";
            link.textContent = "Visit Link";
        } else {
            // For local PDFs, use your PDF viewer
            link.href = `documentView.html?path=${encodeURIComponent(doc.url)}`;
            link.textContent = "View Document";
        }
        link.classList.add('document-link');

        linkContainer.appendChild(linkTitle);
        linkContainer.appendChild(linkDescription);
        linkContainer.appendChild(link);

        content.appendChild(linkContainer);
    });

    // Assemble popup
    popup.appendChild(header);
    popup.appendChild(content);
    popupContainer.appendChild(popup);

    // Add popup to the body
    document.body.appendChild(popupContainer);
    document.body.classList.add('popup-open'); // Add class when opening

    // Close popup when clicking outside
    popupContainer.onclick = (e) => {
        if (e.target === popupContainer) {
            document.body.removeChild(popupContainer);
            document.body.classList.remove('popup-open'); // Remove class when closing
        }
    };
}

// Call fetchPopupLinks when the page loads
window.addEventListener('DOMContentLoaded', async () => {
    await fetchPopupLinks();
    await displayCards();
    initializeFilters();
});


// Define a variable to store popup links data
let popupLinksData = {};

// Fetch popup links data when page loads
async function fetchPopupLinks() {
    try {
        const response = await fetch('popupLinks.json');
        popupLinksData = await response.json();
    } catch (error) {
        console.error('Error fetching popup links:', error);
    }
}
