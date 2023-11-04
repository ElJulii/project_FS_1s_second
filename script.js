const countDisplay = document.getElementById('text_count');
const incrementButton = document.getElementById('circle');
const resetButton = document.getElementById('reset');
const sendButton = document.getElementById('send');

let counter = 0;

if (localStorage.getItem('ClickCount')) {
    counter = parseInt(localStorage.getItem("" + "ClickCount"));
    countDisplay.textContent = `Clicks count: ${counter}`;
}

function incrementCounter() {
    counter++;
    countDisplay.textContent = `Clicks count: ${counter}`;
    localStorage.setItem("ClickCount", counter);
}

incrementButton.addEventListener("click", incrementCounter);

resetButton.addEventListener('click', () => {
    counter = 0;
    countDisplay.textContent = `Clicks count: ${counter}`;
    localStorage.setItem("clickCount", counter);
})

sendButton.addEventListener("click", () => {
    const postData = { count: counter };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Даррые отпрвлены успешно');
        })
        .catch(error => {
            console.error('Error al enviar los datos:', error);
        });
});