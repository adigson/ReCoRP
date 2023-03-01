const form = document.querySelector("form");
const mediaInput = document.querySelector("#media-input");
const descriptionInput = document.querySelector("#description-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const media = mediaInput.files[0];
  const description = descriptionInput.value;

  const fileInput = document.getElementById('file-input');
const descriptionInput = document.getElementById('description-input');

function uploadReport() {
  const mediaFile = fileInput.files[0];
  const description = descriptionInput.value;

  const formData = new FormData();
  formData.append('media', mediaFile);
  formData.append('description', description);

  fetch('/report_corruption', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      console.log('Report submitted successfully.');
    } else {
      console.error('Error submitting report.');
    }
  })
  .catch(error => {
    console.error('Error submitting report:', error);
  });
}

});
