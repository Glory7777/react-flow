export const initialObjectNodes = [
  {
    id: "basegroup1",
    data: { label: "방어망", image: "NetworkSwitch2" },
    // className: 'light',
    type: "input",
    // connectable: false,
    style: {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      width: 640,
      height: 400,
    },
  },

  {
    id: "fire1",
    type: "input",
    data: { label: "방화벽", image: "Firewall" },
    parentNode: "basegroup1",
  },

  {
    id: "webserver1",
    type: "input",
    data: { label: "웹서버", image: "Server" },
    parentNode: "basegroup2",
  },
  {
    id: "webserver2",
    type: "output",
    data: { label: "메일서버", image: "ServerStorage" },
    parentNode: "basegroup2",
  },

  {
    id: "router3-1",
    type: "default",
    data: { label: "군인터넷망 스위치", image: "NetworkSwitch" },
    parentNode: "basegroup3",
  },
  {
    id: "dskt3-1",
    type: "'output'",
    data: { label: "단말PC1", image: "DesktopPc" },
    parentNode: "basegroup3",
  },
  {
    id: "dskt3-2",
    type: "'output'",
    data: { label: "단말PC2", image: "DesktopPc" },
    parentNode: "basegroup3",
  },
  {
    id: "dskt3-3",
    type: "'output'",
    data: { label: "단말PC3", image: "DesktopPc" },
    parentNode: "basegroup3",
  },
  {
    id: "dskt3-4",
    type: "'output'",
    data: { label: "단말PC4", image: "DesktopPc" },
    parentNode: "basegroup3",
  },
  {
    id: "dskt3-5",
    type: "'output'",
    data: { label: "단말PC5", image: "DesktopPc" },
    parentNode: "basegroup3",
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
