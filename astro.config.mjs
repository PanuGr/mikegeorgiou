// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://panugr.github.io',
    base: 'my-repo',
    prefetch: true,
    trailingSlash:"never"
});
