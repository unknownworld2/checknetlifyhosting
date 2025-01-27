"use client";

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

interface CustomStaticDatePickerProps {
    className?: string;
    selectedDate?: Date;
    handleDateChange?: (date: Date) => void;
    slotProps?: any;
    sx?: any;
}

function CustomStaticDatePicker({
    className,
    selectedDate,
    handleDateChange,
    slotProps,
    sx
}: CustomStaticDatePickerProps) {
    const [localDate, setLocalDate] = React.useState(dayjs(selectedDate));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    'StaticDatePicker'
                ]}
            >
                <DemoItem label="">
                    <StaticDatePicker
                        className={className}
                        defaultValue={localDate}
                        onChange={(newDate: Dayjs | null) => {
                            if (newDate) {
                                setLocalDate(newDate);
                                if (handleDateChange) {
                                    handleDateChange(newDate.toDate());
                                }
                            }
                        }}
                        {...slotProps}
                        sx={sx}
                    />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
export default CustomStaticDatePicker;