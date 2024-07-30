<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const celebration = ref({ name: '', description: '', author: '', date: '', hour: '', location: '' });

const fetchCelebrationData = async () => {
  try {
    const id = route.params.id as string;
    if (!id) {
      throw new Error('Event ID is required');
    }
    
    const response = await fetch(`http://localhost:3000/api/celebration/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch celebration data');
    }
    const data = await response.json();
    celebration.value = data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  fetchCelebrationData();
});
</script>

<template>
  <main class="main">
    <h1>{{ celebration.name }}</h1>
    <h2>{{ celebration.description }}</h2>
    <h3>Proposé par {{ celebration.author }}</h3>
    <h2>Le {{ celebration.date }} à {{ celebration.hour }}</h2>
    <h2>{{ celebration.location }}</h2>
    <h2>30 participants</h2>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .main {
    margin-top: 59px;
    display: flex;
  }
}
</style>