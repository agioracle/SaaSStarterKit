# Guides

Read these in order for a new application:

1. [Configuration](configuration.md): feature switches, public/runtime values, authentication, mail, storage and optional providers.
2. [Deployment](deployment.md): separate test/production resources, reviewed migrations, secrets and Worker deployment.
3. [Operations](operations.md): monitoring, backups, upgrades, payment reconciliation and rollback.
4. [Development](development.md): architecture, branding, content, UI, service adapters and business entities.
5. [Provider acceptance](provider-acceptance.md): the manual integration checks local fixtures cannot replace.
6. [Verification](verification.md): reproducible checks and honest release boundaries.

Detailed implementation contracts remain beside their owners: [CLI](../scripts/README.md), [payments](../src/payment/README.md), [mail](../src/mail/README.md), [storage](../src/storage/README.md), [UI](../src/components/ui/README.md) and [AI adapters](../src/ai/SERVICE_ADAPTERS.md). These are API references, not competing getting-started guides.
