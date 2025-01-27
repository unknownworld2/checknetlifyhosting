export interface CustomSelectDataProps {
    value: number | string;
    label: string;
}

export interface CustomSelectDropdownProps {
    data: CustomSelectDataProps[];
    step?: number;
    label?: string;
    value?: CustomSelectDataProps;
    onChange?: (selectedValue: CustomSelectDataProps) => void;
    onBlur?: (event: React.FocusEvent<{ value: unknown }>) => void;
    helperText?: string;
    fullWidth?: boolean;
    size?: "small" | "medium";
    name?: string;
    className?: string;
    loading?: boolean;
}
