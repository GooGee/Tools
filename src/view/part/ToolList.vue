<template>
    <div class="row">
        <div class="col-2 col-xl-3"></div>
        <div class="col-8 col-xl-6">
            <ul class="list-group">
                <Tool v-for="item in state.list" :key="item.id" :tool="item"></Tool>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Tool from './Tool.vue'
import SearchStore from '@/store/SearchStore'

export default defineComponent({
    components: {
        Tool,
    },
    setup() {
        return SearchStore
    },
})
</script>
