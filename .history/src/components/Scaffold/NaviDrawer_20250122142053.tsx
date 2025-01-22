import { AppBar,Drawer, Toolbar, Typography,List,ListItem } from "@mui/material"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import ContactForm from "../Form/ContactForm"
import ContactCardGrid from "../grid/ContactCardGrid"
import ContactDataGrid from  "../DataGrid/ContactDataGrid"
import ContactTable from "../table/ContactTable"

const drawerWidth = 200;

const simple

export default function NavDrawer(){
    return (
    <BrowserRouter>
    <>

        <AppBar position="fixed" sx={{zIndex:9999}}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Advanced Material UI System
                </Typography>
            </Toolbar>
        </AppBar>

        <Drawer variant="temporary" open={true}>

            <List>
                {[{text: "Input Form",route:"/form"},{text: "Contact card  Grid",route:"/grid"},
                {text: "Contact table",route:"/table"},
                {text: "Contact data  Grid",route:"/datagrid"}].map((nav,index) =>(
                    <ListItem key={nav.text}><Link to={nav.route}>{nav.text}</Link></ListItem>
                ))}
            </List>
        </Drawer>
        <main>
            <Routes>
            <Route path={"/"} element={<ContactForm/>} />
                <Route path={"/form"} element={<ContactForm/>} />
                <Route path={"/grid"} element={<ContactCardGrid/>} />
                <Route path={"/table"} element={<ContactTable/>} />
                <Route path={"/datagrid"} element={<ContactDataGrid/>} />
            </Routes>
        </main>
    </>
    </BrowserRouter>
    )
}