console.log('Client-side code running');

const button = document.getElementById('submit-button');
button.addEventListener('click', (e) => {
    e.preventDefault();

    const usnInput = document.getElementById('usn-input');
    const usn = usnInput.value;

    // Send a POST request to the server
    fetch('/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usn: usn }),
    })
    .then(response => response.json())
    .then(data => {
        // Display data in a dialogue box
        const dialogueBox = document.getElementById('dialogue-box');
        dialogueBox.innerHTML = '';

        data.forEach((result) => {
            const paragraph = document.createElement('p');
            paragraph.textContent = `USN: ${result.usn}, Name: ${result.name}, Marks: ${result.marks}`;
            dialogueBox.appendChild(paragraph);
        });

        dialogueBox.style.display = 'block';
    })
    .catch(error => console.error(error));
});