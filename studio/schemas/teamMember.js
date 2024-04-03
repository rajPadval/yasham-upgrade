export default {
    title: 'Team Member',
    name: 'teamMember',
    type: 'document',
    fields: [
        {
            title: 'Name of the team',
            name: 'team',
            type: 'reference',
            to: [{type: 'team'}]
        },
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required().error('Name is required.')
        },
        {
            title: 'Content',
            name: 'content',
            type: 'text'
        },
        {
            title: 'Display Photo',
            name: 'photo',
            type: 'image'
        },
        {
            title: 'Order number',
            name: 'order',
            type: 'number',
            initialValue: 1000
        }
    ]
}