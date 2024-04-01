import {Handle, Position} from 'reactflow';
import {IconNetworkSwitch2, IconServer} from "../../styles/Icons";
import {styled} from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 0.3rem;
`

const LabelText = styled.span`
    margin-top: 0.4rem;
    font-size: 0.8rem;
`


const WebServerNode = ({data}) => {

    return (
        <Wrapper>
            <IconServer width="55" height="55"/>
            <LabelText>{data.label}</LabelText>
            <Handle
                type="source"
                position={Position.Top}
                id="ws-1"
                // style={handleStyle}
                // isConnectable={props.isConnectable}
            />
        </Wrapper>
    );
}

export default WebServerNode