import { ref, onUnmounted } from 'vue'
export const loading = ref(false)
export const toggleLoading = () => loading.value = !loading.value
onUnmounted(() => loading.value = false)