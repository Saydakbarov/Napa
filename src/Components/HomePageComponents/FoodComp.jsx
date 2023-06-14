import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export default function FoodComp({ food }) {
   return (
    <>
      <Grid container sx={{ width: "100%" }} gap={4} justifyContent={"center"}>
        {food.map((v, i) => (
          <Grid key={v} item xl={3.7} lg={3.6} md={5} sm={8} xs={10} sx={{ mt: 4 }}>
            <Box
              sx={{
                background: "#1F1D2B",
                borderRadius: "16px",
                height: "100%",
                p: 2,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: "160px",
                  margin: "0 auto",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "160px",
                    marginTop: "-50px",
                    borderRadius: "50%",
                  }}
                  src={v.img}
                  alt=""
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontFamily: "Barlow",
                    fontSize: "18px",
                    mt: 1,
                  }}
                >
                  {v.food}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Barlow",
                    fontSize: "18px",
                    color: "#fff",
                    mt: 1,
                  }}
                >
                  {v.price}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Barlow",
                    mt: 1,
                    fontSize: "18px",
                    color: "#ABBBC2",
                  }}
                >
                  {v.bowls} Bowls available
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
