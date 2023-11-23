
function convertMinutesToSeconds() {
    let minutes = document.getElementById('minutesInput').value;
    let seconds = minutes * 60;
    document.getElementById('result').innerText = `${minutes} minutes is equal to ${seconds} seconds.`;
}