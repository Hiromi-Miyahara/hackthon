
window.onload = function() {
   Notification.requestPermission();
   setInterval(checkTime, 6000);    //現在10分ごとのプログラム、本番では6倍にすること
};
Notification.requestPermission(function(result) {
    if (result === 'denied') {
      alert('リクエスト結果：通知許可されませんでした');
    } else if (result === 'default') {
      alert('リクエスト結果：通知可能か不明です');
    } else if (result === 'granted') {
      alert('リクエスト結果：通知許可されました！！');
    }
  })
  var determinedtime = 22
const checkTime = function() {
    const currentTime = new Date();
    const hour = currentTime.getHours();
      if (hour ==determinedtime) {var greet = new Notification("Hello World")};
      greet.addEventListener('click',function(){
        window.open('https://www.youtube.com/watch?v=ufKn_OXBbYI');
      });

};


//データを取得に成功、それらと現在時刻の一致で通知を作成、
