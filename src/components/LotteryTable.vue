<template>
  <div>
    <table class="table-auto mb-5 bg-white border-2 border-creamy">
      <thead>
        <tr>
          <th
            v-for="(cell, index) in rowData?.line1"
            :key="'line1-header-' + index"
            class="border p-2 w-12 h-12"
            :class="{
              'bg-creamy !text-white': cell === rowData?.line1_sel[0],
            }"
          >
            {{ cell }}
          </th>
        </tr>
        <tr>
          <th
            v-for="(cell, index) in rowData?.line2"
            :key="'line2-header-' + index"
            class="border p-2 w-12 h-12"
            :class="{
              'bg-creamy !text-white': cell === rowData.line2_sel[0],
            }"
          >
            {{ cell }}
          </th>
        </tr>
        <tr>
          <th
            v-for="(cell, index) in rowData?.line3"
            :key="'line2-header-' + index"
            class="border p-2 w-12 h-12"
            :class="{
              'bg-creamy !text-white': cell === rowData.line3_sel[0],
            }"
          >
            {{ cell }}
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
/* Add your custom styles here */
table {
  border-collapse: collapse;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

th,
td {
  border: 1px solid #5B432C;
  padding: 10px;
  font-size: 24px;
  text-align: center;
}

th {
  color: #4a90e2;
}

td {
  background-color: #fff;
  color: #333;
}

.bg-green-200 {
  background-color: #c6f6d5; /* Light green background for selected cells */
}

/* Optional: Add hover effect for cells */
td:hover {
  background-color: #f0f4f8;
}

/* Optional: Style for the modal */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
}

.modal-header {
  background-color: #4a90e2;
  color: white;
  border-radius: 8px 8px 0 0;
  padding: 10px;
}

.modal-body {
  padding: 20px;
}

.modal-footer {
  text-align: right;
  background-color: #f0f4f8;
  border-radius: 0 0 8px 8px;
  padding: 10px;
}
</style>
