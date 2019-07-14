<template>
  <p>
    <v-toolbar color="#112B42"
               dark
               height="30px"
               flat>
      <v-icon>category</v-icon>
      <v-toolbar-title>Category</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table :headers="headers"
                  hide-actions="true"
                  :items="categories"
                  class="elevation-1">
      <template v-slot:items="props">
        <tr @click="pavePath(props.item)">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.about }}</td>
        </tr>
      </template>
    </v-data-table>
  </p>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'category',
            align: 'center',
            sortable: false,
            value: 'name',
            path: '/math'
          },
          { 
            text: 'about',
            align: 'center',
            sortable: false, 
            value: 'about' 
          }
        ],
        categories: [
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
        ],
      }
    },
    methods: {
      pavePath(a){
        const dict = {
          '数学': 'math',
          '全探索': 'bruteforce',
          'グラフ': 'graph',
          '累積和': 'accumlate_sum',
          '尺取法': 'two_pointer',
          '二分探索': 'binary_search',
          '動的計画法': 'dp',
          '半分全列挙': 'split_and_list'
        }
        this.$router.push(`/${dict[a.name]}`)
      }
    }
  }
</script>

<style>
.p {
    width: 85%;
    margin: auto;
    padding: 0.05em;
    border: 1px solid #ccc;
}
</style>
