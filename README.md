# SaaSStarterKit

An independent, MIT-licensed SaaS application template built with **TanStack Start, React and Cloudflare Workers**. Own the source, configure the services you need, and extend a connected application instead of assembling authentication, billing and storage from scratch.

## Included

- Better Auth: verified email/password, optional Google OAuth, sessions, account settings, administrator controls and API keys.
- Cloudflare D1 with Drizzle migrations, private R2 files and KV caching.
- Stripe, Creem and Waffo payment adapters, verified webhooks, durable payment facts and derived access.
- Ten optional AI tools with model configuration, usage limits and uncertain-result handling. **AI and payments are disabled by default.**
- English/Chinese routes, Markdown blog/legal/changelog content, SEO and accessible Base UI components.
- Mail templates and providers, optional consent-based newsletters, notifications, analytics and chat integrations.
- Unit/integration, isolated Worker HTTP, browser, captured-mail and content-scale checks.

## Start locally

Use **Node 24 LTS** and npm. The supported engine ranges are in `package.json`.

```sh
git clone https://github.com/agioracle/SaaSStarterKit.git
cd SaaSStarterKit
npm ci
cp .env.example .env
cp .dev.vars.example .dev.vars
npm run db:migrate:local
npm run dev
```

Open `http://localhost:3000`. This first run previews public pages using local D1/R2/KV; no Cloudflare resource creation is required. To complete registration, configure a strong authentication secret and one mail provider using [Configuration](docs/configuration.md). Missing providers return explicit errors rather than simulated success.

## Make it your product

1. Change `src/config/website.ts` and the `site_*` messages; replace logos/social images, the welcome article and legal examples.
2. Enable only the services you need. Keep runtime secrets outside `VITE_*` and source control.
3. Add business entities through server-authorized routes. [Private notes](examples/private-notes/README.md) is a runnable opt-in example.
4. Run `npm run check` and `npm run test:production` in an authorized browser environment, then follow [Deployment](docs/deployment.md).

The default homepage is concise. Illustrative landing layouts are in `examples/landing-page`; pagination fixtures live in `tests/fixtures/blog` and are seeded only into isolated tests. They are not published by a normal production build.

## Documentation

[Guide index](docs/README.md) · [Configuration](docs/configuration.md) · [Deployment](docs/deployment.md) · [Operations and upgrades](docs/operations.md) · [Development and extension](docs/development.md) · [Provider acceptance](docs/provider-acceptance.md) · [Verification and limitations](docs/verification.md)

```sh
npm run check             # build, types, lint, complete unit/integration suite
npm run i18n:check
npm run test:worker       # isolated local Worker HTTP suite
npm run test:browser      # isolated real Chromium interactions + axe
npm run test:production  # HTTP, browser and captured-mail suites
npm run test:performance # isolated content-scale/bundle/SSR checks, not field CWV
```

Install a supported Playwright Chromium in your authorized environment (`npx playwright install chromium`), or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to an existing compatible executable. Test commands never configure a live provider or deploy. CI installs its own test browser and uses synthetic local fixtures.

## Production use

This is production application code and deployment preparation, not a preconfigured hosted service. Before launch, supply your domains/resources/secrets, verify actual email/OAuth/payment/AI integrations, review legal content, exercise backups/restores and monitor the deployed application. Local tests do not certify live providers, every browser, field Core Web Vitals or legal compliance. See [known limits](docs/verification.md).

The project is independently authored from public framework/provider documentation. It is not affiliated with TanStarter and contains no proprietary TanStarter source. Existing MIT notices are retained in [LICENSE](LICENSE); dependency attribution is in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

中文：从上面的本地启动步骤开始；先配置认证与一种邮件服务，再按需开启支付和 AI。测试与生产资源应隔离。详细说明统一维护在 `docs/`，避免两套说明发生漂移。
