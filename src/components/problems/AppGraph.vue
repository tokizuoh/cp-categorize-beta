<template>
  <div>
    <app-jumbotron :categoryTitle="categoryTitle">
    </app-jumbotron>
    <app-data-table :categoryName="categoryName.bfs"
                    :problems="problems.bfs"> 
    </app-data-table>
    <br>
    <br>
    <app-data-table :categoryName="categoryName.dfs"
                    :problems="problems.dfs"> 
    </app-data-table>
    <br>
    <br>
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
        bfs: "BFS / Breadth First Search",
        dfs: "DFS / Depth First Search",
        dijkstra: "Dijkstra",
        unionfind: "UnionFind"
      },
      categoryTitle: "Graph",
      problems:{
        bfs: [
          {
            name: 'QUPC2018-C: Ito Campus',
            about: '',
            score: 400,
            href: 'https://atcoder.jp/contests/qupc2018/tasks/qupc2018_c'
          },
          {
            name: 'TPC追いコン-A: 不完全迷路',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/oidashi/tasks/oidashi_a'
          },
          {
            name: 'WUPC2012-C: 自宅からの脱出',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/wupc2012/tasks/wupc2012_3'
          },
          {
            name: 'AGC033-A: Darker and Darker',
            about: '',
            score: 300,
            href: 'https://atcoder.jp/contests/agc033/tasks/agc033_a'
          },
          {
            name: 'ARC031-B: 埋め立て',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/arc031/tasks/arc031_2'
          },
          {
            name: 'ABC088-D: Grid Repainting',
            about: '',
            score: 400,
            href: 'https://atcoder.jp/contests/abc088/tasks/abc088_d'
          },
          {
            name: 'ABC007-C: 幅優先探索',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc007/tasks/abc007_3'
          },
          {
            name: '第17回日本情報オリンピック予選-B: 双六 (Sugoroku)',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/joi2018yo/tasks/joi2018_yo_b'
          },
          {
            name: '第10回日本情報オリンピック予選-E: チーズ (Cheese)',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/joi2011yo/tasks/joi2011yo_e'
          }
        ],
        dfs: [
          {
            name: 'CPSCO2019 Session1-C: Coins',
            about: '',
            score: 300,
            href: 'https://atcoder.jp/contests/cpsco2019-s1/tasks/cpsco2019_s1_c'
          },
          {
            name: 'aising2019-C: Alternating Path',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/aising2019/tasks/aising2019_c'
          },
          {
            name: 'square869120Contest#1-C: お金の街(The Money Town)',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/s8pc-1/tasks/s8pc_1_c'
          },
          {
            name: 'ARC031-B: 埋め立て',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/arc031/tasks/arc031_2'
          },
          {
            name: 'ARC022-C: ロミオとジュリエット',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/arc022/tasks/arc022_3'
          },
          {
            name: 'ARC005-C: 器物損壊！高橋君',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/arc005/tasks/arc005_3'
          },
          {
            name: 'ABC126-E: 1 or 2',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc126/tasks/abc126_e'
          },
          {
            name: 'ABC126-D: Even Relation',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc126/tasks/abc126_d'
          },
          {
            name: 'ABC119-C: Synthetic Kadomatsu',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc119/tasks/abc119_c'
          },
          {
            name: 'ABC087-D: People on a Line',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc087/tasks/arc090_b'
          },
          {
            name: 'ABC075-C: Bridge',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc075/tasks/abc075_c'
          },
          {
            name: 'ABC070-D: Transit Tree Path',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc070/tasks/abc070_d'
          },
          {
            name: 'ABC067-D: Fennec VS. Snuke',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc067/tasks/arc078_b'
          },
          {
            name: 'ABC054-C: One-stroke Path',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc054/tasks/abc054_c'
          },
          {
            name: 'ABC015-C: 高橋くんのバグ探し',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc015/tasks/abc015_3'
          },
          {
            name: 'ATC001-A: 深さ優先探索',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/atc001/tasks/dfs_a'
          },
          {
            name: '第8回日本情報オリンピック予選-D: 薄氷渡り',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/joi2009yo/tasks/joi2009yo_d'
          }
        ],
        dijkstra: [
          {
            name: 'いろはちゃんコンテストDay1-I: リスのお仕事',
            about: '',
            score: 500,
            href: 'https://atcoder.jp/contests/iroha2019-day1/tasks/iroha2019_day1_i'
          },
          {
            name: 'Indeedなう（オープンコンテスト）-B: Office Ninja',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/indeednow-finala-open/tasks/indeednow_2015_finala_b'
          },
          {
            name: 'CODE FESTIVAL 2014 Easy-C: 身体バランス',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/code-festival-2014-morning-easy/tasks/code_festival_morning_easy_c'
          },
          {
            name: 'WUPC2012-E: 会場への道 (自力未AC)',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/wupc2012/tasks/wupc2012_5'
          },
          {
            name: 'ABC075-C: Bridge',
            about: '',
            score: 300,
            href: 'https://atcoder.jp/contests/abc075/tasks/abc075_c'
          },
          {
            name: 'ABC070-D: Transit Tree Path',
            about: '',
            score: 400,
            href: 'https://atcoder.jp/contests/abc070/tasks/abc070_d'
          },
          {
            name: 'ABC022-C: Blue Bird',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc022/tasks/abc022_c'
          },
          {
            name: 'ABC020-C: 壁抜け',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc020/tasks/abc020_c'
          },
          
        ],
        unionfind: [
          {
            name: 'diverta 2019 Programming Contest 2-B: Picking Up',
            about: '',
            score: 300,
            href: 'https://atcoder.jp/contests/diverta2019-2/tasks/diverta2019_2_b'
          },
          {
            name: 'CODE FESTIVAL 2016 Final-C: Interpretation',
            about: '',
            score: 400,
            href: 'https://atcoder.jp/contests/cf16-final-open/tasks/codefestival_2016_final_c'
          },
          {
            name: 'KUPC2012-C: ソーシャル',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/kupc2012/tasks/kupc2012_3'
          },
          {
            name: 'ARC056-B: 駐車場',
            about: '',
            score: 0,
            href: 'https://beta.atcoder.jp/contests/arc056/tasks/arc056_b'
          },
          {
            name: 'ARC037-B: バウムテスト',
            about: '',
            score: 0,
            href: 'https://beta.atcoder.jp/contests/arc037/tasks/arc037_b'
          },
          {
            name: 'ARC032-C: 道路工事',
            about: '',
            score: 0,
            href: 'https://beta.atcoder.jp/contests/arc032/tasks/arc032_2'
          },
          {
            name: 'ABC129-D: Lamp',
            about: '',
            score: 400,
            href: 'https://atcoder.jp/contests/abc129/tasks/abc129_d'
          },
          {
            name: 'ABC120-D: Decayed Bridges',
            about: '',
            score: 400,
            href: 'https://atcoder.jp/contests/abc120/tasks/abc120_d'
          },
          {
            name: 'ABC097-D: Equals',
            about: '',
            score: 400,
            href: 'https://beta.atcoder.jp/contests/abc097/tasks/arc097_b'
          },
          {
            name: 'ABC049-D: 連結 / Connectivity',
            about: '',
            score: 400,
            href: 'https://beta.atcoder.jp/contests/abc049/tasks/arc065_b'
          },
          {
            name: 'ABC040-D: 道路の老朽化対策について',
            about: '',
            score: 0,
            href: 'https://atcoder.jp/contests/abc040/tasks/abc040_d'
          },
          {
            name: 'ATC001-B: Union Find',
            about: '',
            score: 0,
            href: 'https://beta.atcoder.jp/contests/atc001/tasks/unionfind_a'
          },
        ]
      }
    }
  }
}
</script>

<style>

