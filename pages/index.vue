<template lang="pug">
section
  h2 Menu
  dl
    dt
      n-link(to="/profile") プロフィール
    dd いろんなことがありました
    dt
      n-link(to="/offlist") 配布可能曲リスト
    dd バンブラオフ用の曲リストです
    dt
      a(href="https://note.mu/mu4pie_7" target="_blank" rel="noopener") 不定期ブログ
    dd noteになりました
  h2 New!
  a.twitter-timeline(data-lang="ja" data-width="600" data-height="800" href="https://twitter.com/info_myu?ref_src=twsrc%5Etfw") Tweets by info_myu
  script(async src="https://platform.twitter.com/widgets.js" charset="utf-8")
</template>

<style scoped lang="stylus">
dt
  border-top 2px dotted #ddd
  border-bottom 2px dotted #ddd
dt:hover
  background-color #eee

dd
  padding 0.5em 0 0.5em 2em
dd:last-child
  border-bottom 2px dotted #ddd

a
  text-decoration none
  color #666
  font-weight bold
  display inline-block
  padding 0.5em 3%
  width 94%
</style>

<script>
export default {
  head () {
    return {
      title: 'みゅーさんのぺーじ',
      meta: [
        { hid: 'description', name: 'description', content: 'バーバラさまのしもべ、みゅーさんのページです。' }
      ]
    }
  }
}
</script>