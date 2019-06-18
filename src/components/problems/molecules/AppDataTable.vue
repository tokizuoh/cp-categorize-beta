<template>
  <p>
    <v-toolbar height="30px" flat>
      <v-icon>list</v-icon>
      <v-toolbar-title> {{ categoryName }} </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      hide-actions="true"
      :items="problems"
      class="elevation-1">
      <template v-slot:items="props">
        <!-- <tr @click="location.href=props.item.href"> -->
        <tr @click.right.prevent="say(1)"
            @click.left="jump(props.item.href)">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-left">{{ props.item.about }}</td>
          <td class="text-xs-left">{{ props.item.score }}</td>
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
            text: 'title',
            align: 'center',
            sortable: false,
            value: 'name',
          },
          { 
            text: 'about',
            align: 'center',
            sortable: false, 
            value: 'about' 
          },
          { 
            text: 'score',
            align: 'center',
            sortable: true, 
            value: 'score' 
          },
          { 
            text: 'intuition',
            align: 'center',
            sortable: true, 
            value: 'intuition' 
          }
        ],
      }
    },
    props: {
      categoryDetail: {
        type: String
      },
      categoryName: {
        type: Object
      },
      categoryTitle: {
        type: String
      },
      problems: {
        type: Object
      }
    },
    methods:{
      jump(a){
        window.open(a, '_blank')
      },
      say(a){
        alert(a)
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
