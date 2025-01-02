import React from 'react';
import { Handle, Position } from 'reactflow';
import { Person } from '@/types';

interface FamilyNodeProps {
  data: Person;
}

export default function FamilyNode({ data }: FamilyNodeProps) {
  return (
    <div className="px-4 py-2 shadow-lg rounded-lg bg-white border-2 border-gray-200">
      <Handle type="target" position={Position.Top} />
      <div className="font-bold text-lg">{data.firstName} {data.lastName}</div>
      <div className="text-sm text-gray-500">{data.birthDate}</div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}