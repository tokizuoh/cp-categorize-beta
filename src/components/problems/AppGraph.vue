<template>
  <div>
    <app-category-title></app-category-title>
    <div id="data">
      <app-data-table v-for="d in categoryName"
                      :key="d.name"
                      :categoryName="d.fields"
                      :problems="d.problems">
      </app-data-table>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import AppCategoryTitle from "./../AppCategoryTitle";
import AppDataTable from "./molecules/AppDataTable";
import AppJumbotron from "./molecules/AppJumbotron";
import { data } from "../../../problems_list/converted.json";
export default {
  components: {
    AppCategoryTitle,
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
