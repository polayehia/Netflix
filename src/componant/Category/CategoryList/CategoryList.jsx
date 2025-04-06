import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import callApi from "../../../hooks/callApi";
import { request } from "../../../API/Api";
import axios from "axios";
import horro from "../../../assets/daniel.jpg";
import { Link } from "react-router-dom";
import Switch from "../../Switch/Switch";
import { useContext } from "react";
import { Authcontext } from "../../../AuthContext/AuthContext";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: (theme.vars || theme).palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function CategoryList() {
const {movie}=useContext(Authcontext)

  return (
    <>
     

      <Box sx={{ width: "full", minHeight: 829, paddingTop:'6rem', margin: "auto" }}>
        <Masonry columns={{ xs: 2, sm: 3 }} spacing={2}>
          {(!movie ? movies : tv).map((item, index) => (
            
              <div className=" relative  group" key={index}>
                {/* <Label
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Label> */}
                <Link to={`/category/${item.id}`}>
                  <img
                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=162&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderBottomLeftRadius: 4,
                      borderBottomRightRadius: 4,
                      display: "block",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
                    <span className=" absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  text-2xl text-white font-bold">{item.title}</span>
                  </div>
                </Link>
              </div>
            
          ))}
        </Masonry>
<div className="fixed bottom-5 right-0">
        <Switch></Switch>

</div>
      </Box>
    </>
  );
}

const tv = [
  {
    img: "https://wallpapercave.com/dwp2x/wp12611403.jpg",
    title: "Action & Adventure",
    id: 10759,
  },
  {
    img: "https://wallpapercave.com/uwp/uwp4444968.webp",
    title: "Animation",
    id: 16,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp4995639.jpg",
    title: "Mystery",
    id: 9648,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp5391967.jpg",
    title: "Comedy",
    id: 35,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp5677407.jpg",
    title: "Drama",
    id: 18,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp4449196.jpg",
    title: "Family",
    id: 10751,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp12978985.jpg",
    title: "Sci-Fi & Fantasy",
    id: 10765,
  },
  {
    img: "https://wallpapercave.com/dwp2x/OAiK301.jpg",
    title: "War & Politics",
    id: 10768,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp11507445.jpg",
    title: "Documentary",
    id: 99,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp12026537.jpg",
    title: "Western",
    id: 37,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp13844848.jpg",
    title: "Kids",
    id: 10762,
  },
  {
    img: "https://wallpapercave.com/wp/wp5489932.jpg",
    title: "Reality",
    id: 10764,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp2094665.jpg",
    title: "Talk",
    id: 10767,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp7847763.jpg",
    title: "News",
    id: 10763,
  },
];


const movies = [
  {
    img: "https://c4.wallpaperflare.com/wallpaper/478/888/1024/keanu-reeves-john-wick-gun-movies-wallpaper-preview.jpg",
    title: "Action",
    id: 28,
  },
  {
    img: "https://images.unsplash.com/photo-1611787640592-ebf78080d96e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Horror",
    id: 27,
  },
  {
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/21936.jpg",
    title: "Animation",
    id: 16,
  },
  {
    img: "https://wallpapercave.com/wp/wp11029183.jpg",
    title: "Comedy",
    id: 35,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp5017472.jpg",
    title: "Adventure",
    id: 12,
  },
  {
    img: "https://wallpapercave.com/wp/wp9979776.jpg",
    title: "Documentary",
    id: 99,
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/malcolm-x-everett-651db15bbc4a4.jpg?crop=1xw:1xh;center,top&resize=980:*",
    title: "Drama",
    id: 18,
  },
  {
    img: "https://images4.alphacoders.com/139/thumb-1920-1392253.jpg",
    title: "Family",
    id: 10751,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp4396296.jpg",
    title: "Fantasy",
    id: 14,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp2386595.jpg",
    title: "History",
    id: 36,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp4013069.jpg",
    title: "Music",
    id: 10402,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp4138504.jpg",
    title: "Mystery",
    id: 9648,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp4040634.jpg",
    title: "War",
    id: 10752,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp3285541.jpg",
    title: "Thriller",
    id: 53,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp6971752.jpg",
    title: "Science Fiction",
    id: 878,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp2100208.jpg",
    title: "Western",
    id: 37,
  },
  {
    img: "https://wallpapercave.com/dwp2x/wp1830559.jpg",
    title: "Romance",
    id: 10749,
  },
];
