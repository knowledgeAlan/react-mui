
import {Paper,FormControl,FormGroup,Autocomplete,TextField} from "@mui/material"
const roles = [""]
const skills = [""]
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
                    </FormGroup>
                </FormControl>
            </form>
        </Paper>
    )
}