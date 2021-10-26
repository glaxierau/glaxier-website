<template>
    <div class="flex h-screen px-20">
        <div class="w-1/2 flex items-center justify-center">
            <div class="leftimg"/>
        </div>
        <div class="w-1/2 flex flex-col items-center justify-center">
            <Title title="Who is Glaxier?" lineColor="#CFD7F1"/> <br> <br>
            <div class="relative list_container flex justify-between">
                <div class="line bg-red-dark"/>
                <check-icon label="Passionate" />
                <check-icon label="Innovative" />
                <check-icon label="Futuristic" />
                <check-icon label="Hard-working" />
            </div> <br> <br>
            <div class="mt-20 w-4/5">
                <p class="text-black-light font-thin">
                    We are a team of young and passionate Digital Specialists. Our team has experience working in the big corporate world where we seasoned our skills. We are ready to tackle the world and help more businesses succeed digitally. We have a team of experienced digital advertisers, digital strategists, copywriters, graphic designers and developers who are excited to learn about your brand and help you grow. 
                    <br> <br>
                    Our Brand, Glaxier came from the word glacier. It’s a metaphor for an iceberg which may seem small above the water but is much biggest under water. Digital marketing effort may not be apparent but it is a crucial part of the succeess of many bussinesses no matter the size. In a way, our team act as the under-water part of a glacier for you business, laying groud work for the sucess everyone appreciate.
                </p>
            </div> <br>
                <AppButton title="CLICK" px="20" color="bg-blue" hoverColor="bg-red" txtColor="text-white" />
        </div>
    </div>
</template>

<script>
import CurvyLine from '../lines/curvyline.vue'
import CheckIcon from '../icons/checkIcon.vue'
import AppButton from '../button/appButton.vue'
import Title from '../title/title.vue'
export default {
    name: 'AboutSection',
    components: {
        CurvyLine,
        CheckIcon,
        AppButton,
        Title
    }
}
</script>

<style scoped>
    .leftimg{
        background-image: url('~/assets/img/home/aboutimg.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 80%;
        width: 100%;
    }
    .list_container {
        width: 28rem;
        height: 2px;
    }
    .line {
        position: absolute;
        top: 1.5rem;
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        width: 22rem;
        z-index: -1;
    }
    p {
        font-size: 0.75rem;
    }
</style>