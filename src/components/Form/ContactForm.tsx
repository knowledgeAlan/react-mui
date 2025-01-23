
import {Paper,FormControl,FormGroup,Autocomplete,TextField,Select, Stack,MenuItem,ListItemText, 
    FormLabel, Button, RadioGroup, FormControlLabel,Radio,
    prerelease,
    SelectChangeEvent,
    Dialog,Alert,AlertTitle
} from "@mui/material"
import {  LocalizationProvider,DatePicker } from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"

import { FormValues,contactData} from "../../data/ContactData"
import { useState } from "react"
import BeautifulTextField from "./FormSubcomponents/BeautifulTextField"
import BeautifulAutocomplete from "./FormSubcomponents/BeautifulAutocomplete"

const roles = ["UI","Kitchen","mouse"]
const skills = ["software","Architect","Designer","Business analyst"]
const  defaultPreference ="Work From Home";
export const minWidth = 300;
const today = new Date();


export default function ContactForm(){

    const getDefaultFormValues = ()=>{
        return {id:contactData.length + 1,name:"Jon",skills:["React"],startDate:`${today.getMonth()+1}/${today.getDay()}/${today.getFullYear()}`,preference:defaultPreference};
    }

    const [formValues,setFormValues] = useState<FormValues>(
        getDefaultFormValues()
    );

    const [alertOpen,setAlertOpen] = useState(false);

    const handleTextFiedlChange = (event:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>) =>{
         const {name,value} = event.target;
         setFormValues({
            ...formValues,
            [name]:value
         });
    }


    const handleAutoCompleteChange = (event: React.SyntheticEvent, value: string) => {

        setFormValues({

            ...formValues,
            role:value|| ""
        });
    }


    const handleSelectChange = (
        event: SelectChangeEvent<string[]>,
        child: React.ReactNode 
    ) => {

        const {target:{value}} = event;
        setFormValues({
            ...formValues,
            skills: typeof value === "string" ? value.split(",") : value,
        });
    }


    const handleDatePickerChange =(value: string | null | undefined)=>{
        console.log(value);
        const startDate = value as unknown as {month:()=>string,date:()=> string,year:()=>string};
       
        setFormValues({
            ...formValues,
            startDate: `${startDate.month() + 1}/${startDate.date()}/${startDate.year()}`
        });
    }


    const handleRadioChange=(event: React.ChangeEvent<HTMLInputElement>, value: string)=>{
            const {name} = event.target;

            setFormValues({
                ...formValues,
                [name]: value
            });
    }

    const handleSubmit = ()=>{
        contactData.push(formValues);
        setAlertOpen(true);
    }

    const handleClearClick = ()=>{
         clearValues();
    }

    const clearValues = ()=>{
        setFormValues({...getDefaultFormValues()});
        console.log(formValues);
    }

    const handleALertClick =() =>{
        setAlertOpen(false);
    }
    return (
        <>
        <Paper>
            <form>
                <FormControl>
                    <FormGroup row 
                        sx={{
                            padding:2,
                            justifyContent: "space-between",
                        }}
                    >
                        <BeautifulTextField 
                          
                             
                            value={formValues.name}
                            onChange={handleTextFiedlChange}
                        />

                        <BeautifulAutocomplete 
                            

                            value={formValues.role||""}

                            isOptionEqualToValue={(option,value)=> option === value || value === ""}

                            onInputChange={handleAutoCompleteChange}
                        />
                    </FormGroup>
                    <FormGroup row
                    sx={{
                        padding:2,
                        justifyContent: "space-between",
                    }}
                    >
                            <Select id="skill-select"  sx={{minWidth:minWidth}}
                                renderValue={(select:string[])=>select.join(',') }
                                value={formValues.skills || ""}

                                onChange = {handleSelectChange}
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
                                    label="Date"
                                    sx={{minWidth:minWidth}}
                                    onChange={handleDatePickerChange}

                                   
                                 />

                            </LocalizationProvider>
                    </FormGroup>


                    <FormGroup row   sx={{
                            padding:2,
                            justifyContent: "space-between",
                        }}>
                        <FormGroup>
                        <FormLabel component="legend">
                                    work Preference
                        </FormLabel>

                        <RadioGroup 
                            id="Peference-type-radio"
                            name="preference"
                            value={formValues.preference}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel 
                                control={<Radio/>}
                                label={defaultPreference}
                                value={defaultPreference}
                            />

                            <FormControlLabel 
                                control={<Radio/>}
                                label="Hybrid"
                                value="Hybrid"
                            />
                             <FormControlLabel 
                                control={<Radio/>}
                                label="In office"
                                value="In office"
                            />
                        </RadioGroup>
                        </FormGroup>
                        <Stack>
                        <Button onClick={handleSubmit}>Submit</Button>
                        <Button onClick={handleClearClick}>Clear</Button>
                    </Stack>
                        
                    </FormGroup>

                    
                </FormControl>
            </form>
        </Paper>

        <Dialog open={alertOpen} onClose={handleALertClick}>
            <Alert onClose={handleALertClick}>
                <AlertTitle>
                    Success
                </AlertTitle>
                Form Submitted
            </Alert>
        </Dialog>
        </>
    )
}