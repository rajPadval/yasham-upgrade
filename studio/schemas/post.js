export default {
    title: 'Post',
    name: 'post',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required().error('Title is required.')
        },
        {
            title: 'Sub-Title',
            name: 'subTitle',
            type: 'string'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            },
            validation: Rule => Rule.required().error('Please click on Generate')
        },
        {
            title: 'Type',
            name: 'type',
            type: 'string',
            options: {
                list: [
                    { title: 'Programme', value: 'programme' },
                    { title: 'Community', value: 'community' }                ]
            },
            validation: Rule => Rule.required().error('Type is required.')
        },
        {
            title: 'Summary',
            name: 'summary',
            type: 'text'
        },
        {
            title: 'Body',
            name: 'body',
            // type: 'array',
            // of: [{ type: 'block' }],
            type: 'text',
            validation: Rule => Rule.required().error('Body is required.')
        },
        {
            title: 'Display Photo',
            name: 'displayPhoto',
            type: 'image'
        },
        {
            title: 'Photo Gallery Pictures',
            name: 'photoGallery',
            type: 'array',
            of: [{
                type: 'image'
            }]
        }
    ]
}