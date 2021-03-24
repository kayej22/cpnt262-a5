const { response } = require("express")

fetch('http://localhost:3000/api/v0/array')
  .then(function(response){

    if(!response.ok) {
      throw new Error('not 200 OK');
    }
  return Response.Json();
  })
  .then(function(Arrays){

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
    console.log(err);
  });