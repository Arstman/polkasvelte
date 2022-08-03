export async function handle({ event, resolve }) {
    const response = await resolve(event, {
        ssr: !event.url.pathname.startsWith('/app'),
        transformPageChunk: ({ html }) => html.replace('old', 'new')
    });

    return response;
}