var emails = [
    'dizhi@tiankongmanhua.com'
];
var newestUrls = [
    'https://tiankong99.com',
	'https://tiankong98.com',
	'https://tiankong97.com',
	'https://tiankong…….com',
	'https://tiankong90.com',
	'https://tiankongmanhua.github.io'
];
var otherUrls = [
    'https://tiankongapp.github.io/',
    'https://www.skymanhua.cn',
    'https://www.skymanhua.cc'
];
var otherName = [
    'APP直接下载',
    'https://www.skymanhua.cn',
    'https://www.skymanhua.cc'
];
var foreverUrls = [
    'https://www.tiankongmanhua.com',
    'https://www.skymanhua.com',
    'https://www.天空漫画.com'
];
var notices = [
    '* 我们推荐PC和Andriod手机用户使用Chrome(谷歌)浏览器访问，iPhone用户我们建议您使用手机自带Safria浏览器访问。',
    //'* 为了防止域名劫持而无法访问，请设置手机和PC的DNS，我们推荐使用8.8.8.8和1.1.1.1。',
    '* 大陆地区用户我们建议您可以使用VPN或者代理的方式来访问我们的永久地址。',
	'* 大陆地区用户我们强烈建议您截图收藏当前页面(tiankongmanhua.github.io)。'
];

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
	var itemsname = option.itemsname;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;

    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = ''
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr = htmlStr + '<li>' + items[i] + '</li>';
        } else {
			if(itemsname){
				htmlStr = htmlStr + '<li><a href="' + items[i] + '" target="_blank">' + itemsname[i] + '</a></li>';
			}else{
				htmlStr = htmlStr + '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
			}
        }
    }

    // For text
    if (text) {
        htmlStr = htmlStr + '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');
    // append logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = '天 <span>空</span><span class="flag">漫画站</span>'
    mainElem.appendChild(logoElem);

    // newest urls
    var newestFieldElem = createFieldElem({title: '请收藏地址发布页', items: newestUrls, text: '请使用https://协议访问天空漫画站'});
    mainElem.appendChild(newestFieldElem);

    // other urls
    var otherFieldElem = createFieldElem({title: '最新App下载页', items: otherUrls, itemsname: otherName});
    mainElem.appendChild(otherFieldElem);

    // email
    var mailFieldElem = createFieldElem({title: '发送邮件获得最新地址', items: emails, plainText: true});
    mainElem.appendChild(mailFieldElem);

    // forever urls
    var foreverFieldElem = createFieldElem({title: '永久地址', items: foreverUrls});
    mainElem.appendChild(foreverFieldElem);

    // Description
    var noticeFieldElem = createFieldElem({title: '注意事项', items: notices, plainText: true, classStr: 'desc'});
    mainElem.appendChild(noticeFieldElem);
}
