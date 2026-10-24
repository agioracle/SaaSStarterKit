---
title: "Welcome to SaaSStarterKit"
description: "Configure your application before launching your first SaaS workflow."
date: "2026-10-24"
category: "Getting started"
image: "/og.png"
published: true
---

## Start locally

Follow the repository README to install dependencies, apply local D1 migrations and start the development server. Public pages work without external credentials. Email registration requires a configured authentication secret and mail provider.

## Configure your product

Change the brand in src/config/website.ts and messages, replace this article and the legal examples, and enable only the services your product needs. Payments and AI are disabled by default.

## Prepare production

Use separate test and production resources. Validate authentication, email delivery, payment webhooks, backups and monitoring with your actual providers before launch. Local fixtures do not certify those integrations.
