const addButton = document.getElementById('addButton');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');
const notionItem = document.getElementById('notionItem');
const financeItem = document.getElementById('financeItem');
const videosItem = document.getElementById('videosItem');
let isOpen = false;

// Toggle menu function
function toggleMenu() {
    isOpen = !isOpen;

    if (isOpen) {
        navMenu.classList.add('active');
        overlay.classList.add('active');
        addButton.querySelector('svg').style.transform = 'rotate(45deg)';

        // Reset animations for re-opening
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.style.transform = '';
        });
    } else {
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        addButton.querySelector('svg').style.transform = 'rotate(0deg)';
    }
}

// Event listeners
addButton.addEventListener('click', toggleMenu);
overlay.addEventListener('click', () => {
    if (isOpen) toggleMenu();
});

// Navigation items click handlers
notionItem.addEventListener('click', () => {
    window.open('https://frill-frog-440.notion.site/Articles-by-Growth-Bubble-1f4cdc829468809aaedbe26014686f17', '_blank');
    toggleMenu();
});

financeItem.addEventListener('click', () => {
    window.open('https://handbook.growthbubble.site', '_blank');
    toggleMenu();
});

// financeItem.addEventListener('click', () => {
//     toggleMenu();
//     showCustomAlert(
//         '🚀 Publishing Update',
//         'We’re releasing <strong>5+ financial models</strong><br>on <em>1st June</em>. Stay tuned!'
//     );
// });

videosItem.addEventListener('click', () => {
    toggleMenu();
    showCustomAlert(
        '🎬 Releasing Update',
        'Video Format Releasing Soon...'
    );
});

// Add bouncy animation effects with spring physics
function addBouncyEffect() {
    const elements = [addButton, ...document.querySelectorAll('.nav-item')];

    elements.forEach(element => {
        element.addEventListener('mousedown', () => {
            element.style.transform = 'scale(0.9)';
        });

        element.addEventListener('mouseup', () => {
            element.style.transform = 'scale(1.1)';

            // Create spring-like bounce effect
            setTimeout(() => {
                element.style.transform = 'scale(0.95)';

                setTimeout(() => {
                    element.style.transform = 'scale(1.02)';

                    setTimeout(() => {
                        element.style.transform = '';
                    }, 150);
                }, 100);
            }, 100);
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });
}

addBouncyEffect();




// Alert
function showCustomAlert(title, comment) {
    document.getElementById('alertTitle').textContent = title;
    document.getElementById('alertComment').innerHTML = comment;
    document.getElementById('customAlertOverlay').style.display = 'flex';
}

function closeCustomAlert() {
    document.getElementById('customAlertOverlay').style.display = 'none';
}

// Close alert if background is clicked (not the box)
document.getElementById('customAlertOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        closeCustomAlert();
    }
});