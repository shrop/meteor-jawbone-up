Package.describe({
  summary: "A Meteor wrapper for the Jawbone UP API."
});

Package.on_use(function (api, where) {
  api.add_files('jawbone-up.js', ['client', 'server']);
});

Package.on_test(function (api) {
});
