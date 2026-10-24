# SaaSStarterKit development

Independent implementation of publicly documented TanStarter behavior. No proprietary template source is included.

- Use a supported Node engine from package.json (22.12+ in 22.x, 24.x, or >=26; Vitest 5 excludes Node 23/25). Use npm ci, then npm run check. Build generates routes, locales and content before typechecking.
- Cloudflare Workers only: Cloudflare Vite plugin, TanStack Start, React. No Nitro/Pages adapter.
- Server runtime credentials live in .dev.vars locally or Worker secrets. VITE_* is public and baked into client bundles.
- Keep D1, R2, auth and provider clients in server-only modules. Route loaders execute in browser too.
- Authenticate every protected API; role-hidden UI never authorizes an action. Mutations require same-origin requests, except the narrowly isolated extension-auth endpoints.
- Never log auth tokens, email links, provider keys, payment URLs or customer sensitive data.
- Do not remove CSRF middleware from src/start.ts. Preserve webhook raw bodies and signature/mode checks.
- Payment entitlements derive from a durable append-only ledger. Never grant access from a redirect or a successful checkout request.
- Use local migrations first. Deployments, remote migrations, credentials, uploads, purchases and external communications require explicit user authorization.
- npm run test:production runs the built Worker with isolated local fixtures. It never proves live Google, mail, AI or payment-provider correctness.
- Read docs/ and the source-adjacent provider limitations before modifying adapters.

- Public content lives in content/. Test-only Markdown lives in tests/fixtures/blog and is seeded only into isolated browser/performance checkouts. Do not restore fixture marketing content to production.
- README and docs/README.md are the documentation entry points. Keep machine paths, raw QA logs, credentials and local state out of commits.
