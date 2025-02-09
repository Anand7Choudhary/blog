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

window.onload=()=>{
    let getTheme=localStorage.getItem("theme");
    if(getTheme==null){
        changeTheme(2);
    }else{
        if (getTheme == "light")
            changeTheme(2);
        else
            changeTheme(1);
    }
}

window.addEventListener('scroll', function () {
    var scrollBox = document.getElementById('scrollBox');
    if (window.scrollY >= 100) {
        scrollBox.classList.add('show');
    } else {
        scrollBox.classList.remove('show');
    }
});

document.getElementById('scrollBox').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// card data


// Define a class to style the cards
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
        card.onclick = () => {
            if (!this.link.startsWith('https')) {
                window.location.href = this.link;
            } else {
                window.open(this.link, '_blank');
            }
        };
        const cardImage = document.createElement('img');
        cardImage.src = this.imageUrl;
        cardImage.loading = "lazy"; // Add this line to enable lazy loading
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
        setTimeout(() => {
            lottie.loadAnimation({
                container: document.getElementById(iconId), // the DOM element to render the animation
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: this.iconLink, // the path to the animation JSON file
                speed: 2
            });
        }, 0);
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

// Update the displayCards function to use the getCards function
async function displayCards() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';
    const cards = await getCards();
    for (const card of cards) {
        if (filterText && !card.keywords.some(keyword => keyword.toLowerCase().includes(filterText))) {
            continue;
        }
        const cardElement = new Card(card.id, card.title, card.imageUrl, card.date, card.readTime, card.content, card.link, card.iconLink);
        cardContainer.appendChild(cardElement.render());
    }
    const dynamicCard = createOtherCard();
    cardContainer.appendChild(dynamicCard);

    // Initialize Intersection Observer for lazy loading
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                entry.target.classList.add('loaded'); // Add this line to trigger the fade-in effect
                observer.unobserve(entry.target);
            }
        });
    });

    // Observe each card image for lazy loading
    const cardImages = cardContainer.querySelectorAll('img');
    cardImages.forEach(img => {
        img.dataset.src = img.src;
        img.src = ''; // Set src to empty string to trigger lazy loading
        observer.observe(img);
    });
}

// Display all cards on page load
window.addEventListener('DOMContentLoaded', async () => {
    await displayCards();
});

// The rest of your JavaScript code remains unchanged

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