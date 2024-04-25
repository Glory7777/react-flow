// // 노드의 속성과 관련된 정보(아이콘, 이름, 라벨, 스타일 등)를 정의

// NodeTypes.js

import { DefaultNode, GroupNode, InputNode, OutputNode } from "./CustomNodes";
import {
  IconSubNetwork,
  IconDmz,
  IconFirewall,
  IconNetworkSwitch,
  IconDesktopPc,
} from "./component/asset/Icons";

const nodeTypes = {
  SubNetwork: {
    data: {
      icon: IconSubNetwork,
      name: "SubNetwork",
      label: "방어망",
      style: { width: 200, height: 200 },
      category: "network",
    },
    component: GroupNode,
  },
  DMZ: {
    data: {
      icon: IconDmz,
      name: "DMZ",
      label: "방어망 DMZ",
      style: { width: 200, height: 200 },
      category: "network",
    },
    component: GroupNode,
  },
  UtmPfsense: {
    data: {
      icon: IconFirewall,
      name: "UtmPfsense",
      label: "방어막 방화벽",
      category: "object",
    },
    component: InputNode,
  },
  OpenVswitch: {
    data: {
      icon: IconNetworkSwitch,
      name: "OpenVswitch",
      label: "군 인터넷망 스위치",
      category: "object",
    },
    component: DefaultNode,
  },
  WindowsPc: {
    data: {
      icon: IconDesktopPc,
      name: "WindowsPc",
      label: "단일 PC",
      category: "object",
    },
    component: OutputNode,
  },
};

export default nodeTypes;

// import { DefaultNode, GroupNode, InputNode, OutputNode } from "./CustomNodes";
// import {
//   IconSubNetwork,
//   IconDmz,
//   IconFirewall,
//   IconNetworkSwitch,
//   IconDesktopPc,
// } from "./component/asset/Icons";

// const nodeTypes = {
//   SubNetwork: {
//     type: "group",
//     data: {
//       icon: IconSubNetwork,
//       name: "SubNetwork",
//       label: "방어망",
//       style: { width: 200, height: 200 },
//       category: "network",
//     },
//     component: GroupNode,
//   },
//   DMZ: {
//     type: "group",
//     data: {
//       icon: IconDmz,
//       name: "DMZ",
//       label: "방어망 DMZ",
//       style: { width: 200, height: 200 },
//       category: "network",
//     },
//     component: GroupNode,
//   },
//   UtmPfsense: {
//     type: "input",
//     data: {
//       icon: IconFirewall,
//       name: "UtmPfsense",
//       label: "방어막 방화벽",
//       category: "object",
//     },
//     component: InputNode,
//   },
//   OpenVswitch: {
//     type: "default",
//     data: {
//       icon: IconNetworkSwitch,
//       name: "OpenVswitch",
//       label: "군 인터넷망 스위치",
//       category: "object",
//     },
//     component: DefaultNode,
//   },
//   WindowsPc: {
//     type: "output",
//     data: {
//       icon: IconDesktopPc,
//       name: "WindowsPc",
//       label: "단일 PC",
//       category: "object",
//     },
//     component: OutputNode,
//   },
// };

// export default nodeTypes;
