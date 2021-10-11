<template>
    <div class="bg-white-dark">
        <div class="px-44">
            <h2 class="text-3xl font-extrabold mb-5">We are</h2>
            <h1 class="text-3xl font-extrabold text-red mb-8">Digital Advertising Specialists.</h1>
            <p class="text-sm font-thin text-gray-500">We are a group of young digital specialists who are eager to deliver results for your business. In the age where everything is connected at a touch of a finger tip, there are no recipes to succeed in the digital world, only the best way for you. Our goal is to find that perfect recipe for you.</p>
        </div>
        <div class="box_main bg-purple w-full mt-20 overflow-hidden flex justify-center items-center relative">
            <div class="circle1 border-white border" />
            <div class="circle2 border-white border" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServicesSection'
}
</script>

<style >
    .box_main{
        height: 40rem;
    }
    .circle1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 90vw;
        border-radius: 100rem;
    }
    .circle2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 45%;
        height: 45vw;
        border-radius: 100rem;
    }
</style>