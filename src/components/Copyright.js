import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Player from "./Player";
import { siteConfig } from "../config/seoConfig";

const Copyright = () => {
	return (
		<Typography variant="subtitle1" color="text.secondary">
			Copyright © 2022 - {new Date().getFullYear()}
			<Link to="/" color="inherit">
				{siteConfig.seo.title} - {siteConfig.author.name} {"<"} {siteConfig.author.email} {">"}
			</Link>

			<Player url={"/assets/music/Soltanek.mp3"} text="play music" />
		</Typography>
	);
};

export default Copyright;
