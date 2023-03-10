import { useTheme } from "@emotion/react";
import {
	IconButton,
	Stack,
	TextField,
	Typography,
	Button,
	Avatar
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import "react-icons/ai";
import "react-icons/ri";
import {
	AiFillFileText,
	AiFillHome,
	AiFillMessage,
	AiOutlineSearch,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../helpers/authHelper";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";
//import { RiContrast2Line } from "react-icons/ri";
import { siteConfig } from "../config/seoConfig";

const Navbar = () => {
	const navigate = useNavigate();
	const user = isLoggedIn();
	const theme = useTheme();
	const username = user && isLoggedIn().username;
	const [search, setSearch] = useState("");
	const [searchIcon, setSearchIcon] = useState(false);
	const [width, setWindowWidth] = useState(0);

	useEffect(() => {
		updateDimensions();

		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	const mobile = width < 500;
	const navbarWidth = width < 600;

	const updateDimensions = () => {
		const width = window.innerWidth;
		setWindowWidth(width);
	};

	const handleLogout = async (e) => {
		logoutUser();
		navigate("/login");
	};

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/search?" + new URLSearchParams({ search }));
	};

	const handleSearchIcon = (e) => {
		setSearchIcon(!searchIcon);
	};

	return (
		<Stack mb={2}
			sx={{
				backgroundColor: '#802145', borderRadius: "2rem"
			}}
		>
			<Stack
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				sx={{
					pt: 2,
					pb: 2,
				}}
				spacing={!mobile ? 2 : 2}
			>
				<HorizontalStack>
					{/*  <AiFillFileText
            size={33}
            color={theme.palette.primary.main}
            onClick={() => navigate("/")}
          />*/}
					<Avatar
						sx={{
							size: 33,
							backgroundColor: "lightgray",

						}}
						src={"/assets/img/developer.gif"}
						onClick={() => navigate("/")}
					/>
					<Typography
						sx={{ display: mobile ? "none" : "block" }}
						variant={navbarWidth ? "h6" : "h4"}
						mr={1}
						color={theme.palette.primary.main}
					>
						<Link to="/" color="inherit">
							{siteConfig.seo.title}
						</Link>
					</Typography>
				</HorizontalStack>

				{!navbarWidth && (
					<Box component="form" onSubmit={handleSubmit}>
						<TextField
							size="small"
							label="Search ..."
							sx={{ flexGrow: 1, maxWidth: 300 }}
							onChange={handleChange}
							value={search}
						/>
					</Box>
				)}

				<HorizontalStack>
					{mobile && (
						<IconButton onClick={handleSearchIcon}>
							<AiOutlineSearch />
						</IconButton>
					)}

					<IconButton component={Link} to={"/"}>
						<AiFillHome />
					</IconButton>
					{user ? (
						<>
							<IconButton component={Link} to={"/messenger"}>
								<AiFillMessage />
							</IconButton>
							<IconButton component={Link} to={"/users/" + username}>
								<UserAvatar width={30} height={30} username={user.username} />
							</IconButton>
							<Button onClick={handleLogout}>Logout</Button>
						</>
					) : (
						<>
							<Button variant="text" sx={{ minWidth: 80 }} href="/signup">
								Sign Up
							</Button>
							<Button variant="text" sx={{ minWidth: 65 }} href="/login">
								Login
							</Button>
						</>
					)}
				</HorizontalStack>
			</Stack>
			{navbarWidth && searchIcon && (
				<Box component="form" onSubmit={handleSubmit} mt={2}>
					<TextField
						size="small"
						label="Search ..."
						fullWidth
						onChange={handleChange}
						value={search}
					/>
				</Box>
			)}
		</Stack>
	);
};

export default Navbar;
