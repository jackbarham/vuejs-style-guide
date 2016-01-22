<template>
    <div class="form-item">
        <div class="cf">
            <label class="form-label left">Rich text editor</label>
            <label class="form-label form-help right" v-if="focused">Highlight text to edit</label>
        </div>
        <div class="editable" @focus="focused = true" @blur="focused = false">
            {{{ content }}}
        </div>
    </div>
</template>


<script>
    export default {

        data() {
            return {
                content: '<p><b>Nightclub</b> - The Victorian building opened in 1886 and was originally used as a warehouse and stables by the <a href=\"https://en.wikipedia.org/wiki/Great_Northern_Railway_(Great_Britain)\">Great Northern Railway Company</a>.</p><p>The building later became a warehouse for Booth’s Dry Gin distillery before changing hands in 1985 and becoming a bar.</p>',
                focused: false,
            }
        },

        ready() {
            var editor = new MediumEditor('.editable', {
                autoLink: true,
                fontawesome: true,
                imageDragging: false,
                toolbar: {
                    buttons: [
                        {
                            name: 'bold',
                            action: 'bold',
                            aria: 'bold',
                            tagNames: ['b', 'strong'],
                            style: {
                                prop: 'font-weight',
                                value: ''
                            },
                            useQueryState: true,
                            contentDefault: '<i class="icon-bold"></i>',
                            contentFA: '<i class="icon-bold"></i>'
                        },
                        {
                            name: 'italic',
                            action: 'italic',
                            aria: 'italic',
                            tagNames: ['i', 'em'],
                            style: {
                                prop: 'font-style',
                                value: ''
                            },
                            useQueryState: true,
                            contentDefault: '<i class="icon-italic"></i>',
                            contentFA: '<i class="fa fa-italic"></i>'
                        },
                        {
                            name: 'underline',
                            action: 'underline',
                            aria: 'underline',
                            tagNames: ['u'],
                            style: {
                                prop: 'text-decoration',
                                value: ''
                            },
                            useQueryState: true,
                            contentDefault: '<i class="icon-underline"></i>',
                            contentFA: '<i class="fa fa-underline"></i>'
                        },
                        'anchor'
                    ]
                },
                anchor: {
                    placeholderText: 'Type a link',
                },
            });
        }

    };
</script>