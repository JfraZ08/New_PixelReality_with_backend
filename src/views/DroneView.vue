
<template>
    <main>
      <h2>Test relation backend</h2>
      <ul>
        <li v-for="drone in drones" :key="drone.id">test : {{ drone.modele }}</li>
      </ul>
    </main>
  </template>
  
  <script setup lang="ts">
  import { reactive, onMounted } from 'vue';
  import axios from 'axios';
  
  const state = reactive({
    drones: [] as Array<{ id:number, modele:string, description:string}>, // Adjust type as needed
  });
  
  const fetchDrones = async () => {
    try {
      const response = await axios.get('/drones');
      console.log(response.data)
      state.drones = response.data;
    } catch (error) {
      console.error('Erreur lors de la récupération des données', error);
      // Afficher un message d'erreur à l'utilisateur
    }
  };
  
  onMounted(() => {
    fetchDrones();
  });
  </script>
  
  