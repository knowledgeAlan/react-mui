import { AppBar,Drawer, Toolbar, Typography,List,ListItem } from "@mui/material"
import {} from 
export default function NavDrawer(){
    return (<>

        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Advanced Material UI System
                </Typography>
            </Toolbar>
        </AppBar>

        <Drawer variant="temporary" open={true}>

            <List>
                {[{text: "Input Form"},{text: "Contact card  Grid"}].map((nav,index) =>(
                    <ListItem key={nav.text}>{nav.text}</ListItem>
                ))}
            </List>
        </Drawer>
        <main>

        </main>
    </>)
}