import { Droplets, Factory, RotateCcw } from "lucide-react";
import { Edge, MarkerType, Node } from "reactflow";

export const initialNodes:Node[] = [
  { id: '1', position: { x: 0, y: 50 },type: 'custom', data: { label: ' Oczyszczalnia wielka', icon:<RotateCcw/> }},
  { id: '2', position: { x: 0, y: 230 }, type: 'custom',data: { label: ' Źródło czerwone', icon:<Droplets/> }},
  { id: '3', position: { x: 200, y: 150 },type: 'custom', data: { label: ' Stacja przesyłowa', icon:<Factory/> }},
  { id: '4', position: { x: 470, y: 150 },type: 'custom', data: { label: ' Oczyszczalnia mała' , icon:<RotateCcw/> }},
  { id: '5', position: { x: 600, y: 250 },type: 'custom', data: { label: ' Żródło zielone' , icon:<Droplets/> }},
  
];

// ,type:'custom'
export const initialEdges: Edge[]  = [
  { id: 'e1-2', source: '1', target: '2',type:'floating',data:{endLabel:'opis'}, markerEnd: {
    type: MarkerType.ArrowClosed,
  },},
  { id: 'e1-3', source: '1', target: '3',type:'floating',data:{endLabel:'opis'}, markerEnd: {
    type: MarkerType.ArrowClosed,
  },},
  { id: 'e3-2', source: '3', target: '2',type:'floating',data:{endLabel:'opis'}, markerEnd: {
    type: MarkerType.ArrowClosed,
  },},
  { id: 'e3-4', source: '3', target: '4',type:'floating',data:{endLabel:'opis'}, markerEnd: {
    type: MarkerType.ArrowClosed,
  },},
  { id: 'e4-3', source: '4', target: '3',type:'floating',data:{endLabel:'opis'}, markerEnd: {
    type: MarkerType.ArrowClosed,
  },},
  { id: 'e4-5', source: '4', target: '5',type:'floating',data:{endLabel:'opis'}, markerEnd: {
    type: MarkerType.ArrowClosed,
  },},
];