import ImageEditor from 'tui-image-editor';
import FileSaver from 'file-saver'; //to download edited image to local. Use after npm install file-saver

import 'tui-image-editor/dist/tui-image-editor.min.css';
import '/scss/style.scss';

const imageEditor = new ImageEditor(document.querySelector('#tui-image-editor'), {
  includeUI: {
    // loadImage: {
    //   path: '/sampleImage.avif',
    //   name: 'SampleImage',
    // },
    initMenu: 'filter',
    menuBarPosition: 'bottom',
  },
  cssMaxWidth: 700,
  cssMaxHeight: 500,
  selectionStyle: {
    cornerSize: 20,
    rotatingPointOffset: 70,
  },
});


// document.querySelector("#download").addEventListener('click', function (e) {
//   const imageUrl = imageEditor.toDataURL();
//   console.log('database64-->', imageUrl)
// })

// window.saveAs = async (blob, imageName) => {
//   const formData = new FormData();
//   formData.append('image', blob, imageName);

//   fetch('/upload', {
//     method: 'POST',
//     body: formData,
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log('Success:', result);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// };