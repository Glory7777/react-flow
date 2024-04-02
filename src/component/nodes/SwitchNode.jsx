import {Handle, Position} from 'reactflow';
import {IconNetworkSwitch} from "../../styles/Icons";
import {styled} from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 0.3rem;
`

const LabelText = styled.span`
    //margin-top: 0.4rem;
    font-size: 0.8rem;
`


const SwitchNode = ({data}) => {

    return (
        <Wrapper>
            <Handle
                type="source"
                position={Position.Top}
                id="sn-1"
                // style={handleStyle}
                // isConnectable={props.isConnectable}
            />
            <IconNetworkSwitch width="55" height="55"/>
            <LabelText>{data.label}</LabelText>
            <Handle
                type="source"
                position={Position.Bottom}
                id="sn-2"
                // style={handleStyle}
                // isConnectable={props.isConnectable}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="sn-3"
                // style={handleStyle}
                // isConnectable={props.isConnectable}
            />
        </Wrapper>
    );
}

export default SwitchNode