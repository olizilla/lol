const tape = require('tape')
const path = require('path')
const { getLanguageNames } = require('./')
const getLanguageNamesOnDir = require('./')

tape('Get language name for locales', t => {
  const res = getLanguageNames(['en-GB', 'zh', 'zh-CN', 'zh-HK', 'zh-TW'])
  t.deepEqual(res[0], { locale: 'en-GB', nativeName: 'English (UK)', englishName: 'English (UK)' })
  t.deepEqual(res[1], { locale: 'zh', nativeName: '中文', englishName: 'Chinese' })
  t.deepEqual(res[2], { locale: 'zh-CN', nativeName: '中文（中国）', englishName: 'Chinese Simplified (China)' })
  t.deepEqual(res[3], { locale: 'zh-HK', nativeName: '中文（香港）', englishName: 'Chinese Traditional (Hong Kong)' })
  t.deepEqual(res[4], { locale: 'zh-TW', nativeName: '中文（台灣）', englishName: 'Chinese Traditional (Taiwan)' })
  t.end()
})

tape('Get language name for locales per dir', t => {
  const res = getLanguageNamesOnDir(path.resolve('./test'))
  t.deepEqual(res['en-GB'], { locale: 'en-GB', nativeName: 'English (UK)', englishName: 'English (UK)' })
  t.deepEqual(res.zh, { locale: 'zh', nativeName: '中文', englishName: 'Chinese' })

  t.end()
})
