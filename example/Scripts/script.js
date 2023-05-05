var form = document.getElementById('myForm');
var section = document.getElementById("two");
var typography = document.getElementById("typography");
var cta = document.getElementById("cta");
var designImg = document.getElementById("designImg");
var file_input = document.getElementById('file_input');
var canvas = document.getElementById("canvas");
var palette = document.getElementById("palette");
var example1 = document.getElementById("example1");
var example3 = document.getElementById("example3");
var example4 = document.getElementById("example4");
var example5 = document.getElementById("example5");
var example6 = document.getElementById("example6");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var library = document.getElementById("library");

form.addEventListener('submit', function(event) {
  // preventing the form from submitting and reloading the page
  event.preventDefault();

  section.style.display = "none";

  // clearing the palette in case the user submits another image
  palette.innerHTML = '';

  // getting the values of the name and email fields
  var company_name = form.elements.company_name.value;
  var industry_type = form.elements.industry_type.value;
  var company_attributes = form.elements.company_attributes.value;
  var file_input = form.elements.file_input.value;

  // showing the data in console for testing purposes
  console.log('Company Name:', company_name);
  console.log('Industry Type:', industry_type);
  console.log('Company Attributes:', company_attributes);
  console.log('Image Library', image_library);
  console.log('File Name:', file_input);

  // setting the answers depending on what the user picked
  if(industry_type == "none" || company_attributes == "none"){
    alert("Please revise form and fill in.");
    section.style.display = "none";
  }
  else if(industry_type == "bookPublisher"){
    typography.textContent = "Sora";
    typography.style.fontFamily = "Sora";
    cta.textContent = "Curved lines for a softer look";
    designImg.src = "Resources/Publisher.png";
    typography.style.fontWeight = "bold";
    cta.style.fontWeight = "bold"
    example1.style.fontFamily = "Sora";
    example3.style.fontFamily = "Sora";
    example4.style.fontFamily = "Sora";
    example5.style.fontFamily = "Sora";
    example6.style.fontFamily = "Sora";
    button1.style.borderRadius = "100px";
    button2.style.borderRadius = "10px";
  }
  else if(industry_type == "affiliated"){
    typography.textContent = "Catamaran";
    typography.style.fontFamily = "Catamaran";
    cta.textContent = "Straight lines for a sharper look";
    designImg.src = "Resources/Affiliated.png";
    typography.style.fontWeight = "bold";
    cta.style.fontWeight = "bold"
    example1.style.fontFamily = "Catamaran";
    example3.style.fontFamily = "Catamaran";
    example4.style.fontFamily = "Catamaran";
    example5.style.fontFamily = "Catamaran";
    example6.style.fontFamily = "Catamaran";
    button1.style.borderRadius = "0px";
    button2.style.borderRadius = "0px";
  }
  else if(industry_type == "architecture"){
    typography.textContent = "Montserrat";
    typography.style.fontFamily = "Montserrat";
    cta.textContent = "Straight lines for a sharper look";
    designImg.src = "Resources/Architecture.png";
    typography.style.fontWeight = "bold";
    cta.style.fontWeight = "bold"
    example1.style.fontFamily = "Montserrat";
    example3.style.fontFamily = "Montserrat";
    example4.style.fontFamily = "Montserrat";
    example5.style.fontFamily = "Montserrat";
    example6.style.fontFamily = "Montserrat";
    button1.style.borderRadius = "0px";
    button2.style.borderRadius = "0px";
  }
  else if(industry_type == "crypto"){
    typography.textContent = "Quicksand";
    typography.style.fontFamily = "Quicksand";
    cta.textContent = "Straight lines for a sharper look";
    designImg.src = "Resources/Crypto.png";
    typography.style.fontWeight = "bold";
    cta.style.fontWeight = "bold"
    example1.style.fontFamily = "Quicksand";
    example3.style.fontFamily = "Quicksand";
    example4.style.fontFamily = "Quicksand";
    example5.style.fontFamily = "Quicksand";
    example6.style.fontFamily = "Quicksand";
    button1.style.borderRadius = "0px";
    button2.style.borderRadius = "0px";
  }
  else if(industry_type == "dentistClinic"){
    typography.textContent = "Poppins";
    typography.style.fontFamily = "Poppins";
    cta.textContent = "Curved lines for a softer look";
    designImg.src = "Resources/DentistClinic.png";
    typography.style.fontWeight = "bold";
    cta.style.fontWeight = "bold"
    example1.style.fontFamily = "Poppins";
    example3.style.fontFamily = "Poppins";
    example4.style.fontFamily = "Poppins";
    example5.style.fontFamily = "Poppins";
    example6.style.fontFamily = "Poppins";
    button1.style.borderRadius = "100px";
    button2.style.borderRadius = "10px";
  }
  else if(industry_type == "diving"){
    typography.textContent = "Raleway";
    typography.style.fontFamily = "Raleway";
    cta.textContent = "Curved lines for a softer look";
    designImg.src = "Resources/Diving.png";
    typography.style.fontWeight = "bold";
    cta.style.fontWeight = "bold"
    example1.style.fontFamily = "Raleway";
    example3.style.fontFamily = "Raleway";
    example4.style.fontFamily = "Raleway";
    example5.style.fontFamily = "Raleway";
    example6.style.fontFamily = "Raleway";
    button1.style.borderRadius = "100px";
    button2.style.borderRadius = "10px";
  }
  else if(industry_type == "engineering"){
    typography.textContent = "Montserrat";
    typography.style.fontFamily = "Montserrat";
    cta.textContent = "Straight lines for a sharper look";
    designImg.src = "Resources/Engineering.png";
    typography.style.fontWeight = "bold";
    cta.style.fontWeight = "bold"
    example1.style.fontFamily = "Montserrat";
    example3.style.fontFamily = "Montserrat";
    example4.style.fontFamily = "Montserrat";
    example5.style.fontFamily = "Montserrat";
    example6.style.fontFamily = "Montserrat";
    button1.style.borderRadius = "0px";
    button2.style.borderRadius = "0px";
  }
  else if(industry_type == "furnitureShop"){
    typography.textContent = "Montserrat";
    typography.style.fontFamily = "Montserrat";
    cta.textContent = "Straight lines for a sharper look";
    designImg.src = "Resources/FurnitureShop.png";
    typography.style.fontWeight = "bold";
    cta.style.fontWeight = "bold"
    example1.style.fontFamily = "Montserrat";
    example3.style.fontFamily = "Montserrat";
    example4.style.fontFamily = "Montserrat";
    example5.style.fontFamily = "Montserrat";
    example6.style.fontFamily = "Montserrat";
    button1.style.borderRadius = "0px";
    button2.style.borderRadius = "0px";
  }
  else if(industry_type == "hotel"){
    typography.textContent = "Trirong";
    typography.style.fontFamily = "Trirong";
    cta.textContent = "Straight lines for a sharper look";
    designImg.src = "Resources/Hotel.png";
    typography.style.fontWeight = "bold";
    cta.style.fontWeight = "bold"
    example1.style.fontFamily = "Trirong";
    example3.style.fontFamily = "Trirong";
    example4.style.fontFamily = "Trirong";
    example5.style.fontFamily = "Trirong";
    example6.style.fontFamily = "Trirong";
    button1.style.borderRadius = "0px";
    button2.style.borderRadius = "0px";
  }
});

image_library.addEventListener('change', (event) => {
  var image_library = form.elements.image_library.value;
  if(image_library == "upload"){
    library.innerHTML = '';
  }
  else if(image_library == "dark"){
    library.innerHTML = '';
    library.style.display = "block";
    var dark1 = document.createElement('img');
    var dark2 = document.createElement('img');
    var dark3 = document.createElement('img');
    var dark4 = document.createElement('img');
    var dark5 = document.createElement('img');
    var dark6 = document.createElement('img');

    dark1.setAttribute('src', 'Resources/dark1.jpg');
    dark2.setAttribute('src', 'Resources/dark2.jpg');
    dark3.setAttribute('src', 'Resources/dark3.jpg');
    dark4.setAttribute('src', 'Resources/dark4.jpg');
    dark5.setAttribute('src', 'Resources/dark5.jpg');
    dark6.setAttribute('src', 'Resources/dark6.jpg');

    library.appendChild(dark1);
    library.appendChild(dark2);
    library.appendChild(dark3);
    library.appendChild(dark4);
    library.appendChild(dark5);
    library.appendChild(dark6);
  }

  else if(image_library == "bright"){
    library.innerHTML = '';
    library.style.display = "block";
    var bright1 = document.createElement('img');
    var bright2 = document.createElement('img');
    var bright3 = document.createElement('img');
    var bright4 = document.createElement('img');
    var bright5 = document.createElement('img');
    var bright6 = document.createElement('img');

    bright1.setAttribute('src', 'Resources/bright1.jpg');
    bright2.setAttribute('src', 'Resources/bright2.jpg');
    bright3.setAttribute('src', 'Resources/bright3.jpg');
    bright4.setAttribute('src', 'Resources/bright4.jpg');
    bright5.setAttribute('src', 'Resources/bright5.jpg');
    bright6.setAttribute('src', 'Resources/bright6.jpg');

    library.appendChild(bright1);
    library.appendChild(bright2);
    library.appendChild(bright3);
    library.appendChild(bright4);
    library.appendChild(bright5);
    library.appendChild(bright6);
  }
  else if(image_library == "pastel"){
    library.innerHTML = '';
    library.style.display = "block";
    var pastel1 = document.createElement('img');
    var pastel2 = document.createElement('img');
    var pastel3 = document.createElement('img');
    var pastel4 = document.createElement('img');
    var pastel5 = document.createElement('img');
    var pastel6 = document.createElement('img');

    pastel1.setAttribute('src', 'Resources/pastel1.jpg');
    pastel2.setAttribute('src', 'Resources/pastel2.jpg');
    pastel3.setAttribute('src', 'Resources/pastel3.jpg');
    pastel4.setAttribute('src', 'Resources/pastel4.jpg');
    pastel5.setAttribute('src', 'Resources/pastel5.jpg');
    pastel6.setAttribute('src', 'Resources/pastel6.jpg');

    library.appendChild(pastel1);
    library.appendChild(pastel2);
    library.appendChild(pastel3);
    library.appendChild(pastel4);
    library.appendChild(pastel5);
    library.appendChild(pastel6);
  }
  else if(image_library == "nature"){
    library.innerHTML = '';
    library.style.display = "block";
    var nature1 = document.createElement('img');
    var nature2 = document.createElement('img');
    var nature3 = document.createElement('img');
    var nature4 = document.createElement('img');
    var nature5 = document.createElement('img');
    var nature6 = document.createElement('img');

    nature1.setAttribute('src', 'Resources/nature1.jpg');
    nature2.setAttribute('src', 'Resources/nature1.jpg');
    nature3.setAttribute('src', 'Resources/nature3.jpg');
    nature4.setAttribute('src', 'Resources/nature4.jpg');
    nature5.setAttribute('src', 'Resources/nature5.jpg');
    nature6.setAttribute('src', 'Resources/nature6.jpg');

    library.appendChild(nature1);
    library.appendChild(nature2);
    library.appendChild(nature3);
    library.appendChild(nature4);
    library.appendChild(nature5);
    library.appendChild(nature6);
  }
});
