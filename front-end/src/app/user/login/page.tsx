"use client";

import { VisibilityIcon, VisibilityOffIcon } from "@/app/icons/Icons";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        height: "100vh", // full viewport height
        display: "flex",
        justifyContent: "center", // horizontal center
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          width: "40rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography>Sign in</Typography>

        <FormControl
          sx={{ m: 1, width: "auto", gap: "20px", marginTop: "1.5rem" }}
          variant="outlined"
        >
          <TextField required id="outlined-required" label="Email" />

          <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      // onClick={}
                      // onMouseDown={handleMouseDownPassword}
                      // onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button variant="contained" color="secondary">
            Sign in
          </Button>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default SignInPage;
