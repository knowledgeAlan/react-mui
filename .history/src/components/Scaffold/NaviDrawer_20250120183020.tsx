import { AppBar,Drawer, Toolbar, Typography } from "@mui/material"

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
                {[{text: "Input Form"},{text: "Contact card  Grid"}]}.map((nav,index) =>{
                    <ListItem key={navigator.text}>{nav}</ListItem>
                })
            </List>
        </Drawer>
        <main>

        </main>
    </>)
}