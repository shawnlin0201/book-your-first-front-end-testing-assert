<template>
    <div>{{ text }}, {{ text2 }}!</div>
  </template>
  <script setup>
  const vFocus = {
    mounted: (el) => el.focus(),
  }
  </script>
  
  <template>
    <input v-focus type="text" placeholder="請填入......">
  </template>
  