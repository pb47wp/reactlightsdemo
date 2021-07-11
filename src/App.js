import React, {useState} from "react";
import styled from "styled-components";

const House = styled.div`
   position: relative;
   width: 500px;
   height: 500px;
   border: 10px solid black;
   margin: 0 auto;   
`;

const Wrapper = styled.div`
  position: absolute;
  top: ${props => (props.position === 'top' ? '20px' 
                    : props.position === 'middle' ? '190px'
                    : '360px')};
  left: 20px;
  background: ${props => (props.lampOn ? 'orange' : 'lightgrey')};
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

const Lamp = ({lampOn, position}) => {
   return <Wrapper lampOn={lampOn} position={position}>
        <div/>
   </Wrapper>
};

const Button = styled.button`
  position: absolute;
  top: ${props => (props.position === 'top' && props.bank === false ? '65px' 
                    : props.position === 'top' && props.bank === true ? '200px' 
                    : props.position === 'middle' ? '235px'
                    : props.position === 'bottom' && props.bank === true ? '270px'       
                    : '405px')};
  right: 20px;
  background: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  width: 80px;
  height: 30px;
  cursor: pointer;
`;

const LightSwitch = ({callback, position, switchOn, bank}) => (
  <Button onClick={callback} position={position} bank={bank}>
    {switchOn ? 'Switch Off' : 'Switch On'}
  </Button>
);

export default function App() {
    const[isLampTopOn, setIsLampTopOn] = useState(false)
    const[isLampMiddleOn, setIsLampMiddleOn] = useState(false)
    const[isLampBottomOn, setIsLampBottomOn] = useState(false)
    const handleLightSwitchTop = () => setIsLampTopOn(prev => !prev)
    const handleLightSwitchMiddle = () => setIsLampMiddleOn(prev => !prev)
    const handleLightSwitchBottom = () => setIsLampBottomOn(prev => !prev)
    return (
    <House>
        <Lamp lampOn={isLampTopOn} position='top'/>
        <Lamp lampOn={isLampMiddleOn} position='middle'/>
        <Lamp lampOn={isLampBottomOn} position='bottom'/>
        <LightSwitch
            name='top'
            callback={handleLightSwitchTop}
            switchOn={isLampTopOn}
            position='top'
            bank={false}
        />
        <LightSwitch
            name='top'
            callback={handleLightSwitchTop}
            switchOn={isLampTopOn}
            position='top'
            bank={true}
        />
        <LightSwitch
            name='middle'
            callback={handleLightSwitchMiddle}
            switchOn={isLampMiddleOn}
            position='middle'
        />
         <LightSwitch
            name='bottom'
            callback={handleLightSwitchBottom}
            switchOn={isLampBottomOn}
            position='bottom'
            bank={true}
        />
        <LightSwitch
            name='bottom'
            callback={handleLightSwitchBottom}
            switchOn={isLampBottomOn}
            position='bottom'
            bank={false}
        />
    </House>
  );
}
