import { ChangeEvent } from "react";

interface InputProps {
    placeholder: string;
    type: string;
    name: string;
    value: string |number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = (inputProps: InputProps) => {
    return <input {...inputProps} />;
};

export default Input;
