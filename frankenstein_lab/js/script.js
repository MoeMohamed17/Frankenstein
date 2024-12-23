// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if link is an anchor
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const warnings = document.querySelectorAll('.warning');
    warnings.forEach((warning, index) => {
        setTimeout(() => {
            warning.style.opacity = '1';
            warning.style.transform = 'translateY(0)';
        }, index * 2000); // Delay each warning by 2 seconds
    });
});


// document.addEventListener('DOMContentLoaded', () => {
//     const stickyNotes = document.querySelectorAll('.sticky-note');
//     const infoBoxes = document.querySelectorAll('.info-box');

//     stickyNotes.forEach(note => {
//         note.addEventListener('click', () => {
//             const infoId = note.getAttribute('data-info');
//             const infoBox = document.getElementById(infoId);

//             // Play creepy sound
//             const audio = new Audio('../assets/sounds/creepy_click.mp3'); // Add a scary sound file
//             audio.play();

//             // Show the info box
//             infoBox.style.display = 'block'; // Make visible
//             setTimeout(() => {
//                 infoBox.style.opacity = '1'; // Trigger fade-in
//             }, 10); // Delay to allow display change
//         });
//     });

//     // Close info boxes when clicking outside them
//     document.addEventListener('click', (e) => {
//         if (!e.target.closest('.info-box') && !e.target.closest('.sticky-note')) {
//             infoBoxes.forEach(box => {
//                 box.style.opacity = '0'; // Trigger fade-out
//                 setTimeout(() => {
//                     box.style.display = 'none'; // Hide after fade-out
//                 }, 300); // Match animation duration
//             });
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     // Select all sticky notes
//     const stickyNotes = document.querySelectorAll('.sticky-note');

//     // Iterate through each note and randomly assign the 'blood-stain' class
//     stickyNotes.forEach(note => {
//         if (Math.random() > 0.5) { // 50% chance
//             note.classList.add('blood-stain');
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const crumpledBalls = document.querySelectorAll('.crumpled-ball');
    const infoBoxes = document.querySelectorAll('.info-box');

    crumpledBalls.forEach(ball => {
        ball.addEventListener('click', () => {
            const infoId = ball.getAttribute('data-info');
            const infoBox = document.getElementById(infoId);

            // Optional: Play a sound effect when opening a ball
            const audio = new Audio('../assets/sounds/crumple_open.mp3'); // Add a suitable sound file
            audio.play();

            // Show the info box
            infoBox.style.display = 'block';
        });
    });

    // Close info boxes when clicking outside them
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.info-box') && !e.target.closest('.crumpled-ball')) {
            infoBoxes.forEach(box => {
                box.style.display = 'none';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const warnings = document.querySelectorAll('.warning');
    const popupModal = document.getElementById('popupModal');
    const popupMessage = document.querySelector('.popup-message');
    const closeBtn = document.getElementById('closeBtn');

    warnings.forEach(warning => {
        warning.addEventListener('click', () => {
            const message = warning.getAttribute('data-message');
            popupMessage.textContent = message;
            popupModal.style.display = 'flex'; // Show the modal
        });
    });

    closeBtn.addEventListener('click', () => {
        popupModal.style.display = 'none'; // Hide the modal
    });

    // Close the modal when clicking outside of the content
    popupModal.addEventListener('click', (e) => {
        if (e.target === popupModal) {
            popupModal.style.display = 'none';
        }
    });
});
