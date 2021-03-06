# lol - locale-to-language

A CLI tool to get local and english language names from a directory of locales.

Language names are pulled from [mozilla/language-mapping-list](https://github.com/mozilla/language-mapping-list/blob/master/language-mapping-list.js)

## Install

```console
npm install -g @olizilla/lol
```

or just use it via `npx`

```console
npx -q @olizilla/lol public/locales > src/lib/languages.json
```

## Usage

In your favorite shell, pass lol the directory where you keep your locales

```
$ ls ~/Code/ipfs-shipyard/ipfs-webui/public/locales/ | grep zh
zh-CN
zh-HK
zh-TW

$ lol ~/Code/ipfs-shipyard/ipfs-webui/public/locales/
{
  "uk": {
    "locale": "uk",
    "nativeName": "Українська",
    "englishName": "Ukrainian"
  },
  "zh-CN": {
    "locale": "zh-CN",
    "nativeName": "中文（中国）",
    "englishName": "Chinese Simplified (China)"
  },
  "zh-HK": {
    "locale": "zh-HK",
    "nativeName": "中文（香港）",
    "englishName": "Chinese Traditional (Hong Kong)"
  },
  "zh-TW": {
    "locale": "zh-TW",
    "nativeName": "中文（台灣）",
    "englishName": "Chinese Traditional (Taiwan)"
  }
}
```
