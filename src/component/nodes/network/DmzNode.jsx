import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { IconDmz } from "../../asset/Icons";
import { NodeInput, NodeWrapper } from "../../flow-styles/NodeStyles";
const DmzNode = ({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <NodeWrapper>
        <IconDmz width={48} height={48} />
        <NodeInput
          defaultValue={"방어망 DMZ"}
          onMouseDown={(e) => e.stopPropagation()}
          onChange={(e) => data.onChange(e.target.value)}
        />
      </NodeWrapper>
    </>
  );
};

export default memo(DmzNode);

// import React, { memo } from "react";
// import { Handle, Position } from "reactflow";
// import { IconDmz } from "../../asset/Icons";
// import { NodeInput, NodeWrapper } from "../../flow-styles/NodeStyles";
// const DmzNode = ({ data, isConnectable }) => {
//   return (
//     <>
//       <Handle
//         type="target"
//         position={Position.Top}
//         isConnectable={isConnectable}
//       />
//       <NodeWrapper>
//         <IconDmz width={48} height={48} />
//         <NodeInput
//           defaultValue={"방어망 DMZ"}
//           onMouseDown={(e) => e.stopPropagation()}
//           onChange={(e) => data.onChange(e.target.value)}
//         />
//       </NodeWrapper>
//     </>
//   );
// };

// export default memo(DmzNode);
