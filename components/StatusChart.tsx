'use client';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export default function StatusChart({ data }: { data: { name: string; value: number }[] }) {
  const colors = ['#1f2937', '#475569', '#94a3b8', '#cbd5e1'];
  return <div className="h-56"><ResponsiveContainer><PieChart><Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>{data.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}</Pie><Tooltip /></PieChart></ResponsiveContainer></div>;
}
