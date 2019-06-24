<template>
  <div class="entire-datatable">
    <v-toolbar flat
               height="30px">
      <v-icon>
        list
      </v-icon>
      <v-toolbar-title>
        {{ categoryName }}
      </v-toolbar-title>
      <v-spacer>
      </v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      </v-toolbar-items>
    </v-toolbar>
    <v-data-table :headers="headers"
                  hide-actions
                  :items="problems"
                  class="elevation-1">
      <template slot="headerCell"
                slot-scope="props">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on">
              {{ props.header.text }}
            </span>
          </template>
          <span>
            {{ props.header.detail }}
          </span>
        </v-tooltip>
      </template>
        <template v-slot:items="props">
          <tr @click.right.prevent="say(1)"
              @click.left="jump(props.item.href)">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">
              {{ props.item.score }}
            </td>
            <td class="text-xs-left">
              {{ props.item.intuition }}
            </td>
          </tr>
        </template>
    </v-data-table>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'title',
            align: 'center',
            sortable: true,
            value: 'name',
            detail: '[ コンテスト名 ] - [ ID ] : [ 問題名 ]'
          },
          { 
            text: 'score',
            align: 'center',
            sortable: true, 
            value: 'score',
            detail: '配点 (無記載, 特殊な場合は0)'
          },
          { 
            text: 'intuition',
            align: 'center',
            sortable: true, 
            value: 'intuition',
            detail: '作者体感配点 (AtCoder配点基準)'
          }
        ],
      }
    },
    props: {
      categoryDetail: {
        type: String
      },
      categoryName: {
        type: String
      },
      categoryTitle: {
        type: String
      },
      problems: {
        type: Array
      }
    },
    pagination: {},
    methods:{
      jump(a){
        window.open(a, '_blank')
      },
      say(a){
        alert(a)
      }
    },
  }
</script>

<style>
.entire-datatable {
  width: 85%;
  margin: auto;
}
</style>
