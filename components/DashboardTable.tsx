import Link from 'next/link';
import { RecordItem } from '@/lib/mockData';

export default function DashboardTable({ rows }: { rows: RecordItem[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead className="text-left text-muted">
          <tr>
            <th>Project</th><th>Entity</th><th>Status</th><th>Owner</th><th>Due</th><th>Risk</th><th>Economics</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-border">
              <td className="py-2"><Link className="underline" href={`/projects/${encodeURIComponent(r.name)}`}>{r.name}</Link></td>
              <td>{r.entity}</td><td>{r.status}</td><td>{r.owner}</td><td>{r.dueDate}</td><td>{r.risk}</td><td>{r.economics}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
