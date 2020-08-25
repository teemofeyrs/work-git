import React from "react";
import {Field} from "redux-form";

const CreateField = (id, name, type, Component, validate, ...props) => {

    return (
            <Field id={id}
                   name={name}
                   type={type}
                   component={Component}
                   validate={validate}
                   {...props}
            />
    );
};

export default CreateField;