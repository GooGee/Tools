<template>
    <li class="list-group-item">
        <div>
            <OpenButton :file="tool.url">{{ tool.title }}</OpenButton>
            <OpenButton :file="tool.url" where="browser"> browser </OpenButton>
        </div>
        <div>{{ tool.description }}</div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OpenButton from '../button/OpenButton.vue'

export default defineComponent({
    components: {
        OpenButton,
    },
    props: {
        tool: {
            type: Object,
            required: true,
        },
    },
})
</script>
