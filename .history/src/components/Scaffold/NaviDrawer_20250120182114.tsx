import { AppBar,Drawer, Toolbar, Typography } from "@mui/material"

export default function NavDrawer(){
    return (<>

        <AppBar position="fixed">
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Advanced Material
                </Typography>
            </Toolbar>
        </AppBar>

        <Drawer>

        </Drawer>
        <main>

        </main>
    </>)
}