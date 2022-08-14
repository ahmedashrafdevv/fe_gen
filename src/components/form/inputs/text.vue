<script setup lang="ts">
import { defineProps, ref, defineEmits } from 'vue'
import { TInput, validationRuleParams } from '@/types'
import Validator from '@/core/form/validations/validationsStore';

const model = ref('')
const errorMsg = ref('')
const emit = defineEmits(['update:modelValue'])
const props = defineProps<{
  input: TInput,
  modelValue: string | number | boolean,
  lazyValidation: boolean
}>()
const validate = (): void => {
  const rules = props.input.rules!
  const validator = Validator.getInstance()
  const params: [validationRuleParams] = [
    {
      value: model.value
    }
  ]
  let method: ((options: validationRuleParams) => string)
  for (const r in rules) {
    if (typeof rules[r] == 'string') {
      method = validator[rules[r] as keyof typeof validator]
    } else {
      method = rules[r] as ((options: validationRuleParams) => string)
    }
    errorMsg.value = method.apply(this, params)
    if (errorMsg.value != '') return
    console.log(method)
  }
  errorMsg.value = ''
}

const handleInput = (e: any): void => {
  emit('update:modelValue', e.originalTarget.value)
  if (!props.lazyValidation && typeof props.input.rules != 'undefined') {
    validate()
  }
}
</script>
<template>
  <div class="input-control">
    <label>{{ props.input.label }}</label>
    <input @input="handleInput" :type="props.input.type" v-model="model" :value="props.modelValue" />
    <p class="error">{{ errorMsg }}</p>
  </div>
</template>

