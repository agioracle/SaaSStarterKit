# Operations, upgrades and recovery

## Monitoring

Worker observability is enabled in the sample configuration. Inspect health/readiness, structured operation failures, provider acceptance/reconciliation errors, webhook retries, scheduled-maintenance progress, D1 usage and R2 storage growth. Alerts should name a request/reference and safe error code, never request contents, authentication tokens, customer details or hosted payment URLs.

`/api/health` checks process/binding availability. `/api/ready` checks selected feature configuration and exposes only minimal public information; authenticated administrators receive detail. Neither proves inbox delivery, OAuth, payment settlement or AI quality.

Maintenance runs through the Worker scheduled lifecycle with bounded cleanup, limiter and AI-usage housekeeping. Review failure/unknown states and retry only operations whose semantics permit it. Notifications are best effort, not a durable business-event outbox.

## Backups

Before migration, export the **exact remote D1** to a private encrypted backup destination or use the account's supported D1 backup/time-travel facilities. Do not commit exports, payment/customer records or credentials. Back up private R2 objects separately; a D1 export alone is not a file backup. KV is an advisory cache and can be repopulated.

Record the application commit, migration sequence, environment, resource identities and tested restoration steps. Test restoration into a disposable environment and reconcile file metadata/object contents before relying on a backup. Provider retention and legal records require your policy; the template does not invent one.

## Upgrading an operating application

1. Review the source diff and dependency/migration changes. Keep your business files and environment secrets out of template overwrites.
2. Take and verify backups; run the change on an isolated test deployment with its own providers/data.
3. Review generated Drizzle SQL. Auth schema generation produces a review artifact; it does not overwrite the maintained application schema automatically.
4. Apply pending migrations to the selected database once; D1 tracks migration history. Never reset the production database, remove migration history or rename a payment namespace/catalog identity casually.
5. Build with the deployment's public values, deploy the reviewed commit and run health plus business acceptance.

The base migration chain is `drizzle/0000` through `0006`; the opt-in private-notes example generates its own later migration. Review names/content rather than relying only on file numbers. The operations example contains a no-write planner; it does not execute restoration or deployment for you.

## Payment reconciliation and deletion

Payment access derives from verified append-only facts and projections. Retired providers and their credentials/price mappings may still be required for existing subscriptions. Do not treat a successful redirect, ordinary active update or user claim as a paid grant.

Inspect ambiguous/unknown checkout and cancellation states using the provider dashboard and the guarded recovery workflow. Stripe/Creem can recover some owned open checkouts; Waffo does not expose the same validated recovery path. Lost Creem sessions or provider data outside recoverable windows can require operator assistance. Account deletion may remain blocked when financial state is unknown; do not bypass this by guessing age or inventing a successful cancellation.

## Rollback

Worker version rollback and database restoration are different actions. Roll back application code only when it remains compatible with the current schema. Prefer forward corrective migrations; restoring D1 can discard writes and requires explicit review, downtime/reconciliation and an exact recovery point. Coordinate R2, payment facts and external providers rather than restoring one component in isolation.

After rollback/recovery, recheck protected routes, queues/maintenance, file consistency, payment entitlements and provider delivery. Keep production secrets out of incident documents. The repository has no automatic production rollback or destructive restore workflow.
