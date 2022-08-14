
<script setup lang="ts">
import appForm from '@/components/form/appForm.vue'
import { TInput } from '@/types'
const inputs : Record<string,TInput> = {
  'first' : {
    label: 'first',
    type:'text',
    rules:[
      'required',      
    ]
  },
  'second' : {
    label: 'second',
    type:'select',
    rules:[
      'required',
    ]
  }
}

</script>

<template>
  <div class="home">
    <appForm :inputs="inputs"></appForm>
  </div>
</template>