import cloudflare from "solid-start-cloudflare-workers";

import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
	plugins: [cloudflare({ envPath: true })],
});
