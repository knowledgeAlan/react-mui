import { Autocomplete,TextField,AutocompleteProps } from "@mui/material";

import {minWidth } from "../ContactForm"
const roles = ["UI","Kitchen","mouse"]

export default function BeautifulAutocomplete(
    props:{
        value:string,
        onInputChange:(event: React.SyntheticEvent, value: string) => void
    }
) {

    return (
       <Autocomplete 

       {...props}
            options={roles}
            sx={{minWidth:minWidth}}
            renderInput={ (params)=>{
                return (
                    <TextField name="role" {...params} />
                )
            }}

            getOptionLabel={(roleOption)=>`${roleOption}`}

            renderOption={(props,option)=>{
                return (
                    <li {...props}>
                        {`${option}`}
                    </li>
                )
            }}  

            
        />
    )
}