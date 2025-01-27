"use client";

import { sleep } from "@/lib/methods";
import { Fragment, useState } from "react";
import { CustomSelectDataProps, CustomSelectDropdownProps } from "@/components/base/CustomAutoComplete/types";
import { Autocomplete, CircularProgress, FormControl, FormHelperText, InputLabel, TextField } from "@mui/material";

const CustomAutoComplete = ({
    step,
    label,
    value,
    onChange,
    onBlur,
    data,
    helperText,
    fullWidth = false,
    size = "small",
    name,
    className,
    loading
}: CustomSelectDropdownProps) => {
    const [valueLocal, setValueLocal] = useState<CustomSelectDataProps>(value as CustomSelectDataProps);

    const [open, setOpen] = useState<boolean>(false);
    const [options, setOptions] = useState<readonly CustomSelectDataProps[]>([]);
    const [dataLoading, setDataLoading] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(true);

        (async () => {
            if (data.length > 0) {
                // If data already exists, no need to show the loader
                setOptions([...data]);
                return;
            }

            setDataLoading(true);
            let waitTime = 0;
            const maxWaitTime = 50 * 1e3; // 50 seconds in milliseconds
            const interval = 500; // Check every 500 milliseconds

            while (data.length === 0 && waitTime < maxWaitTime) {
                await sleep(interval);
                waitTime += interval;
            }

            setDataLoading(false);

            if (data.length > 0) {
                setOptions([...data]);
            } else {
                console.warn("Data is still empty after waiting 50 seconds.");
            }
        })();
    };

    const handleClose = () => {
        setOpen(false);
        setOptions([]);
    };

    return (
        <div className={`py-0 ${className}`}>
            <div>
                {!step ? (
                    <div>
                        {label && (
                            <div className="w-full ml-0 p-0">
                                <InputLabel htmlFor="customSelectDropDownId" className='text-gray-700 shadow-none text-lg font-semibold my-0'>{label}</InputLabel>
                            </div>
                        )}
                        <FormControl className="mt-2" fullWidth={fullWidth}>
                            <Autocomplete
                                id={`customSearchableDropDownId-${name}`}
                                value={valueLocal}
                                onChange={(event: any, newValue: CustomSelectDataProps | null) => {
                                    // console.log("New Value: ", newValue);

                                    setValueLocal(newValue as CustomSelectDataProps);
                                    if (onChange) {
                                        onChange(newValue as CustomSelectDataProps);
                                    }
                                }}
                                size={size}
                                open={open}
                                onOpen={handleOpen}
                                onClose={handleClose}
                                isOptionEqualToValue={(option: any, value) => option.label === value.label}
                                getOptionLabel={(option: any) => option.label}
                                options={options}
                                loading={dataLoading}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        name={name}
                                        onBlur={onBlur}
                                        label={label}
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <Fragment>
                                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                    {params.InputProps.endAdornment}
                                                </Fragment>
                                            ),
                                        }}
                                    />
                                )}
                            />
                            {helperText && <FormHelperText className="ml-0 mt-2">{helperText}</FormHelperText>}
                        </FormControl>
                    </div>
                ) : (
                    <div className="flex flex-row">
                        <div className="w-1/12">
                            <p className="text-primary w-8 h-8 bg-blue-300 text-xl rounded-full flex justify-center items-center">
                                {step}
                            </p>
                        </div>
                        <div className="w-11/12">
                            {label && (
                                <div className="w-full ml-0 p-0">
                                    <InputLabel htmlFor="customSelectDropDownId" className='text-gray-900 text-lg my-0 font-semibold'>{label}</InputLabel>
                                </div>
                            )}
                            <FormControl className="mt-2" fullWidth={fullWidth}>
                                <Autocomplete
                                    id={`customSearchableDropDownId-${name}`}
                                    value={valueLocal}
                                    onChange={(event: any, newValue: CustomSelectDataProps | null) => {
                                        console.log("New Value: ", newValue);

                                        setValueLocal(newValue as CustomSelectDataProps);
                                        if (onChange) {
                                            onChange(event);
                                        }
                                    }}
                                    size={size}
                                    open={open}
                                    onOpen={handleOpen}
                                    onClose={handleClose}
                                    isOptionEqualToValue={(option: any, value) => option.label === value.label}
                                    getOptionLabel={(option: any) => option.label}
                                    options={options}
                                    loading={dataLoading}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            name={name}
                                            onBlur={onBlur}
                                            label={label}
                                            InputProps={{
                                                ...params.InputProps,
                                                endAdornment: (
                                                    <Fragment>
                                                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                        {params.InputProps.endAdornment}
                                                    </Fragment>
                                                ),
                                            }}
                                        />
                                    )}
                                />
                                {helperText && <FormHelperText className="ml-0 mt-2">{helperText}</FormHelperText>}
                            </FormControl>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default CustomAutoComplete;