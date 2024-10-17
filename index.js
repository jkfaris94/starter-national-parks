//changing content //
const descriptions = document.querySelectorAll(".description-display");
console.log(descriptions)

// innerText property//
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    console.log(content);
  }

  //truncate the text using slice()//
  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + "...";
    }
  
    console.log(content);
  }

  //update HTMLElement //
  //for (let desc of descriptions.values()) {
    //let content = desc.innerText;
  
    //if (content.length > 250) {
    //  content = content.slice(0, 250);
    //  content = content + "...";
   // }
  
    //desc.innerText = content;
 // }

  // make elipses '...' clickable //
  for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + "<a href='#'>...</a>";
    }
  
    desc.innerHTML = content;
}

// change style element (make ratings 4.7+ bold)
const ratings = document.querySelectorAll(".rating-display .value");

//iterate through each  iterate through the list and get each actual rating value using the innerText property. This returns a string value, but you want to work with the rating as a number. So, use the parseFloat() method to convert a string into a floating-point number, as shown below:
//for (let rating of ratings) {
//    let ratingValue = parseFloat(rating.innerText);
//    console.log(ratingValue);
//  }

  // If ratingValue > 4.7, then set the fontWeight style to bold, like this:
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.style.fontWeight = "bold";
      rating.style.color = "#3ba17c";
    }
  }

  //When the rating is greater than 4.7, you want to replace the value class with the high-rating class. 
  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }

  //create new element with text
  const parks = document.querySelectorAll(".park-display");
  //Then, get the number of parks using the length property of the list:
  const numberParks = parks.length;
  //Next, create a new element. In this case, you should use a <div>:
  const newElement = document.createElement("div");
  //et the text of this element with the innerText property
  newElement.innerText = `${numberParks} exciting parks to visit`;
  //add this class to the new element
  newElement.classList.add("header-statement");
  //add the new element to the DOM, select the <header> element and use the appendChild() method to add the new element to the <header>
  const header = document.querySelector("header");
    header.appendChild(newElement);

    // removing DOM elements 
    // Get the parent element of all parks
//const main = document.querySelector("main");

    // Select a single park
//const park = main.querySelector(".park-display");

    // Remove that park
//main.removeChild(park);//