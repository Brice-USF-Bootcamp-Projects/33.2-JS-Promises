

document.getElementById('number-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Get the input value
    const number = document.getElementById('fav-number').value;
  
    // Make an API call using fetch with .then and .catch
    fetch(`http://numbersapi.com/${number}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Convert the response to text
      })
      .then(fact => {
        // Update the result in the #num-results div
        const resultDiv = document.getElementById('num-results');
        resultDiv.textContent = `Fact about ${number}: ${fact}`;
      })
      .catch(error => {
        console.error('Error fetching the API:', error);
      });
  });
  





