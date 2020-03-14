<template lang="pug">
section
  h2 Profile
  p 音楽とゲームを趣味にひっそり生きています
  p
    a(href="https://www.nintendo.co.jp/3ds/anej/" target="_blank" rel="noopener") 「バンブラP」
    | で投稿しもべ・作曲しもべとして活動していました。
    br
    | 今も時々耳コピや作曲をします。

  h2 バンブラ的略歴
  dl
    dt 20XX年(忘れた)
    dd 作曲のためバンブラDXを購入
    dt 2013年11月
    dd 作曲体験版「しもべツール」を配信日にDL
    dd DL版を発売日に購入
    dd はじめての耳コピ配信
    dt 2014年8月
    dd 
      a(href="http://ch.nicovideo.jp/nindori/blomaga/ar611678" target="_blank" rel="noopener") 「ニンドリチャンネル」オープニングテーマ
      | 採用
    dt 2014年11月~
    dd
      a(href="https://www.youtube.com/watch?v=U6voRYegHjM" target="_blank" rel="noopener") 非公式企画「SHIMOBE COMPOSITION」
      | 参加(Disc2)
    dt 2014年12月
    dd
      a(href="http://9129suppon.com/551/" target="_blank" rel="noopener") 「サンタクロース・サンバ」
      | グランプリ
    dt 2015年11月~
    dd
      a(href="https://www.youtube.com/watch?v=IDazHS8aPhE" target="_blank" rel="noopener") 非公式企画「しもべ名鑑」
      | 参加(Disk2)
    dt 2015年12月
    dd
      a(href="http://9129suppon.com/1197/" target="_blank" rel="noopener") 「架空のゲームソング」
      | RPG部門グランプリ(別名義)
    dt 2016年2月
    dd
      a(href="http://lineblog.me/lylaboops/archives/54359563.html" target="_blank" rel="noopener") FMブルー湘南「LYLA BOOPSのThe Sunlight Comes」ジングル
      | 優秀作品
    dt 2016年5月
    dd
      a(href="http://9129suppon.com/1495/" target="_blank" rel="noopener") 「8bit昭和歌謡」
      | グランプリ
    dt 2016年12月
    dd
      a(href="http://9129suppon.com/1939/" target="_blank" rel="noopener") 「クリスマスミュージック・リミックス」
      | クラシック部門優秀賞
    dt 2017年7月
    dd
      a(href="http://9129suppon.com/2226/" target="_blank" rel="noopener") 「架空のＲＰＧ『ＴＷＩＮＨＡＤＥＳ－無限遠の記憶迷宮－』」
      | 入賞
</template>

<style scoped lang="stylus">
p
  margin-bottom 1em
dt
  margin-top 0.5em
dd
  display list-item
  list-style-type circle
  list-style-position inside
  padding-left 1em
</style>

<script>
export default {
  head () {
    return {
      title: 'プロフィール | みゅーさんのぺーじ',
      meta: [
        { hid: 'description', name: 'description', content: 'みゅーさんがバンブラでやってきたことです。' }
      ]
    }
  }
}
</script>