import DashboardTable from '@/components/DashboardTable';
import { Card, Shell } from '@/components/ui';
import { milestones, projects } from '@/lib/mockData';

export default function Page() {
  const rows = projects.filter((p) => 'relationships' === 'flynn' ? p.entity === 'Flynn Advisors' : 'relationships' === 'manifest' ? p.entity === 'Manifest Industries' : true);
  return <Shell>
    <Card title="Relationships Dashboard">
      <p className="mb-3 text-sm text-muted">Filters: entity, project, status, owner, due date, risk level.</p>
      {'relationships' === 'milestones' ? <div className="overflow-x-auto"><table className="min-w-full text-sm"><thead><tr><th>Project</th><th>Milestone</th><th>Date</th><th>Vesting</th><th>Status</th></tr></thead><tbody>{milestones.map((m)=> <tr key={m.project+m.milestone} className="border-t border-border"><td className="py-2">{m.project}</td><td>{m.milestone}</td><td>{m.date}</td><td>{m.vesting}</td><td>{m.status}</td></tr>)}</tbody></table></div> : <DashboardTable rows={rows} />}
    </Card>
  </Shell>;
}
