<template lang="pug">
  div
    Header
    .container
      .main
        nuxt
      SideMenu
    Footer
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import SideMenu from '~/components/SideMenu.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    SideMenu,
    Footer
  }
}
</script>

<style lang="stylus">
*
  margin 0
  padding 0

.container
  margin 0 auto
  padding 20px
  max-width 900px

h2
  font-weight bold
  font-size 15px
  border-style solid
  border-width 1px 1px 1px 5px
  border-color #eee #ddd #eee #ff6
  padding 0.5em 1em
  margin 2em 0 1em -10px
  background-color #fff
h3
  font-weight bold
  font-size 14px
  border-bottom 1px dashed #aaa
  padding 0.5em 1em
  margin 2em 0

@media screen and (min-width: 768px)
  .main
    display block
    vertical-align top
    width 100%
    margin-right -300px
    float left
    > div
      margin-right 300px
    section
      margin-right 300px
  aside
    display block
    vertical-align top
    width 250px
    float right
  footer
    clear both

</style>