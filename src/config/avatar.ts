import { websiteConfig } from "./website";
import { m } from "../locale/paraglide/messages";
/** Account-avatar menu destinations; call inside a localized render. */
export function getAvatarLinks() {
	return [
		{ href: "/dashboard", label: m.nav_dashboard() },
		{ href: "/settings/profile", label: m.settings_profile() },
		{ href: "/settings/security", label: m.settings_security() },
		...(websiteConfig.payment.enabled
			? [{ href: "/settings/billing", label: m.settings_billing() }]
			: []),
	];
}
