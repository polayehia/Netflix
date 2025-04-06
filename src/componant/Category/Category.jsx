import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesList from "../Movies/MoviesList";
import { request } from "./../../API/Api";
import { useContext } from "react";
import { Authcontext } from "./../../AuthContext/AuthContext";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, color } from "@mui/system";
import { PaginationItem } from "@mui/material";

export default function Category() {
  const { id } = useParams();
  const [movCaregory, setMovCaregory] = useState([]);
  const { movie } = useContext(Authcontext);
  const [page, setPage] = useState("1");

  const handelpage = (e) => {
    setPage(e.target.innerText);
    
  };

  const fetchCategory = async () => {
    if (!movie) {
      try {
        const { data } = await axios.get(request.movieCategory(id, page));
        setMovCaregory(data);
        console.log("moviescategory", data);
      } catch (error) {
        console.log("error form fetchCategory", error);
      }
    } else {
      try {
        const { data } = await axios.get(request.tvCategory(id,page));
        setMovCaregory(data);
        console.log("tvcategory", data);
        console.log(data);
      } catch (error) {
        console.log("error form fetchCategory", error);
      }
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [page]);

  return (
    <>
      <div className="grid pt-20 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
        {movCaregory?.results?.map((movie) => (
          <MoviesList movie={movie}></MoviesList>
        ))}
      </div>
      <div className=" mx-auto  w-1/2">
        <Stack spacing={2}>
          <Box>
            <Pagination
              count={500}
              onChange={handelpage}
              value={page}
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    color: "white", // Set the text color of the numbers to white
                    bgcolor: "transparent",
                    fontSize: "16px", // Set transparent background for the pagination items
                    "&:hover": {
                      color: "red", // Hover effect (background color on hover)
                    },
                    "&:focus": {
                      color: "red",
                    },
                  }}
                />
              )}
            />
          </Box>
        </Stack>
      </div>
    </>
  );
}
