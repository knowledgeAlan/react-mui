
import {Paper,FormControl,FormGroup,Autocomplete,TextField} from "@mui/material"
const roles = [""]
const skills = [""]
export default function ContactForm(){

    return (
        <Paper>
            <Form>
                <FormControl>
                    <FormGroup row>
                        <TextField 
                            id="name"
                            name="name"
                            label="name"
                            
                        />
                    </FormGroup>
                </FormControl>
            </Form>
        </Paper>
    )
}