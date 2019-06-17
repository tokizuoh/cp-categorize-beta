<template>
  <div>
    <app-jumbotron :categoryTitle="categoryTitle">
    </app-jumbotron>
    <app-data-table :categoryName="categoryName.dijkstra"
                    :problems="problems.dijkstra"> 
    </app-data-table>
    <br>
    <br>
    <app-data-table :categoryName="categoryName.unionfind"
                    :problems="problems.unionfind"> 
    </app-data-table>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import AppDataTable from "./molecules/AppDataTable"
import AppJumbotron from "./molecules/AppJumbotron"
export default {
  components: {
    AppDataTable,
    AppJumbotron
  },
  data () {
    return {
      categoryName: {
        dijkstra: "Dijkstra",
        unionfind: "UnionFind"
      },
      categoryTitle: "Graph",
      problems:{
        dijkstra: [
          {
            name: 'いろはちゃんコンテストDay1-I: リスのお仕事',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 500,
            href: 'https://atcoder.jp/contests/iroha2019-day1/tasks/iroha2019_day1_i'
          },
          {
            name: 'Indeedなう（オープンコンテスト）-B: Office Ninja',
            about: 'Uwaaaaaaaaaaaふぁふぁaaaa',
            score: 0

          },
          {
            name: 'CODE FESTIVAL 2014 Easy-C: 身体バランス',
            about: 'Uwaaaaaaaaaaaふぁふぁaaaa',
            score: 0
          },
          {
            name: 'WUPC2012-E: 会場への道 (自力未AC)',
            about: 'Uwaaaaaaaaaaaふぁふぁaaaa',
            score: 0
          },
          {
            name: 'ABC075-C: Bridge',
            about: 'Uwaaaaaaaaaaaふぁふぁaaaa',
            score: 300
          },
          {
            name: 'ABC070-D: Transit Tree Path',
            about: 'Uwaaaaaaaaaaaふぁふぁaaaa',
            score: 400

          },
          {
            name: 'ABC022-C: Blue Bird',
            about: 'Uwaaaaaaaaaaaふぁふぁaaaa',
            score: 0
          },
          {
            name: 'ABC020-C: 壁抜け',
            about: 'Uwaaaaaaaaaaaふぁふぁaaaa',
            score: 0
          },
          
        ],
        unionfind: [
          {
            name: 'diverta 2019 Programming Contest 2-B: Picking Up',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 300
          },
          {
            name: 'CODE FESTIVAL 2016 Final-C: Interpretation',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 400
          },
          {
            name: 'KUPC2012-C: ソーシャル',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 0
          },
          {
            name: 'ARC056-B: 駐車場',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 0
          },
          {
            name: 'ARC037-B: バウムテスト',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 0
          },
          {
            name: 'ARC032-C: 道路工事',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 0
          },
          {
            name: 'ABC129-D: Lamp',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 400
          },
          {
            name: 'ABC120-D: Decayed Bridges',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 400
          },
          {
            name: 'ABC097-D: Equals',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 400
          },
          {
            name: 'ABC049-D: 連結 / Connectivity',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 400
          },
          {
            name: 'ABC040-D: 道路の老朽化対策について',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 0
          },
          {
            name: 'ATC001-B: Union Find',
            about: 'Uwaaaaaaaaaaaaaaa',
            score: 0
          },

        ]
      }
    }
  }
}
</script>

<style>

