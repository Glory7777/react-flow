import {Handle, Position} from 'reactflow';
import {IconDesktopPc, IconFirewall, IconNetworkSwitch2, IconServer} from "../../styles/Icons";
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


const FirewallNode = ({data}) => {

    return (
        <Wrapper>
            <IconFirewall width="55" height="55"/>
            <LabelText>{data.label}</LabelText>
            <Handle
                type="source"
                position={Position.Left}
                id="f-l"
                // style={handleStyle}
                isConnectable='true'
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="f-b"
                // style={handleStyle}
                isConnectable='true'
            />
        </Wrapper>
    );
}

export default FirewallNode