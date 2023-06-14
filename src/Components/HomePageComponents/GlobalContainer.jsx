import React, { useEffect, useState } from "react";
import { Delete, Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FoodComp from "./FoodComp";
import "./GlobalContainer.scss";
import { FoodData, HotDishes } from "../Data";

export default function GlobalContainer() {
  const [value, setValue] = React.useState("Hot Dishes");
  const [data, setData] = useState(HotDishes);

  const [select, setSelect] = useState(false);

  const [allPrice, setAllPrice] = useState();

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    setData(FoodData.find((el) => el.nomi === newValue)?.data);
  };
  const [age, setAge] = React.useState("Dine In");

  const handleChangeSelect = (event) => {
    setAge(event.target.value);
    setSelect(true);
  };

  const initialPrice = 0;

  const AllPrice = data.map((v) => v.price * v.count);
  const Price = AllPrice.reduce((v, e) => v + e, initialPrice);

  return (
    <Box>
      <Grid container gap={4}>
        <Grid item xl={7.8} lg={7.8} md={7.8} sm={7.8} xs={7.8} sx={{ p: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Barlow",
                  fontSize: "32px",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                Jaegar Resto
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Barlow",
                  fontSize: "16px",
                  color: "#E0E6E9",
                  fontWeight: "normal",
                }}
              >
                Tuesday, 2 Feb 2021
              </Typography>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  background: " #2D303E",
                  borderRadius: "8px",
                  p: 2,
                  width: "240px",
                }}
              >
                <Search sx={{ color: "#fff" }} />
                <input
                  type="search"
                  style={{
                    border: "none",
                    outline: "none",
                    background: "none",
                    color: "#fff",
                    width: "100%",
                  }}
                  placeholder="Search for food, coffe, etc.."
                  onChange={(e) => {
                    const arr = [];
                    FoodData.forEach((el) => {
                      arr.push(
                        ...el.data.filter((el) =>
                          el.food
                            .toLowerCase()
                            .includes(e.target.value.toLocaleLowerCase())
                        )
                      );
                    });
                    setData(arr);
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: "100%", mt: 3 }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  allowScrollButtonsMobile
                  variant="scrollable"
                >
                  <Tab label="Hot Dishes" value="Hot Dishes" />
                  <Tab label="Cold Dishes" value="Cold Dishes" />
                  <Tab label="Soup" value="Soup" />
                  <Tab label="Grill" value="Grill" />
                  <Tab label="Appetizer" value="Appetizer" />
                  <Tab label="Dessert" value="Dessert" />
                </TabList>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: 3,
                }}
              >
                <Typography
                  sx={{ fontFamily: "Barlow", fontSize: "20px", color: "#fff" }}
                >
                  Choose Dishes
                </Typography>
                <Box>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl
                      fullWidth
                      sx={{ background: "#1F1D2B", borderRadius: "16px" }}
                    >
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label={age}
                        onChange={handleChangeSelect}
                        sx={{ color: "#fff", borderRadius: "16px" }}
                      >
                        <MenuItem value="Dine In">Dine In</MenuItem>
                        <MenuItem value="To Go">To go</MenuItem>
                        <MenuItem value="Delivery">Delivery</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Box>
              <TabPanel value={value} children={<FoodComp food={data} />} />
            </TabContext>
          </Box>
        </Grid>

        <Grid
          item
          xl={3.9}
          lg={3.8}
          md={3.7}
          sm={3.8}
          xs={3.8}
          sx={{
            background: "#1F1D2B",
            p: 3,
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
          }}
        >
          <Box>
            <Typography
              sx={{ fontFamily: "Barlow", fontSize: "20px", color: "#fff" }}
            >
              Orders #34562
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", mt: 2 }}>
              <button
                style={{
                  padding: "10px 15px",
                  borderRadius: "10px",
                  outline: "none",
                  border: "1px solid gray",
                  background: select ? "#EA7C69" : "none",
                  color: select ? "white" : "#EA7C69",
                  cursor: "pointer",
                }}
              >
                {age}
              </button>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid gray",
                pb: 2,
                mt: 4,
              }}
            >
              <Typography sx={{ fontSize: "16px", color: "white" }}>
                Item
              </Typography>
              <Box sx={{ display: "flex", gap: "30px" }}>
                <Typography sx={{ fontSize: "16px", color: "white" }}>
                  Qty
                </Typography>
                <Typography sx={{ fontSize: "16px", color: "white" }}>
                  Price
                </Typography>
              </Box>
            </Box>

            <Box>
              {data.map((v, i) => (
                <>
                  <Box
                    key={v}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 3,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Avatar alt="Remy Sharp" src={v.img} />
                      <Box sx={{ color: "white" }}>
                        <Typography>{v.food.slice(0, 20)}...</Typography>
                        <Typography sx={{ color: "gray", fontSize: "14px" }}>
                          {v.price}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        gap: "30px",
                        alignItems: "center",
                      }}
                    >
                      <button
                        style={{
                          padding: "10px 20px",
                          borderRadius: "10px",
                          outline: "none",
                          background: "#393C49",
                          color: "white",
                          border: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          data.forEach((e) =>
                            e.img === v.img ? e.count++ : null
                          );
                          setData([...data]);
                        }}
                      >
                        {v.count}
                      </button>
                      <Typography sx={{ fontSize: "16px", color: "white" }}>
                        ${v.price * v.count}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                      gap: 1,
                    }}
                  >
                    <input
                      type="text"
                      style={{
                        width: "85%",
                        padding: "15px 20px",
                        borderRadius: "10px",
                        background: "#393C49",
                        outline: "none",
                        border: "none",
                        color: "#E0E6E9",
                      }}
                      placeholder="Order note..."
                    />
                    <button
                      style={{
                        borderRadius: "5px",
                        outline: "none",
                        background: "none",
                        color: "#FF7CA3",
                        border: "1px solid #FF7CA3",
                        width: "50px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        data.forEach((e) =>
                          e.count !== 0
                            ? e.img === v.img
                              ? e.count--
                              : null
                            : e.count
                        );
                        setData([...data]);
                      }}
                    >
                      <Delete />
                    </button>
                  </Box>
                </>
              ))}
              <Box sx={{ borderTop: "1px solid gray", mt: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
                  <Typography sx={{ color: "#ABBBC2" }}>Discount</Typography>
                  <Typography sx={{ color: "#ffff" }}>0</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ color: "#ABBBC2" }}>Sub Total</Typography>
                  <Typography sx={{ color: "#ffff" }}>
                    {Price.toString().slice(0, 5)}
                  </Typography>
                </Box>

                <button
                  style={{
                    width: "100%",
                    background: " #EA7C69",
                    borderRadius: "8px",
                    color: "white",
                    padding: "15px 20px",
                    marginTop: "20px",
                    cursor: "pointer",
                  }}
                >
                  Continue to Payment
                </button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
