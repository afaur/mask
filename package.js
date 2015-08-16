Package.describe({
  summary: "A jQuery Plugin to make masks on form fields and HTML elements."
});

Package.on_use(function (api, where) {
  api.add_files(['jQuery-Mask-Plugin/jquery.mask.js'], 'client');
});