<template>
    <div class="container">
        <router-view />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import makeBridge from '@/helper/makeBridge'

export default defineComponent({
    created() {
        const sp = new URLSearchParams(window.location.search)
        const ide = sp.get('ide')
        if (ide === 'idea') {
            return
        }
        makeBridge(window as any)
    },
})
</script>
