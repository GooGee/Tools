import { SearchResult } from 'minisearch'
import { computed, reactive, watchEffect } from 'vue'
import SourceStore from './SourceStore'

const state = reactive({
    list: [] as SearchResult[],
    text: '',
})

const text = computed({
    get() {
        return state.text
    },
    set(text: string) {
        state.text = text
    },
})

watchEffect(() => {
    if (state.text.trim().length > 1) {
        state.list = SourceStore.filter(state.text)
    } else {
        state.list = []
    }
})

export default {
    state,
    text,
}
