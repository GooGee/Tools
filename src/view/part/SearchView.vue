<template>
    <div class="row">
        <div class="col-2 col-xl-3"></div>
        <div class="col-8 col-xl-6">
            <input v-model="text" type="text" class="form-control" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchStore from '@/store/SearchStore'

export default defineComponent({
    setup() {
        return SearchStore
    },
})
</script>
