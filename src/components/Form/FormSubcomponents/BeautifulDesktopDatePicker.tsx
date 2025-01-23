import {  LocalizationProvider,DatePicker } from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {minWidth } from "../ContactForm"

export default function BeautifulDesktopDatePicker(

    props: {
        value: string | undefined,
        onChange: (value: string | null | undefined) => void
    }
){
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
           label="Date"
           sx={{minWidth:minWidth}}
          

          
        />

   </LocalizationProvider>
    )
}