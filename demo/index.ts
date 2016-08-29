import * as backlogjs from '../src/index';
import 'isomorphic-form-data';
import 'isomorphic-fetch';

require('es6-promise').polyfill();

const host = 'example.backlog.jp';
const apiKey = 'apiKey';

const configure = { host, apiKey };
const backlog = new backlogjs.Backlog(configure);

window.document
  .querySelector('#download')
  .addEventListener('click', function() {
    backlog.getSpaceIcon().then((data: backlogjs.Entity.File.BrowserFileData) => {
      //location.href = data.url;
      data.blob().then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        const element = <HTMLImageElement>window.document.querySelector('#image');
        element.src = objectURL;
      });
    }).catch((err) => {
      console.log(err);
    });
  });

window.document
  .querySelector('#upload')
  .addEventListener('click', function() {
    const $form = <HTMLFormElement>window.document.querySelector('#upload_form');
    const formData = new FormData($form);
    backlog.postSpaceAttachment(formData).then(data => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  });
