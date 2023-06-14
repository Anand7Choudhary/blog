const changeTheme = (n) => {
    let modeDiv = document.getElementById("innerModeDiv");
    if (n == 1) {
        modeDiv.style.transform = "translateX(-50%)";
        document.querySelector("html").className = "dark";
    } else {
        modeDiv.style.transform = "translateX(0)";
        document.querySelector("html").className = "light";
    }
}


// card data
const cards = [{
        id: '7',
        title: 'Understanding the Decline in Startup Valuations in India',
        imageUrl: 'https://media.licdn.com/dms/image/D4D12AQHfsNVmrzb05g/article-cover_image-shrink_423_752/0/1686291199857?e=1692230400&v=beta&t=ceBM9sdMv6h_3w7k_KQ94mW6qXRYKiz6MVjXO1CGAlU',
        date: '10th June, 2023',
        readTime: '8min-10min read',
        content: 'The Indian startup ecosystem has been on a tear in recent years, the tide seems to be turning, as venture capital (VC) firms are becoming more cautious about valuations.',
        keywords: ['Understanding the Decline in Startup Valuations in India', 'funding winter', 'fintech', 'startup valuations', 'India', 'venture capital', 'rising interest rates', 'cautious investors', 'down rounds', 'structured debt', 'unicorns', 'e-commerce', 'enterprise tech'],
        link: 'https://www.linkedin.com/pulse/navigating-shift-understanding-decline-startup-india-anand-choudhary',
    },
    {
        id: '6',
        title: "NVIDIA's Market Cap Reaches $970 Billion",
        imageUrl: 'https://media.licdn.com/dms/image/D5622AQH0ntKs2B0Vcw/feedshare-shrink_2048_1536/0/1685358812182?e=1689206400&v=beta&t=HhLpZnnUD85spa6gDBQuX6_ObD5NerHOS4VUxHsD17Y',
        date: '29th May, 2023',
        readTime: '3min-5min read',
        content: "Nvidia, the world's leading provider of GPUs, has reached a market capitalization of $970 billion, solidifying its position as a global tech powerhouse.",
        keywords: ['NVIDIA\'s Market Cap Reaches $970 Billion','NVIDIA', 'market cap','GPU\'s','AI','data center', 'automotive', 'gaming', 'cloud computing', 'metaverse', 'cryptocurrency'],
        link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_ai-leadership-growth-activity-7068907212286414849-43iq?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: '5',
        title: 'The Gig Economy: A New Way to Work',
        imageUrl: 'https://media.licdn.com/dms/image/D5622AQG9MO5zJqQB3A/feedshare-shrink_2048_1536/0/1685249621718?e=1689206400&v=beta&t=Ydx40o9ozdQifXbJs7aEzoI-VvcgHIQ6wDLF7PaWQTk',
        date: '28th May, 2023',
        readTime: '3min-5min read',
        content: 'The gig economy is revolutionizing the way we work, offering exciting opportunities for independent contractors to engage in short-term projects through online platforms. Writers, designers, drivers, and delivery workers are just a few examples of professionals thriving in this dynamic landscape.',
        keywords: ['The Gig Economy: A New Way to Work', 'gig economy', 'work', 'Independent contractor', 'Freelancer', 'Online platform', 'Short-term project', 'Work-life balance', 'Flexibility', 'Independence', 'Opportunity', 'Rewarding'],
        link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_gigeconomy-independence-flexibility-activity-7068449233388912640-fc1K?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: '4',
        title: 'Neuralink: The Future of Humankind?',
        imageUrl: 'https://media.licdn.com/dms/image/D5622AQGTjJ5N4Ot52g/feedshare-shrink_800/0/1685110606775?e=1689206400&v=beta&t=f4O-MXNcR6i_m54aFCh5Cw-dVCjQKMzmokibVxUmTTc',
        date: '26th May, 2023',
        readTime: '2min-4min read',
        content: "Elon Musk's Neuralink company has been making headlines for its groundbreaking development of brain-implant technology. The company has already achieved successful implantations in pigs and monkeys, and now it's gearing up for human trials!",
        keywords: ['Neuralink: The Future of Humankind?','Neuralink', 'brain-implant technology','groundbreaking development', 'brain-implant technology', 'successful implantations', 'pigs and monkeys', 'human trials', 'connect the human brain to a computer', 'wide range of potential applications', 'treating neurological disorders', 'enhancing human intelligence', 'potential risks', 'malfunction and damage the brain', 'control people\'s thoughts or behavior', 'potential benefits', 'revolutionize the way we treat neurological disorders', 'enhance human intelligence', 'groundbreaking technology', 'potential to change the world'],
        link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_technology-development-future-activity-7068073333283581953-Yutw?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: '3',
        title: 'Have you heard of Neeva?',
        imageUrl: 'https://media.licdn.com/dms/image/D5622AQFOXXPMN5ZEcA/feedshare-shrink_1280/0/1685097340060?e=1689206400&v=beta&t=GCN9iAS8QaOEhW-tR5i6HSd3JqdcdysLrOFoqSPTVjk',
        date: '25th May, 2023',
        readTime: '2min-4min read',
        content: 'It\'s a 2019-founded company that aimed to challenge Google with an ad-free search engine, using AI for more relevant and accurate results. Founded by ex-Googlers Sridhar Ramaswamy and Vivek Raghunathan, Neeva prioritized user control and privacy.',
        keywords: ['Have you heard of Neeva?', 'Neeva', 'search engine', 'privacy', 'Ad-free', 'AI-powered', 'Privacy-focused', 'Personalized results', 'Custom search folders', 'Neeva', 'Search engine', 'Ad-free', 'AI-powered', 'Privacy-focused', 'Subscription-based', 'Sridhar Ramaswamy', 'Vivek Raghunathan', 'Neeva review', 'Neeva vs. Google', 'Neeva vs. DuckDuckGo', 'Neeva vs. Bing'],
        link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_neeva-searchengine-privacy-activity-7067810519646142464-B9Hs?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: '2',
        title: 'Understanding Changing Consumer Behaviour',
        imageUrl: 'https://media.licdn.com/dms/image/D5612AQHsAnSPoTL5qg/article-cover_image-shrink_423_752/0/1684678278422?e=1692230400&v=beta&t=koukhxDnf2vMXim2qqQ5WGq2Lt1dH_lkTkR0YgSKFuk',
        date: '22nd May, 2023',
        readTime: '6min-8min read',
        content: 'Consumer behaviour has undergone significant transformations throughout history. From price-consciousness to an emphasis on quality and sustainability, consumers have become more discerning in recent years. This article explores the important revolutions that shaped consumer behaviour, examines current changes, and speculates the future.',
        keywords: ['Understanding Changing Consumer Behaviour', 'consumer behaviour', 'consumer trends', 'Consumer trends', 'Consumer insights', 'Customer journey', 'Customer experience', 'Personalization', 'Sustainability', 'Ethics', 'Technology', 'Globalization'],
        link: 'https://www.linkedin.com/pulse/understanding-changing-consumer-behaviour-journey-past-choudhary',
    },
    {
        id: '1',
        title: 'Hippo Chips',
        imageUrl: 'https://static.wixstatic.com/media/86a29f_a8aa0d4cfe014949bf93f15dae4e8140~mv2.jpg/v1/fill/w_1000,h_569,al_c,q_90,usm_0.66_1.00_0.01/86a29f_a8aa0d4cfe014949bf93f15dae4e8140~mv2.jpginit',
        date: '5th March, 2023',
        readTime: '4min-6min read',
        content: 'In India, "maa ka pyaar" (a mother\'s love) is a surefire winner. This is exactly what the snack brand "Hippo" did with its munchies variant. Initially, Parle Agro tried to tackle the global hunger issue with their product, but then shifted their focus to selling it based on the promise of love and care.',
        keywords: ['Hippo Chips', 'Hippo', 'snack brand', 'India', 'Parle Agro', 'Munchies', 'Global hunger', 'Love and care', 'India'],
        link: 'blogs/hippoChips.html',
    },
    // Add more card objects as needed
];

// Define a class to style the cards
class Card {
    constructor(id, title, imageUrl, date, readTime, content, link) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.date = date;
        this.readTime = readTime;
        this.content = content;
        this.link = link;
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
        cardTime.textContent = `Date: ${this.readTime}`;
        const cardContent = document.createElement('p');
        cardContent.classList = "cardMiniContent";
        cardContent.textContent = this.content;
        card.appendChild(cardImage);
        textBody.appendChild(cardTitle);
        textBody.appendChild(cardDate);
        textBody.appendChild(cardTime);
        textBody.appendChild(cardContent);
        card.appendChild(textBody);
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

        const cardElement = new Card(card.id, card.title, card.imageUrl, card.date, card.readTime, card.content, card.link);
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