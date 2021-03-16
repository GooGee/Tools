<template>
    <li class="list-group-item">
        <div>
            <a :href="tool.url" target="_blank">{{ tool.title }}</a>
        </div>
        <div>{{ tool.description }}</div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        tool: {
            type: Object,
            required: true,
        },
    },
    setup() {
        return {}
    },
})
</script>
