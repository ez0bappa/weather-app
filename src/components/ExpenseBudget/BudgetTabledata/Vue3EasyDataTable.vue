<template>
  <EasyDataTable
    :headers="headers"
    :items="items"
  />

  <!-- <pre>{{ JSON.stringify(Vue3EasyDataTable, null, 2) }}</pre> -->
</template>

<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core";
import type { Header, Item } from "vue3-easy-data-table";

// const props = defineProps({
//   Vue3EasyDataTable: {
//     type: String,
//     default: ''
//   }
// })

export default defineComponent({
  props: {
    Vue3EasyDataTable: Array,
  },

  setup(props) {
    // console.log(props.Vue3EasyDataTable)

    // let result = props.Vue3EasyDataTable.filter(item => { item })
    // console.log(result)

    // computed: {
    //   props.Vue3EasyDataTable.filter(item => {
    //     console.log(item.key)
    //   })
    // }
    
    let date = computed => {
      props.Vue3EasyDataTable.filter(item => {
        console.log(item)
      })
    }

    const headers: Header[] = [
      { text: "Id", value: "id" },
      { text: "Expenses", value: "expenses", sortable: true },
      { text: "Date", value: "date", sortable: true },
      { text: "Category", value: "category", sortable: true }
    ];

    const items: Item[] = [
      { "id": "##", "expenses": "Curry", "date": 178, "category": 77},
      { "id": "##", "expenses": "James", "date": 180, "category": 75},
      { "id": "##", "expenses": "Jordan", "date": 181, "category": 73}
    ];

    return {
      headers,
      items
    };
  },
});
</script>