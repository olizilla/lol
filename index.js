const langmap = require('langmap')
const fs = require('fs')
const { join } = require('path')

function getLanguageNames (locales) {
  return locales.map(locale => {
    return Object.assign({locale}, langmap[locale])
  })
}

function getLocalesFromDir (path) {
  const ls = fs.readdirSync(path).filter(item => fs.lstatSync(join(path, item)).isDirectory())
  return getLanguageNames(ls).filter(x => !!x).reduce((res, item) => {
    res[item.locale] = item
    return res
  }, {})
}

module.exports = getLocalesFromDir
module.exports.getLanguageNames = getLanguageNames
