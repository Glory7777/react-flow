// import React, { memo } from "react";
// import { Handle, Position } from "reactflow";
// import { IconNetworkSwitch } from "../../asset/Icons";
// import { NodeInput, NodeWrapper } from "../../flow-styles/NodeStyles";
// const OpenVswitchNode = ({ data, isConnectable }) => {
//   return (
//     <>
//       <Handle
//         type="target"
//         position={Position.Top}
//         isConnectable={isConnectable}
//       />
//       <NodeWrapper>
//         <IconNetworkSwitch width={48} height={48} />
//         <NodeInput
//           defaultValue={"군 인터넷망 스위치"}
//           onMouseDown={(e) => e.stopPropagation()}
//           onChange={(e) => data.onChange(e.target.value)}
//         />
//       </NodeWrapper>
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         isConnectable={isConnectable}
//       />
//     </>
//   );
// };

// export default memo(OpenVswitchNode);
