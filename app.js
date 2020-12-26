let topTextInput,
  bottomTextInput,
  topTextSizeInput,
  bottomTextSizeInput,
  imageInput,
  generateBtn,
  canvas,
  ctx; //
//   topTextSize, bottomTextSize
// function generateMeme(img, topText, bottomText) {
//   let fontSize;

//   topText.toUpperCase();
//   bottomText.toUpperCase();

//   // save canvas to images
//   canvas.width = img.width;
//   canvas.height = img.height;

//   // clear the canvas styling and draw the image in the center of the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(img, 0, 0);

//   // font styling
//   ctx.fillStyle = "white";
//   ctx.strokeStyle = "black";
//   ctx.textAlign = "center";
//   ctx.toUpperCase = true;

//   // top Text Font size
//   fontSize = canvas.width / 15;
//   ctx.font = fontSize + "px Impact";
//   ctx.lineWidth = fontSize / 20;

//   // bottom text font size
//   fontSize = canvas.width / 15;
//   ctx.font = fontSize + "px Impact";
//   ctx.lineWidth = fontSize / 20;

//   // top text -- for each for two rows of text
//   ctx.textBaseline = "top";
//   topText.split("\n").forEach((t, i) => {
//     ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
//     ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
//   });

//   // bottom text -- for each for two rows of text
//   ctx.textBaseline = "bottom";
//   bottomText
//     .split("\n")
//     .reverse()
//     .forEach((t, i) => {
//       ctx.fillText(
//         t,
//         canvas.width / 2,
//         canvas.height - i * fontSize,
//         canvas.width
//       );
//       ctx.strokeText(
//         t,
//         canvas.height / 2,
//         canvas.height - i * fontSize,
//         canvas.width
//       );
//     });
// }

// initialization function

function generateMeme(img, topText, bottomText, topTextSize, bottomTextSize) {
  let fontSize;

  // Size canvas to image
  canvas.width = img.width;
  canvas.height = img.height;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw main image
  ctx.drawImage(img, 0, 0);

  // Text style: white with black borders
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.textAlign = "center";

  // Top text font size
  fontSize = canvas.width * topTextSize;
  ctx.font = fontSize + "px Impact";
  ctx.lineWidth = fontSize / 20;

  // Draw top text
  ctx.textBaseline = "top";
  topText.split("\n").forEach(function (t, i) {
    ctx.fillText(t.toUpperCase(), canvas.width / 2, i * fontSize, canvas.width);
    ctx.strokeText(
      t.toUpperCase(),
      canvas.width / 2,
      i * fontSize,
      canvas.width
    );
  });

  // Bottom text font size
  fontSize = canvas.width * bottomTextSize;
  ctx.font = fontSize + "px Impact";
  ctx.lineWidth = fontSize / 20;

  // Draw bottom text
  ctx.textBaseline = "bottom";
  bottomText
    .split("\n")
    .reverse()
    .forEach(function (t, i) {
      // .reverse() because it's drawing the bottom text from the bottom up
      ctx.fillText(
        t.toUpperCase(),
        canvas.width / 2,
        canvas.height - i * fontSize,
        canvas.width
      );
      ctx.strokeText(
        t.toUpperCase(),
        canvas.width / 2,
        canvas.height - i * fontSize,
        canvas.width
      );
    });
}

function init() {
  topTextInput = document.getElementById("top");
  bottomTextInput = document.getElementById("bottom");
  topTextSizeInput = document.getElementById("top-text-size-input");
  bottomTextSizeInput = document.getElementById("bottom-text-size-input");
  imageInput = document.getElementById("img-input");
  generateBtn = document.getElementById("generate-btn");
  canvas = document.getElementById("meme-canvas");
  ctx = canvas.getContext("2d");

  // set canvas to zero so that canvas is the user's upload size
  canvas.width = canvas.height = 0;

  // use the filer reader API
  generateBtn.addEventListener("click", () => {
    let reader = new FileReader();
    // on load upload the user's image
    reader.onload = () => {
      let img = new Image();
      // image source is equal to the image that the user uploaded
      img.src = reader.result;

      // call the generate meme function to add the image and input text from user
      generateMeme(
        img,
        topTextInput.value,
        bottomTextInput.value,
        topTextSizeInput.value,
        bottomTextSizeInput.value
      );
    };

    reader.readAsDataURL(imageInput.files[0]);
  });
}

init();
