<template>
  <div :class="styles.container">
    <div>{{ user.id }}</div>
    <div>-</div>
    <div>{{ user.name }}</div>
  </div>
</template>

<script setup lang="ts">
import { User } from "../../constants/type";
import styles from "./HomePage.module.scss";

interface Props {
  user: User;
}

const { user } = defineProps<Props>();
</script>
