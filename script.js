// script.js

const daysElement = document.querySelector('.days');
const hoursElement = document.querySelector('.hours');
const minutesElement = document.querySelector('.minutes');
const secondsElement = document.querySelector('.seconds');
const emailformElement = document.querySelector('.emailform');
const buttonElement = document.getElementById('dabutton');

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
    let button;

    const xThresholdBig = 250; // Adjust this value as needed
    const yThresholdBig = 250; // Adjust this value as needed
    const xThreshold = 100; // Adjust this value as needed
    const yThreshold = 100; // Adjust this value as needed
    const xThresholdSmall = 50; // Adjust this value as needed
    const yThresholdSmall = 50; // Adjust this value as needed



    // if (cursor_x >= emailformElementRect.left - xThresholdBig &&
    //     cursor_x <= emailformElementRect.right + xThresholdBig &&
    //     cursor_y >= emailformElementRect.top - yThresholdBig &&
    //     cursor_y <= emailformElementRect.bottom + yThresholdBig) {
    //         console.log("NEAR email form!");

    //     if (cursor_x >= emailformElementRect.left - xThreshold &&
    //         cursor_x <= emailformElementRect.right + xThreshold &&
    //         cursor_y >= emailformElementRect.top - yThreshold &&
    //         cursor_y <= emailformElementRect.bottom + yThreshold) {
    //         console.log("Cursor is veryvery near the email form!");
    //     } 
    // } else {
    //     console.log("ELSE!");
    // }


    if (cursor_x >= emailformElementRect.left - xThresholdSmall &&
        cursor_x <= emailformElementRect.right + xThresholdSmall &&
        cursor_y >= emailformElementRect.top - xThresholdSmall &&
        cursor_y <= emailformElementRect.bottom + xThresholdSmall) {
        console.log("EXTREMELY VERY NEAR email form!");
    } else if (cursor_x >= emailformElementRect.left - xThreshold &&
        cursor_x <= emailformElementRect.right + xThreshold &&
        cursor_y >= emailformElementRect.top - yThreshold &&
        cursor_y <= emailformElementRect.bottom + yThreshold) {
        console.log("VERY NEAR email form!");
    } else if (cursor_x >= emailformElementRect.left - xThresholdBig &&
        cursor_x <= emailformElementRect.right + xThresholdBig &&
        cursor_y >= emailformElementRect.top - yThresholdBig &&
        cursor_y <= emailformElementRect.bottom + yThresholdBig) {
        console.log("NEAR email form!");

    } else {
        console.log("ELSE!");
    }
}


//         button = document.getElementById("dabutton");
//         console.log(button.classList);

//         button.classList.add('wobbleshake'); // Add the 'near-hover' class

//         //button.style.backgroundColor = '#fffa76'; // Change the button's color to yellow
//     } else if (
//         cursor_x >= emailformElementRect.left - xThreshold &&
//         cursor_x <= emailformElementRect.right + xThreshold &&
//         cursor_y >= emailformElementRect.top - yThreshold &&
//         cursor_y <= emailformElementRect.bottom + yThreshold
//     )  {
//         button = document.getElementById("dabutton");
//         console.log(button.classList);
//         button.classList.remove('wobbleshake'); // Remove the 'near-hover' class

//     } else {
//         button = document.getElementById("dabutton");
//         console.log(button.classList);
//         console.log('else');
//     }

// }

// Initial update
updateTimer();

// Update the timer every 2 seconds
setInterval(updateTimer, 2500);

window.addEventListener('mousemove', getCursor)