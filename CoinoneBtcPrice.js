function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {

    if(msg == "비트코인"){

        let url = "https://api.coinone.co.kr/ticker?currency=btc"
        var data = org.jsoup.Jsoup.connect(url).ignoreContentType(true).get().text();
            data = JSON.parse(data);

        lastPrice = data.last
        replier.reply("비트코인은 현재 "+lastPrice+"원입니다.");
    }
}
