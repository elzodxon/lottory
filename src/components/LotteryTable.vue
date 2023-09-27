<template>
  <div>
    <div class="text-white text-l font-bold border-amber-900 border-solid">
      Ticket {{ rowData.id }}
    </div>
    <table class="table-auto w-full bg-cover rounded-md">
      <thead>
        <tr>
          <th
            v-for="(cell, index) in rowData?.line1"
            :key="'line1-header-' + index"
            class="min-w-12 min-h-12 h-12 w-12"
          >
            <h3
              class="text-white cursor-pointer text-[18px] w-[110%] h-[100%] border rounded-md flex items-center justify-center"
              :class="{
                'active !bg-white cursor-not-allowed text-darkCream':
                  is_selected(cell, rowData.line1_sel),
              }"
            >
              {{ cell }}
            </h3>
          </th>
        </tr>
        <tr>
          <th
            v-for="(cell, index) in rowData?.line2"
            :key="'line2-header-' + index"
            class="min-w-12 min-h-12 h-12 w-12"
          >
            <h3
              class="text-white cursor-pointer text-[18px] w-[110%] h-[100%] border rounded-md flex items-center justify-center"
              :class="{
                'active !bg-white cursor-not-allowed text-darkCream':
                  is_selected(cell, rowData.line2_sel),
              }"
            >
              {{ cell }}
            </h3>
          </th>
        </tr>
        <tr>
          <th
            v-for="(cell, index) in rowData?.line3"
            :key="'line2-header-' + index"
            class="min-w-12 min-h-12 h-12 w-12"
          >
            <h3
              class="text-white cursor-pointer text-[18px] w-[110%] h-[100%] border rounded-md flex items-center justify-center"
              :class="{
                'active !bg-white cursor-not-allowed text-darkCream':
                  is_selected(cell, rowData.line3_sel),
              }"
            >
              {{ cell }}
            </h3>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    rowData: Object,
  },
  methods: {
    is_selected(cell, selected_nums) {
      if (selected_nums.indexOf(cell)!==-1){

        return true
      } 
      else{
        return false
      }
    }
}
};
</script>

<style scoped>
.active {
  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset;
}
.table-auto {
  background-image: url("/img/table-bg.png");
}
</style>
