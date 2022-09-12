interface InputProps {
    defaultValue: string;
    type: string;
    value: string;
}

const Input = (inputProps: InputProps) => {
    return <input {...inputProps} />;
};

export default Input;
