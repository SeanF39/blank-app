import DashboardTable from '@/components/DashboardTable';
import StatusChart from '@/components/StatusChart';
import { Card, Shell } from '@/components/ui';
import { projects } from '@/lib/mockData';

export default function Page() {
  const status = ['Active', 'Pipeline', 'At Risk', 'Closed'].map((s) => ({ name: s, value: projects.filter((p) => p.status === s).length }));
  return <Shell>
    <div className="grid gap-4 md:grid-cols-3">
      <Card title="Total Tracked Records"><p className="text-3xl font-semibold">{projects.length}</p></Card>
      <Card title="Manifest Economics"><p className="text-3xl font-semibold">$99.5M</p></Card>
      <Card title="Advisory Revenue Pipeline"><p className="text-3xl font-semibold">$1.12M</p></Card>
    </div>
    <div className="grid gap-4 md:grid-cols-2">
      <Card title="Portfolio Status"><StatusChart data={status} /></Card>
      <Card title="Executive Queue"><DashboardTable rows={projects.slice(0, 6)} /></Card>
    </div>
  </Shell>;
}
