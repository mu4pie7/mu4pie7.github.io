<template lang="pug">
aside
  h2 Link
  ul
    li
      a.tw(href="https://twitter.com/4piE_7" target="_blank" rel="noopener")
        img(src="/img/tw.png" alt="Twitter")
        span Twitter
    li
      a.yt(href="https://www.youtube.com/channel/UCYRQlMg_XdC0MasD3241ntw" target="_blank" rel="noopener")
        img(src="/img/yt.png" alt="YouTube")
        span YouTube
    li
      a.nc(href="http://www.nicovideo.jp/mylist/41584291" target="_blank" rel="noopener")
        img(src="/img/nc.png" alt="niconico")
        span niconico
    li
      a.sc(href="https://soundcloud.com/4pie_7" target="_blank" rel="noopener")
        img(src="/img/sc.png" alt="SoundCloud")
        span SoundCloud
</template>

<style scoped lang="stylus">
li
  list-style-type none
  margin 10px auto
a
  text-decoration none
  font-weight bold
  border-width 1px
  border-style solid
  border-radius 10px
a.tw
    background-color #1da1f2
    border-color #1da1f2
    color #fff
a.yt
    background-color #cd201f
    border-color #cd201f
    color #fff
a.cf
    background-color #000
    border-color #000
    color #fff
a.nc
    background-color #fff
    border-color #000
    color #000
a.sc
    background-color #f50
    border-color #f50
    color #fff

@media screen and (min-width: 768px)
  a
    display block
    padding 1em
  li:hover
    margin-left -10px
  img
    display: none

@media screen and (max-width: 767px)
  ul
    display table
    border-spacing 2px
    table-layout fixed
    margin 0 auto
    width 100%
  li
    display table-cell
  a
    display block
    background-size cover
    padding 5px
  img
    width 100%
    vertical-align middle
  span
    display none

</style>