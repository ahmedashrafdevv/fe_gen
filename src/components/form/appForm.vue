<script setup lang="ts">
import { reactive, defineProps } from 'vue'
import { TInput } from '@/types'
import inputsMapper  from '@/core/form/inputs/inputsMapper';
const props = defineProps<{
  inputs: Record<string, TInput>
}>()
props.inputs.keys
const state = reactive({
  "second": "second"
})

const submit = (): void => {
  console.log("state")
}
</script>

<template>
  <div class="form-wrapper">
    <!-- <Loading v-if="loading" ></Loading> -->
    <form>
      <h1>asd</h1>
      {{ Object.keys(inputs) }}
      <component v-for="(input, index) in Object.keys(inputs)" :is="inputsMapper(inputs[input].type as keyof typeof inputsMapper)" :key="index" :lazyValidation="false"  :input="inputs[input]" 
        :modelValue="state[input as keyof typeof state]" v-model="state[input as keyof typeof state]" />
      <button @click.prevent="submit">submit</button>
    </form>
  </div>
</template>

