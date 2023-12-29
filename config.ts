import { Objects } from "./components/dashboard/table/Columns";

export async function getDataTable(): Promise<Objects[]> {
  return [
    {
      id: "1",
      name:"Oczyszczalnia wielka",
      kind:"OCZYSZCZALNIA",
      date:new Date('1999-07-11T23:20:21.817Z'),
      status:'OK'
    },
    {
      id: "2",
      name:"Źródła czerwone",
      kind:"ŹRÓDŁO",
      date:new Date('2020-05-12T23:50:21.817Z'),
      status:'ERROR'
    },
    {
      id: "3",
      name:"Stacja przemysłowa",
      kind:"STACJA",
      date:new Date('2017-02-14T23:53:21.817Z'),
      status:'OK'
    },
    {
      id: "4",
      name:"Oczyszczalnia mała",
      kind:"OCZYSZCZALNIA",
      date:new Date('2002-12-12T23:50:21.817Z'),
      status:'OK'
    },
    {
      id: "5",
      name:"Źródła zielone",
      kind:"ŹRÓDŁO",
      date:new Date('2021-05-22T23:50:21.817Z'),
      status:'ERROR'
    },
    //...
  ]
}