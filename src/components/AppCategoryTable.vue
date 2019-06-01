<template>
  <p>
    <v-toolbar height="30px" flat>
      <v-icon>category</v-icon>
      <v-toolbar-title>Category</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :rows-per-page-items="hogehoge"
      class="elevation-1">
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-left">{{ props.item.about }}</td>
        <td class="text-xs-left">{{ props.item.problems }}</td>
      </template>
    </v-data-table>
  </p>
</template>

<script>
  export default {
    data () {
      return {
        hogehoge: [
            10, 20, 30
        ],
        headers: [
          {
            text: 'category',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { 
            text: 'about',
            align: 'center',
            sortable: false, 
            value: 'about' 
          },
          {
            text: 'Problems',
            align: 'center',
            value: 'problems',
          }
        ],
        desserts: [
          {
            name: '数学',
            about: '約数, 素数, 最大公約数, 最小公倍数, 組み合わせ',
            problems: 10
          },
          {
            name: '全探索',
            about: '計算量を落とす全探索, bit全探索',
            problems: 10
          },
          {
            name: 'グラフ',
            about: 'BFS, DFS, Union Find, Warshall Floyd, Dijkstra, ...',
            problems: 10
          },
          {
            name: '累積和',
            about: '累積和, imos法',
            problems: 10
          },
          {
            name: '尺取法',
            problems: 10
          },
          {
            name: '二分探索',
            problems: 10
          },
          {
            name: '動的計画法',
            problems: 10
          },
          {
            name: '半分全列挙',
            problems: 10
          },
        ]
      }
    }
  }
</script>

<style>
p {
    width: 85%;
    margin: auto;
}
</style>
