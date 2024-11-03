const imagesContainer = document.getElementById("images-container");  

        async function fetchDogImagesAndBreeds(numImages) {
            const apiUrl = `https://dog.ceo/api/breeds/image/random/${numImages}`; // API url
            const response = await fetch(apiUrl);
            const data = await response.json(); // convert into Json 
            
            if (data.status === 'success') {
                const imagesWithBreeds = data.message.map(imgUrl => {
                    const breed = imgUrl.split('/')[4]; // Extract breed from URL
                    return { url: imgUrl, breed: breed };
                });
                displayImages(imagesWithBreeds);
            } else {
                console.error("Error: Unable to fetch images.");
            }
        }

        function displayImages(imagesWithBreeds) {
            imagesWithBreeds.forEach(imgData => {
                // console.log(`Breed: ${imgData.breed}, Image URL: ${imgData.url}`);
                
                const image = document.createElement("img"); // create element for every image
                image.src = imgData.url;
                image.alt = imgData.breed;

                const breed = document.createElement("p");
                breed.innerText = imgData.breed;

                const container = document.createElement("div");
                container.classList.add("dog-container"); // Add a class for styling
                container.appendChild(image);
                container.appendChild(breed);
                
                imagesContainer.appendChild(container);
            });
        }

        // Example usage
        fetchDogImagesAndBreeds(20);

        // Get the button element by its id
      const reloadButton = document.getElementById("reloadButton");
                        // Add a click event listener to the button
             reloadButton.addEventListener("click", function() {
                                     // Reload the current page
                          location.reload();
                      });
