import { getCollection, getEntry } from 'astro:content';
import type { APIContext } from 'astro';

export async function getStaticPaths() {
	const docs = await getCollection('docs');
	return docs
		.filter((entry) => !entry.data.draft)
		.map((entry) => {
			const id = entry.id;
			const slug =
				id === 'index' || id === '' ? undefined : id.endsWith('/index') ? id.slice(0, -6) : id;
			return { params: { slug } };
		});
}

export async function GET({ params }: APIContext) {
	const id = params.slug ?? 'index';
	const entry = (await getEntry('docs', id)) ?? (await getEntry('docs', `${id}/index`));

	if (!entry) {
		return new Response('Not found', { status: 404 });
	}

	return new Response(entry.body ?? '', {
		headers: {
			'Content-Type': 'text/markdown; charset=utf-8',
		},
	});
}
