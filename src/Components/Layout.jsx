import { Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import headerLogo from "../assets/images/headerLogo.png"

const Layout = () => {
    const navLink=[
        {
            menuName:"Dashboards",
            link:"",
        },
        {
            menuName:"Order List",
            link:"orderlist",
        },
        {
            menuName:"Order Detail",
            link:"orderetail",
        },
        {
            menuName:"Customer",
            link:"customer",
        },
        {
            menuName:"Analytics",
            link:"analytics",
        },
        {
            menuName:"Customer Reviews",
            link:"customerreviews",
        },
        {
            menuName:"Foods",
            link:"foods",
        },
    ]

  return (
        <Grid container spacing={5}>
            <Grid item height={"96vh"} xs={3}>
                <Paper style={{padding:30,height:'100%'}} elevation={3}>
                <img style={{marginBottom:50}} width={"100%"} src={headerLogo} />
                    {
                        navLink.map((current,index)=>{
                            const {link,menuName}=current
                            return <Typography key={index}>
                                <Link state={"asdsd"} style={{color:'black', textDecoration:"none",fontSize:18,lineHeight:"50px"}} to={link} >{menuName}</Link>
                            </Typography>
                        })
                    }
                </Paper>
            </Grid>
            <Grid item xs={9} style={{paddingTop:50}}>

            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}
                >

                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search here"
                    inputProps={{ 'aria-label': 'Search here' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

                <Outlet/>
            </Grid>
        </Grid>
  )
}

export default Layout
