<template>
    <div class="video">
        <div class="video-cover embed-container" v-if="videoCover" :style="backgroundImage()">
            <span class="video-play" @click="playVideo">
                <i class="icon-play"></i>
            </span>
        </div>
        <div class="video-player embed-container" v-if="videoPlayer">
            <iframe v-if="type === 'youtube'" :src="youtubeUrl()" frameborder="0" allowfullscreen></iframe>
            <iframe v-if="type === 'vimeo'" :src="vimeoUrl()" frameborder="0" allowfullscreen></iframe>
            <div class="video-close close" @click="closeVideo">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <!--<pre>{{ $data | json }}</pre>-->
</template>

<script>
    export default {

        props: ['type', 'cover', 'videoid'],

        data() {
            return {
                videoCover: true,
                videoPlayer: false,
            }
        },

        methods: {
            youtubeUrl() {
                return '//youtube.com/embed/' + this.videoid + '?modestbranding=0&autohide=1&showinfo=0&rel=0&autoplay=1'
            },
            vimeoUrl() {
                return '//player.vimeo.com/video/' + this.videoid + '?portrait=0&byline=0&badge=0&title=0&autoplay=1'
            },
            playVideo() {
                this.videoCover = false
                this.videoPlayer = true
            },
            closeVideo() {
                this.videoCover = true
                this.videoPlayer = false
            },
            backgroundImage() {
                return 'background-image:url(' + this.cover + ')'
            }
        }

    };
</script>
