// Making a GET request using the Fetch API
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    console.log(data); // Process the retrieved data
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
