import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import axios from "axios";
import { request } from "../../API/Api";
import { useState } from "react";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useEffect } from "react";
import { useContext } from "react";
import { Authcontext } from "../../AuthContext/AuthContext";
import { Box} from "@mui/material";


export default function Search() {
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 1000);
  const {setSearchResults}=useContext(Authcontext)
  const {movie} = useContext(Authcontext);
 

  const searchfetch = async () => {

    if (movie) {
      try {
        setSearchResults('');
        const {data} = await axios.get(request.searchTvByName(value));
        setSearchResults(data.results);
      } catch (error) {
      }

    }else{
      try {
        setSearchResults('');
        const {data} = await axios.get(request.searchMoviesByName(value));
        setSearchResults(data.results);
      } catch (error) {
      }
    }


    
  };

useEffect(() => {
    if (value) {
      searchfetch(value);
      
      
    }else{
      setSearchResults('');
      
    }
    return
  }, [value]);

 

const handelSearch = (e) => {
setSearch(e.target.value);
}

return (
  <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 4 }}>
    <Paper
      component="form"
      sx={{
        p: "4px 8px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#121212",
        borderRadius: "50px",
        border: "1px solid #555",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <InputBase
        sx={{
          ml: 2,
          flex: 1,
          color: "white",
          fontSize: "16px",
        }}
        value={search}
        onChange={handelSearch}
        
        placeholder={!movie?"Search Movie ":"Search TV Show" } 
        inputProps={{ "aria-label": "search content" }}
      />
     
    </Paper>

  </Box>
  
);



}
