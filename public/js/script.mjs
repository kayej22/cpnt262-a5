import {Arrays} from './images.mjs';

// Fetching from server
fetch('http://localhost:3000/api/v0/Arrays')
  .then(function(response){
    // JSON that is returned from the server must be converted to a JS object asynchronously.
    if (!response.ok) {
      throw new Error('Not 200 OK');
    }
    return response.json();
  })
  .then(function(Arrays){
    // Any code that depends on the `data` must go in this block
    
  
   
    let output = '';

    Arrays.forEach(function(array) {
      output += `<figure class="card">
                    <img src="${array.pathURL}" alt="${array.title}"
                    width="${array.width}" height="${array.height}">
                    <figcaption>
                      <h2>${array.description}</h2>
                    </figcaption>
                  </figure>`;
    });

    document.querySelector(".gallery").innerHTML = output;
    
      })




  .catch(function(err){
    // An error or `reject` from any of the above `.then()` blocks will end up here.
    console.log(err);
  });

