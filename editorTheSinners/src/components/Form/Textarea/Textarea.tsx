export interface TextareaProps {
    name: string;
    rows: number;
    cols: number;
    readOnly: boolean;
    value: string;
}

const Textarea = (textareaProps: TextareaProps) => {
    return <textarea {...textareaProps} />;
};

export default Textarea;
