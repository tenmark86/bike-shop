import React from "react";
import { Input } from "./styled";

function TextField({ placeholder, error, errorLabel, ...rest }) {
    return (
        <Input placeholder={error ? errorLabel : placeholder} error={error} {...rest} />
    )
}

export default TextField;
