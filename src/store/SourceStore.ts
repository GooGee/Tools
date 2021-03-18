import * as toast from '@/helper/toast'
import Source from '@/model/Source'
import MiniSearch from 'minisearch'
import { ref } from 'vue'
import RequestStore from './RequestStore'

const state = {
    source: new Source(),
}

const ready = ref(false)

const ms = new MiniSearch({
    fields: ['title', 'description'],
    storeFields: ['title', 'description', 'url', 'id'],
    searchOptions: {
        boost: {
            title: 2,
        },
        prefix: true,
        fuzzy: 0.3,
    },
})

RequestStore.getSource()
    .then(response => response.json())
    .then(data => {
        ms.addAll(data.toolxx)
        state.source = data
        ready.value = true
    })
    .catch(error => {
        toast.error(error.message)
    })

function filter(text: string) {
    return ms.search(text)
}

export default {
    ready,
    filter,
}
