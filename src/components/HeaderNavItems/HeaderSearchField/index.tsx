"use client";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface HeaderSearchFieldProps {
    className?: string;
}

const HeaderSearchField = ({
    className
}: HeaderSearchFieldProps) => {
    return (
        <div className={className}>
            <Paper
                className="flex flex-row justify-start xlg:justify-center items-center gap-1 bg-headerSearchFieldBg sm:gap-4 px-1 py-0.5 w-full xlg:w-52 xxlg:w-72 rounded-3xl pl-4 h-10 ssm:h-12 text-white"
                component="form"
            >
                <IconButton type="button" aria-label="search">
                    <SearchIcon className="text-3xl text-white" />
                </IconButton>
                <InputBase
                    placeholder="Search here"
                    inputProps={{ 'aria-label': 'search here' }}
                    className='text-white text-lg'
                />
            </Paper>
        </div>
    );
}
export default HeaderSearchField;