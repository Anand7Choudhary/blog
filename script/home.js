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
const cards = [
    {
        id: '9',
        title: "Paris olympics 2024 Data Insights in Tableau dashboard",
        imageUrl: 'image/articleImages/9.webp',
        date: '19th September, 2024',
        readTime: '10-12min read',
        content: "What do you do when you’re not competing in the Olympics? Well, you create a Tableau dashboard to analyze the real champions! I just had a blast brushing up my dashboard design skills while building an interactive Olympics 2024 insights dashboard. From who’ s bagging the most medal to how athletes are stacking up by country, discipline, and gender.Wanna geek out on the numbers and reveal the insights ?",
        keywords: ['Olympics 2024 Dashboard', 'Tableau', 'data visualization', 'dashboard design', 'Olympics insights', 'sports analytics', 'medal tally', 'athlete performance', 'country-wise medals', 'gender distribution', 'Paris Olympics', 'GrowthBubble', 'Olympic data analysis', 'interactive dashboard', 'Olympics statistics', 'data analytics', 'business intelligence', 'dashboard skills', 'job hunting', 'sports data', 'visual analytics'],
        link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_tableau-olympics2024-datanerd-activity-7242835628881584130-hvEf?utm_source=share&utm_medium=member_desktop',
        iconLink:'image/icons/heart.json',
    },
    {
        id: '8',
        title: "Crystal Ball for Businesses: Unlocking Future Consumer Behavior for Unmatched Growth",
        imageUrl: 'image/articleImages/8.webp',
        date: '16th June, 2024',
        readTime: '5-7min read',
        content: "In this fast-paced and ever-evolving business landscape, we have already understood the importance of limitless technology and best operations. But staying ahead of the competition requires more than just that. Imagine having a crystal ball that reveals the future behaviours and preferences of your customers.",
        keywords: ['Crystal Ball for Businesses, future consumer behavior,consumer,behavior, predictive analytics,analytics,predictive, customer metrics, data privacy,privacy, business growth, customer satisfaction, customer loyalty, market trends,market,trends, competitive edge'],
        link: 'https://www.linkedin.com/pulse/crystal-ball-businesses-unlocking-future-consumer-growth-choudhary-hmyqe/?trackingId=EtD3ylv0mhAg17UkXOSKYw%3D%3D',
        iconLink:'image/icons/fire.json',
    },
    {
        id: '7',
        title: 'Understanding the Decline in Startup Valuations in India',
        imageUrl: 'image/articleImages/7.webp',
        date: '10th June, 2023',
        readTime: '8min-10min read',
        content: 'The Indian startup ecosystem has been on a tear in recent years, the tide seems to be turning, as venture capital (VC) firms are becoming more cautious about valuations.',
        keywords: ['Understanding the Decline in Startup Valuations in India', 'funding winter', 'fintech', 'startup valuations', 'India', 'venture capital', 'rising interest rates', 'cautious investors', 'down rounds', 'structured debt', 'unicorns', 'e-commerce', 'enterprise tech'],
        link: 'https://www.linkedin.com/pulse/navigating-shift-understanding-decline-startup-india-anand-choudhary',
        iconLink: 'image/icons/fire.json',
    },
    {
        id: '6',
        title: "NVIDIA's Market Cap Reaches $970 Billion",
        imageUrl: 'image/articleImages/6.webp',
        date: '29th May, 2023',
        readTime: '3min-5min read',
        content: "Nvidia, the world's leading provider of GPUs, has reached a market capitalization of $970 billion, solidifying its position as a global tech powerhouse.",
        keywords: ['NVIDIA\'s Market Cap Reaches $970 Billion','NVIDIA', 'market cap','GPU\'s','AI','data center', 'automotive', 'gaming', 'cloud computing', 'metaverse', 'cryptocurrency'],
        link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_ai-leadership-growth-activity-7068907212286414849-43iq?utm_source=share&utm_medium=member_desktop',
        iconLink: 'image/icons/globe.json',
    },
    {
        id: '5',
        title: 'The Gig Economy: A New Way to Work',
        imageUrl: 'image/articleImages/5.webp',
        date: '28th May, 2023',
        readTime: '3min-5min read',
        content: 'The gig economy is revolutionizing the way we work, offering exciting opportunities for independent contractors to engage in short-term projects through online platforms. Writers, designers, drivers, and delivery workers are just a few examples of professionals thriving in this dynamic landscape.',
        keywords: ['The Gig Economy: A New Way to Work', 'gig economy', 'work', 'Independent contractor', 'Freelancer', 'Online platform', 'Short-term project', 'Work-life balance', 'Flexibility', 'Independence', 'Opportunity', 'Rewarding'],
        link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_gigeconomy-independence-flexibility-activity-7068449233388912640-fc1K?utm_source=share&utm_medium=member_desktop',
        iconLink: '',
    },
    {
        id: '4',
        title: 'Neuralink: The Future of Humankind?',
        imageUrl: 'image/articleImages/4.webp',
        date: '26th May, 2023',
        readTime: '2min-4min read',
        content: "Elon Musk's Neuralink company has been making headlines for its groundbreaking development of brain-implant technology. The company has already achieved successful implantations in pigs and monkeys, and now it's gearing up for human trials!",
        keywords: ['Neuralink: The Future of Humankind?','Neuralink', 'brain-implant technology','groundbreaking development', 'brain-implant technology', 'successful implantations', 'pigs and monkeys', 'human trials', 'connect the human brain to a computer', 'wide range of potential applications', 'treating neurological disorders', 'enhancing human intelligence', 'potential risks', 'malfunction and damage the brain', 'control people\'s thoughts or behavior', 'potential benefits', 'revolutionize the way we treat neurological disorders', 'enhance human intelligence', 'groundbreaking technology', 'potential to change the world'],
        link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_technology-development-future-activity-7068073333283581953-Yutw?utm_source=share&utm_medium=member_desktop',
        iconLink: '',
    },
    {
        id: '3',
        title: 'Have you heard of Neeva?',
        imageUrl: 'image/articleImages/3.webp',
        date: '25th May, 2023',
        readTime: '2min-4min read',
        content: 'It\'s a 2019-founded company that aimed to challenge Google with an ad-free search engine, using AI for more relevant and accurate results. Founded by ex-Googlers Sridhar Ramaswamy and Vivek Raghunathan, Neeva prioritized user control and privacy.',
        keywords: ['Have you heard of Neeva?', 'Neeva', 'search engine', 'privacy', 'Ad-free', 'AI-powered', 'Privacy-focused', 'Personalized results', 'Custom search folders', 'Neeva', 'Search engine', 'Ad-free', 'AI-powered', 'Privacy-focused', 'Subscription-based', 'Sridhar Ramaswamy', 'Vivek Raghunathan', 'Neeva review', 'Neeva vs. Google', 'Neeva vs. DuckDuckGo', 'Neeva vs. Bing'],
        link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_neeva-searchengine-privacy-activity-7067810519646142464-B9Hs?utm_source=share&utm_medium=member_desktop',
        iconLink: '',
    },
    {
        id: '2',
        title: 'Understanding Changing Consumer Behaviour',
        imageUrl: 'image/articleImages/2.webp',
        date: '22nd May, 2023',
        readTime: '6min-8min read',
        content: 'Consumer behaviour has undergone significant transformations throughout history. From price-consciousness to an emphasis on quality and sustainability, consumers have become more discerning in recent years. This article explores the important revolutions that shaped consumer behaviour, examines current changes, and speculates the future.',
        keywords: ['Understanding Changing Consumer Behaviour', 'consumer behaviour', 'consumer trends', 'Consumer trends', 'Consumer insights', 'Customer journey', 'Customer experience', 'Personalization', 'Sustainability', 'Ethics', 'Technology', 'Globalization'],
        link: 'https://www.linkedin.com/pulse/understanding-changing-consumer-behaviour-journey-past-choudhary',
        iconLink: 'image/icons/heart.json',
    },
    // Add more card objects as needed
];

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

// Function to display the cards
function displayCards() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.innerHTML = '';

    for (const card of cards) {
        if (filterText && !card.keywords.some(keyword => keyword.toLowerCase().includes(filterText))) {
            continue;
        }

        const cardElement = new Card(card.id, card.title, card.imageUrl, card.date, card.readTime, card.content, card.link, card.iconLink);
        cardContainer.appendChild(cardElement.render());
    }
    const dynamicCard = createOtherCard();
    cardContainer.appendChild(dynamicCard);
}

// Display all cards on page load
window.addEventListener('DOMContentLoaded', displayCards);

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
    // Sort the cards array by date
    cards.sort((a, b) => {
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
    displayCards();
}

var animation = lottie.loadAnimation({
    container: document.getElementById('lottie-animation-com'), // the DOM element to render the animation
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'image/icons/communication.json' // the path to the animation JSON file
});