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
      categoryTitle: "Accumulate Sum",
      categoryDetail: "One Dimentional AccumulateSum, Two Dimentional AccumulateSum, One Dimentional imos",
      categoryName: []
    };
  },
  created() {
    let ASArray = [];
    data.map(category => {
      for (let key in category) {
        if (key == "AccumulateSum") {
          ASArray = category[key];
        }
      }
    });
    this.categoryName = ASArray;
  }
};
</script>
