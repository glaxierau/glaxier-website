<template>
    <div class="flex items-center justify-start p-3 pt-6">
        <img :src="src" :alt="alt">
        <a :href="href">
            <p class="ml-5" :class="width&&'w-4/5'">{{content}}</p>
        </a>
    </div>
</template>

<script>
export default {
    name: 'FooterLink',
    props: ['src', 'alt', 'href', 'content', 'width']
}
</script>

<style scoped>
    p {
        color: white;
        font-size: .75rem;
        font-weight: 100
    }
</style>