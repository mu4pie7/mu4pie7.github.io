<template lang="pug">
section
  h2 配布可能曲リスト
  h3 原曲再現系
  el-table(:data="tableData1" height="400" style="width: 100%" @row-click="rowClicked1" ref="tableData1" class="clickable-rows")
    el-table-column(type="expand")
      template(slot-scope="props")
        p(v-if="props.row.note") {{ props.row.note }}
        p(v-if="props.row.candl") 配信：あり
        p(v-else) 配信：なし
        p(v-if="props.row.url")
          a(:href="props.row.url" target="_blank" rel="noopener") 試聴
    el-table-column(label="曲名" prop="name")
    el-table-column(label="アーティスト" prop="artist" sortable)
  h3 アレンジ
  el-table(:data="tableData2" style="width: 100%" @row-click="rowClicked2" ref="tableData2" class="clickable-rows")
    el-table-column(type="expand")
      template(slot-scope="props")
        p(v-if="props.row.note") {{ props.row.note }}
        p(v-if="props.row.candl") 配信：あり
        p(v-else) 配信：なし
        p(v-if="props.row.url")
          a(:href="props.row.url" target="_blank" rel="noopener") 試聴
    el-table-column(label="曲名" prop="name")
    el-table-column(label="アーティスト" prop="artist")
  h3 オリジナル
  el-table(:data="tableData3" height="400" style="width: 100%" @row-click="rowClicked3" ref="tableData3" class="clickable-rows")
    el-table-column(type="expand")
      template(slot-scope="props")
        p(v-if="props.row.note") {{ props.row.note }}
        p(v-if="props.row.candl") 配信：あり
        p(v-else) 配信：なし
        p(v-if="props.row.url")
          a(:href="props.row.url" target="_blank" rel="noopener") 試聴
    el-table-column(label="曲名" prop="name")
    el-table-column(label="テーマ" prop="theme" sortable)
</template>

<style lang="stylus">
.clickable-rows
  color #000
  tbody tr td
    cursor pointer
  .el-table__expanded-cell
    cursor default
p
  line-height 2em
</style>

<script>

export default {
  methods: {
    rowClicked1(row) {
      this.$refs.tableData1.toggleRowExpansion(row);
    },
    rowClicked2(row) {
      this.$refs.tableData2.toggleRowExpansion(row);
    },
    rowClicked3(row) {
      this.$refs.tableData3.toggleRowExpansion(row);
    }
  },
  data() {
    return {
      tableData1: [{
        name: '惡の華―春日高男―',
        artist: '宇宙人・の子',
        note: 'アニメ「惡の華」OP',
        candl: true,
        url: 'http://9129suppon.com/music/anison/28635'
      }, {
        name: '惡の華―群馬県桐生市―',
        artist: '宇宙人',
        note: 'アニメ「惡の華」OP',
        candl: true,
        url: 'http://9129suppon.com/music/anison/89963'
      }, {
        name: '惡の華―仲村佐和―',
        artist: '宇宙人・後藤まりこ',
        note: 'アニメ「惡の華」OP',
        candl: true,
        url: 'http://9129suppon.com/music/anison/87779'
      }, {
        name: '明日へ',
        artist: '富岡博志',
        note: '合唱曲',
        candl: true,
        url: 'http://9129suppon.com/music/non_category/31995'
      }, {
        name: '一番街コスモナウト',
        artist: 'sasakure.UK',
        candl: false,
        note: '',
        url: 'http://www.nicovideo.jp/watch/sm29758639'
      }, {
        name: '宇宙を定める法則の彼方',
        artist: 'YMCK',
        candl: false,
        note: '',
        url: 'https://creofuga.net/audios/143090'
      }, {
        name: '大きな玉ねぎの下で',
        artist: '爆風スランプ',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/ballade/77957'
      }, {
        name: '怪獣のバラード',
        artist: '東海林修',
        candl: true,
        note: '合唱曲(橋本祥路 編)',
        url: 'http://9129suppon.com/music/non_category/27964'
      }, {
        name: 'カルメンより 第1幕前奏曲',
        artist: 'Bizet',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/classic/15890'
      }, {
        name: 'カレーだよ！',
        artist: 'YMCK',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/93831'
      }, {
        name: '月光',
        artist: '爆風スランプ',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/non_category/59255'
      }, {
        name: '神話',
        artist: '爆風スランプ',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/37008'
      }, {
        name: 'スカート革命',
        artist: 'アーバンギャルド',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/55221'
      }, {
        name: 'ズッ友',
        artist: '神聖かまってちゃん',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/rock/55611'
      }, {
        name: 'それから',
        artist: '爆風スランプ',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/13429'
      }, {
        name: '天文学的なその数から',
        artist: '神聖かまってちゃん',
        candl: false,
        note: '',
        url: 'https://creofuga.net/audios/144909'
      }, {
        name: '都会のアリス',
        artist: 'アーバンギャルド',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/72711'
      }, {
        name: '友達の詩',
        artist: '中村 中',
        candl: false,
        note: '',
        url: 'https://creofuga.net/audios/116585'
      }, {
        name: 'はじまり',
        artist: '木下牧子',
        candl: true,
        note: '合唱曲',
        url: 'http://9129suppon.com/music/non_category/40945'
      }, {
        name: 'バスタブカーブ',
        artist: 'プラグラムハッチ',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/85469'
      }, {
        name: 'はるのはるか',
        artist: 'sasakure.UK',
        candl: false,
        note: '',
        url: 'https://creofuga.net/audios/138003'
      }, {
        name: 'ヒカリノアトリエ',
        artist: 'Mr.Children',
        candl: false,
        note: '',
        url: 'https://creofuga.net/audios/117960'
      }, {
        name: 'フェアルーン2 アオの神殿',
        artist: 'ユウラボ',
        candl: false,
        note: 'ゲーム「フェアルーン2」BGM',
        url: 'https://soundcloud.com/4pie_7/f2ao'
      }, {
        name: 'フェアルーン2 ミドリの草原',
        artist: 'ユウラボ',
        candl: false,
        note: 'ゲーム「フェアルーン2」BGM',
        url: 'https://soundcloud.com/4pie_7/f2midori'
      }, {
        name: 'ブライアンの休日',
        artist: '内藤淳一',
        candl: false,
        note: '吹奏楽曲',
        url: ''
      }, {
        name: 'ヘビーローテーション',
        artist: 'AKB48',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/idol/40488'
      }, {
        name: 'マイティボンジャック',
        artist: 'ヒゲドライバー',
        candl: false,
        note: '',
        url: 'https://creofuga.net/audios/150949'
      }, {
        name: 'マリィの世界',
        artist: 'sasakure.UK',
        candl: false,
        note: '',
        url: 'https://creofuga.net/audios/127997'
      }, {
        name: '回ル想ヒ',
        artist: 'sasakure.UK',
        candl: false,
        note: '',
        url: ''
      }, {
        name: '耳たぶ',
        artist: '爆風スランプ',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/folk/31127'
      }, {
        name: '無理だ！決定盤',
        artist: '爆風スランプ',
        candl: false,
        note: '',
        url: 'https://creofuga.net/audios/94529'
      }, {
        name: 'ロックンロールは鳴り止まないっ',
        artist: '神聖かまってちゃん',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/53549'
      }, {
        name: '割る！',
        artist: '岡崎体育÷JINRO',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/102452'
      }, {
        name: 'BEAT PICT',
        artist: 'ハム',
        candl: false,
        note: 'アプリ「ドットピクト！」ミニゲーム',
        url: ''
      }, {
        name: 'Deep in Abyss',
        artist: 'リコ(富田美憂)\nレグ(伊瀬茉莉也)',
        candl: false,
        note: 'アニメ「メイドインアビス」OP',
        url: 'https://creofuga.net/audios/133728'
      }, {
        name: 'Dogsong',
        artist: 'toby fox',
        candl: false,
        note: 'ゲーム「UNDERTALE」BGM',
        url: 'https://soundcloud.com/4pie_7/pdogsongundertale'
      }, {
        name: 'FLOATED CALM',
        artist: 'Daisuke Minamizawa',
        candl: false,
        note: 'ゲーム「CHUNISM」（原曲:パカパカパッション）',
        url: 'https://creofuga.net/audios/149691'
      }, {
        name: 'Heartache',
        artist: 'toby fox',
        candl: false,
        note: 'ゲーム「UNDERTALE」BGM',
        url: 'https://soundcloud.com/4pie_7/heartachebbp'
      }, {
        name: 'マイブラスター（It’s my blaster!）［sasakure.UK Remix］',
        artist: 'sasakure.UK',
        candl: false,
        note: 'ゲーム「ケロブラスター」BGM リミックス版',
        url: 'https://creofuga.net/audios/150129'
      }, {
        name: 'musicpoolに溺れたい',
        artist: 'プラグラムハッチ',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/90675'
      }, {
        name: 'Once Upon a Time',
        artist: 'toby fox',
        candl: false,
        note: 'ゲーム「UNDERTALE」BGM',
        url: 'https://soundcloud.com/4pie_7/ponce-upon-a-timeundertale'
      }, {
        name: 'Potential for Anything',
        artist: 'Souleye',
        candl: false,
        note: 'ゲーム「VVVVVV」BGM',
        url: 'https://youtu.be/ZxEs4uvhSeg'
      }, {
        name: 'Red Angel',
        artist: 'ポケットビスケッツ',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/dorama/89625'
      }, {
        name: 'Runner',
        artist: '爆風スランプ',
        candl: true,
        note: '作者がしもべツール',
        url: 'http://9129suppon.com/music/jpop/10518'
      }, {
        name: 'SEDONA',
        artist: 'Steven Reinike',
        candl: false,
        note: '吹奏楽曲',
        url: ''
      }, {
        name: 'Shangri-La',
        artist: '電気グルーヴ',
        candl: false,
        note: '',
        url: ''
      }, {
        name: 'The Forest of Awakening',
        artist: 'みそか',
        candl: false,
        note: 'ゲーム「神巫女」BGM',
        url: 'https://creofuga.net/audios/168137'
      }, {
        name: 'ukigumo',
        artist: 'ヒゲドライバー',
        candl: false,
        note: '10th Anniversary Best 版',
        url: 'https://creofuga.net/audios/168006'
      }, {
        name: 'You Can Be a Star',
        artist: 'YMCK',
        candl: true,
        note: '',
        url: 'http://9129suppon.com/music/jpop/87122'
      }, {
        name: 'ひっさつのいちげき！',
        artist: '作曲者不明',
        candl: true,
        note: 'メイドインワリオ（公式）銅賞',
        url: 'http://9129suppon.com/music/non_category/108811'
      }],
      tableData2: [{
        name: 'ドランシア メドレー',
        artist: 'ユウラボ',
        candl: false,
        note: '',
        url: 'https://soundcloud.com/4pie_7/drancia'
      }, {
        name: 'Spear of Justice 吹奏楽風',
        artist: 'toby fox',
        candl: false,
        note: 'ゲーム「UNDERTALE」BGM',
        url: 'https://soundcloud.com/4pie_7/sojbbp'
      }, {
        name: 'Banbard Bit Pop',
        artist: 'もぜ',
        candl: true,
        note: 'バンバードRemixコンテスト（公式）入賞',
        url: 'https://youtu.be/0FaaO42UWtE'
      }, {
        name: 'ピコピコこそわが喜び',
        artist: 'J.S.Bach',
        candl: true,
        note: 'クリスマスRemix（公式）優秀賞',
        url: 'http://9129suppon.com/music/non_category/100151'
      }],
      tableData3: [{
        name: '想像ラジオジングル',
        theme: '想像ラジオジングル（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/GTpmVgnW93E'
      }, {
        name: 'ニンドリ',
        theme: 'ニンドリチャンネルOP（公式）',
        candl: false,
        note: 'グランプリ',
        url: 'https://youtu.be/hbBNzp71gow'
      }, {
        name: 'ゆったりきいてね',
        theme: 'ANSジングル（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/gAo_Ia6xmtQ'
      }, {
        name: 'けせないデータ',
        theme: '8bit歌謡曲（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/BlGoC4dPVkU'
      }, {
        name: 'さすらいのゲーム・ボーイ',
        theme: '8bit歌謡曲（公式）',
        candl: true,
        note: 'グランプリ',
        url: 'http://9129suppon.com/music/non_category/90884'
      }, {
        name: 'inversion',
        theme: 'しもべ名鑑',
        candl: false,
        note: '',
        url: 'https://soundcloud.com/4pie_7/noisrevni'
      }, {
        name: '憂体離脱',
        theme: 'SHIMOBE COMPOSITION',
        candl: false,
        note: '',
        url: 'https://soundcloud.com/4pie_7/zvsemzowckrf'
      }, {
        name: 'レーシング（ミニゲームBGM）',
        theme: 'FCゲー',
        candl: false,
        note: '',
        url: 'https://youtu.be/i0F10Mfn4Fk'
      }, {
        name: '有明（OPデモ）',
        theme: '架空のRPG（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/-rqbRHh3toE'
      }, {
        name: '島を見おろして（飛行中）',
        theme: '架空のRPG（公式）',
        candl: true,
        note: '入賞&CD収録',
        url: 'https://youtu.be/HpGLCCpvV-E'
      }, {
        name: 'Say Say Do Do!',
        theme: 'アイカレ（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/KXW3cpKbNb8'
      }, {
        name: '風をよぶ笛',
        theme: 'ヒーリング（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/t4toNcHeZMU'
      }, {
        name: 'Rainbow Wedding',
        theme: 'ウェディングソング（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/XBGH0srzcIU'
      }, {
        name: 'とわに',
        theme: 'ウェディングソング（公式）',
        note: 'みゅー＆みすと',
        url: 'https://youtu.be/wOQQgsEdJb0'
      }, {
        name: 'ちくわぶ',
        theme: 'おでん',
        candl: false,
        note: '',
        url: 'https://soundcloud.com/4pie_7/brlhbf55pqg5'
      }, {
        name: 'RPG こびとのまち',
        theme: '架空ゲーム（公式）',
        candl: true,
        note: 'グランプリ',
        url: 'http://9129suppon.com/music/non_category/84414'
      }, {
        name: 'RPG 森',
        theme: '架空ゲーム（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/MSz_b-qt38I'
      }, {
        name: '未来へのスタート',
        theme: '合唱曲（公式）',
        candl: false,
        note: 'みゅー&ネッシュ',
        url: 'https://youtu.be/LdbHNGGXB6c'
      }, {
        name: 'インスタント・ワルツ',
        theme: 'カップめん3分クッキング（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/GZ-OP5zwb2c'
      }, {
        name: 'そらのララバイ',
        theme: 'ゲロルちゃんED（公式）',
        candl: false,
        note: '何話かで使っていただいた',
        url: 'https://youtu.be/1gMQ3bhDUZA'
      }, {
        name: 'あきのざわめき',
        theme: '紅葉（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/5GdyyvYrNmg'
      }, {
        name: 'はるかぜのたびだち',
        theme: 'さくらソング（公式）',
        candl: false,
        url: 'https://youtu.be/0LiMhmGYGek'
      }, {
        name: 'サンタサンバ',
        theme: 'サンタクロース・サンバ（公式）',
        candl: true,
        note: 'グランプリ',
        url: 'http://9129suppon.com/music/non_category/63501'
      }, {
        name: '再興のための序曲',
        theme: '吹奏楽（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/AaVwChNFCUo'
      }, {
        name: 'すきにさせてよ',
        theme: 'ダーククリスマス（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/v4WA0c2DVVQ'
      }, {
        name: 'バウムクーヘンのあなにすみたい@17',
        theme: 'だれおり',
        candl: false,
        note: '',
        url: 'https://www.youtube.com/watch?v=yWDvbmFzWgY'
      }, {
        name: 'JULY@29',
        theme: 'だれおり2',
        candl: false,
        note: '',
        url: 'https://www.youtube.com/watch?v=rKWhEh3Tybo'
      }, {
        name: 'とびきりサマーチューン！@33',
        theme: 'だれおり3',
        candl: false,
        note: '',
        url: 'https://youtu.be/eB2ylhhrPNk'
      }, {
        name: '月明かりのhighway',
        theme: 'ドライブ（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/tDgossYGH-o'
      }, {
        name: '午後8時、雨宿り。',
        theme: 'バーバラード（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/OISoIJtBZnE'
      }, {
        name: '混声合唱とピアノのための パパとママ',
        theme: 'パパとママ（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/QpOYkFCRH7g'
      }, {
        name: '(ふ)しあわせなふたり',
        theme: 'ハロウィン（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/0rac2_EiXhA'
      }, {
        name: 'おひなさま宣言',
        theme: 'エレクトリカルひなまつり（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/kCFsgw_c3E8'
      }, {
        name: 'ゆきふるゆめ',
        theme: 'ホワイトクリスマス（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/vG6-3tAScrk'
      }, {
        name: 'でんぱのうみをゆく',
        theme: 'ライララジオ（公式）',
        candl: false,
        note: '優秀賞',
        url: 'https://youtu.be/PoXxN4Zh_r0'
      }, {
        name: 'Gute Nacht',
        theme: 'ゲロルちゃんBGM（公式）',
        candl: false,
        note: '何話かで使っていただいた',
        url: 'https://youtu.be/k6pbpGDtjg4'
      }, {
        name: 'あなたのとなりで',
        theme: 'ラピス（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/njHXvbpcuCY'
      }, {
        name: '龍虎相搏つ',
        theme: '和ロック（公式）',
        candl: false,
        note: '',
        url: 'https://youtu.be/39f_Be-St-Y'
      }]
    }
  }
}
</script>