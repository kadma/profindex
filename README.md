# Profindex - Goindex tema oscuro en español
Combining the power of [Cloudflare Workers](https://workers.cloudflare.com/) and [Google Drive](https://www.google.com/drive/) will allow you to index you files on the browser on Cloudflare Workers.    

[go2index/index.js](https://github.com/Aicirou/goindex-theme-acrou/go2index) is the content of the Workers script.  

Basado en  [yanzai/goindex](https://github.com/yanzai/goindex/)
y [alx-xlx/goindex](https://github.com/alx-xlx/goindex)

## Demo  

Acrou: [https://oss.achirou.workers.dev/](https://oss.achirou.workers.dev/) 

## Features

- [x] 👑 Page-level caching,browser forward and backward without reloading (MAC users have a better experience with the trackpad)
- [x] 🗂 Multi drive switching
- [x] 🔐 Http Basic Auth
- [x] 🎨 Grid view mode(File Preview)
- [x] 🎯 Paging load
- [x] 🌐 I18n(multi-language)
- [x] 🛠 Markdown/Html render (Maybe it can be your blog)
- [x] 🖥 Video Online(.vtt subtitle)
- [x] 🕹 Support for custom video player (API)
- [x] 🎧 Audio Online
- [x] 🚀 Faster speed

## TODO

- [ ] More file format preview
- [ ] Let goindex be more than just a directory index

## Quick Deployment

1. Open any of the following links

   - https://profindex.glitch.me/

2. Auth and get the code  

3. Deploy the code to [Cloudflare Workers](https://www.cloudflare.com/)

## Deployment  

1. Open [Google Drive API](https://console.developers.google.com/apis/api/drive.googleapis.com/overview)
2. Create a [OAuth client ID](https://console.developers.google.com/apis/credentials/oauthclient)
3. Install [rclone](https://rclone.org/downloads/) software locally
4. Get `refresh_token ` with `rclone`
5. Download `index.js` in https://github.com/Aicirou/goindex-theme-acrou/tree/master/go2index and replace `client_id`,`client_secret`,`refresh_token` for what you just got.
6. Deploy the code to [Cloudflare Workers](https://www.cloudflare.com/)

> If you write a good article and want to share it with others, please submit Issues and I will post the link here.



## Change log

### v2.0.8

- Fix image file actions does not work [#100](https://github.com/Aicirou/goindex-theme-acrou/issues/100)
- Fix misjudged file to image format [#88](https://github.com/Aicirou/goindex-theme-acrou/issues/88)
- Fix more than 10 drive not working [#59](https://github.com/Aicirou/goindex-theme-acrou/issues/59) [#85](https://github.com/Aicirou/goindex-theme-acrou/issues/85)
- Fix some of the operation functions in the search list cannot be used
- Fix text cache content not refreshing
- Add video default player([plyr](https://github.com/sampotts/plyr)) [#22](https://github.com/Aicirou/goindex-theme-acrou/issues/22) [#38](https://github.com/Aicirou/goindex-theme-acrou/issues/38)
- Add audio player ([APlayer](https://github.com/MoePlayer/APlayer)) [#77](https://github.com/Aicirou/goindex-theme-acrou/issues/77)
- Add copy button to video page
- Add [NProgress](https://github.com/rstacruz/nprogress)
- Add language cache cleanup
- Add shortcut can't download tip [#76](https://github.com/Aicirou/goindex-theme-acrou/issues/76)
- Markdown displays rendered html by default
- CLI Delete prefetch preload of lazy load module
- Delete fontawesome5


[MIT](LICENSE)

