const langmap = require('langmap')
const fs = require('fs')

function getLanguageNames (locales) {
  return locales.map(locale => {
    return Object.assign({locale}, langmap[locale])
  })
}

const filesToIgnore = ['readme.md']

function getLocalesFromDir (path) {
  const ls = fs.readdirSync(path)
  return getLanguageNames(ls).filter(x => !!x && !filesToIgnore.includes(x.locale.toLowerCase())).reduce((res, item) => {
    res[item.locale] = item
    return res
  }, {})
}

module.exports = getLocalesFromDir
module.exports.getLanguageNames = getLanguageNames
