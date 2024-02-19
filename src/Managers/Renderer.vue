<script lang="ts" setup>
import EntityManager from "./EntityManager";
import EntityRenderer from "./EntityRenderer.vue";

defineProps<{ entityManager: EntityManager }>();
</script>

<template>
  <EntityRenderer
    v-for="entity in entityManager.getEntityList()"
    :entity="entity"
  ></EntityRenderer>
  <div
    :style="{
      position: 'absolute',
      left: 0,
      top: 0,
      color: 'white',
    }"
  >
    {{ entityManager.getPlayer()?.coins.toString() || `0` }}
  </div>
</template>
