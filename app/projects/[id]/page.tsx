import { Card, Shell } from '@/components/ui';
import { projects } from '@/lib/mockData';

export default function Page({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.name === decodeURIComponent(params.id));
  if (!project) return <Shell><Card title="Not Found">Project not found.</Card></Shell>;
  return <Shell>
    <Card title="Project Detail">
      <div className="grid grid-cols-2 gap-2 text-sm">
        <p><strong>Name:</strong> {project.name}</p>
        <p><strong>Entity:</strong> {project.entity}</p>
        <p><strong>Status:</strong> {project.status}</p>
        <p><strong>Owner:</strong> {project.owner}</p>
        <p><strong>Due Date:</strong> {project.dueDate}</p>
        <p><strong>Risk:</strong> {project.risk}</p>
        <p><strong>Economics:</strong> {project.economics}</p>
        <p><strong>SharePoint/VDR:</strong> <a className="underline" href="https://example.com/vdr">Reference Link</a></p>
      </div>
    </Card>
  </Shell>;
}
