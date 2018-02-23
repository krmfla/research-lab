var request = require("request");
var cheerio = require("cheerio");
var nodemailer = require('nodemailer');
var fs = require("fs");

//宣告發信物件
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'MAIL-ADDRESS',
        pass: 'YOUR-PASSWORD'
    }
});

function sendMail(contentText) {
    var options = {
        //寄件者
        from: 'GETDATA.SERVICE',
        //收件者
        to: 'MAIL-ADDRESS',
        cc: 'MAIL-ADDRESS',
        //主旨
        subject: '這是 node.js 發送的測試信件', // Subject line
        //純文字
        text: 'TEST', // plaintext body
        //嵌入 html 的內文
        html: contentText,
        //附件檔案
    };

    //發送信件方法
    transporter.sendMail(options, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('訊息發送: ' + info.response);
        }
    });
}



var getData = function() {
    request({
        url: "http://blog.infographics.tw",
        method: "GET"
    }, function(error, response, body) {
        if (error || !body) {
            return;
        }
        // 爬完網頁後要做的事情
        var $ = cheerio.load(body);
        var result = [];
        var titles = $("li.item h2");
        for (var i = 0; i < titles.length; i++) {
            result.push($(titles[i]).text());
        }
        console.log(result);
        sendMail(JSON.stringify(result));
    });
};

getData();
