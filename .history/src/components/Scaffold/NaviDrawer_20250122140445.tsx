import { AppBar,Drawer, Toolbar, Typography,List,ListItem } from "@mui/material"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import ContactForm from "../Form/ContactForm"
import ContactCardGrid from "../Form/ContactCardGrid"

export default function NavDrawer(){
    return (
    <BrowserRouter>
    <>

        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Advanced Material UI System
                </Typography>
            </Toolbar>
        </AppBar>

        <Drawer variant="temporary" open={true}>

            <List>
                {[{text: "Input Form",route:"/from"},{text: "Contact card  Grid",route:"/grid"}].map((nav,index) =>(
                    <ListItem key={nav.text}><Link to={nav.route}>{nav.text}</Link></ListItem>
                ))}
            </List>
        </Drawer>
        <main>
            <Routes>
                <Route path={"/form"} element={<ContactForm/>} />
                <Route path={"/grid"} element={<ContactCardGrid/>} />
                <Route path={"/table"} element={<ContactForm/>} />
                <Route path={"/datagrid"} element={<ContactForm/>} />
            </Routes>
        </main>
    </>
    </BrowserRouter>
    )
}