const fs = require('fs')
const glob = require('glob')

glob(`**/*html`, {cwd: 'public'}, (_, files) => {
  const paths = files
    .map(path => `/${path}`)

  const roots = paths
    .map(path => path.replace(/[^\/]*$/, ''))

  const filePaths = paths.concat(roots)

  const data = {
    // "DistributionID": "E1DWP242TSVX5D",
    "Paths": {
      "Quantity": filePaths.length,
      "Items": filePaths
    },
    "CallerReference": `Codeship-Triggered-Invalidation-${(new Date(Date.now())).toJSON()}`
  }

  fs.writeFile('invalidation-batch.json', JSON.stringify(data), (error) => {console.error(error)})
})
