module.exports = {
  source: {
    include: [
      './docs/build',
      './lib/actor.js',
      './lib/codecept.js',
      './lib/config.js',
      './lib/container.js',
      './lib/data/table.js',
      './lib/event.js',
      './lib/helper.js',
      './lib/helper/clientscripts/nightmare.js',
      './lib/index.js',
      './lib/interfaces',
      './lib/locator.js',
      './lib/output.js',
      './lib/pause.js',
      './lib/recorder.js',
      './lib/secret.js',
      './lib/session.js',
      './lib/step.js',
      './lib/store.js',
      './lib/ui.js',
      './lib/within.js',
      require.resolve('@codeceptjs/detox-helper')
    ],
  },
  opts: {
    template: 'node_modules/tsd-jsdoc/dist',
    recurse: true,
    destination: './typings/',
  },
  plugins: ['jsdoc.namespace.js', 'jsdoc-typeof-plugin'],
};
