// CustomNodes.js
import React, { memo } from "react";
import PropTypes from "prop-types";
import { Handle, Position } from "reactflow";
import {
  NodeInput,
  NodeWrapper,
  GroupWrapper,
} from "./component/flow-styles/NodeStyles";

export const InputNode = memo(({ data }) => {
  return (
    <NodeWrapper>
      {data.icon && <data.icon />}
      <NodeInput>{data.label}</NodeInput>
      <Handle type="source" position={Position.Bottom} />
    </NodeWrapper>
  );
});

InputNode.displayName = "InputNode";
InputNode.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.elementType,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export const DefaultNode = memo(({ data }) => {
  return (
    <NodeWrapper>
      {data.icon && <data.icon />}
      <NodeInput>{data.label}</NodeInput>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </NodeWrapper>
  );
});

DefaultNode.displayName = "DefaultNode";
DefaultNode.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.elementType,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export const OutputNode = memo(({ data }) => {
  return (
    <NodeWrapper>
      {data.icon && <data.icon />}
      <NodeInput>{data.label}</NodeInput>
      <Handle type="target" position={Position.Top} />
    </NodeWrapper>
  );
});

OutputNode.displayName = "OutputNode";
OutputNode.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.elementType,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export const GroupNode = memo(({ data }) => {
  return (
    <GroupWrapper style={data.style}>
      {data.icon && <data.icon />}
      <NodeInput>{data.label}</NodeInput>
    </GroupWrapper>
  );
});

GroupNode.displayName = "GroupNode";
GroupNode.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.elementType,
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
  }).isRequired,
};

// export const CustomNode = memo(({ data }) => {
//   const { icon: IconComponent, label } = data;
//   return (
//     <NodeWrapper>
//       {IconComponent && <IconComponent />}
//       <NodeInput value={label} />
//     </NodeWrapper>
//   );
// });
// CustomNode.displayName = "CustomNode";

// CustomNode.propTypes = {
//   data: PropTypes.shape({
//     icon: PropTypes.node,
//     label: PropTypes.string.isRequired,
//   }).isRequired,
// };

// export const GroupNode = memo(({ data, selected }) => (
//   <GroupWrapper selected={selected} style={data.style}>
//     <CustomNode data={data} />
//   </GroupWrapper>
// ));
// GroupNode.displayName = "GroupNode";

// GroupNode.propTypes = {
//   data: PropTypes.shape({
//     icon: PropTypes.node,
//     label: PropTypes.string.isRequired,
//     style: PropTypes.object,
//   }).isRequired,
//   selected: PropTypes.bool,
// };

// export const InputNode = memo((props) => (
//   <CustomNode {...props}>
//     <Handle type="source" position={Position.Bottom} />
//   </CustomNode>
// ));
// InputNode.displayName = "InputNode";

// export const DefaultNode = memo((props) => (
//   <CustomNode {...props}>
//     <Handle type="target" position={Position.Top} />
//     <Handle type="source" position={Position.Bottom} />
//   </CustomNode>
// ));
// DefaultNode.displayName = "DefaultNode";

// export const OutputNode = memo((props) => (
//   <CustomNode {...props}>
//     <Handle type="target" position={Position.Top} />
//   </CustomNode>
// ));
// OutputNode.displayName = "OutputNode";

// export default {
//   GroupNode,
//   InputNode,
//   DefaultNode,
//   OutputNode,
// };
