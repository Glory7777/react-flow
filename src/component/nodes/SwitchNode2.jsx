import {Handle, Position} from 'reactflow';
import {IconNetworkSwitch2} from "../../styles/Icons";
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


const SwitchNode2 = ({data}) => {

    return (
        <Wrapper>
            <IconNetworkSwitch2 width="55" height="55"/>
            <LabelText>{data.label}</LabelText>
            {/*
            <Handle
                type="source"
                position={Position.Bottom}
                id="sn2-1"
                // style={handleStyle}
                // isConnectable={props.isConnectable}
            />
            */}
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                // style={handleStyle}
                // isConnectable={props.isConnectable}
            />
        </Wrapper>
    );
}

export default SwitchNode2