export default {
    title: 'Testimonial',
    name: 'testimonial',
    type: 'document',
    fields: [
        {
            title: 'Full Name',
            name: 'full_name',
            type: 'string',
            validation: Rule => Rule.required().error('Name is required.')
        },
        {
            title: 'Display Photo',
            name: 'photo',
            type: 'image',
        },
        {
            title: 'Role',
            name: 'role',
            type: 'string'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'text',
            validation: Rule => Rule.required().error('Content is required.')
        }
    ]
}