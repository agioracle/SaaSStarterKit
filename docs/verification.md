# Verification and known limits

## Reproduce the release gates

Use a supported Node engine, then `npm ci` and `npm run check`. Build must precede typechecking because routes, locales and content are generated. Install a supported Playwright Chromium in an authorized environment, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` to an existing compatible executable.

```sh
npm run check
npm run i18n:check
npm run test:performance
npm run test:production
```

These commands use local/synthetic data. Browser and content-scale commands create credential-excluding copies; they do not use the operator's `.env`, `.dev.vars`, sessions or production databases. Fixed fixture credentials and captured verification/reset messages exist only in ignored local test copies. Never deploy or distribute those copies.

The verification workflow runs the same gates on Ubuntu/Node 24 with its own Chromium. It has read-only repository permissions, no provider credentials and no deployment step. Inspect the [actual commit's Actions result](https://github.com/agioracle/SaaSStarterKit/actions) instead of treating this document as a perpetual CI guarantee.

## Local release evidence (0.3.0, 2026-10-24)

Environment: macOS arm64, Node 22.23.4, production Worker builds, local D1/R2/KV, existing Playwright-compatible Chromium. No live mail, payments, AI or remote database was used.

| Gate | Result |
|---|---|
| Build and TypeScript | Passed; route/content/locale generation included |
| Lint | Passed with 52 pre-existing CSS warnings; no errors |
| Complete unit/integration suite | 59 files, 942 tests passed; original coverage retained |
| Locale parity | 677 keys in EN/ZH; no inline bilingual UI messages |
| Local Worker HTTP | 18 checks passed |
| Hydrated Chromium | 23 checks passed, including 24 axe page/theme/viewport combinations |
| Captured-mail Chromium | 1 end-to-end test passed: registration, verification, sign-in, reset and sign-out through real auth handlers |
| Content scale | 128 additional synthetic articles; 0-byte homepage client growth; body sentinels excluded |

Browser coverage includes EN/ZH public routes at 1440px and 390px, navigation/history, form feedback, protected settings, private R2 upload/preview/cancel/delete, loading/error recovery, interrupted navigation, repeated submission, late checkout responses, ten disabled AI tools, theme controls, keyboard skip link and dialog focus/escape/return. Axe found no violations for the selected WCAG A/AA tags in the tested combinations; this is not a complete manual accessibility certification.

Default production content contains one bilingual welcome article and legal/changelog examples. Older article collections exist only under test fixtures; normal builds do not publish them. Optional illustrative landing layouts are outside the default route tree. Clean-checkout verification must regenerate the app rather than rely on a developer's existing output.

## Performance interpretation

The content-scale gate validates SSR/SEO, cache contracts and bundle growth. It does not measure user experience in the field. Before this publishing cleanup, local Lighthouse experiments identified the homepage H1 as LCP: mobile simulation was 2.565–2.720 seconds; a separate DevTools-throttled experiment measured EN 1.638–1.669 seconds and ZH 2.236 seconds. Those methods are not interchangeable, and those measurements do not describe the changed 0.3.0 landing page or deployed performance. No field CWV result is claimed. Measure your final content, hosting, region, cache state and real users before setting an SLO.

## Remaining acceptance and maintenance

- No Cloudflare deployment or real provider acceptance is claimed. Complete [Provider acceptance](provider-acceptance.md) for your own domain, environment and services.
- Safari automation was unavailable because system remote automation was disabled; no setting was changed. Firefox/WebKit runtimes were not available. Chromium results do not establish cross-browser equivalence.
- Current `npm audit` reports four moderate findings in the Drizzle Kit development-tool chain (`esbuild` and `@esbuild-kit/*`); no high/critical findings. The suggested major downgrade is not applied. Keep database tooling local, review upstream fixes and re-audit dependencies for your release.
- The 52 existing CSS warnings concern specificity/order and important declarations. Broad cascade reordering was outside this publishing cleanup; review it with visual regression coverage.
- Legal text, demo chart data and optional illustrative layouts require product-specific review. There is no automatic production backup/restore, legal certification, malware scanning or unlimited commercial storage quota.
- Provider costs, availability and asynchronous failure semantics remain real operating concerns. Disabled services must pass acceptance before enabling them.

This is an independent application template, not a claim of identical private TanStarter implementation or untested hosted capabilities.
