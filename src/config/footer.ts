import { websiteConfig } from "./website";

import { m } from "../locale/paraglide/messages";
export function getFooterLinks() {
	return [
		{
			title: m.config_footer_product(),
			items: [
				...(websiteConfig.payment.enabled
					? [{ href: "/pricing", label: m.nav_pricing() }]
					: []),
				{ href: "/ai", label: m.nav_ai() },
				{ href: "/roadmap", label: m.config_footer_roadmap() },
			],
		},
		{
			title: m.config_footer_resources(),
			items: [
				...(websiteConfig.blog.enabled
					? [{ href: "/blog", label: m.nav_blog() }]
					: []),
				{ href: "/changelog", label: m.config_footer_changelog() },
				{ href: "/contact", label: m.config_footer_contact() },
			],
		},
		{
			title: m.config_footer_company(),
			items: [
				{ href: "/about", label: m.config_footer_about() },
				{ href: "/privacy", label: m.config_footer_privacy() },
				{ href: "/terms", label: m.config_footer_terms() },
				{ href: "/cookie", label: m.config_footer_cookies() },
			],
		},
	];
}
