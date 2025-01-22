
import {Paper,FormControl,FormGroup,Autocomplete,TextField,Select, Menu,MenuItem,ListItemText} from "@mui/material"
const roles = ["UI","Kitchen","mouse"]
const skills = ["software","Architect","Designer","Business analyst"]
export default function ContactForm(){

    return (
        <Paper>
            <form>
                <FormControl>
                    <FormGroup row>
                        <TextField 
                            id="name"
                            name="name"
                            label="name"
                            variant="outlined"
                        />

                        <Autocomplete 
                            options={roles}
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
                    </FormGroup>
                    <FormGroup row>
                            <Select>
                                {skills.map((skillName)=>{
                                    return (
                                        <MenuItem>
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                    </FormGroup>
                </FormControl>
            </form>
        </Paper>
    )
}