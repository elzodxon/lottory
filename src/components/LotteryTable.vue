<template>
  <div>
    <table
      class="table-auto w-full bg-[url('https://media.istockphoto.com/id/1415858611/photo/wood-texture-for-furniture-or-interior-design-dark-wood-background.jpg?s=2048x2048&w=is&k=20&c=NUxMWigWKb78ptn9vGVCAHkZHpD2SYMbEgUui-ZDMTI=')] bg-cover rounded-md"
    >
      <thead>
        <tr>
          <th
            v-for="(cell, index) in rowData?.line1"
            :key="'line1-header-' + index"
            class="min-w-12 min-h-10 h-10 w-12"
          >
            <h3
              class="text-white cursor-pointer text-[18px] w-[110%] h-[100%] border rounded-md flex items-center justify-center"
              :class="{
                'active !bg-white cursor-not-allowed text-darkCream':
                  cell === rowData?.line1_sel[0],
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
            class="min-w-12 min-h-10 h-10 w-12"
          >
            <h3
              class="text-white cursor-pointer text-[18px] w-[110%] h-[100%] border rounded-md flex items-center justify-center"
              :class="{
                'active !bg-white cursor-not-allowed text-darkCream':
                  cell === rowData.line2_sel[0],
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
            class="min-w-12 min-h-10 h-10 w-12"
          >
            <h3
              class="text-white cursor-pointer text-[18px] w-[110%] h-[100%] border rounded-md flex items-center justify-center"
              :class="{
                'active !bg-white cursor-not-allowed text-darkCream':
                  cell === rowData.line3_sel[0],
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
};
</script>

<style scoped>
.active {
  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset;
}
</style>
