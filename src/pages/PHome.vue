<template>
  <div class="container mx-auto">
    <div class="text-center">
      <h1 class="text-4xl text-black text-center py-5">Lottery</h1>

      <pre>{{ isOpen }}</pre>
      <button @click="isOpen = true">Open Modal</button>
    </div>
    <div class="grid grid-cols-12 gap-3">
      <!-- Create 4 tables with a gap of 20px -->
      <div class="col-span-4" v-for="tableNumber in 12" :key="tableNumber">
        <table class="table-auto mb-5">
          <thead>
            <tr class="p-2 bg-amber-300">
              <th class="p-2" colspan="10">Table {{ tableNumber }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rowNumber in 3" :key="rowNumber">
              <td
                class="border p-2"
                :class="{
                  'bg-green-200':
                    tableData[tableNumber - 1][rowNumber - 1].input1.includes(
                      filterText
                    ),
                }"
              >
                <input
                  v-model="tableData[tableNumber - 1][rowNumber - 1].input1"
                  type="text"
                  class="w-full"
                />
              </td>
              <td
                class="border p-2"
                :class="{
                  'bg-green-200':
                    tableData[tableNumber - 1][rowNumber - 1].input2.includes(
                      filterText
                    ),
                }"
              >
                <input
                  v-model="tableData[tableNumber - 1][rowNumber - 1].input2"
                  type="text"
                  class="w-full"
                />
              </td>
              <td
                :class="{
                  'bg-green-200':
                    tableData[tableNumber - 1][rowNumber - 1].input3.includes(
                      filterText
                    ),
                }"
                class="border p-2"
              >
                <input
                  v-model="tableData[tableNumber - 1][rowNumber - 1].input3"
                  type="text"
                  class="w-full"
                />
              </td>
              <td
                :class="{
                  'bg-green-200':
                    tableData[tableNumber - 1][rowNumber - 1].input4.includes(
                      filterText
                    ),
                }"
                class="border p-2"
              >
                <input
                  v-model="tableData[tableNumber - 1][rowNumber - 1].input4"
                  type="text"
                  class="w-full"
                />
              </td>
              <td
                :class="{
                  'bg-green-200':
                    tableData[tableNumber - 1][rowNumber - 1].input5.includes(
                      filterText
                    ),
                }"
                class="border p-2"
              >
                <input
                  v-model="tableData[tableNumber - 1][rowNumber - 1].input5"
                  type="text"
                  class="w-full"
                />
              </td>
              <td
                :class="{
                  'bg-green-200':
                    tableData[tableNumber - 1][rowNumber - 1].input6.includes(
                      filterText
                    ),
                }"
                class="border p-2"
              >
                <input
                  v-model="tableData[tableNumber - 1][rowNumber - 1].input6"
                  type="text"
                  class="w-full"
                />
              </td>
              <td
                :class="{
                  'bg-green-200':
                    tableData[tableNumber - 1][rowNumber - 1].input7.includes(
                      filterText
                    ),
                }"
                class="border p-2"
              >
                <input
                  v-model="tableData[tableNumber - 1][rowNumber - 1].input7"
                  type="text"
                  class="w-full"
                />
              </td>
              <td
                :class="{
                  'bg-green-200':
                    tableData[tableNumber - 1][rowNumber - 1].input8.includes(
                      filterText
                    ),
                }"
                class="border p-2"
              >
                <input
                  v-model="tableData[tableNumber - 1][rowNumber - 1].input8"
                  type="text"
                  class="w-full"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center z-50"
    >
      <div class="modal-overlay fixed inset-0 bg-gray-800 opacity-50"></div>

      <div
        class="modal-container bg-white w-96 mx-auto rounded-lg shadow-lg z-50"
      >
        <div class="modal-header bg-gray-200 p-4 rounded-t-lg">
          <h2 class="text-xl font-semibold">Filter Table Data</h2>
        </div>

        <div class="modal-body p-4">
          <label for="filterInput" class="block mb-2">Filter:</label>
          <input
            v-model="filterText"
            id="filterInput"
            type="text"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            @input="filterTableData"
          />
        </div>

        <div class="modal-footer bg-gray-100 p-4 rounded-b-lg">
          <button
            @click="toggleModal"
            class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <pre>{{ tableData }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: Array(12)
        .fill(null)
        .map(() =>
          Array(8)
            .fill(null)
            .map(() => ({
              input1: "",
              input2: "",
              input3: "",
              input4: "",
              input5: "",
              input6: "",
              input7: "",
              input8: "",
            }))
        ),
      filterText: "2",
      filteredData: [],
      isOpen: false,
    };
  },
  computed: {
    filteredTableData() {
      // Use the filtered data from your store or component data
      return this.filteredData;
    },
  },
  methods: {
    filterTableData() {
      // Implement the filtering logic here
      this.filteredData = this.tableData.filter((item) => {
        return (
          item.input1.includes(this.filterText) ||
          item.input2.includes(this.filterText) ||
          item.input3.includes(this.filterText) ||
          item.input4.includes(this.filterText) ||
          item.input5.includes(this.filterText) ||
          item.input6.includes(this.filterText) ||
          item.input7.includes(this.filterText) ||
          item.input8.includes(this.filterText)
        );
      });

      this.toggleModal();
      // Store the filtered data or update a data property to use it in your table component
      // For example, you can set this.$store.commit('updateFilteredData', filteredData);
    },
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
