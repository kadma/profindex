<div align="center">
<h1>profindex</h1>
<img src="https://github.com/alx-xlx/goindex/raw/master/themes/logo.png" alt="profindex" height="">

</div>
<div align="center">

<img alt="goindex-license" src="https://img.shields.io/badge/Open_source-MIT-red.svg?logo=git&logoColor=green"/>
<img alt="goindex-softwareheritage.org" src="https://archive.softwareheritage.org/badge/origin/https://github.com/Unipisa/CMM/"/>
<img alt="Principal" src="https://img.shields.io/github/repo-size/alx-xlx/goindex">

<p>Ya disponible el creador con api propia</p>


</div>
[Creador](https://creador.gd0.me/)
---

Google Drive Directory Index  
Combining the power of [Cloudflare Workers](https://workers.cloudflare.com/) and [Google Drive](https://www.google.com/drive/) will allow you to index you files on the browser on Cloudflare Workers.    

`index.js` is the content of the Workers script.  

Basado en  [yanzai/goindex](https://github.com/yanzai/goindex/)
y [alx-xlx/goindex](https://github.com/alx-xlx/goindex)

# Versions


## 1. [Aicirou/goindex-theme-acrou](https://github.com/Aicirou/goindex-theme-acrou)


Worker Script (Dark Mode) : [index.js](https://raw.githubusercontent.com/alx-xlx/goindex/31fabf3d7ff221ff34aaaf23e63a1a5a49e40b4f/goindex-acrou/go2index/index.js)

Worker Script (Multiple Google Accounts) : [index-multiple-accounts.js](https://github.com/alx-xlx/goindex/blob/master/goindex-acrou/go2index/index-multiple-accounts.js)

Demo - [goindex.teamsdrives.workers.dev](https://goindex.teamsdrives.workers.dev)

Copy the [index.js](https://raw.githubusercontent.com/alx-xlx/goindex/31fabf3d7ff221ff34aaaf23e63a1a5a49e40b4f/goindex-acrou/go2index/index.js) script to [workers.dev](https://workers.cloudflare.com/) and edit `client_id`, `client_secret`, `refresh_token` with yours

OR

### GoIndex Auto Code Builder
https://creador.gd0.me/

Simply visit [this](https://creador.gd0.me/) Modified (only for Dark Mode) version to automatically generate your `index.js` without having to manually edit anything.

### [List View - Dark Mode](https://goindex.teamsdrives.workers.dev)
![goindex-list](https://i.imgur.com/Y9pJo1V.png)

### [Thumbnail View - Dark Mode](https://goindex.teamsdrives.workers.dev)
![goindex-thumbnail](https://i.imgur.com/crg4dGp.gif)



## Deployment  
1.Install `rclone` software locally  
2.Follow [https://rclone.org/drive/]( https://rclone.org/drive/) bind a drive  
3.Execute the command`rclone config file` to find the file `rclone.conf` path  
4.Open `rclone.conf`,find the configuration `root_folder_id` and `refresh_token`  
5.Download index.js in https://github.com/donwa/goindex and fill in root and refresh_token  
6.Deploy the code to [Cloudflare Workers](https://www.cloudflare.com/)

## Free Teamdrives
Get free Google Shared Drives

-https://avcen.tech/




## Credits - Original Authors

goindex-theme-acrou - [Aicirou](https://github.com/Aicirou/goindex-theme-acrou)

GDIndex - [maple3142](https://github.com/maple3142/GDIndex)

goindex - [donwa](https://github.com/donwa/goindex)

goindex tema - [alx-xlx](https://github.com/alx-xlx/goindex)
