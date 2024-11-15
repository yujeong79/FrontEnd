<template>
    <li @click="clickVideo">
        <img :src="video.snippet.thumbnails.default.url"> <!--  바인딩을 해야 video 객체의 .snippet으로 감 -->
        <span>{{videoTitle}}</span>
    </li>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { useYoutubeStore } from '@/stores/youtube';
    import _ from 'lodash';

    const store = useYoutubeStore();

    const props = defineProps({
        video: Object
    }); 

    const videoTitle = computed(()=>{
        return _.unescape(props.video.snippet.title);
    });

    const clickVideo = function() {
        store.clickVideo(props.video);
    };

</script>

<style scoped>

</style>