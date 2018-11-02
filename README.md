# lol - locale-to-language

A CLI tool to get local and english language names from a directory of locales.

## Install

```console
npm install -g @olizilla/lol
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
