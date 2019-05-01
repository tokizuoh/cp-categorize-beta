<template>
  <v-expansion-panel>
    <v-expansion-panel-content
    v-for="genre in genres"
    :key="genres"
    >
    <template v-slot:header>
        <div>{{ genre.genre }}</div>
    </template>
    <v-card>
        <!-- <v-card-text class="grey lighten-3">L</v-card-text> -->
        <v-card-text class="grey lighten-3">{{ genre.description }}</v-card-text>
    </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  
</template>

<script>
export default {
  name: 'list',
  data() {
    return {
        genres: [
            {
                genre: '数学', 
                description: '約数, 素数, 最大公約数, 最小公倍数'
            },
            {
                genre: '全探索',
                description: '計算量を落とす全探索, bit全探索'
            },
            {
                genre: 'グラフ',
                description: '幅優先探索, 深さ優先探索, Union Find, Warshall Floyd, Dijkstra, ...'
            },
            {
                genre: '累積和',
                description: '一次元累積和, 二次元累積和, imos法'
            },
            {
                genre: '尺取法',
                description: '尺取法'
            },
            {
                genre: '二分探索',
                description: '二分探索'
            },
            {
                genre: '動的計画法',
                description: '動的計画法'
            },
            {
                genre: '半分全列挙',
                description: '半分全列挙'
            },
            {
                genre: 'その他',
                description: '繰り返し二乗法, 排他的論理和, 中央値系'
            }
        ],
    };
  }
}
</script>