<template>
    <div class="flex flex-col items-center justify-between h-24">
        <div class="bg-red-dark h-12 w-12 flex items-center justify-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="22.243" height="20.121" viewBox="0 0 28.243 20.121">
                <path id="Icon_feather-check" data-name="Icon feather-check" d="M30,9,13.5,25.5,6,18" transform="translate(-3.879 -6.879)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
            </svg>
        </div>
        <p class="text-blue-light font-thin" style="font-size: 0.8rem">{{label}}</p>
    </div>
</template>

<script>
export default {
    name: 'CheckIcon',
    props: ['label']
}
</script>

<style scoped>

</style>