<template>
    <div>
        <div class="text-center">
            <h1>Dev Tools</h1>
        </div>

        <SearchView class="mtb11"></SearchView>

        <ToolList></ToolList>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchView from './part/SearchView.vue'
import ToolList from './part/ToolList.vue'

export default defineComponent({
    components: {
        SearchView,
        ToolList,
    },
    setup() {
        return {}
    },
})
</script>
