<template>
    <span @click="run" :disabled="waiting" class="btn btn-link">
        <slot></slot>
    </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import call from '@/helper/call'

export default defineComponent({
    name: 'OpenButton',
    props: {
        file: {
            type: String,
            required: true,
        },
        where: {
            type: String,
            required: false,
            default: 'ide',
        },
    },
    setup(props) {
        const data = call((route, toast) => {
            if (props.where === 'ide') {
                route.view(props.file, (response) => {
                    toast.show(response.message, response.status)
                })
                return
            }

            route.open(props.file, (response) => {
                toast.show(response.message, response.status)
            })
        })
        return data
    },
})
</script>
