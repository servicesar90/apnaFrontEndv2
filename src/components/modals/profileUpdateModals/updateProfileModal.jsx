import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Chip,
  Input,
  Box,
  Autocomplete,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { showErrorToast, showSuccessToast } from "../../ui/toast";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../../../Redux/getData";
import { MapPin } from "lucide-react";

const DynamicModal = ({
  open,
  onClose,
  fields,
  label,
  type,
  setInitials,
  suggestions,
  metaData,
}) => {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: fields,
  });


const handleLocation = async () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return resolve(null);
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const address = await getAddressFromCoords(
            position.coords.latitude,
            position.coords.longitude
          );
          resolve(address);
        } catch (err) {
          showErrorToast("Error while converting coordinates.");
          resolve(null);
        }
      },
      (err) => {
        showErrorToast("Couldn't fetch the location");
        resolve(null);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
};

  const getAddressFromCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();

      return data?.display_name;
    } catch (err) {
      return "Unable to fetch address";
    }
  };

  const onSubmit = async (data) => {
    console.log(data)
    setButtonDisable(true);
    if (data.startDate) {
      const start = new Date(data.startDate);
      const end = new Date(data.endDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // remove time part

      let hasError = false;

      if (start > today) {
        setError("startDate", {
          type: "manual",
          message: "Start date must be in the past",
        });
        hasError = true;
      }

      if (end > today) {
        setError("endDate", {
          type: "manual",
          message: "End date must be in the past",
        });
        hasError = true;
      }

      if (start > end) {
        setError("startDate", {
          type: "manual",
          message: "Start date can't be after end date",
        });
        hasError = true;
      }

      if (hasError) return;
    }

    if (data.qualification) {
      if (
        !(data.qualification === "Graduate" ||
        data.qualification === "Postgraduate")
      ) {
        data.degree = null;
      }
    }

    if (!metaData.id) {
      const response = await metaData.onSubmitFunc(data);
      if (response && response !== "succesfull") {
        showSuccessToast("succesfully Updated");
        dispatch(fetchUserProfile());
        setButtonDisable(false);
        setInitials && setInitials();
        onClose();
      } else if (response && response === "succesfull") {
        showSuccessToast("succesfully Updated");
        setButtonDisable(false);
        onClose();
      } else {
        showErrorToast("Could Not update, please try again");
      }
    } else {
      const response = await metaData.onSubmitFunc(metaData.id, data);

      if (response) {
        showSuccessToast("succesfully Updated");
        dispatch(fetchUserProfile());
        setButtonDisable(false);
        setInitials && setInitials();
        onClose();
      } else {
        showErrorToast("Could Not update, please try again");
        setButtonDisable(false);
      }
    }
  };

  // Handle adding/removing values in multi-select
  const handleAddChip = (fieldName, value) => {
    const currentValues = watch(fieldName) || [];
    if (!currentValues.includes(value)) {
      setValue(fieldName, [...currentValues, value]);
    }
  };

  const handleRemoveChip = (fieldName, value) => {
    const currentValues = watch(fieldName) || [];
    setValue(
      fieldName,
      currentValues.filter((item) => item !== value)
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="xs"
      PaperProps={{
        sx: {
          borderRadius: "0.5rem",
        },
      }}
    >
      <DialogTitle className="w-full text-16 font-medium text-gray-800 mb-4">
        {metaData?.title || "Modal"}
      </DialogTitle>

      <DialogContent>
        <div className="rounded-md p-2 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
            className="flex rounded-lg flex-col gap-6 mt-2"
          >
            {Object.entries(fields).map(([key, value]) => {
              const fieldType = type?.[key] || "text";
              const fieldSuggestions = suggestions?.[key];

              // Render radio buttons
              if (fieldType === "radio" && Array.isArray(fieldSuggestions)) {
                return (
                  <FormControl key={key} component="fieldset">
                    <FormLabel component="legend" className="mb-1">
                      {label[key]}
                    </FormLabel>
                    <RadioGroup
                      row
                      defaultValue={value}
                      onChange={(e) => {
                        setButtonDisable(false);

                        if (key === "qualification") {
                          metaData.inputChange(e.target.value);
                        }
                      }}
                    >
                      {fieldSuggestions.map((option, idx) => {
                        const [keyName] = Object.keys(option); // e.g., "location"
                        const value = option[keyName];

                        return (
                          <FormControlLabel
                            key={idx}
                            value={value}
                            control={<Radio />}
                            label={keyName}
                            onChange={() => {
                              if (key === "qualification") {
                                metaData.inputChange(value);
                              }
                            }}
                            {...register(key)}
                          />
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                );
              }

              // Render select dropdown
              if (
                fieldSuggestions &&
                Array.isArray(fieldSuggestions) &&
                fieldType !== "multi"
              ) {
                return (
                  <TextField
                    key={key}
                    label={label[key]}
                    select
                    defaultValue={value}
                    {...register(key, {
                      onChange: (e) => setButtonDisable(false),
                    })}
                    fullWidth
                    variant="outlined"
                    size="small"
                    InputProps={{
                      sx: {
                        borderRadius: "0.375rem", // rounded-md
                        borderColor: "rgb(209 213 219)", // border-gray-300
                        "&.Mui-focused fieldset": {
                          borderColor: "#0784C9", // your secondary color
                        },
                      },
                    }}
                  >
                    {fieldSuggestions.map((option, idx) => (
                      <MenuItem key={idx} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                );
              }

              // Render multi-select (for multi-select type)
              if (fieldType === "multi" && Array.isArray(fieldSuggestions)) {
                const selectedValues = watch(key);

                return (
                  <div key={key}>
                    <FormLabel
                      component="legend"
                      className="mb-1"
                      sx={{ fontWeight: 700, fontSize: "0.9rem" }}
                    >
                      {label[key]}
                    </FormLabel>

                    <Box className="flex flex-wrap  rounded-2xl gap-2 mb-2">
                      {selectedValues?.map((value, idx) => (
                        <Chip
                          key={idx}
                          label={value}
                          onDelete={() => handleRemoveChip(key, value)}
                          className="cursor-pointer"
                        />
                      ))}
                    </Box>

                    <Autocomplete
                      freeSolo
                      options={fieldSuggestions}
                      inputValue={inputValue}
                      onInputChange={(event, newInputValue, reason) => {
                        if (reason === "input") {
                          setInputValue(newInputValue); // Update local input state
                          if (
                            key === "preferredJobCity" ||
                            key === "preferredJobRoles" ||
                            key === "skills" ||
                            key === "certification"
                          ) {
                            metaData.inputChange(newInputValue);
                          }
                        }
                      }}
                      onChange={(event, value) => {
                        if (value) {
                          handleAddChip(key, value);
                          setInputValue(""); // Clear input after selection
                          setButtonDisable(false);
                        }
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={label[key]}
                          variant="outlined"
                          size="small"
                          fullWidth
                          InputProps={{
                            ...params.InputProps,
                            sx: {
                              borderRadius: "0.375rem",
                              borderColor: "rgb(209 213 219)",
                              "&.Mui-focused fieldset": {
                                borderColor: "#0784C9",
                              },
                            },
                          }}
                        />
                      )}
                    />
                  </div>
                );
              }

              if (
                fieldType === "autocomplete" &&
                Array.isArray(fieldSuggestions)
              ) {
                
                return (
                  <Autocomplete
                    freeSolo
                    options={fieldSuggestions}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={label[key]}
                        variant="outlined"
                        size="small"
                        fullWidth
                        InputProps={{
                          ...params.InputProps,
                          sx: {
                            borderRadius: "0.375rem",
                            borderColor: "rgb(209 213 219)",
                            "&.Mui-focused fieldset": {
                              borderColor: "#0784C9",
                            },
                          },
                        }}
                      />
                    )}
                  />
                );
              }

              if (fieldType === "location") {
                return (
                  <Controller
                    name={key}
                    control={control}
                    defaultValue={value ?? null}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        key={key}
                        label={label[key]}
                        type="text"
                        fullWidth
                        variant="outlined"
                        size="small"
                        onChange={(e) => {
                          field.onChange(e);
                          setButtonDisable(false);
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={async () => {
                                  const loc = await handleLocation();
                                  if (loc) {
                                    console.log(loc)
                                    setValue(key, loc); 
                                  }
                                  setButtonDisable(false);
                                }}
                                edge="end"
                                aria-label="use current location"
                              >
                                <MapPin className="text-[#0784C9] mr-4" />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            paddingRight: 0,
                            borderRadius: "0.375rem",
                            "&.Mui-focused fieldset": {
                              borderColor: "#0784C9",
                            },
                          },
                        }}
                      />
                    )}
                  />
                );
              }
              // Render normal input
              return (
                <>
                  <TextField
                    key={key}
                    label={label[key]}
                    type={fieldType}
                    defaultValue={value}
                    {...register(key, {
                      onChange: (e) => setButtonDisable(false),
                      valueAsNumber: fieldType === "number",
                      validate:
                        fieldType === "number"
                          ? (val) => {
                              if (
                                val === undefined ||
                                val === null ||
                                val === ""
                              )
                                return "This field is required";
                              if (isNaN(val)) return "Enter a valid number";
                              if (val < 0) return "Value cannot be negative";
                              return true;
                            }
                          : undefined,
                    })}
                    fullWidth
                    variant="outlined"
                    size="small"
                    slotProps={{
                      inputLabel: { shrink: true },
                      sx: {
                        padding: "0.5rem",
                        borderRadius: "0.375rem", // rounded-md
                        borderColor: "rgb(209 213 219)", // border-gray-300
                        "&.Mui-focused fieldset": {
                          borderColor: "#0784C9", // your secondary color
                        },
                      },
                    }}
                  />

                  {errors[key] && (
                    <p className="text-red-500 text-[0.7rem] font-bold">
                      {errors[key].message}
                    </p>
                  )}
                </>
              );
            })}

            <div className="flex justify-end gap-3 pt-2">
              <Button
                className="px-2 py-1 text-[14px] bg-secondary text-secondary rounded-md cursor-pointer normal-case shadow-none"
                onClick={onClose}
                variant="outlined"
                color="primary"
              >
                Cancel
              </Button>
              <Button
                className="px-2 py-1 text-[14px] bg-secondary text-white rounded-md cursor-pointer normal-case shadow-none"
                type="submit"
                variant="contained"
                color="primary"
                disabled={buttonDisable}
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DynamicModal;
