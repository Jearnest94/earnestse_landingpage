// script.js

const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const emailformElement = document.querySelector('.emailform')

let targetValues = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
};

function updateTimer() {
    // Generate new target values
    targetValues = {
        days: Math.floor(13 + (Math.random() * 4)),
        hours: Math.floor(12 + (Math.random() * 10)),
        minutes: Math.floor(1 + (Math.random() * 69)),
        seconds: Math.floor(1 + (Math.random() * 69))
    };

    // Smoothly transition to the new values
    gsap.to(daysElement, { duration: 5, textContent: targetValues.days, ease: "power2.inOut", roundProps: "textContent" });
    gsap.to(hoursElement, { duration: 3, textContent: targetValues.hours, ease: "power2.inOut", roundProps: "textContent" });
    gsap.to(minutesElement, { duration: 1.5, textContent: targetValues.minutes, ease: "power2.inOut", roundProps: "textContent" });
    gsap.to(secondsElement, { duration: 1.5, textContent: targetValues.seconds, ease: "power2.inOut", roundProps: "textContent" });
}


function getCursor(event) {
    let cursor_x = event.clientX;
    let cursor_y = event.clientY;
    const emailformElementRect = emailformElement.getBoundingClientRect();

    const xThresholdBig = 50; // Adjust this value as needed
    const yThresholdBig = 50; // Adjust this value as needed
    const xThreshold = 50; // Adjust this value as needed
    const yThreshold = 50; // Adjust this value as needed
    

    if (
        cursor_x >= emailformElementRect.left - xThresholdBig &&
        cursor_x <= emailformElementRect.right + xThresholdBig &&
        cursor_y >= emailformElementRect.top - yThresholdBig &&
        cursor_y <= emailformElementRect.bottom + yThresholdBig
    ) {
        // Cursor is within the threshold, perform actions
        console.log("Cursor is near the email form!");
        // Add your desired actions here, e.g.,
        // - Change the button's color
        // - Show a tooltip
        // - Play an animation
        const button = document.querySelector('form button[type="button"]'); // Select the button
        //button.style.backgroundColor = '#fffa76'; // Change the button's color to yellow
    } else if (
        cursor_x >= emailformElementRect.left - xThreshold &&
        cursor_x <= emailformElementRect.right + xThreshold &&
        cursor_y >= emailformElementRect.top - yThreshold &&
        cursor_y <= emailformElementRect.bottom + yThreshold
    )  {

        button.style.animation = ''; // Stop the swing animation

    }

}

// Initial update
updateTimer();

// Update the timer every 2 seconds
setInterval(updateTimer, 2500);

window.addEventListener('mousemove', getCursor)