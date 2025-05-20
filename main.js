// Get the Handlebars template from the HTML
const source = document.getElementById('eachHelper').innerHTML;

// Compile the Handlebars template
const template = Handlebars.compile(source);

// Define the context object with an array to render
const context = {
  newArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

// Generate the HTML by applying the context to the template
const compiledHtml = template(context);

// Insert the generated HTML into the display container
const displayElements = document.getElementById('display');
displayElements.innerHTML = compiledHtml;
