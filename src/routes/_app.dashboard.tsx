import { websiteConfig } from '../config/website';
import { lazy, Suspense, useState } from 'react';
import { m } from '../locale/paraglide/messages';
import { createFileRoute } from '@tanstack/react-router';
import { ArrowUpRight, ShieldCheck, KeyRound, Folder, Sparkles } from 'lucide-react';
import { Route as AppRoute } from './_app';
import { SectionTitle, Notice } from '../components/ui/core';
import { AccountSectionCards } from '../components/dashboard/section-cards';
import { localePath } from '../locale';
const DashboardChart = lazy(() => import('../components/dashboard/chart').then((module) => ({ default: module.BarChart })));

export const Route = createFileRoute('/_app/dashboard')({ component: Dashboard });
function Dashboard() {
  const { session } = AppRoute.useRouteContext();
  return (
    <>
      <SectionTitle
        eyebrow={m.routes_app_dashboard_your_workspace()}
        title={m.routes_app_dashboard_good_to_see_you({ value1: session.user.name })}
        description={m.routes_app_dashboard_a_little_less_setup_a_little_more()}
      />
      {!session.user.emailVerified && (
        <Notice>{m.routes_app_dashboard_verify_your_email_to_keep_your_account()}</Notice>
      )}
      <div className="dashboard-banner">
        <div>
          <span className="eyebrow">{m.routes_app_dashboard_ready_when_you_are()}</span>
          <h2>{m.routes_app_dashboard_make_something_worth_making()}</h2>
          <p>{m.routes_app_dashboard_your_account_files_and_tools_are_all()}</p>
          <a href={localePath('/ai')} className="button primary">
            {m.routes_app_dashboard_explore_ai_studio()}
            <ArrowUpRight size={16} />
          </a>
        </div>
        <span className="banner-symbol">✳</span>
      </div>
      <div className="grid two">
        {[
          {
            title: m.routes_app_dashboard_your_profile(),
            description: m.routes_app_dashboard_make_your_workspace_feel_like_you(),
            icon: ShieldCheck,
            url: '/settings/profile',
          },
          {
            title: m.routes_app_dashboard_files_in_order(),
            description: m.routes_app_dashboard_upload_and_manage_your_private_images(),
            icon: Folder,
            url: '/settings/files',
          },
          {
            title: m.routes_app_dashboard_connect_your_tools(),
            description: m.routes_app_dashboard_create_a_scoped_key_for_your_next(),
            icon: KeyRound,
            url: '/settings/apikeys',
          },
          {
            title: m.routes_app_dashboard_a_creative_head_start(),
            description: m.routes_app_dashboard_explore_text_image_search_and_audio_tools(),
            icon: Sparkles,
            url: '/ai',
          },
        ]
          .filter((item) => item.url !== '/settings/files' || websiteConfig.storage.enabled)
          .map((item) => (
            <a href={localePath(item.url)} key={item.url} className="dashboard-card card">
              <item.icon size={22} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ArrowUpRight className="corner-arrow" size={18} />
            </a>
          ))}
      </div>
      <AccountSectionCards user={session.user} />
      <SampleChartPreview />
    </>
  );
}

/** An opt-in component example, never presented as live account or business metrics. */
export function SampleChartPreview({ initiallyOpen = false }: { initiallyOpen?: boolean }) {
  const [open, setOpen] = useState(initiallyOpen);
  return (
    <details className="card" open={open} onToggle={(event) => setOpen(event.currentTarget.open)}>
      <summary>{m.dashboard_chart_sample_toggle()}</summary>
      <p className="muted">{m.dashboard_chart_sample_description()}</p>
      {open && (
        <Suspense fallback={<p role="status">{m.dashboard_chart_sample_title()}</p>}>
          <DashboardChart
            title={m.dashboard_chart_sample_title()}
            description={m.dashboard_chart_sample_description()}
            data={[
              { id: 'sample-a', label: 'A', value: 12 },
              { id: 'sample-b', label: 'B', value: 18 },
              { id: 'sample-c', label: 'C', value: 9 },
            ]}
          />
        </Suspense>
      )}
    </details>
  );
}
