export const initialNodes = [

    {
        id: 'basegroup1',
        data: { label: '방어망' },
        position: { x: 0, y: 20 },
        // className: 'light',
        type:"group",
        // connectable: false,
        style: { backgroundColor: 'rgba(255, 255, 255, 0.5)', width: 640, height: 400 },
    },
    {
        id: 'router1',
        type: 'switchNode2',
        data: { label: '라우터' },
        position: { x: 140, y: 20 },
        parentNode: 'basegroup1'
    },
    {
        id: 'fire1',
        type: 'firewallNode',
        data: { label: '방화벽' },
        position: { x: 280, y: 20 },
        parentNode: 'basegroup1'
    },
    {
        id: 'basegroup2',
        data: { label: '방어망' },
        position: { x: 30, y: 120 },
        className: 'light',
        type:"group",
        // connectable: false,
        style: { backgroundColor: 'rgba(255, 255, 255, 0.5)', width: 160, height: 260, border: '1px solid gray' },
        parentNode: 'basegroup1'
    },

    {
        id: 'router2',
        type: 'switchNode',
        data: { label: 'DMZ 스위치' },
        position: { x: 20, y: 20 },
        parentNode: 'basegroup2'
    },
    {
        id: 'webserver1',
        type: 'webServerNode',
        data: { label: '웹서버' },
        position: { x: 0, y: 160 },
        parentNode: 'basegroup2'
    },
    {
        id: 'webserver2',
        type: 'webServerNode',
        data: { label: '메일서버' },
        position: { x: 60, y: 160 },
        parentNode: 'basegroup2'
    },

    {
        id: 'basegroup3',
        data: { label: '방어망' },
        position: { x: 220, y: 120 },
        className: 'light',
        type:"group",
        // connectable: false,
        style: { backgroundColor: 'rgba(255, 255, 255, 0.5)', width: 400, height: 260, border: '1px solid gray' },
        parentNode: 'basegroup1'
    },
    {
        id: 'router3-1',
        type: 'switchNode',
        data: { label: '군인터넷망 스위치' },
        position: { x: 140, y: 20 },
        parentNode: 'basegroup3'
    },
    {
        id: 'dskt3-1',
        type: 'desktopNode',
        data: { label: '단말PC1' },
        position: { x: 0, y: 160 },
        parentNode: 'basegroup3'
    },
    {
        id: 'dskt3-2',
        type: 'desktopNode',
        data: { label: '단말PC2' },
        position: { x: 80, y: 160 },
        parentNode: 'basegroup3'
    },
    {
        id: 'dskt3-3',
        type: 'desktopNode',
        data: { label: '단말PC3' },
        position: { x: 160, y: 160 },
        parentNode: 'basegroup3'
    },
    {
        id: 'dskt3-4',
        type: 'desktopNode',
        data: { label: '단말PC4' },
        position: { x: 240, y: 160 },
        parentNode: 'basegroup3'
    },
    {
        id: 'dskt3-5',
        type: 'desktopNode',
        data: { label: '단말PC5' },
        position: { x: 320, y: 160 },
        parentNode: 'basegroup3'
    },

];

export const initialEdges = [
    // { id: 'e1', source: 'router1', target: 'fire1', labelStyle: { fill: '#f6ab6c', fontWeight: 700 },style: { zIndex:999, stroke: "red", strokeWidth: 30, cursor: "pointer" } }
    { id: 'e1', source: 'router1', target: 'fire1',type: 'straight' },
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
