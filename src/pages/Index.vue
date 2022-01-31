<template>
  <q-page>
    <q-list bordered separator>
      <q-slide-item
        v-for="(item, index) in list"
        :key="item.label"
        @left="onRight(index)"
      >
        <template v-slot:left>
          <q-icon name="done" />
        </template>
        <q-item>
          <q-item-section class="text-center">{{ item.label }}</q-item-section>
        </q-item>
      </q-slide-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { ref } from "vue";

const list = ref([{ label: "Eis" }, { label: "Tee" }]);

function onRight(d) {
  list.value.splice(d, 1);
}
</script>
