'use client';

import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  TooltipItem,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const data = {
  labels: [
    'Frontend',
    'Backend',
    'AI/ML',
    'DevOps',
    'System Design',
    'Cloud Services',
    'Database',
    'TypeScript/JS',
    'Python',
    'Team Leadership',
  ],
  datasets: [
    {
      label: 'Skill Proficiency (1-10)',
      data: [9, 8, 8, 7, 8, 8, 7, 9, 8, 7],
      backgroundColor: 'rgba(56, 189, 248, 0.3)',
      borderColor: 'rgba(56, 189, 248, 0.8)',
      borderWidth: 2,
      pointBackgroundColor: 'rgba(56, 189, 248, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(56, 189, 248, 1)',
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

type SkillLabels = {
  [key: string]: string;
};

const options = {
  responsive: true,
  scales: {
    r: {
      min: 0,
      max: 10,
      beginAtZero: true,
      ticks: {
        stepSize: 2,
      },
      grid: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      angleLines: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      pointLabels: {
        font: {
          size: 12,
          weight: 600,
        },
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function (context: TooltipItem<'radar'>) {
          const labels: SkillLabels = {
            Frontend: 'Frontend – React, Next.js with 3+ years of production experience',
            Backend: 'Backend – Proficient in Node.js, NestJS, Express development',
            'AI/ML': 'AI/ML – Experience with LLMs, RAG, LangChain, Deep Learning (NLP, CV)',
            DevOps: 'DevOps – Docker, Linux system administration, CI/CD optimization',
            'System Design':
              'System Design – Distributed systems design, high-availability architecture',
            'Cloud Services':
              'Cloud Services – AWS expertise (EKS, DynamoDB) and cloud infrastructure',
            Database: 'Database – Experience with relational and NoSQL databases',
            'TypeScript/JS': 'TypeScript/JS – Primary development language, type system expertise',
            Python: 'Python – AI/ML development and backend services',
            'Team Leadership': 'Team Leadership – Experience as CAO and team management',
          };
          return labels[context.label] || context.label;
        },
      },
    },
  },
};

export default function SkillRadarChart() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Skills Radar Chart</h2>
      <Radar data={data} options={options} />
    </div>
  );
}
