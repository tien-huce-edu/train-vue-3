<template>
  <div>
    <div v-if="loading">Loading</div>
    <div v-else class="item">
      <template v-for="(item, index) in data" >
        <HomePageComponent :user="item" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import HomePageComponent from "../components/HomePage/HomePage.vue";
import apiServices from "../config/http";

const count = ref(0);
const loading = ref(true);
const data = ref([]);

const increment = () => {
  count.value++;
};

const fetchData = () => {
  return apiServices.get("users");
};

onMounted(async () => {
  loading.value = true;
  try {
    const res = await fetchData();
    if (res.data) {
      data.value = res.data;
    } else {
      throw new Error("Error");
    }
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss">
.item {
  display: flex;
  flex-wrap: wrap;
}
</style>
