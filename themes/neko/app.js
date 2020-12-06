var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,d){a.raw=d;return a};document.write('<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/mdui/0.4.3/css/mdui.min.css">');document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/markdown-it/11.0.0/markdown-it.min.js">\x3c/script>');document.write('<link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&display=swap">');
document.write("<style>* body{font-family: 'Noto Sans TC', sans-serif;} .mdui-select-selected{font-family: 'Noto Sans TC', sans-serif;} .mdui-select-menu{font-family: 'Noto Sans TC', sans-serif;}</style>");document.write("<style>* .mdui-theme-primary-blue .mdui-color-theme{background-color:rgba(35,36,39,1)!important}</style>");document.write("<style>* .mdui-appbar{padding-right: 8px; padding-left: 8px; margin-right: auto; margin-left: auto; max-width: 980px;}</style>");document.write('<style>* {box-sizing: border-box} body{margin:0px; padding:0px; background: url("//i.imgur.com/1cwii31.jpg"); background-attachment: fixed; background-repeat: no-repeat; background-position: center center; background-size: cover;}</style>');
document.write("<style>* .mdui-container{color:rgba(255,255,255,.87);background-color:rgba(35,36,39,0.95);border-width:1px;border-color:#333333;border-bottom-style:solid;}</style>");document.write("<style>* .mdui-list li{border-width:1px;border-color:#333333;border-bottom-style:solid;} </style>");document.write("<style>.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}.mdui-toolbar>*{padding:0 6px;margin:0 2px}.mdui-toolbar>i{opacity:.5}.mdui-toolbar>.mdui-typo-headline{padding:0 1pc 0 0}.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}.mdui-container{max-width:980px}.mdui-list-item{transition:none}.mdui-list>.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}.mdui-list-item{margin:2px 0;padding:0}.mdui-toolbar>a:last-child{opacity:1}@media screen and (max-width:980px){.mdui-list-item .mdui-text-right{display:none}.mdui-container{width:100%!important;margin:0}.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>a:last-child,.mdui-toolbar>i:first-child{display:block}}</style>");
document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/dplayer/1.25.1/DPlayer.min.js" integrity="sha512-bjMqZ0Ai1izYtoe+f9ehqyT9qaFYOcWgGUOj2mTx9aUBA+lEtKyIruqNhbR2toBtFg2n9LeN0FocK57P8X/jMg==" crossorigin="anonymous">\x3c/script>');document.write('<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">');document.write('<script src="//cdn.jsdelivr.net/npm/notyf@3/notyf.min.js">\x3c/script>');
function init(){document.siteName=$("title").html();$("body").addClass("mdui-theme-primary-"+UI.main_color+" mdui-theme-accent-"+UI.accent_color);var a='\n<header class="mdui-appbar mdui-color-theme">\n  <div id="nav" class="mdui-toolbar mdui-container'+(UI.fluid_navigation_bar?"-fluid":"")+" "+(UI.dark_mode?"mdui-text-color-white-text":"")+'">\n  </div>\n</header>\n<div id="content" class="mdui-container">\n</div>\n\t';$("body").html(a)}
var Os={isWindows:-1<navigator.platform.toUpperCase().indexOf("WIN"),isMac:-1<navigator.platform.toUpperCase().indexOf("MAC"),isMacLike:/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),isIos:/(iPhone|iPod|iPad)/i.test(navigator.platform),isMobile:/Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)};
function getDocumentHeight(){var a=document;return Math.max(a.body.scrollHeight,a.documentElement.scrollHeight,a.body.offsetHeight,a.documentElement.offsetHeight,a.body.clientHeight,a.documentElement.clientHeight)}
function render(a){0<a.indexOf("?")&&(a=a.substr(0,a.indexOf("?")));title(a);nav(a);var d=/\/\d+:$/g;window.MODEL.is_search_page?(window.scroll_status={event_bound:!1,loading_lock:!1},render_search_result_list()):a.match(d)||"/"==a.substr(-1)?(window.scroll_status={event_bound:!1,loading_lock:!1},list(a)):file(a)}function title(a){decodeURI(a);$("title").html(""+document.siteName)}
function nav(a){var d=window.MODEL,e="",c=window.current_drive_order||0;e+='<a href="/'+c+':/" class="mdui-typo-headline folder">'+document.siteName+"</a>";var b=window.drive_names;e+='<select class="mdui-select" onchange="window.location.href=this.value" mdui-select style="overflow:visible;padding-left:8px;padding-right:8px">';b.forEach(function(g,h){e+='<option value="/'+h+':/"  '+(h===c?'selected="selected"':"")+" >"+g+"</option>"});e+="</select>";if(!d.is_search_page&&(a=a.trim("/").split("/"),
b="/",1<a.length))for(i in a.shift(),a){var f=a[i];f=decodeURI(f);b+=f+"/";if(""==f)break;e+='<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i><a class="folder" href="/'+c+":"+b+'">'+f+"</a>"}a='<div class="mdui-toolbar-spacer"></div>\n        <div id="search_bar" class="mdui-textfield mdui-textfield-expandable mdui-float-right '+(d.is_search_page?"mdui-textfield-expanded":"")+'" style="max-width:'+(Os.isMobile?300:400)+'px">\n            <button class="mdui-textfield-icon mdui-btn mdui-btn-icon" onclick="if($(\'#search_bar\').hasClass(\'mdui-textfield-expanded\') && $(\'#search_bar_form>input\').val()) $(\'#search_bar_form\').submit();">\n                <i class="mdui-icon material-icons">search</i>\n            </button>\n            <form id="search_bar_form" method="get" action="/'+
c+':search">\n            <input class="mdui-textfield-input" type="text" name="q" placeholder="Search in current drive" value="'+(d.is_search_page?d.q||"":"")+'"/>\n            </form>\n            <button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>\n        </div>';e+='<div class="mdui-toolbar-spacer"></div>\n  <a href="//twitter.com/TW_NEKO_CHAN" target="_blank" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: \'Twitter\'}" alt="Twitter">\n    <img src="//image.flaticon.com/icons/svg/1384/1384075.svg" width="30" height="45" />\n  </a>\n  <a href="//ko-fi.com/tw_neko_chan" target="_blank" class="mdui-btn mdui-btn-icon mdui-ripple mdui-ripple-white" mdui-tooltip="{content: \'Donate\'}" alt="Donate">\n    <img src="//image.flaticon.com/icons/svg/2917/2917845.svg" width="30" height="45" />\n  </a>';
2>d.root_type&&(e+=a);$("#nav").html(e);mdui.mutation();mdui.updateTextFields()}function requestListPath(a,d,e,c){var b={password:d.password||null,page_token:d.page_token||null,page_index:d.page_index||0};$.post(a,b,function(f,g){var h=jQuery.parseJSON(f);h&&h.error&&"401"==h.error.code?c&&c(a):h&&h.data&&e&&e(h,a,b)})}
function requestSearch(a,d){var e={q:a.q||null,page_token:a.page_token||null,page_index:a.page_index||0};$.post("/"+window.current_drive_order+":search",e,function(c,b){var f=jQuery.parseJSON(c);f&&f.data&&d&&d(f,e)})}
function list(a){function d(c,b,f){$("#list").data("nextPageToken",c.nextPageToken).data("curPageIndex",c.curPageIndex);$("#spinner").remove();null===c.nextPageToken?($(window).off("scroll"),window.scroll_status.event_bound=!1,window.scroll_status.loading_lock=!1,append_files_to_list(b,c.data.files)):(append_files_to_list(b,c.data.files),!0!==window.scroll_status.event_bound&&($(window).on("scroll",function(){var g=$(this).scrollTop(),h=getDocumentHeight(),k=$(this).height();g+k>h-(Os.isMobile?130:
80)&&!0!==window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!0,$('<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>').insertBefore("#readme_md"),mdui.updateSpinners(),g=$("#list"),requestListPath(b,{password:f.password,page_token:g.data("nextPageToken"),page_index:g.data("curPageIndex")+1},d,null))}),window.scroll_status.event_bound=!0));!0===window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!1)}$("#content").html('\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row">\n\t  <ul class="mdui-list">\n\t   <li class="mdui-list-item th">\n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n      \u6a94\u6848\u540d\u7a31\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-3 mdui-text-right">\n      \u4fee\u6539\u6642\u9593\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-2 mdui-text-right">\n      \u6a94\u6848\u5927\u5c0f\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div>\n\t    </li>\n\t  </ul>\n\t </div>\n\t <div class="mdui-row">\n\t  <ul id="list" class="mdui-list">\n\t  </ul>\n    <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">\u5171 <span class="number"></span> \u9805<br>NekoChan Open Data</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t');
var e=localStorage.getItem("password"+a);$("#list").html('<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>');$("#readme_md").hide().html("");$("#head_md").hide().html("");requestListPath(a,{password:e},d,function(c){$("#spinner").remove();var b=prompt("\u76ee\u5f55\u52a0\u5bc6, \u8bf7\u8f93\u5165\u5bc6\u7801","");localStorage.setItem("password"+c,b);null!=b&&""!=b?list(c):history.go(-1)})}
function append_files_to_list(a,d){var e=$("#list"),c=null===e.data("nextPageToken"),b="0"==e.data("curPageIndex");html="";var f=[];for(i in d){var g=d[i],h=a+g.name+"/";void 0==g.size&&(g.size="");g.modifiedTime=utc2beijing(g.modifiedTime);g.size=formatFileSize(g.size);if("application/vnd.google-apps.folder"==g.mimeType)html+='<li class="mdui-list-item mdui-ripple"><a href="'+h+'" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="'+g.name+'">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              '+
g.name+'\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">'+g.modifiedTime+'</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">'+g.size+"</div>\n\t            </a>\n\t        </li>";else{h=a+g.name;var k=a+g.name,l="file";c&&"!readme.md"==g.name&&get_file(h,g,function(m){markdown("#readme_md",m)});"!head.md"==g.name&&get_file(h,g,function(m){markdown("#head_md",m)});var p=h.split(".").pop().toLowerCase();0<="|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|".indexOf("|"+
p+"|")&&(f.push(k),h+="?a=view",l+=" view");html+='<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="'+g.mimeType+'" href="'+h+'" class="'+l+'">\n\t          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="'+g.name+'">\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            '+g.name+'\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">'+g.modifiedTime+'</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">'+
g.size+"</div>\n\t          </a>\n\t      </li>"}}if(0<f.length){g=localStorage.getItem(a);h=f;if(!b&&g){try{var n=JSON.parse(g);Array.isArray(n)||(n=[])}catch(m){n=[]}h=n.concat(f)}localStorage.setItem(a,JSON.stringify(h))}e.html(("0"==e.data("curPageIndex")?"":e.html())+html);c&&$("#count").removeClass("mdui-hidden").find(".number").text(e.find("li.mdui-list-item").length)}
function render_search_result_list(){function a(d,e){$("#list").data("nextPageToken",d.nextPageToken).data("curPageIndex",d.curPageIndex);$("#spinner").remove();null===d.nextPageToken?($(window).off("scroll"),window.scroll_status.event_bound=!1,window.scroll_status.loading_lock=!1,append_search_result_to_list(d.data.files)):(append_search_result_to_list(d.data.files),!0!==window.scroll_status.event_bound&&($(window).on("scroll",function(){var c=$(this).scrollTop(),b=getDocumentHeight(),f=$(this).height();
c+f>b-(Os.isMobile?130:80)&&!0!==window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!0,$('<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>').insertBefore("#readme_md"),mdui.updateSpinners(),c=$("#list"),requestSearch({q:window.MODEL.q,page_token:c.data("nextPageToken"),page_index:c.data("curPageIndex")+1},a))}),window.scroll_status.event_bound=!0));!0===window.scroll_status.loading_lock&&(window.scroll_status.loading_lock=!1)}$("#content").html('\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row">\n\t  <ul class="mdui-list">\n\t   <li class="mdui-list-item th">\n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n      \u6a94\u6848\u540d\u7a31\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-3 mdui-text-right">\n      \u4fee\u6539\u6642\u9593\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div>\n\t    <div class="mdui-col-sm-2 mdui-text-right">\n      \u6a94\u6848\u5927\u5c0f\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div>\n\t    </li>\n\t  </ul>\n\t </div>\n\t <div class="mdui-row">\n\t  <ul id="list" class="mdui-list">\n\t  </ul>\n    <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">\u5171 <span class="number"></span> \u9805<br>NekoChan Open Data</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t');
$("#list").html('<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>');$("#readme_md").hide().html("");$("#head_md").hide().html("");requestSearch({q:window.MODEL.q},a)}
function append_search_result_to_list(a){var d=$("#list"),e=null===d.data("nextPageToken");html="";for(i in a){var c=a[i];void 0==c.size&&(c.size="");c.modifiedTime=utc2beijing(c.modifiedTime);c.size=formatFileSize(c.size);if("application/vnd.google-apps.folder"==c.mimeType)html+='<li class="mdui-list-item mdui-ripple"><a id="'+c.id+'" onclick="onSearchResultItemClick(this)" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="'+c.name+'">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              '+
c.name+'\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">'+c.modifiedTime+'</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">'+c.size+"</div>\n\t            </a>\n\t        </li>";else{var b="file",f=c.name.split(".").pop().toLowerCase();0<="|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf("|"+f+"|")&&(b+=" view");html+='<li class="mdui-list-item file mdui-ripple" target="_blank"><a id="'+
c.id+'" gd-type="'+c.mimeType+'" onclick="onSearchResultItemClick(this)" class="'+b+'">\n\t          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="'+c.name+'">\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            '+c.name+'\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">'+c.modifiedTime+'</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">'+c.size+"</div>\n\t          </a>\n\t      </li>"}}d.html(("0"==
d.data("curPageIndex")?"":d.html())+html);e&&$("#count").removeClass("mdui-hidden").find(".number").text(d.find("li.mdui-list-item").length)}
function onSearchResultItemClick(a){var d=$(a).hasClass("view"),e=window.current_drive_order,c=mdui.dialog({title:"",content:'<div class="mdui-text-center mdui-typo-title mdui-m-b-1">\u6b63\u5728\u83b7\u53d6\u76ee\u6807\u8def\u5f84...</div><div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>',history:!1,modal:!0,closeOnEsc:!0});mdui.updateSpinners();$.post("/"+e+":id2path",{id:a.id},function(b){if(b){c.close();var f="/"+e+":"+b+(d?"?a=view":"");c=mdui.dialog({title:'<i class="mdui-icon material-icons">&#xe815;</i>\u76ee\u6807\u8def\u5f84',
content:'<a href="'+f+'">'+b+"</a>",history:!1,modal:!0,closeOnEsc:!0,buttons:[{text:"\u6253\u5f00",onClick:function(){window.location.href=f}},{text:"\u65b0\u6807\u7b7e\u4e2d\u6253\u5f00",onClick:function(){window.open(f)}},{text:"\u53d6\u6d88"}]})}else c.close(),c=mdui.dialog({title:'<i class="mdui-icon material-icons">&#xe811;</i>\u83b7\u53d6\u76ee\u6807\u8def\u5f84\u5931\u8d25',content:"o(\u256f\u25a1\u2570)o \u53ef\u80fd\u662f\u56e0\u4e3a\u8be5\u76d8\u4e2d\u5e76\u4e0d\u5b58\u5728\u6b64\u9879\uff01\u4e5f\u53ef\u80fd\u56e0\u4e3a\u6ca1\u6709\u628a\u3010\u4e0e\u6211\u5171\u4eab\u3011\u7684\u6587\u4ef6\u6dfb\u52a0\u5230\u4e2a\u4eba\u4e91\u7aef\u786c\u76d8\u4e2d\uff01",
history:!1,modal:!0,closeOnEsc:!0,buttons:[{text:"WTF ???"}]})})}function get_file(a,d,e){var c="file_path_"+a+d.modifiedTime;d=localStorage.getItem(c);if(void 0!=d)return e(d);$.get(a,function(b){localStorage.setItem(c,b);e(b)})}function file(a){var d=a.split("/").pop().split(".").pop().toLowerCase().replace("?a=view","");if(0<="|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf("|"+d+"|"))return file_video(a);if(0<="|bmp|jpg|jpeg|png|gif|".indexOf("|"+d+"|"))return file_image(a)}
function file_video(a){var d=new Notyf,e=decodeURI(window.location.origin+a),c=decodeURI(a.slice(a.lastIndexOf("/")+1,a.length)),b=window.location.pathname,f=b.lastIndexOf("/");b=b.slice(0,f+1);b=localStorage.getItem(b);f="";if(b){try{b=JSON.parse(b),Array.isArray(b)||(b=[])}catch(k){console.error(k),b=[]}if(0<b.length&&b.includes(a)){var g=b.length,h=b.indexOf(a);f=-1<h-1?b[h-1]:null;b=h+1<g?b[h+1]:null;f='\n            <div class="mdui-container">\n                <div class="mdui-row-xs-2 mdui-m-b-1">\n                    <div class="mdui-col">\n                        '+
(f?'<button id="leftBtn" data-filepath="'+f+'" class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">\u4e0a\u4e00\u96c6</button>':'<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>\u4e0a\u4e00\u96c6</button>')+'\n                    </div>\n                    <div class="mdui-col">\n                        '+(b?'<button id="rightBtn"  data-filepath="'+b+'" class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">\u4e0b\u4e00\u96c6</button>':
'<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>\u4e0b\u4e00\u96c6</button>')+"\n                    </div>\n                </div>\n            </div>\n            "}}b='<a href="potplayer://'+e+'" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent windows-btn">PotPlayer \u4e32\u6d41</a>';/(Mac)/i.test(navigator.userAgent)&&(b='<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mac-btn" data-href="iina://open?url='+e+
'">IINA \u4e32\u6d41</button>');/(Android)/i.test(navigator.userAgent)&&(b='<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:'+e+"#Intent;package=com.mxtech.videoplayer.pro;S.title="+a+';end">MXPlayer Pro \u4e32\u6d41</button><br><button style="margin-top: 15px" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:'+(e+"#Intent;package=com.mxtech.videoplayer.ad;S.title="+a+';end">MXPlayer Free \u4e32\u6d41</button>'));
/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)&&(b='<a class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" href="infuse://'+e.replace(/(^\w+:|^)\/\//,"")+'">Infuse \u4e32\u6d41</a>');a='\n<div class="mdui-container-fluid">\n    <br>\n    <div class="mdui-textfield">\n    <label class="mdui-textfield-label mdui-text-color-white">\u76ee\u524d\u6a94\u6848\uff1a</label>\n    <input class="mdui-textfield-input mdui-text-color-white" type="text" value="'+c+'" readonly/>\n    </div>\n    <div class="mdui-center" id="dplayer">\n    <link rel="preload" href="'+
e+'" as="video" type="video/mp4">\n      </div>\n    <br>\n    <div id="imgWrap">\n    '+f+"\n    </div>\n    <br>\n    "+(b+('<br><a style="margin-top: 15px" href="'+e+'" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent download-btn">\u76f4\u9023\u4e0b\u8f09\u6a94\u6848</a>\n    <div class="mdui-textfield">\n      <label class="mdui-textfield-label mdui-text-color-white">\u6ce8\u610f\uff1a\u82e5\u5f71\u7247\u6c92\u6709\u756b\u9762\uff0c\u8acb\u5617\u8a66\u64ad\u653e\u5668\u3002\u6216\u901a\u77e5\u6211\u672c\u4eba\u3002</label>\n    </div>\n    <hr>\n</div>\n    '));
$("#content").html(a);(new DPlayer({container:document.getElementById("dplayer"),theme:"#0080ff",autoplay:!0,lang:"zh-tw",screenshot:!0,video:{url:e,thumbnails:"thumbnails.jpg"},contextmenu:[{text:"NekoChan Open Data",link:"//nekochan.ml/"}]})).on("ended",function(){d.success("\u81ea\u52d5\u5207\u63db\u4e0b\u4e00\u96c6");$("#rightBtn").get(0).click()});$("#leftBtn, #rightBtn").click(function(k){var l=$(k.target);["I","SPAN"].includes(k.target.nodeName)&&(l=$(k.target).parent());k=l.attr("data-filepath");
l.attr("data-direction");file(k)})}function file_image(a){a='\n<div class="mdui-container-fluid">\n    <br>\n    <img class="mdui-img-fluid" src="'+decodeURI(window.location.origin+a)+'"/>\n  <br>\n  <hr>\n</div>';$("#content").html(a)}
function utc2beijing(a){var d=a.indexOf("T"),e=a.indexOf("Z"),c=a.substr(0,d);a=a.substr(d+1,e-d-1);timestamp=new Date(Date.parse(c+" "+a));timestamp=timestamp.getTime();timestamp/=1E3;var b=timestamp+28800;b=new Date(1E3*b);c=1900+b.getYear();a="0"+(b.getMonth()+1);d="0"+b.getDate();e="0"+b.getHours();var f="0"+b.getMinutes();b="0"+b.getSeconds();return c+"/"+a.substring(a.length-2,a.length)+"/"+d.substring(d.length-2,d.length)+" "+e.substring(e.length-2,e.length)+":"+f.substring(f.length-2,f.length)+
":"+b.substring(b.length-2,b.length)}function formatFileSize(a){return a=1073741824<=a?(a/1073741824).toFixed(2)+" GB":1048576<=a?(a/1048576).toFixed(2)+" MB":1024<=a?(a/1024).toFixed(2)+" KB":1<a?a+" Bytes":1==a?a+" Byte":" \u8cc7\u6599\u593e"}String.prototype.trim=function(a){return a?this.replace(new RegExp("^\\"+a+"+|\\"+a+"+$","g"),""):this.replace(/^\s+|\s+$/g,"")};
function markdown(a,d){if(void 0==window.md)window.md=window.markdownit(),markdown(a,d);else{var e=md.render(d);$(a).show().html(e)}}window.onpopstate=function(){render(window.location.pathname)};$(function(){init();render(window.location.pathname)});
