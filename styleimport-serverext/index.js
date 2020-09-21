const bodyParser = require('body-parser')
const express = require('express')
const pages = require('../../lib/pages.js')
const lockdown = true

const handleBlockRequest = async (req, res, next) => {
  const block = await pages.model.PageBlock.findByPk(req.params.id)
  if (
    block.blockType === 'ext' &&
    block.settings.extKey === 'StyleImport' &&
    lockdown
  ) {
    res.status(403).json({ error: 'forbidden' })
  } else {
    next()
  }
}

const middleware = express()
middleware.use(bodyParser.json({ limit: '50mb' }))
middleware.route('/api/page/:id/blocks').post((req, res, next) => {
  if (
    req.body.blockType === 'ext' &&
    req.body.settings.extKey === 'StyleImport' &&
    lockdown
  ) {
    res.status(403).json({ error: 'forbidden' })
  } else {
    next()
  }
})
middleware
  .route('/api/page/blocks/:id')
  .put(handleBlockRequest)
  .delete(handleBlockRequest)

module.exports = {
  middleware,
}
