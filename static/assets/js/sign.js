function startVideo() {
    const videoElement = document.getElementById('video');
    const videoContainer = document.getElementById('video-container');

    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
            videoElement.srcObject = stream;
        })
        .catch((error) => {
            alert('Camera access denied or unavailable!');
            console.error(error);
        });
}

function stopVideo() {
    const videoElement = document.getElementById('video');
    const stream = videoElement.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach((track) => track.stop());
    videoElement.srcObject = null;
}

// File Upload Page Script
document.getElementById('file-input').addEventListener('change', function (event) {
    const fileName = event.target.files[0]?.name || 'No file chosen';
    alert(`Selected file: ${fileName}`);
});
