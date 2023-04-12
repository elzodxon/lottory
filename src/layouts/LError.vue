<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
      <h1 class="text-3xl font-bold mb-6 text-center">404 - Page Not Found</h1>
      <p class="text-gray-600 text-center">
        The page you're looking for does not exist.
      </p>
      <div class="mt-6">
        <router-link
          to="/"
          class="block bg-blue-500 text-white rounded-lg px-4 py-2 mx-auto text-center w-full"
        >
          Go Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundPage",
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>
