import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Where the site lives and the repo it's built from, set by GitHub Actions; empty elsewhere.
const { SITE_URL, GITHUB_SERVER_URL, GITHUB_REPOSITORY } = process.env;
const repo = GITHUB_REPOSITORY ? `${GITHUB_SERVER_URL}/${GITHUB_REPOSITORY}` : '';

export default defineConfig({
	plugins: [sveltekit()],
	define: { __SITE__: JSON.stringify(SITE_URL ?? ''), __REPO__: JSON.stringify(repo) },
	// Never inline assets as data: URLs; the CSP only allows images from this site.
	build: { sourcemap: false, assetsInlineLimit: 0 }
});
