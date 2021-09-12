
window.onload = function() {
  Notification.requestPermission();
   setInterval(checkTime, 3600000);    //現在10分ごとのプログラム、本番では6倍にすること
};

const checkTime = function() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
      if (hour ==18) {var greet = new Notification("こんにちは、今日は問題解いたかな？")};
      greet.addEventListener('click',function(){
        window.open('https://www.youtube.com/watch?v=ufKn_OXBbYI');
      });

};


//データを取得に成功、それらと現在時刻の一致で通知を作成、
