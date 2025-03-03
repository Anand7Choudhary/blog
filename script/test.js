// class Card {
//     constructor(id, title, imageUrl, date, readTime, content, link, iconLink) {
//         this.id = id;
//         this.title = title;
//         this.imageUrl = imageUrl;
//         this.date = date;
//         this.readTime = readTime;
//         this.content = content;
//         this.link = link;
//         this.iconLink = iconLink;
//     }

//     render() {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         card.onclick = () => {
//             if (!this.link.startsWith('https')) {
//                 window.location.href = this.link;
//             } else {
//                 window.open(this.link, '_blank');
//             }
//         };

//         const cardImage = document.createElement('img');
//         cardImage.src = this.imageUrl;

//         const textBody = document.createElement('div');
//         textBody.classList = "textBody";

//         const cardTitle = document.createElement('p');
//         cardTitle.classList = "cardTitle";
//         cardTitle.textContent = this.title;

//         const cardDate = document.createElement('p');
//         cardDate.classList = "cardReadTime";
//         cardDate.textContent = `Date: ${this.date}`;

//         const cardTime = document.createElement('p');
//         cardTime.classList = "cardReadTime2";
//         cardTime.textContent = `Read Time: ${this.readTime}`;

//         const cardContent = document.createElement('p');
//         cardContent.classList = "cardMiniContent";
//         cardContent.textContent = this.content;

//         const iconContainer = document.createElement('div');
//         iconContainer.classList = "ani-icon";
//         var iconId = 'ani-icon-' + this.id;
//         iconContainer.id = iconId;

//         // Append elements to the card
//         card.appendChild(cardImage);
//         textBody.appendChild(cardTitle);
//         textBody.appendChild(cardDate);
//         textBody.appendChild(cardTime);
//         textBody.appendChild(cardContent);
//         card.appendChild(textBody);
//         card.appendChild(iconContainer);

//         // After the iconContainer is appended to the DOM, load the Lottie animation
//         setTimeout(() => {
//             lottie.loadAnimation({
//                 container: document.getElementById(iconId), // the DOM element to render the animation
//                 renderer: 'svg',
//                 loop: true,
//                 autoplay: true,
//                 path: this.iconLink, // the path to the animation JSON file
//                 speed: 2
//             });
//         }, 0);

//         return card;
//     }
// }


// function displayCards() {
//     const cardContainer = document.querySelector('.card-container');
//     cardContainer.innerHTML = '';

//     for (const card of cards) {
//         if (filterText && !card.keywords.some(keyword => keyword.toLowerCase().includes(filterText))) {
//             continue;
//         }

//         const cardElement = new Card(card.id, card.title, card.imageUrl, card.date, card.readTime, card.content, card.link, card.iconLink);
//         cardContainer.appendChild(cardElement.render());
//     }
//     const dynamicCard = createOtherCard();
//     cardContainer.appendChild(dynamicCard);
// }


// // Function to display the cards
// function displayCards() {
//     const cardContainer = document.querySelector('.card-container');
//     cardContainer.innerHTML = '';
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
//                 observer.unobserve(entry.target);
//             }
//         });
//     });

//     // Observe each card image for lazy loading
//     const cardImages = cardContainer.querySelectorAll('img');
//     cardImages.forEach(img => {
//         img.dataset.src = img.src;
//         img.src = ''; // Set src to empty string to trigger lazy loading
//         observer.observe(img);
//     });
// }

// // Display all cards on page load
// window.addEventListener('DOMContentLoaded', displayCards);


// const cards = [{
//         id: '20',
//         title: "The €1.9 Billion Lie",
//         imageUrl: 'image/articleImages/20.webp',
//         date: '3rd February, 2025',
//         readTime: '2-3min read',
//         content: "Wirecard, once a €24 billion fintech giant and a member of Germany’s prestigious DAX 30, fabricated financial statements to maintain its market value. The company falsely reported €1.9 billion in assets that never existed, deceiving investors and regulators for years.",
//         keywords: ['Wirecard scandal', 'financial fraud', 'accounting fraud', '€1.9 billion missing', 'fintech collapse', 'DAX 30', 'corporate deception', 'Markus Braun', 'insolvency', 'investor losses', 'auditor investigation', 'fake financials', 'fraudulent accounting', 'stock market crash', 'regulatory failure'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_this-company-cooked-their-financial-statements-activity-7291711712204865537-XhR3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKbm6cBVm135R3DQ9MR4dxdbZ0CHyihcrU',
//         iconLink: '',
//     },
//     {
//         id: '19',
//         title: "The Big 'Wait a Minute'",
//         imageUrl: 'image/articleImages/19.webp',
//         date: '3rd February, 2025',
//         readTime: '2-3min read',
//         content: "Goldman Sachs’ risk team saw the warning signs—rising defaults, shaky home prices, and excessive risk exposure. Instead of following the crowd, they bet against the market, using credit default swaps to profit from the inevitable collapse. ",
//         keywords: ['Goldman Sachs', '2008 financial crisis', 'risk analysis', 'mortgage crisis', 'credit default swaps', 'The Big Short', 'housing market crash', 'Wall Street', 'financial foresight', 'market collapse', 'hedging strategies', 'short selling', 'toxic assets', 'risk management', 'investment banking'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_finance-is-boring-until-my-friend-and-activity-7291138354832646144-rSLT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKbm6cBVm135R3DQ9MR4dxdbZ0CHyihcrU',
//         iconLink: '',
//     },
//     {
//         id: '18',
//         title: "Quantitative Finance and Risk Analysis",
//         imageUrl: 'image/articleImages/18.webp',
//         date: '2nd February, 2025',
//         readTime: '1hr read',
//         content: "This project explores Futures, Options, and risk management strategies, building on prior knowledge of market risk analysis and portfolio forecasting. Through a structured deep dive, it covers derivatives fundamentals, the Option Greeks (Delta, Gamma, Theta, Vega, Rho), and dynamic hedging techniques, making complex concepts more accessible.",
//         keywords: ['Futures', 'Options', 'Option Greeks', 'Delta', 'Gamma', 'Theta', 'Vega', 'Rho', 'Dynamic hedging', 'Risk management', 'Portfolio forecasting', 'Market risk analysis', 'Derivatives trading', 'Volatility', 'Hedging strategies', 'Financial modeling', 'Quantitative finance', 'Risk mitigation', 'Trading strategies', 'IFRS 9', 'Market adaptability'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_options-and-greeks-for-market-risk-activity-7290069483316994048-r6bu?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKbm6cBVm135R3DQ9MR4dxdbZ0CHyihcrU',
//         iconLink: 'image/icons/fire.json',
//     },
//     {
//         id: '17',
//         title: "Quantitative Finance and Risk Analysis",
//         imageUrl: 'image/articleImages/17.webp',
//         date: '9th January, 2025',
//         readTime: '1hr read',
//         content: "This project delves into quantitative finance and market risk analysis, focusing on portfolio risk management using historical data from NIFTY 50 constituents. Leveraging advanced financial models like ARIMA for time-series forecasting, GARCH for volatility estimation, and Value at Risk (VaR) & Expected Shortfall (ES) for downside risk quantification, the analysis uncovers market dynamics and risk exposure. Stress testing and scenario analysis further assess vulnerabilities to systemic and idiosyncratic shocks, aligning with IFRS 9 risk frameworks. By integrating stochastic modeling, financial derivatives, and risk-adjusted performance metrics like the Sharpe Ratio, this work bridges data-driven insights with real-world financial strategies, enhancing decision-making in volatile markets. ",
//         keywords: ['Quantitative finance', 'Market risk analysis', 'Portfolio risk management', 'NIFTY 50', 'ARIMA modeling', 'GARCH volatility', 'Value at Risk (VaR)', 'Expected Shortfall (ES)', 'Stress testing', 'Scenario analysis', 'Financial forecasting', 'Risk-adjusted returns', 'Sharpe Ratio', 'Market volatility', 'Systemic risk', 'Idiosyncratic risk', 'Financial derivatives', 'Stochastic modeling', 'IFRS 9 compliance', 'Time-series forecasting', 'Downside risk quantification', 'Risk frameworks', 'Monte Carlo simulations', 'Portfolio optimization', 'Economic downturn impact', 'Tail risk management', 'Financial analytics', 'Risk mitigation strategies', 'Quant trading', 'Investment risk insights'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_risk-analysis-activity-7280437578464391168-oMh6?utm_source=share&utm_medium=member_desktop&rcm=ACoAADKbm6cBVm135R3DQ9MR4dxdbZ0CHyihcrU',
//         iconLink: 'image/icons/fire.json',
//     },
//     {
//         id: '16',
//         title: "The Strategic and Financial Brilliance of Tesla and TikTok",
//         imageUrl: 'image/articleImages/16.webp',
//         date: '27th December, 2024',
//         readTime: '7-8min read',
//         content: "Tesla and TikTok represent two sides of the same coin: strategic vision and financial innovation. Tesla’s control over its supply chain and alignment with a global mission offer lessons in sustainability and differentiation. TikTok’s mastery of engagement and creator empowerment showcases the power of community-driven platforms.",
//         keywords: ['Tesla business model', 'TikTok success', 'Financial strategy', 'Disruptive innovation', 'Electric vehicles', 'Social media dominance', 'Vertical integration', 'Premium pricing', 'Economies of scale', 'Recurring revenue', 'Freemium advertising', 'Creator economy', 'Algorithm-driven personalization', 'Mission-driven branding', 'EV market growth', 'TikTok monetization', 'Customer engagement', 'Revenue diversification', 'Tech-driven disruption', 'Sustainable energy', 'Market expansion', 'In-app purchases', 'Ad revenue model', 'Financial efficiency', 'Startup strategies', 'Competitive advantage', 'Growth hacking', 'Strategic branding', 'User acquisition', 'Global business strategy'],
//         link: 'https://www.linkedin.com/pulse/disrupt-dominate-strategic-financial-brilliance-tesla-anand-choudhary-mbexe/?trackingId=O5cpkkNMMHjuBIJxHvJmCw%3D%3D',
//         iconLink: '',
//     },
//     {
//         id: '15',
//         title: "Business Strategies from Netflix and Shopify to Outpace Industry Titans",
//         imageUrl: 'image/articleImages/15.webp',
//         date: '26th December, 2024',
//         readTime: '7-8min read',
//         content: "Netflix and Shopify aren’t just businesses, they’re case studies in strategic brilliance. Their innovative use of business models, financial discipline, and focus on customer-centricity have set them apart.",
//         keywords: ['Netflix business model', 'Shopify success', 'Subscription economy', 'Platform business model', 'Recurring revenue', 'E-commerce revolution', 'Streaming industry', 'Vertical integration', 'Freemium pricing', 'Customer retention', 'Revenue diversification', 'Financial strategy', 'Market disruption', 'Strategic branding', 'Content production', 'Shopify ecosystem', 'Two-sided marketplace', 'Network effects', 'Entrepreneur empowerment', 'Scalable growth', 'Technology-driven business', 'Digital transformation', 'User acquisition', 'Competitive advantage', 'Customer lifetime value', 'Business strategy insights', 'Industry innovation', 'Financial resilience', 'Startup lessons', 'Long-term growth strategies'],
//         link: 'https://www.linkedin.com/pulse/redefining-growth-business-strategies-from-netflix-titans-choudhary-2rebe/?trackingId=51zOg4NU1n88DcdIg7BXKg%3D%3D',
//         iconLink: '',
//     },
//     {
//         id: '14',
//         title: "Innovating Revenue Models and Mastering Capital Efficiency",
//         imageUrl: 'image/articleImages/14.webp',
//         date: '24th December, 2024',
//         readTime: '7-8min read',
//         content: "Both Airbnb and Zoho implemented ingenious business strategies that helped them break through the noise and become global leaders in their respective industries. Let’s examine the clever strategies that they used and how they can be applied to your own business.",
//         keywords: ['Nespresso', 'Premium coffee', 'Capsule technology', 'Razor-and-blades model', 'Coffee capsules', 'Luxury retail', 'Nespresso boutiques', 'Vertuo system', 'AAA Sustainable Quality Program', 'Sustainability', 'Recurring revenue', 'Premium customers', 'Espresso market', 'Coffee recycling', 'Direct-to-consumer (DTC)', 'Nespresso vs. Starbucks', 'Capsule pricing', 'Customer lock-in', 'Subscription models', 'Strategic branding', 'Experiential marketing', 'Revenue performance', 'Organic growth', 'Market reach', 'Ethical sourcing', 'High-margin products', 'Market competition', 'Third-party capsules', 'Global expansion strategies'],
//         link: 'https://www.linkedin.com/pulse/breaking-giants-13-innovating-revenue-models-from-airbnb-choudhary-7n41e/?trackingId=dPQOIUR%2FAIlAlB3tgqkrdg%3D%3D',
//         iconLink: '',
//     },
//     {
//         id: '13',
//         title: "Nespresso: Brewing Success One Capsule at a Time",
//         imageUrl: 'image/articleImages/13.webp',
//         date: '16th December, 2024',
//         readTime: '5-6min read',
//         content: "Nespresso’s strategy is a textbook example of the razor-and-blades model. While machines are often sold at competitive prices or bundled with promotions, the real profit lies in the proprietary coffee capsules.",
//         keywords: ['Startup finance', 'Financial strategy', 'Airbnb business model', 'Zoho bootstrapping', 'Asset-light model', 'Profitability in startups', 'Revenue model', 'EBITDA margin', 'R&D investment', 'Scalability', 'Tech-driven marketplace', 'Commission-based revenue', 'Cost efficiency', 'Financial efficiency', 'Business adaptability', 'SaaS growth strategy', 'Self-funded startups', 'Venture capital alternatives', 'Long-term business success', 'Innovation in business', 'Recurring revenue', 'Customer acquisition', 'Competitive advantage', 'Strategic pivoting', 'Global expansion', 'Subscription models', 'Revenue performance', 'Organic growth', 'Market competition', 'High-margin products'],
//         link: 'https://www.linkedin.com/pulse/nespresso-brewing-success-one-capsule-time-anand-choudhary-x73vf/?trackingId=pUxbd2McSqKqbdz48S%2FX0Q%3D%3D',
//         iconLink: 'image/icons/fire.json',
//     },
//     {
//         id: '12',
//         title: "Part -1 Understanding Financial terms",
//         imageUrl: 'image/articleImages/12.webp',
//         date: '2nd December, 2024',
//         readTime: '5-6min read',
//         content: "Equity is ownership in a company, typically in the form of shares or stock. Shares are the units into which the company’s equity is divided. Owning shares is the practical representation of equity.",
//         keywords: ['Finance', 'Equity', 'Shares', 'Ownership', 'Founder’s equity', 'Employee equity', 'Investor equity', 'Reserved equity', 'ESOP (Employee Stock Option Plan)', 'TechSpark Inc.', 'Common shares', 'Preferred shares', 'Voting rights', 'Liquidation preference', 'Dividends', 'Convertible preferred shares', 'Participating preferred shares', 'Venture capital (VC)', 'Funding rounds', 'Startup funding', 'Shareholding patterns', 'Equity allocation', 'Vesting', 'Investment returns', 'Financial literacy', 'Ownership structure', 'Company assets', 'Hybrid options', 'Recapitalization', 'Wealth distribution', 'Risk management in equity', 'Startup equity management'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_understanding-start-up-financial-terms-activity-7269319649886982144-KQqi?utm_source=share&utm_medium=member_desktop',
//         iconLink: '',
//     },
//     {
//         id: '11',
//         title: "Hosuing market vs Mutual Funds for middle class",
//         imageUrl: 'image/articleImages/11.webp',
//         date: '21st October, 2024',
//         readTime: '2-3min read',
//         content: "For someone earning ₹50,000 per month (around £1,650 PPP), investing in mutual funds or SIPs is generally a better financial decision than purchasing property. With low rental yields and high costs associated with real estate, mutual funds offer higher returns and liquidity, making them more attractive for long-term wealth creation. While mutual funds provide flexibility and potential growth, the emotional bond and sense of security that come with homeownership are significant factors to consider.",
//         keywords: ['Nikhil Kamat', 'homeownership', 'financial advice', 'personal finance', 'real estate', 'mutual funds', 'SIPs', 'investment strategies', 'emotional value', 'financial literacy', 'context matters', 'year-on-year growth', 'property prices', 'rental yields', 'equity funds', 'investment costs', 'liquidity', 'financial decisions', 'risk tolerance', 'wealth creation', 'personal circumstances'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_lately-ive-noticed-a-surge-of-posts-in-activity-7254068916132491265-5Noe?utm_source=share&utm_medium=member_desktop',
//         iconLink: '',
//     },
//     {
//         id: '10',
//         title: "Zerodha: A Data-Driven Disruption in the Brokerage Market",
//         imageUrl: 'image/articleImages/10.webp',
//         date: '29th September, 2024',
//         readTime: '10-12min read',
//         content: "In the bustling landscape of Indian finance, where legacy brokerages have traditionally dominated through lavish advertising and extensive marketing budgets, Zerodha emerged as a beacon of innovation. Founded in 2010 by brothers Nithin and Nikhil Kamath",
//         keywords: ['Olympics 2024 Dashboard', 'Tableau', 'data visualization', 'dashboard design', 'Olympics insights', 'sports analytics', 'medal tally', 'athlete performance', 'country-wise medals', 'gender distribution', 'Paris Olympics', 'GrowthBubble', 'Olympic data analysis', 'interactive dashboard', 'Olympics statistics', 'data analytics', 'business intelligence', 'dashboard skills', 'job hunting', 'sports data', 'visual analytics'],
//         link: 'https://www.linkedin.com/pulse/zerodha-data-driven-disruption-brokerage-market-anand-choudhary-32the/?trackingId=cX3RkhPvQw2sXBvFOEZUGg%3D%3D',
//         iconLink: 'image/icons/fire.json',
//     },
//     {
//         id: '9',
//         title: "Paris olympics 2024 Data Insights in Tableau dashboard",
//         imageUrl: 'image/articleImages/9.webp',
//         date: '19th September, 2024',
//         readTime: '10-12min read',
//         content: "What do you do when you’re not competing in the Olympics? Well, you create a Tableau dashboard to analyze the real champions! I just had a blast brushing up my dashboard design skills while building an interactive Olympics 2024 insights dashboard. From who’ s bagging the most medal to how athletes are stacking up by country, discipline, and gender.Wanna geek out on the numbers and reveal the insights ?",
//         keywords: ['Zerodha', 'FinTech', 'customer satisfaction', 'brokerage model', 'disruption', 'business strategy', 'investment', 'low-cost trading', 'digital transformation', 'market penetration', 'NSE volume', 'customer acquisition', 'flat fee trading', 'financial innovation', 'startup success', 'Kamath brothers', 'business growth', 'data-driven strategy', 'Indian brokerage', 'revenue growth', 'financial services'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_tableau-olympics2024-datanerd-activity-7242835628881584130-hvEf?utm_source=share&utm_medium=member_desktop',
//         iconLink: 'image/icons/heart.json',
//     },
//     {
//         id: '8',
//         title: "Crystal Ball for Businesses: Unlocking Future Consumer Behavior for Unmatched Growth",
//         imageUrl: 'image/articleImages/8.webp',
//         date: '16th June, 2024',
//         readTime: '5-7min read',
//         content: "In this fast-paced and ever-evolving business landscape, we have already understood the importance of limitless technology and best operations. But staying ahead of the competition requires more than just that. Imagine having a crystal ball that reveals the future behaviours and preferences of your customers.",
//         keywords: ['Crystal Ball for Businesses, future consumer behavior,consumer,behavior, predictive analytics,analytics,predictive, customer metrics, data privacy,privacy, business growth, customer satisfaction, customer loyalty, market trends,market,trends, competitive edge'],
//         link: 'https://www.linkedin.com/pulse/crystal-ball-businesses-unlocking-future-consumer-growth-choudhary-hmyqe/?trackingId=EtD3ylv0mhAg17UkXOSKYw%3D%3D',
//         iconLink: 'image/icons/fire.json',
//     },
//     {
//         id: '7',
//         title: 'Understanding the Decline in Startup Valuations in India',
//         imageUrl: 'image/articleImages/7.webp',
//         date: '10th June, 2023',
//         readTime: '8min-10min read',
//         content: 'The Indian startup ecosystem has been on a tear in recent years, the tide seems to be turning, as venture capital (VC) firms are becoming more cautious about valuations.',
//         keywords: ['Understanding the Decline in Startup Valuations in India', 'funding winter', 'fintech', 'startup valuations', 'India', 'venture capital', 'rising interest rates', 'cautious investors', 'down rounds', 'structured debt', 'unicorns', 'e-commerce', 'enterprise tech'],
//         link: 'https://www.linkedin.com/pulse/navigating-shift-understanding-decline-startup-india-anand-choudhary',
//         iconLink: 'image/icons/fire.json',
//     },
//     {
//         id: '6',
//         title: "NVIDIA's Market Cap Reaches $970 Billion",
//         imageUrl: 'image/articleImages/6.webp',
//         date: '29th May, 2023',
//         readTime: '3min-5min read',
//         content: "Nvidia, the world's leading provider of GPUs, has reached a market capitalization of $970 billion, solidifying its position as a global tech powerhouse.",
//         keywords: ['NVIDIA\'s Market Cap Reaches $970 Billion', 'NVIDIA', 'market cap', 'GPU\'s', 'AI', 'data center', 'automotive', 'gaming', 'cloud computing', 'metaverse', 'cryptocurrency'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_ai-leadership-growth-activity-7068907212286414849-43iq?utm_source=share&utm_medium=member_desktop',
//         iconLink: 'image/icons/globe.json',
//     },
//     {
//         id: '5',
//         title: 'The Gig Economy: A New Way to Work',
//         imageUrl: 'image/articleImages/5.webp',
//         date: '28th May, 2023',
//         readTime: '3min-5min read',
//         content: 'The gig economy is revolutionizing the way we work, offering exciting opportunities for independent contractors to engage in short-term projects through online platforms. Writers, designers, drivers, and delivery workers are just a few examples of professionals thriving in this dynamic landscape.',
//         keywords: ['The Gig Economy: A New Way to Work', 'gig economy', 'work', 'Independent contractor', 'Freelancer', 'Online platform', 'Short-term project', 'Work-life balance', 'Flexibility', 'Independence', 'Opportunity', 'Rewarding'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_gigeconomy-independence-flexibility-activity-7068449233388912640-fc1K?utm_source=share&utm_medium=member_desktop',
//         iconLink: '',
//     },
//     {
//         id: '4',
//         title: 'Neuralink: The Future of Humankind?',
//         imageUrl: 'image/articleImages/4.webp',
//         date: '26th May, 2023',
//         readTime: '2min-4min read',
//         content: "Elon Musk's Neuralink company has been making headlines for its groundbreaking development of brain-implant technology. The company has already achieved successful implantations in pigs and monkeys, and now it's gearing up for human trials!",
//         keywords: ['Neuralink: The Future of Humankind?', 'Neuralink', 'brain-implant technology', 'groundbreaking development', 'brain-implant technology', 'successful implantations', 'pigs and monkeys', 'human trials', 'connect the human brain to a computer', 'wide range of potential applications', 'treating neurological disorders', 'enhancing human intelligence', 'potential risks', 'malfunction and damage the brain', 'control people\'s thoughts or behavior', 'potential benefits', 'revolutionize the way we treat neurological disorders', 'enhance human intelligence', 'groundbreaking technology', 'potential to change the world'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_technology-development-future-activity-7068073333283581953-Yutw?utm_source=share&utm_medium=member_desktop',
//         iconLink: '',
//     },
//     {
//         id: '3',
//         title: 'Have you heard of Neeva?',
//         imageUrl: 'image/articleImages/3.webp',
//         date: '25th May, 2023',
//         readTime: '2min-4min read',
//         content: 'It\'s a 2019-founded company that aimed to challenge Google with an ad-free search engine, using AI for more relevant and accurate results. Founded by ex-Googlers Sridhar Ramaswamy and Vivek Raghunathan, Neeva prioritized user control and privacy.',
//         keywords: ['Have you heard of Neeva?', 'Neeva', 'search engine', 'privacy', 'Ad-free', 'AI-powered', 'Privacy-focused', 'Personalized results', 'Custom search folders', 'Neeva', 'Search engine', 'Ad-free', 'AI-powered', 'Privacy-focused', 'Subscription-based', 'Sridhar Ramaswamy', 'Vivek Raghunathan', 'Neeva review', 'Neeva vs. Google', 'Neeva vs. DuckDuckGo', 'Neeva vs. Bing'],
//         link: 'https://www.linkedin.com/posts/anand-choudhary-51b4211b8_neeva-searchengine-privacy-activity-7067810519646142464-B9Hs?utm_source=share&utm_medium=member_desktop',
//         iconLink: '',
//     },
//     {
//         id: '2',
//         title: 'Understanding Changing Consumer Behaviour',
//         imageUrl: 'image/articleImages/2.webp',
//         date: '22nd May, 2023',
//         readTime: '6min-8min read',
//         content: 'Consumer behaviour has undergone significant transformations throughout history. From price-consciousness to an emphasis on quality and sustainability, consumers have become more discerning in recent years. This article explores the important revolutions that shaped consumer behaviour, examines current changes, and speculates the future.',
//         keywords: ['Understanding Changing Consumer Behaviour', 'consumer behaviour', 'consumer trends', 'Consumer trends', 'Consumer insights', 'Customer journey', 'Customer experience', 'Personalization', 'Sustainability', 'Ethics', 'Technology', 'Globalization'],
//         link: 'https://www.linkedin.com/pulse/understanding-changing-consumer-behaviour-journey-past-choudhary',
//         iconLink: 'image/icons/heart.json',
//     },
//     // Add more card objects as needed
// ];