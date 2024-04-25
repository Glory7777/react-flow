export const initialNetworkNodes = [
  {
    id: "basegroup1",
    data: { label: "방어망", image: "SubNetwork" },
    // className: 'light',
    type: "group",
    // connectable: false,
    style: {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      width: 640,
      height: 400,
    },
  },
  {
    id: "router2",
    type: "group",
    data: { label: "DMZ 스위치", image: "DMZ" },
    parentNode: "basegroup2",
  },
  {
    id: "basegroup2",
    data: { label: "군인터넷망", image: "SubNetwork" },
    className: "light",
    type: "group",
    // connectable: false,
    style: {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      width: 160,
      height: 260,
      border: "1px solid gray",
    },
    parentNode: "basegroup1",
  },
];

export const initialEdges = [
  // { id: 'e1', source: 'router1', target: 'fire1', labelStyle: { fill: '#f6ab6c', fontWeight: 700 },style: { zIndex:999, stroke: "red", strokeWidth: 30, cursor: "pointer" } }
  { id: "e1", source: "router1", target: "fire1", type: "straight" },
  // { id: 'e1', source: 'router1', target: '' },
  // { id: 'e1-1', source: '1', target: '3' },
  // { id: 'e1-2', source: '2a', target: '4a' },
  // { id: 'e2', source: '3', target: '4b' },
  // { id: 'e2-1', source: '4a', target: '4b1' },
  // { id: 'e2-2', source: '4a', target: '4b1' },
  // { id: 'e2-3', source: '4a', target: '4b1' },
  // { id: 'e2-4', source: '4a', target: '4b1' },
  // { id: 'e2-5', source: '4a', target: '4b1' },
];
