<template>
    <div class="form-item">
        <label class="form-label" v-if="!focused">Rich text editor</label>
        <label class="form-label form-help" v-if="focused">Highlight text to edit</label>
        <div class="editable" @focus="focused = true" @blur="focused = false">
            <p><b>Nightclub</b> - The Victorian building opened in 1886 and was originally used as a warehouse and stables by the <a href="https://en.wikipedia.org/wiki/Great_Northern_Railway_(Great_Britain)">Great Northern Railway Company</a>.</p>
            <p>The building later became a warehouse for Booth’s Dry Gin distillery before changing hands in 1985 and becoming a bar.</p>
        </div>
    </div>
    <!--<pre>{{ $data | json }}</pre>-->
</template>


<script>
    export default {

        data() {
            return {
                content: '',
                focused: false,
            }
        },

        ready() {
            var editor = new MediumEditor('.editable', {
                autoLink: true,
                fontawesome: true,
                imageDragging: false,
                toolbar: {
                    buttons: ['bold', 'italic', 'underline', 'anchor'],
                },
                anchor: {
                    placeholderText: 'Type a link',
                },
            });
        }

    };
</script>