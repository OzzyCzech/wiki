import { defineConfig, passthroughImageService } from 'astro/config';
import starlight from '@astrojs/starlight';

// Markdown plugins
import links from './src/markdown/links.ts';
import youtube from './src/markdown/youtube.ts';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config

const site = 'https://ozzyczech.cz';

export default defineConfig({
	site,
	markdown: {
		remarkPlugins: [youtube],
		rehypePlugins: [links()]
	},

	image: {
		service: passthroughImageService(),
	},

	integrations: [
		starlight({
			title: 'Roman\'s notes',
			tableOfContents: false,
			pagination: false,
			social: [
				{icon: 'github', label: 'GitHub', href: 'https://github.com/OzzyCzech/ozzyczech.cz'},
				{icon: 'stackOverflow', label: 'StackOverflow', href: 'https://meta.stackoverflow.com/users/355316/ozzyczech'}
			],
			head: [
				{
					tag: 'meta',
					attrs: {property: 'og:image', content: site + '/og.png'},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'alternate',
						type: 'application/rss+xml',
						title: "Roman's notes",
						href: site + '/rss.xml',
					},
				},
			],
			customCss: [
				'./src/style.css',
			],
			logo: {
				src: './src/assets/roman-ozana.jpg',
			},
			editLink: {
				baseUrl: 'https://github.com/OzzyCzech/ozzyczech.cz/edit/main/'
			},
			sidebar: [
				{label: 'Home', link: '/'},
				{
					label: 'AI',
					collapsed: true,
					items: [
						{label: 'Agents', collapsed: false, autogenerate: {directory: 'AI/Agents'}},
						{label: 'Claude Code', collapsed: false, autogenerate: {directory: 'AI/Claude Code'}},
						{label: 'Gemma', collapsed: false, autogenerate: {directory: 'AI/Gemma'}},
						{label: 'Tools', collapsed: false, autogenerate: {directory: 'AI/Tools'}},
						{label: 'Guides', collapsed: false, autogenerate: {directory: 'AI/Guides'}},
						'ai/benchmarks',
					],
				},
				{label: 'Development', collapsed: false, autogenerate: {directory: 'Development', collapsed: true}},
				{label: 'PHP', collapsed: true, autogenerate: {directory: 'PHP'}},
				{label: 'Inspiration', collapsed: true, autogenerate: {directory: 'Inspiration', collapsed: false}},
				{
					label: 'Shell & CLI',
					collapsed: true,
					autogenerate: {directory: 'CLI', collapsed: true},
				},
				{label: 'macOS', collapsed: true, autogenerate: {directory: 'macOS', collapsed: true}},
				{label: 'Awesome', collapsed: true, autogenerate: {directory: 'Awesome', collapsed: false}},
				{label: 'Life Hack', collapsed: true, autogenerate: {directory: 'LifeHack'}},
				{
					label: 'Photography',
					collapsed: true,
					items: [
						{label: 'Sony', collapsed: false, autogenerate: {directory: 'Photography/Sony', collapsed: false}},
						{label: 'Fujifilm', collapsed: false, autogenerate: {directory: 'Photography/Fujifilm', collapsed: false}},
						{label: 'Nikon', collapsed: false, autogenerate: {directory: 'Photography/Nikon', collapsed: false}},
						{label: 'Panasonic', collapsed: false, autogenerate: {directory: 'Photography/Panasonic', collapsed: false}},
						{label: 'Canon', collapsed: false, autogenerate: {directory: 'Photography/Canon', collapsed: false}},
						'photography/compact-cameras',
						'photography/action-cameras',
						'photography/photo-hosting',
						{label: 'Software', collapsed: true, autogenerate: {directory: 'Photography/Software', collapsed: true}},
						{label: 'Accessories', collapsed: false, autogenerate: {directory: 'Photography/Accessories'}},
					],
				},
				{label: 'Security', collapsed: true, autogenerate: {directory: 'Security'}},
				{label: 'Hardware', collapsed: true, autogenerate: {directory: 'Hardware', collapsed: true}},
				{label: 'Movies & TV', collapsed: true, autogenerate: {directory: 'Movies & TV', collapsed: false}},
				{label: 'Knihy', collapsed: true, autogenerate: {directory: 'Knihy'}},
				{label: 'Povídky', collapsed: true, autogenerate: {directory: 'Povidky'}},
				{label: 'Cestování', collapsed: true, autogenerate: {directory: 'Travel', collapsed: true}},
			]
		})
	],
	vite: {
		plugins: [tailwindcss()]
	}
});
