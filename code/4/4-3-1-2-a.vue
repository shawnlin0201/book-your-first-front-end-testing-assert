<template>
    <div>{{ text }}, {{ text2 }}!</div>
  </template>
  <script setup>
  import { ref } from 'vue'
  
  const text = ref('Hello')
  const text2 = ref('Setup')
  </script>
  