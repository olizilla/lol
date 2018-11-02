const langmap = require('langmap')
const fs = require('fs')

function getLanguageNames (locales) {
  return locales.map(locale => {
    return Object.assign({locale}, langmap[locale])
  })
}

function getLocalesFromDir (path) {
  const ls = fs.readdirSync(path)
  return getLanguageNames(ls).filter(x => !!x).reduce((res, item) => {
    res[item.locale] = item
    return res
  }, {})
}

module.exports = getLocalesFromDir
module.exports.getLanguageNames = getLanguageNames
