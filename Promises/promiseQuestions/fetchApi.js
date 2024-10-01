//Use fetch() (or any similar API) to retrieve data from a remote source. Handle success and failure cases using .then() and .catch().

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(function(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then(function(data) {
  console.log('Data retrieved successfully:', data);
})
.catch(function(error) {
  console.error('Error fetching data:', error);
})
.finally(function() {
  console.log('Fetch attempt completed.');
});
