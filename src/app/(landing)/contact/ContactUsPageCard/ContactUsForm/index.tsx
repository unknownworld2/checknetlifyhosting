"use client";

import * as yup from "yup";
import { useEffect, useState } from "react";
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { LoadingButton } from '@mui/lab';
import { subjectsTypeList } from "./data";
import SendIcon from '@mui/icons-material/Send';
import { TextField, MenuItem, Select, InputLabel, FormControl, FormHelperText, Box, FormLabel, Typography, Divider } from "@mui/material";
import CustomTextField, { CustomErrorField, CustomLabel } from "@/components/base/CustomTextField";
// import CustomSwitch from "@/components/base/CustomSwitch";
// import CustomAutoComplete from "@/components/base/CustomAutoComplete";
// import CustomSelectDropdown from "@/components/base/CustomSelectDropdown";
// import { CustomSelectDataProps } from "@/components/base/CustomSelectDropdown/types";
// import { IProperties, useGetPropertiesQuery } from "@/redux/services/admin/propertiesApi";
// import { lastContactedList, firstContactedList, mlsNamesList, licensesTypeList, propertyTypeList, homeStyleList } from "./data";
// import { ILicenseDetails, useGetLicenseDetailsQuery } from "@/redux/services/admin/licenseDetailsApi";
import { formatPhoneNumber, isValidPhoneNumber, trimFormData } from "@/lib/methods";
import CustomAutoComplete from "@/components/base/CustomAutoComplete";
import { CustomSelectDataProps } from "@/components/base/CustomAutoComplete/types";

// -- 1. Contacts Table ✅
// -- CREATE TABLE Contacts (
// --     ContactID INT PRIMARY KEY AUTO_INCREMENT,
// --     FirstName VARCHAR(50) NOT NULL,
// --     LastName VARCHAR(50) NOT NULL,
// --     Email VARCHAR(100) NOT NULL,
// --     PhoneNumber VARCHAR(20),
// --     IsRealtor BOOLEAN DEFAULT FALSE,
// --     IsRealEstateAgent BOOLEAN DEFAULT FALSE,
// --     RealtorLicenseNumber VARCHAR(50),
// --     isClientWorkingWithAnotherAgent TINYINT(1) DEFAULT 0,
// --     BrokerID INT,
// --     clientsRealtorInfo LONGTEXT,
// --     LicenseDetailsID INT,
// --     FirstContacted VARCHAR(50),
// --     LastContacted VARCHAR(50),
// --     DateOfBirth VARCHAR(100),
// --     IsLeaseOrPurchase BOOLEAN DEFAULT FALSE,
// --     HomeStyle VARCHAR(50),
// --     PropertyType VARCHAR(50),
// --     PropertyID INT,
// --     FOREIGN KEY (LicenseDetailsID) REFERENCES LicenseDetails(LicenseDetailsID)
// -- );

const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email address"),
    phoneNumber: yup.string().required("Phone number is required"),
    subject: yup.object().shape({
        value: yup.string(),
        label: yup.string()
    }),
    message: yup.string().required("Message is required"),
});

interface ContactUsFormProps {
    className?: string;
    setCallRefetch: (value: boolean) => void;
}

const ContactUsForm = ({
    className,
    setCallRefetch
}: ContactUsFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitForm = async (data: yup.InferType<typeof validationSchema>) => {
        setIsSubmitting(true);

        alert("Under Construction. Please check back later.");

        // Validate and format phone number
        // const formattedPhoneNumber = formatPhoneNumber(data.phoneNumber);
        // if (!isValidPhoneNumber(formattedPhoneNumber)) {
        //     toast(`Invalid Phone Number. Please enter a valid 10-digit number.`, {
        //         icon: '❌',
        //         style: {
        //             borderRadius: '10px',
        //             background: '#333',
        //             color: '#fff',
        //         },
        //     });
        //     setIsSubmitting(false);
        //     return;
        // }

        const contactUsFormData = {
            "Name": data.name,
            "Email": data.email,
            "PhoneNumber": data.phoneNumber,
            "Subject": data.subject.value,
            "Message": data.message
        };

        console.log("Form Data just before sending to server ===> ", contactUsFormData);

        toast(`Contact Us Form Data Email : ${contactUsFormData.Email}`, {
            icon: '🔥',
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });

        try {
            // src\app\api\admin\contacts\create\route.ts
            const response = await fetch('/api/admin/contacts/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactUsFormData),
            });

            const result = await response.json();
            if (response.ok) {
                setCallRefetch(true);

                toast('Contact added successfully', {
                    icon: '✅',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });

                // Redirect or clear form on success
            } else {
                toast(`Error: ${result.error}`, {
                    icon: '❌',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                });
            }
        } catch (error: any) {
            toast(`Oops! An unexpected error occurred: ${error.message}`, {
                icon: '❌',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            });
        } finally {
            // Clear form fields
            formik.resetForm();

            setIsSubmitting(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phoneNumber: '',
            subject: {
                value: '',
                label: ''
            },
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const trimmedValues = trimFormData(values) as yup.InferType<typeof validationSchema>;
            submitForm(trimmedValues);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className={`${className} bg-white`}>
            <section className="lg:pr-8">
                {/* Name & Email */}
                <Box
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    component={"section"}
                >
                    {/* Name */}
                    <Box component={"div"}>
                        <CustomLabel htmlFor="name">Name</CustomLabel>
                        <CustomTextField
                            type="text"
                            id="name"
                            name="name"
                            className="border-2 border-solid border-indigo-400"
                            placeholder="Enter your name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <CustomErrorField>
                            {formik.touched.name && formik.errors.name}
                        </CustomErrorField>
                    </Box>
                    {/* Email */}
                    <Box component={"div"}>
                        <CustomLabel htmlFor="email">
                            Email
                        </CustomLabel>
                        <CustomTextField
                            type="text"
                            id="email"
                            name="email"
                            className="border-2 border-solid border-indigo-400"
                            placeholder="Enter your email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <CustomErrorField>
                            {formik.touched.email && formik.errors.email}
                        </CustomErrorField>
                    </Box>
                </Box>

                {/* Phone Number & Subject */}
                <Box
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4"
                    component={"section"}
                >
                    {/* Phone Number */}
                    <Box component={"div"}>
                        <CustomLabel htmlFor="phoneNumber">Phone Number</CustomLabel>
                        <CustomTextField
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="border-2 border-solid border-indigo-400"
                            placeholder="Enter your phone number (-- --- ----)"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <CustomErrorField>
                            {formik.touched.phoneNumber && formik.errors.phoneNumber}
                        </CustomErrorField>
                    </Box>

                    <Box component={"div"}>
                        <CustomAutoComplete
                            name="subject"
                            value={formik.values.subject}
                            label="Subject"
                            onChange={(selectedValue: CustomSelectDataProps) => {
                                formik.setFieldValue('subject', selectedValue);
                            }}
                            data={subjectsTypeList}
                            helperText="Select your License Details from the list"
                            fullWidth={true}
                            onBlur={formik.handleBlur}
                        />

                        <CustomErrorField>
                            {formik.touched.subject && formik.errors.subject}
                        </CustomErrorField>
                    </Box>
                </Box>

                {/* Message */}
                <Box
                    className="grid grid-cols-1 gap-4 mt-4"
                    component={"section"}
                >
                    <Box component={"div"}>
                        <CustomLabel htmlFor="message">Message</CustomLabel>
                        <CustomTextField
                            type="tel"
                            id="message"
                            name="message"
                            multiline={true}
                            className="border-2 border-solid border-indigo-400"
                            placeholder="Enter your message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        <CustomErrorField>
                            {formik.touched.message && formik.errors.message}
                        </CustomErrorField>
                    </Box>
                </Box>

                <div className="mb-2 mt-6">
                    <LoadingButton
                        color="primary"
                        fullWidth={true}
                        size="large"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:bg-gray-500 disabled:cursor-none"
                        type="submit"
                        loading={isSubmitting}
                        loadingPosition="start"
                        startIcon={<SendIcon />}
                        variant="contained"
                    >
                        {isSubmitting ? 'Please wait ...' : 'Submit'}
                    </LoadingButton>
                </div>
            </section>
        </form>
    )
}
export default ContactUsForm;