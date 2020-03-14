<template lang="pug">
section
  h2 配布可能曲リスト
  el-table(:data="tableData1" style="width: 100%")
    el-table-column(type="expand")
      template(slot-scope="props")
        p(v-if="props.row.note") {{ props.row.note }}
        p 配信：{{ props.row.candl }}
        p(v-if="props.row.url") 視聴：
          a(:href="props.row.url" target="_blank" rel="noopener") {{ props.row.sitename }}
    el-table-column(label="曲名" prop="name")
    el-table-column(label="アーティスト" prop="artist")
</template>

<script>
export default {
  data() {
    return {
      tableData1: [{
        name: '惡の華―春日高男―',
        artist: '宇宙人・の子',
        note: 'アニメ「惡の華」OP',
        candl: 'あり',
        url: 'http://9129suppon.com/music/anison/28635',
        sitename: 'スッポン放送'
      }, {
        name: '惡の華―春日高男―',
        artist: '宇宙人・の子',
        note: 'アニメ「惡の華」OP',
        candl: 'あり',
        url: '',
        sitename: ''
      }, {
        name: '惡の華―春日高男―',
        artist: '宇宙人・の子',
        note: '',
        candl: 'あり',
        url: 'http://9129suppon.com/music/anison/87779',
        sitename: 'スッポン放送'
      }, {
        name: '惡の華―春日高男―',
        artist: '宇宙人・の子',
        note: 'アニメ「惡の華」OP',
        candl: 'あり',
        url: 'http://9129suppon.com/music/anison/87779',
        sitename: 'スッポン放送'
      }, {
        name: '惡の華―春日高男―',
        artist: '宇宙人・の子',
        note: 'アニメ「惡の華」OP',
        candl: 'あり',
        url: 'http://9129suppon.com/music/anison/87779',
        sitename: 'スッポン放送'
      }, {
        name: '惡の華―春日高男―',
        artist: '宇宙人・の子',
        note: 'アニメ「惡の華」OP',
        candl: 'あり',
        url: 'http://9129suppon.com/music/anison/87779',
        sitename: 'スッポン放送'
      }, {
        name: '惡の華―春日高男―',
        artist: '宇宙人・の子',
        note: 'アニメ「惡の華」OP',
        candl: 'あり',
        url: 'http://9129suppon.com/music/anison/87779',
        sitename: 'スッポン放送'
      }]
    }
  }
}
</script>