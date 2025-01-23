import { Select,MenuItem,ListItemText, SelectProps,SelectChangeEvent } from "@mui/material";

const skills = ["software","Architect","Designer","Business analyst"]

import {minWidth } from "../ContactForm"
export default function BeautifulSelect(props:{
    value: ""|string[]| undefined,
    onChange:(event: SelectChangeEvent<string[]>, child: React.ReactNode) => void
}){

    return (
        <Select {...props} id="skill-select"  sx={{minWidth:minWidth}}
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
    )
}