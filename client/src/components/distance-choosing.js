import {
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import UserDataContext from "../usersData/userContext";
import ConfirmAlert from "./confirm-prefernces-alert";
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function ChoosingDistance() {
  const navigate = useNavigate();
  const [userInputs, setInputs] = useState([]);
  const userDataTemp = useContext(UserDataContext);


  const handleChange = (value) => {
    setInputs(value)
  };

  const handleSaveButton = () => {
    setInputs(userInputs);
    saveFunction();
  };

  const saveFunction = () => {
    userDataTemp['distance'] = userInputs;
    console.log(userDataTemp);
  }

  const handleDoneButton = () => {
    console.log(userDataTemp)
    navigate('/route')
  }

  const btnRef = useRef();

  return (
    <>
      <NumberInput min={1} max={20} onChange={handleChange}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        ref={btnRef}
        colorScheme="green"
        marginTop="4"
        width="30%"
        onClick={handleSaveButton}
      >
        Save
      </Button>
      <Button
        ref={btnRef}
        colorScheme="teal"
        marginTop="4"
        width="30%"
        onClick={handleDoneButton}
      >
        Done
      </Button>
    </>
  );
}

export default ChoosingDistance;
