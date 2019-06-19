<template>
  <div>
    <app-jumbotron :categoryTitle="categoryTitle"></app-jumbotron>
    <div id="data">
      <app-data-table
        v-for="d in categoryName"
        :key="d.name"
        :categoryName="d.name"
        :problems="d.problems"
      ></app-data-table>
    </div>
  </div>
</template>

<script>
import AppDataTable from "./molecules/AppDataTable";
import AppJumbotron from "./molecules/AppJumbotron";
import { data } from "../../../problems_list/converted.json";
export default {
  components: {
    AppDataTable,
    AppJumbotron
  },
  data() {
    return {
      categoryTitle: "Graph",
      categoryName: []
    };
  },
  created() {
    let GraphArray = [];
    data.map(category => {
      for (let key in category) {
        if (key == "Graph") {
          GraphArray = category[key];
        }
      }
    });
    this.categoryName = GraphArray;
  }
};
</script>

<style>
