<template>
    <div class="video">
        <div class="video-cover" v-if="videoCover">
            <img :src="cover">
            <span class="video-play" @click="playVideo">
                <i class="icon-play"></i>
            </span>
        </div>
        <div class="video-player embed-container" v-if="videoPlayer">
            <iframe :src="video" frameborder="0" allowfullscreen></iframe>
            <div class="video-close modal-close" @click="closeVideo">
                <span></span>
                <span></span>
            </div>
        </div>
</template>

<script>
    export default {

        data() {
            return {
                cover: '//i.vimeocdn.com/video/401087313_1280.jpg',
                video: '//player.vimeo.com/video/57477038?portrait=0&byline=0&badge=0&title=0&autoplay=1',
                //video: '//youtube.com/embed/-PRiaUTaI9M?showinfo=0&autoplay=1',
                image: '',
                videoCover: true,
                videoPlayer: false,
            }
        },

        methods: {
            playVideo() {
                this.videoCover = false
                this.videoPlayer = true
            },
            closeVideo() {
                this.videoCover = true
                this.videoPlayer = false
            }
        }

    };
</script>