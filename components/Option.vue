<script setup lang="ts">
  import { Gender, Length, Popularity } from "@/data";

  interface OptionProps {
    option: {
      title: string;
      category: string;
      button: Gender[] | Popularity[] | Length[]
    };
    options: {
      gender: Gender;
      popularity: Popularity;
      length: Length;
    }
  };

  const props = defineProps<OptionProps>();

</script>

<template>
  <div class="option-container">
    <h4>{{ option.title }}</h4>
    <div class="option-buttons">
      <button
        v-for="value in option.buttons"
        :key="value"
        class="option option-left"
        :class="options[option.category] === value && 'option-active'"
        @click='options[option.category] = value'
      >{{ value }}</button>
    </div>
  </div>
</template>
