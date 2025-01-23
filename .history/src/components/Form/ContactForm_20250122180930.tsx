
import {Paper,FormControl,FormGroup,Autocomplete,TextField,Select, Stack,MenuItem,ListItemText, FormLabel, Button, RadioGroup, FormControlLabel} from "@mui/material"
import { DesktopDatePicker, LocalizationProvider,DatePicker } from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
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
                            <Select id="skill-select" 
                                renderValue={(select:string[])=>select.join(',') }
                            >
                                {skills.map((skillName)=>{
                                    return (
                                        <MenuItem vocab={skillName} key={skillName}>
                                            <ListItemText primary={skillName}/>
                                        </MenuItem>
                                    )
                                })}
                            </Select>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                 <DatePicker 
                                    onChange={()=>{

                                    }}
                                 />

                            </LocalizationProvider>
                    </FormGroup>


                    <FormGroup>
                        <FormLabel component="legend">
                                    work Preference
                        </FormLabel>

                        <RadioGroup 
                            id="Peference-type-radio"
                            name="preference"
                        >
                            <FormControlLabel 
                                control={<Radio/>}
                                label="Work from home"
                            />
                        </RadioGroup>
                    </FormGroup>

                    <Stack>
                        <Button>Submit</Button>
                        <Button>Clear</Button>
                    </Stack>
                </FormControl>
            </form>
        </Paper>
    )
}