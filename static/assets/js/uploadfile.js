const fileInput = document.getElementById('fileInput');
    const fileList = document.getElementById('fileList');
    const previewButton = document.getElementById('previewButton');
    const videoPreview = document.getElementById('videoPreview');

    let selectedFile = null;

    fileInput.addEventListener('change', () => {
      const files = Array.from(fileInput.files);
      fileList.innerHTML = '';
      selectedFile = null;

      files.forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');

        const fileName = document.createElement('span');
        fileName.classList.add('file-name');
        fileName.textContent = file.name;

        const fileProgress = document.createElement('div');
        fileProgress.classList.add('file-progress');

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        fileProgress.appendChild(progressBar);

        const fileStatus = document.createElement('span');
        fileStatus.classList.add('file-status');

        fileItem.appendChild(fileName);
        fileItem.appendChild(fileProgress);
        fileItem.appendChild(fileStatus);

        fileList.appendChild(fileItem);

        // Simulate upload progress
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10;
          progressBar.style.width = `${progress}%`;

          if (progress === 100) {
            clearInterval(interval);
            fileStatus.textContent = '✔';
            fileStatus.classList.add('success');
            selectedFile = file;
          }
        }, 200);

        // Handle errors (example scenario)
        if (file.size > 50000000) { // Simulating a 50MB limit
          clearInterval(interval);
          fileStatus.textContent = '✖';
          fileStatus.classList.add('error');
          progressBar.style.backgroundColor = '#f44336';
        }
      });
    });

    previewButton.addEventListener('click', () => {
      if (selectedFile && selectedFile.type.startsWith('video/')) {
        const fileURL = URL.createObjectURL(selectedFile);
        videoPreview.src = fileURL;
        videoPreview.style.display = 'block';
      } else {
        alert('Please select a valid video file to preview.');
      }
    });


    submitButton.addEventListener('click', () => {
        if (selectedFile && selectedFile.type.startsWith('video/')) {
          window.location.href="/result"
        } else {
          alert('Please select a valid video file to submit.');
        }
      });

    