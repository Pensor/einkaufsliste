<template>
  <q-page class="bg-grey-2 column">
    <div class="row q-pa-sm bg-primary">
      <q-input
        v-model="text"
        class="col"
        outlined
        square
        placeholder="Was brauchst du..."
        dense
        bg-color="white"
        @keyup.enter="add"
      >
        <template v-slot:append>
          <q-btn round dense flat icon="add" @click="add" />
        </template>
      </q-input>
    </div>
    <q-list bordered separator>
      <q-slide-item
        v-for="(item, index) in list"
        :key="item.label"
        @left="onRight(index)"
      >
        <template v-slot:left>
          <q-icon name="done" />
        </template>
        <q-item clickable @click="item.amount++" active>
          <q-item-section>{{ item.label }}</q-item-section>
          <q-item-section side>x{{ item.amount }}</q-item-section>
        </q-item>
      </q-slide-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      list: [
        { label: "Eis", amount: 1 },
        { label: "Tee", amount: 1 },
      ],
      text: "",
    };
  },
  created() {
    this.$db.collection("einkaufsliste").onSnapshot((query) => {
      this.list = query.docs.map((doc) => ({
        label: doc.data().name,
        amount: 1,
      }));
    });
  },
  methods: {
    onRight(d) {
      this.list.splice(d, 1);
    },
    add() {
      this.list.push({
        label: this.text,
        amount: 1,
      });
      this.text = "";
    },
  },
};
</script>
