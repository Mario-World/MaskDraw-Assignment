# Image Inpainting Widget Tool 

This project allows users to upload an image, draw a mask on it,and export both the original image and the generated mask as separate images. It uses a canvas drawing library for creating the mask and React for building the user interface. 

# Features: 
 
#Upload an image (JPEG/PNG).

#Draw a mask using a brush tool.

#Export the mask and view the original image alongside the mask.

#Adjust brush size for more fine-tuned drawings.

#Responsive layout with a  upload button and images displayed side by side.

# Libraries Used:

 => React - Javscript library for building the user interface.
 
 => react-canvas-draw : Used for implementing the drawing canvas where users can create the mask on images.
 
 =>FileReader API : Native browser API used to read images files uploaded by the user and display them as data URLs.

 # How to Run the Project Locally: 

1. Clone the repository to your local machine:

  git clone <repository-url>
  cd image-inpainting-widget

2. Install the necessary dependencies: 

   npm install 

3. Start the development server: 

   npm start 

4.Open your browser and go to http://localhost:3000 to view the project.

# Challenges Faced and How I overcame Them: 

1. Handling Image Upload and Displaying on Canvas: 

 * Challenge-1 : Here I got  challenge for  uploading images correctly on canvas was difficult, especially with resizing. 

 * Solution : I used the Filereader API to load the image and passed it to react-canvas-draw, ensuring proper display without scaling issues. 

 2. Creating the Mask with the Brush Tool: 

 * Challenge-2: It was tricky to render the mask with the white strokes and a black background. 

 * Solution: I customized the brush and background color in react-canvas-draw to achieve the desired mask effect. 

 3. Exporting the Mask Image Correctly: 

 * Challenge: Ensuring the mask had white for the drawn areas and black for untouched areas was challenging. 

 *Solution : I created a temporary canvas, filled it with black, and overlayed the white strokes from the drawing to generate the correct mask.

