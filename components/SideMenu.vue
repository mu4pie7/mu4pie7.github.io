<template lang="pug">
aside
  h2.ttl_2 Link
  ul
    li
      n-link.tw(to="https://twitter.com/4piE_7" target="_blank" rel="noopener")
        img(src="/img/tw.png" alt="Twitter")
        span Twitter
    li
      n-link.yt(to="https://www.youtube.com/playlist?list=PL5Uku-bQd6ZkON1DDkNYeyLkQsmS13vdw" target="_blank" rel="noopener")
        img(src="/img/yt.png" alt="YouTube")
        span YouTube
    li
      n-link.cf(to="https://creofuga.net/4pie-7" target="_blank" rel="noopener")
        img(src="/img/cf.png" alt="CREOFUGA")
        span CREOFUGA
    li
      n-link.nc(to="http://www.nicovideo.jp/mylist/41584291" target="_blank" rel="noopener")
        img(src="/img/nc.png" alt="niconico")
        span niconico
    li
      n-link.sc(to="https://soundcloud.com/4pie_7" target="_blank" rel="noopener")
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