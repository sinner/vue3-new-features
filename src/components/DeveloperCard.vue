<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{ moment(item.createdAt).fromNow() }}
        </div>
        <v-list-item-title class="headline mb-1">
          {{ `${item.name} ${item.lastname}` }}
        </v-list-item-title>
        {{ item.title && item.title.name }}
        <v-list-item-subtitle>
          {{ item.skills && item.skills }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar :size="64">
        <v-avatar v-if="!item.avatar" color="indigo">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
        <v-avatar v-else :size="64">
          <img
            :class="'avatar-img'"
            :src="item.avatar"
            :alt="item.name"
          >
        </v-avatar>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn icon color="blue" @click="reviewItem">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <v-btn icon color="green" @click="editItem">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn icon color="red" @click="removeItem">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import * as moment from 'moment';

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    moment(text) {
      return moment(text);
    },
    reviewItem() {
      console.log('--- Reviewing Item: ', {
        item: this.item,
      });
    },
    editItem() {
      console.log('--- Editing Item: ', {
        item: this.item,
      });
    },
    removeItem() {
      console.log('--- Deleting Item: ', {
        item: this.item,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
