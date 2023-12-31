"use client"
import { useState, useCallback, useMemo } from 'react';
import { initialEdges, initialNodes } from '@/constants/NodesEdges';
import ReactFlow, { Controls, Background,applyEdgeChanges, applyNodeChanges, NodeChange, EdgeChange, Connection, addEdge, Panel, EdgeTypes, MarkerType, DefaultEdgeOptions  } from 'reactflow';
import 'reactflow/dist/style.css';
import { Info } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CustomNode, FloatingEdge } from './CustomNodesEdges';
import { toast } from "sonner"


type tNode = {
  id: string
  position:{
    x:number
    y:number
  }
  data: {
    label: string

  }
} 


export const Flow = () => {

  const [nodes, setNodes] = useState(initialNodes)
  const [edges, setEdges] = useState(initialEdges)
  const [node, setNode] = useState<tNode>()
  const [menu, setMenu] = useState(false);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );


  const onConnect = useCallback(
    (params:Connection) =>
      setEdges((eds) =>
        addEdge({ ...params, type: 'floating',data:{endLabel:'opis'}, markerEnd: { type: MarkerType.ArrowClosed } }, eds)
      ),
    [setEdges]
  );
  const onNodeClick = useCallback(
    (event: React.MouseEvent, node: tNode) => {
      event.preventDefault();

      // console.log(node);
      setNode(node)
      setMenu(true);

      
    },
    [setMenu]
  );
  const onPaneClick = useCallback(() => setMenu(false), [setMenu]);

  const ondelete = useCallback((id: string) => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    console.log('usunieto node o id: '+ id);
    setMenu(false)
    
  },[setMenu,setNodes]);

  const edgeTypes = useMemo(()=> ({
    floating: FloatingEdge,
  }),[])

  const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
  };

  const nodeTypes = useMemo(
    () => ({
      custom: CustomNode,
    }),
    [],
  );

  return (
    <ReactFlow 
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={onNodeClick}
      onPaneClick={onPaneClick}
      fitView
    >
        <Background />
        <Controls />
        <Panel position='top-right'>
          <Dialog>
          <DialogTrigger><Info /></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pomoc przy poruszaniu się po diagramie</DialogTitle>
              <DialogDescription className='flex flex-col gap-2'>
                <div>
                  <span className='bg-muted p-1 rounded-sm'>[Left-Click]</span><span> - zaznacza kliknięty obiekt</span>
                </div>
                <div>
                  <span className='bg-muted p-1 rounded-sm'>[Backspace]</span><span> - usuwa zaznaczony obiekt</span>
                </div>
                
                
                
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Zamknij
              </Button>
            </DialogClose>
          </DialogFooter>
          </DialogContent>
        </Dialog>
        </Panel>
        <Panel position='bottom-right' className='p-2'>
          <Button onClick={() => {setNodes(initialNodes),setEdges(initialEdges)}} className='dark:bg-indigo-600 dark:hover:bg-indigo-400 dark:text-white'>Zresetuj</Button>
        </Panel>
        {menu && 
          <Panel position='top-left' >
            <Card >
              <CardHeader className="px-4 pt-2 pb-2   ">
                <CardTitle className='text-lg'>{node?.data.label}</CardTitle>
              </CardHeader>
              <CardContent >
                <div className='flex flex-col justify-center '>
                  <span>Id: {node?.id}</span>
                  <h3 className='font-semibold'>Position</h3>
                  <div className='flex justify-between gap-2 pb-2'>
                    <span>x: {node && (node.position.x).toFixed(2)}{' '}</span>
                    <span>y: {node && (node.position.y).toFixed(2)}</span>
                  </div>
                  <Button onClick={() =>{ 
                    node && ondelete(node.id),
                    toast("Węzeł pomyślnie usunięty", {
                      description: `Usunięto węzęł o id ${node?.id}`
                    })
                  }} className='dark:bg-indigo-600 dark:hover:bg-indigo-400' >Usuń</Button>
                </div>
              </CardContent>
            </Card>
          </Panel>}
    </ReactFlow>
  );
};
