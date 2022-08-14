import Text from '@/components/form/inputs/text.vue'
import Select from '@/components/form/inputs/select.vue'

export default (type : 'text' | 'select')=> {
    const mapper = {
    'text' : Text,
    'select' : Select,
    }
    return mapper[type]
}
