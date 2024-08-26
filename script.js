// script.js

const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const emailformElement = document.querySelector('.emailform');
const buttonElement = document.querySelector('form button[type="button"]');
let coinflip_small = Math.round(Math.random()) * 2 - 1;
let coinflip_medium = Math.round(Math.random()) * 2 - 1;
let coinflip_large = Math.round(Math.random()) * 2 - 1;

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
        minutes: Math.floor(21 + (Math.random() * 33)),
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
    const buttonElementRect = buttonElement.getBoundingClientRect();

    const xThresholdBig = 250; // Adjust this value as needed
    const yThresholdBig = 250; // Adjust this value as needed
    const xThreshold = 160; // Adjust this value as needed
    const yThreshold = 160; // Adjust this value as needed
    const xThresholdSmall = 45; // Adjust this value as needed
    const yThresholdSmall = 45; // Adjust this value as needed
    const xThresholdTiny = 14;
    const yThresholdTiny = 14;

    if (cursor_x >= buttonElementRect.left - xThresholdTiny &&
        cursor_x <= buttonElementRect.right + xThresholdTiny &&
        cursor_y >= buttonElementRect.top - yThresholdTiny &&
        cursor_y <= buttonElementRect.bottom + yThresholdTiny) {
        console.log("0");
        const button = document.querySelector('form button[type="button"]'); // Select the button
        button.classList.remove('cursor_far'); // Remove the 'near-hover' class
        button.classList.remove('cursor_close'); // Remove the 'near-hover' class
        button.classList.remove('cursor_very_close'); // Remove the 'near-hover' class
        button.classList.add('cursor_ultra_close');
    } else if (cursor_x >= buttonElementRect.left - xThresholdSmall &&
        cursor_x <= buttonElementRect.right + xThresholdSmall &&
        cursor_y >= buttonElementRect.top - yThresholdSmall &&
        cursor_y <= buttonElementRect.bottom + yThresholdSmall) {
        console.log("1");
        const button = document.querySelector('form button[type="button"]'); // Select the button
        button.classList.remove('cursor_close'); // Remove the 'near-hover' class
        button.classList.remove('cursor_very_close'); // Remove the 'near-hover' class
        button.classList.remove('cursor_ultra_close'); // Remove the 'near-hover' class
        button.classList.add('cursor_very_close');
    } else if (cursor_x >= buttonElementRect.left - xThreshold &&
        cursor_x <= buttonElementRect.right + xThreshold &&
        cursor_y >= buttonElementRect.top - yThreshold &&
        cursor_y <= buttonElementRect.bottom + yThreshold) {
        console.log("2");
        const button = document.querySelector('form button[type="button"]'); // Select the button
        button.classList.remove('cursor_very_close'); // Remove the 'near-hover' class
        button.classList.remove('cursor_far'); // Remove the 'near-hover' class
        button.classList.remove('cursor_ultra_close'); // Remove the 'near-hover' class
        button.classList.add('cursor_close');
    } else if (cursor_x >= buttonElementRect.left - xThresholdBig &&
        cursor_x <= buttonElementRect.right + xThresholdBig &&
        cursor_y >= buttonElementRect.top - yThresholdBig &&
        cursor_y <= buttonElementRect.bottom + yThresholdBig) {
        console.log("3");
        const button = document.querySelector('form button[type="button"]'); // Select the button
        button.classList.remove('cursor_far'); // Remove the 'near-hover' class
        button.classList.remove('cursor_close'); // Remove the 'near-hover' class
        button.classList.remove('cursor_ultra_close'); // Remove the 'near-hover' class
        button.classList.add('cursor_far');
    } else {
        const button = document.querySelector('form button[type="button"]'); // Select the button
        button.classList.remove('cursor_far'); // Remove the 'near-hover' class
        button.classList.remove('cursor_close'); // Remove the 'near-hover' class
        button.classList.remove('cursor_very_close'); // Remove the 'near-hover' class
        button.classList.remove('cursor_ultra_close'); // Remove the 'near-hover' class

    }
}

// Initial update
updateTimer();

// Update the timer every 2 seconds
setInterval(updateTimer, 2500);

window.addEventListener('mousemove', getCursor)