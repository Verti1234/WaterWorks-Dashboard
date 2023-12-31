import { CSSProperties, useCallback, useEffect } from 'react';
import { useStore, getBezierPath, XYPosition, EdgeProps, MarkerType, EdgeLabelRenderer, NodeProps, Handle, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { getEdgeParams } from '@/lib/utils';



function EdgeLabel({ transform, label }: { transform: string; label: string }) {
  return (
    <div
      style={{
        fontSize: 8,
        transform,
      }}
      className=" absolute dark:bg-neutral-900 bg-white p-0 px-1 text-indigo-500 border-[1px] rounded-lg"
    >
      {label}
    </div>
  );
}



export function FloatingEdge({ id, source, target, markerEnd, style,data,targetX,targetY }:EdgeProps) {
  const sourceNode = useStore(useCallback((store) => store.nodeInternals.get(source), [source]));
  const targetNode = useStore(useCallback((store) => store.nodeInternals.get(target), [target]));

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(sourceNode, targetNode);
  const [edgePath] = getBezierPath({
    sourceX: sx,
    sourceY: sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: tx,
    targetY: ty,
  });
  
  const labelX = sx + (tx - sx) * 5 / 6; 
  const labelY = sy + (ty - sy) * 5 / 6;

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path "
        d={edgePath}
        markerEnd={markerEnd}
        style={style}
      />
      <EdgeLabelRenderer>
        {data.endLabel && (
          <EdgeLabel
            transform={`translate(-50%, -100%) translate(${labelX}px,${labelY}px)`}
            label={data.endLabel}
          />
        )}
      </EdgeLabelRenderer>

    </>
    
    
  );
}



export function CustomNode({ data }: NodeProps){
  
  return(
    <>
    <Handle type="target" position={Position.Top} className="!w-10 !h-5 !rounded-sm !border-none  !-z-50 !bg-indigo-500 " />
    <div className='transition-all px-4 py-2 text-sm shadow-md rounded-md bg-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-500 border-[1px] border-neutral-300 hover:border-indigo-400 hover:text-indigo-500 flex justify-center items-center gap-4'>
      <div>
        {data.icon}
      </div>
      <span className=' transition-all'>
      {data.label}
      </span>
    </div>
    <Handle type="source" position={Position.Bottom} className="!w-10 !h-5 !rounded-sm  !border-none !-z-50 !bg-indigo-500" />
  </>
  )

}