import React from "react";
import { useState } from "react";
import { Box, Text, Textarea } from "@chakra-ui/react";

const CustomInput = ({ onInputChange }) => {
    const [value, setValue] = useState("");

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);
        onInputChange(newValue);
    };

    return (
        <Box w="50%">
            <Text mb={2} fontSize="lg">
                Custom Input:
            </Text>
            <Textarea
                // height="75vh"
                placeholder="Enter Input here if Required!"
                resize="none"
                value={value}
                onChange={handleInputChange}
            />
        </Box>
    );
};

export default CustomInput;
