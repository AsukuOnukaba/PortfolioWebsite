// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Select all col-md-4 and col-md-8 elements
    const projectElements = document.querySelectorAll('.col-md-4, .col-md-8');

    // Create the modal container
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'none';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.flexDirection = 'column';
    modal.style.zIndex = '9999';

    // Create the image element for the modal
    const modalImage = document.createElement('img');
    modalImage.style.maxWidth = '80%';
    modalImage.style.maxHeight = '80%';
    modalImage.style.border = '5px solid white';
    modalImage.style.borderRadius = '10px';

    // Create the modal text or link container
    const modalTextContainer = document.createElement('div');
    modalTextContainer.style.color = 'white';
    modalTextContainer.style.marginTop = '10px';
    modalTextContainer.style.fontSize = '18px';
    modalTextContainer.style.textAlign = 'center';

    // Append the image and text container to the modal
    modal.appendChild(modalImage);
    modal.appendChild(modalTextContainer);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Close modal on click (outside the text or link)
    modal.addEventListener('click', function (event) {
        if (!modalTextContainer.contains(event.target)) {
            modal.style.display = 'none';
        }
    });

    // Add click event listener to each project element
    projectElements.forEach((project) => {
        project.addEventListener('click', function () {
            // Get the background image from the inline style
            const style = window.getComputedStyle(project.querySelector('.project'));
            const backgroundImage = style.backgroundImage;

            // Extract the URL from the background image style
            const imageUrl = backgroundImage.slice(5, -2); // Remove `url("` and `")`

            // Set the modal image source
            modalImage.src = imageUrl;

            // Conditionally set the modal text or link
            if (imageUrl.includes('images/ITCentre.png')) {
                // For the specific image, show a clickable link
                modalTextContainer.innerHTML = `<a href="https://it-centre-website-demo.vercel.app/" target="_blank" style="color: white; text-decoration: underline;">Live Demo</a>`;
            } 
            else if (imageUrl.includes('images/bridgetech.png')) {
                // For the specific image, show a clickable link
                modalTextContainer.innerHTML = `<a href="https://bridgetechco.com/" target="_blank" style="color: white; text-decoration: underline;">Live Demo</a>`;
            } 
            else {
                // For other images, show regular text
                modalTextContainer.textContent = 'Click anywhere to close this popup.';
            }

            // Show the modal
            modal.style.display = 'flex';
        });
    });
});
