// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://panugr.github.io/mikegeorgiou',
    base:"/mikegeorgiou/",
    prefetch: true,
    trailingSlash:"never"
});
