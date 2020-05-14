<template>
  <div class="home">
    <developer-list></developer-list>
  </div>
</template>

<script>
import DevelopersList from '@/components/DevelopersList.vue';

export default {
  name: 'Home',
  components: {
    'developer-list': DevelopersList,
  },
};
</script>
