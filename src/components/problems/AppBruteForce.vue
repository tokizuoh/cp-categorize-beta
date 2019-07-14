<template>
  <div>
    <app-category-title  :categoryTitle="categoryTitle"
                         :categoryDetail="categoryDetail">
    </app-category-title>
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
import { data } from "../../../problems_list/converted.json";
export default {
  components: {
    AppCategoryTitle,
    AppDataTable
  },
  data() {
    return {
      categoryTitle: "Brute Force",
      categoryDetail: "Bit Brute Force, ...",
      categoryName: []
    };
  },
  created() {
    let BFArray = [];
    data.map(category => {
      for (let key in category) {
        if (key == "BruteForce") {
          BFArray = category[key];
        }
      }
    });
    this.categoryName = BFArray;
  }
};
</script>
