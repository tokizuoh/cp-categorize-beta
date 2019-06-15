<template>
  <div>
    <app-jumbotron :categoryTitle="categoryTitle">
    </app-jumbotron>
    <app-data-table categoryName="UnionFind"
                    :problems="problems"> 
    </app-data-table>
    <br>
    <br>
    <app-data-table categoryName="Dijkstra"
                    :problems="problems"> 
    </app-data-table>
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
      categoryName: [
        {
          dijkstra: "Dijkstra",
          unionfind: "UnionFind"
        }
      ],
      categoryTitle: "Graph",
      problems: [
        {
          name: 'Hoge',
          about: 'Uwaaa'
        },
      ]
    }
  }
}
</script>

<style>

