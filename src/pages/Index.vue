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
        v-for="item in list"
        :key="item.id"
        @left="onRight(item.id)"
      >
        <template v-slot:left>
          <q-icon name="done" />
        </template>
        <q-item clickable @click="increment(item.id)" active>
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
      list: [],
      text: "",
    };
  },
  created() {
    this.unsubcribe = this.$db
      .collection("einkaufsliste")
      .onSnapshot(this.getList);
  },
  beforeUnmount() {
    this.unsubcribe();
  },
  methods: {
    getList(query) {
      this.list = query.docs.map((doc) => ({
        id: doc.id,
        label: doc.data().name,
        amount: doc.data().amount || 1,
      }));
    },
    async onRight(id) {
      await this.$db.collection("einkaufsliste").doc(id).delete();
    },
    async add() {
      await this.$db
        .collection("einkaufsliste")
        .add({ name: this.text, amount: 1 });
      this.text = "";
    },
    async increment(id) {
      await this.$db
        .collection("einkaufsliste")
        .doc(id)
        .update({ amount: this.$firebase.firestore.FieldValue.increment(1) });
    },
  },
};
</script>
