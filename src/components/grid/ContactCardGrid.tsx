import { Grid,container,Card, CardHeader, CardContent, Avatar, Typography,List, ListSubheader } from "@mui/material";
import { contactData } from "../../Data/ContactData";
export default function ContactCardGrid(){
    return (
        <Grid container spacing={2} sx={{width:700}}>
            { contactData.map((contract)=>{
                return (
                  <Grid item key={contract.name}> 
                    <Card sx={{width:300}}>
                        <CardHeader
                          title={contract.name}
                          subheader={contract.role}

                          avatar={
                          <Avatar>
                              {contract.name?.substring(0,1).toUpperCase()}
                          </Avatar>}
                        />

                        <CardContent>
                            <Typography>
                              <b>Start Date:{contract.startDate}</b>
                            </Typography>
                            <Typography>
                              <b>Work Preference:{contract.preference}</b>
                            </Typography>
                            <List

                              sx={{listStyle: 'list-item',listStyleType:"circle",paddingLeft:2}}
                              subheader={
                                <ListSubheader sx={{right:16,position:"inherit",fontSize:"1.25rem",color:"black",paddingLeft:0}}>
                                  Skills:
                                </ListSubheader>
                              }
                            >
                                { contract.skills?.map((skill)=>{
                                  return <li style={{paddingBottom:"2px"}}>{skill}</li>
                                })}
                            </List>
                        </CardContent>
                    </Card>
                  </Grid>  
                )
            })
        }
        </Grid>
    )
}