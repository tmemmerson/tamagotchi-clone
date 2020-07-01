
export function addAnimalGif(animal, span) {
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${animal}&limit=1&offset=0&rating=G&lang=en`;

  request.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      const response = JSON.parse(this.responseText);
      const gifURL =  response['data'][0]['images']['original']['url'];
      const gifHTML = `<img src='${gifURL}' class='animalGIF'>`;
      span.html(gifHTML);
    }
  };

  request.open("GET", url, true);
  request.send();
} 