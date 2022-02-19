export default {
	name: 'about',
	title: 'About',
	type: 'document',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Title',
		},
		{
			name: 'content',
			title: 'Content',
			type: 'text',
		},
		{
			name: 'imgUrl',
			title: 'ImgUrl',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
};
