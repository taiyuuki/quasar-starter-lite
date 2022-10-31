<template>
  <q-page flex="row justify-evenly">
    <example-component />
  </q-page>
</template>

<script setup lang="ts">
useMeta({ title: '主页' })
</script>

<route lang="yaml">
  meta:
    layout: MainLayout
</route>