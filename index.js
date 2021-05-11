run('no-hoist')
run('hoist')

////////////////////////////////////////////////////////////////////////////////

function run(dir) {

  let app4 = `./${dir}/packages/app-webpack4/index.js`
  console.log('Running', app4)
  require(app4)

  console.log()

  // Needed because we are running both apps from this script, and because `require('plugin')` will be cached.
  // Normally we would run each app in separate process.
  clearRequireCache()

  let app5 = `./${dir}/packages/app-webpack5/index.js`
  console.log('Running', app5)
  require(app5)

}

////////////////////////////////////////////////////////////////////////////////

function clearRequireCache() {
  Object.keys(require.cache).forEach(function(key) {
    delete require.cache[key];
  });
}
