<script lang="ts" setup>
import Entity from "../Entities/Entity";

defineProps<{ entity: Entity }>();
</script>

<template>
  <div
    :style="{
      position: 'absolute',
      left: `${entity.x - entity.sizeX / 2}px`,
      top: `${entity.y - entity.sizeY / 2}px`,
      width: `${entity.sizeX}px`,
      height: `${entity.sizeY}px`,
      backgroundImage: `url(${entity.texture})`,
      backgroundSize: 'cover',
    }"
    :id="entity.id"
  ></div>
</template>
