(function (window, document) {
  'use strict';

  var DOM = {
    buttonStart: null,
    buttonReset: null,
    input: null,
    canvas: null
  };

  var ctx = null,
      srcImgData = null,
      isBusy = false,
      quantizerWorker = null;

  window.onload = function () {
    DOM.buttonStart = document.getElementById('button');
    DOM.buttonReset = document.getElementById('reset_button');
    DOM.input = document.getElementById('file_input');
    DOM.canvas = document.getElementById('canvas');

    ctx = DOM.canvas.getContext('2d');
    setBusy(false);
    initWebWorker();
    initListener();
    extractDataFromSrc('assets/placeholder.jpg');
  }

  function initListener() {
    DOM.input.addEventListener('change', function (e) {
      readFile(DOM.input.files[0]);
    });

    document.addEventListener('drop', function (e) {
      e.preventDefault();
      readFile(e.dataTransfer.files[0]);
    });
		let prevDefault = function (e) { e.preventDefault(); }
		document.addEventListener('dragenter', prevDefault);
		document.addEventListener('dragover', prevDefault);
		document.addEventListener('dragleave', prevDefault);

    DOM.buttonStart.addEventListener('click', startQuantization);
    DOM.buttonReset.addEventListener('click', resetImgData);
  }

  function initWebWorker() {
    if (window.Worker) {
      quantizerWorker = new Worker('../src/kmeans-quantizer.js');
      quantizerWorker.onmessage = function (e) {
        handleQuantization(e.data);
      }
    }
  }

  function readFile(file) {
    if (!isBusy && file && file.type.includes('image')) {
      setBusy(true);
      let reader = new FileReader();
  		reader.addEventListener('load', function () {
        extractDataFromSrc(reader.result);
        setBusy(false);
      });
      reader.readAsDataURL(file);
    }
  }

  function extractDataFromSrc(src) {
    let img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function () {
      document.querySelector('.dropimage').style['background-image'] = 'url('+src+')';
      DOM.canvas.width = img.width;
      DOM.canvas.height = img.height;
      ctx.drawImage(img, 0, 0, DOM.canvas.width, DOM.canvas.height);
      srcImgData = ctx.getImageData(0,0, DOM.canvas.width, DOM.canvas.height).data;
    }
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var palette = {};

    img.src = src;
  }

  function startQuantization() {
    if (isBusy) {
      return;
    }
    setBusy(true);
    let colorCount = getColorCount();
    if (colorCount != null) {
      if (quantizerWorker != null) {
        quantizerWorker.postMessage({imageData: srcImgData, colorCount: colorCount});
      }
      else {
        KMeansQuantizer.compute(srcImgData, colorCount, true).then(handleQuantization);
      }
    }
    else {
      setBusy(false);
    }
  }

  function handleQuantization(result) {
    console.log(result);
    let imgData = ctx.createImageData(canvas.width, canvas.height);
    imgData.data.set(result.imageData);
    ctx.putImageData(imgData, 0,0);
    setBusy(false);
    for (let i = 0; i < imgData.data.length; i += 4) {
      var r = imgData.data[i];
      var g = imgData.data[i + 1];
      var b = imgData.data[i + 2];
      var color = `rgb(${r},${g},${b})`;

      if (!(color in palette)) {
        palette[color] = true;
      }
    }

    // Extracting the colour palette and diaplaying in section two (answers)
    var uniqueColors = Object.keys(palette);
    console.log(uniqueColors);

    var container = document.getElementById('palette');
    var boxSize = 65;

    var lastFourElements = uniqueColors.slice(-4);
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");

    for (let i = 0; i < lastFourElements.length; i++) {
      const colour = document.createElement('div');
      const colorBox = document.createElement('canvas');
      const rgbP = document.createElement('document');
      colorBox.width = boxSize;
      colorBox.height = boxSize;
      colorBox.style.display = 'inline-block';
      colorBox.style.marginRight = '5px';
      colorBox.style.borderRadius = '50px';
      rgbP.style.marginRight = '20px';
      rgbP.style.padding = 'auto';
      rgbP.innerHTML = lastFourElements[i];
      container.appendChild(colour);
      colour.appendChild(colorBox);
      colour.appendChild(rgbP);

      const ctx = colorBox.getContext('2d');
      ctx.fillStyle = lastFourElements[i];
      ctx.fillRect(0, 0, boxSize, boxSize);

      console.log(lastFourElements[i]);

      button1.style.backgroundColor = lastFourElements[i];
      button2.style.backgroundColor = lastFourElements[i - 1];
    }

    var section = document.getElementById("two");
    section.style.display = "block";
  }

  function getColorCount() {
    let colorCount = document.getElementById('color_count');
    if(colorCount.checkValidity()) {
      return colorCount.value;
    }
    else{
      return null;
    }
  }

  function resetImgData(imgData) {
    if (!!srcImgData) {
      ctx.putImageData(srcImgData, 0,0);
    }
  }

  function setBusy(b) {
    if (b) {
      isBusy = true;
      DOM.buttonStart.textContent = 'Computing...'
    }
    else {
      isBusy = false;
      DOM.buttonStart.textContent = 'Submit';
    }
  }

})(window, window.document);
