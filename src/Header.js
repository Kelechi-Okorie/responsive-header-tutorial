import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import React, { useState } from "react";
  
const headersData = [
    {
        label: "Listings",
        href: "/listings",
    },
    {
        label: "Mentors",
        href: "/mentors",
    },
    {
        label: "My Account",
        href: "/account",
    },
    {
        label: "Log Out",
        href: "/logout",
    },
];
  
const useStyles = makeStyles((theme) => ({
    header: {
        backgroundColor: "#400CCC",
        paddingRight: "79px",
        paddingLeft: "118px",
        color: '#FFFEFE',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: 0
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
}));
  
export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerClose = () => setDrawerOpen(false);
    const handleDrawerOpen = () => setDrawerOpen(true);



    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
        return (
            <Link
                {...{
                    component: Link,
                    to: href,
                    color: "inherit",
                    style: { textDecoration: "none" },
                    key: label,
                }}
                >
                <MenuItem>{label}</MenuItem>
            </Link>
        );
        });
    };

    const femmecubatorLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            Femmecubator
        </Typography>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
        return (
            <Button
            {...{
                key: label,
                color: "inherit",
                to: href,
                component: Link,
                className: menuButton,
            }}
            >
            {label}
            </Button>
        );
        });
    };

    return (
        <header>
            <AppBar className={header} color="inherit" elevation={0}>
                <Toolbar className={toolbar}>
                    <Drawer
                        {...{
                            anchor: "left",
                            open: drawerOpen,
                            onClose: handleDrawerClose
                        }}
                        className={drawerContainer}
                    >
                        <div>{getDrawerChoices()}</div>
                    </Drawer>

                    <Hidden mdUp>
                        <IconButton
                        {...{
                            edge: "start",
                            color: "inherit",
                            "arial-label": "menu",
                            "arial-haspopup": "true",
                            onClick: handleDrawerOpen
                        }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    {femmecubatorLogo}

                    <Box component="span" style={{marginLeft: 'auto'}}>
                        <Hidden smDown>
                            <Box display="inline">
                                <div>{getMenuButtons()}</div>
                            </Box>
                        </Hidden>
                    </Box>
                </Toolbar>

            </AppBar>
        </header>
    );
}