export default {
    title: 'Team',
    name: 'team',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
            validation: Rule => Rule.required().error('Name is required.')
        }
    ]
}