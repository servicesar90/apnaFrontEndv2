import React from "react";
import {
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Slider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const filterOptions = {
  datePosted: [
    { label: "All", value: "all" },
    { label: "Last 24 hours", value: "last24" },
    { label: "Last 3 days", value: "last3" },
    { label: "Last 7 days", value: "last7" },
  ],
 workMode: [
    { label: "Work From Home", value: "Remote" },
    { label: "Work From Office", value: "Onsite" },
    { label: "Work From Field", value: "field-work" },
    { label: "Hybrid", value: "Hybrid" },
  ],
 workType: [
    { label: "Full Time", value: "Full-Time" },
    { label: "Part Time", value: "Part-Time" },
    { label: "Internship", value: "Internship" },
    { label: "Contract", value: "Contract" },
  ],
workShift: [
    { label: "Day Shift", value: "Day Shift" },
    { label: "Night Shift", value: "Night Shift" },
  ],
sortBy: [
    { label: "Salary - High to low", value: "Salary - High to low" },
    { label: "Date Posted - New to Old", value: "Date posted - New to Old" },
  ],
};

const Sidebar = ({ filters, setFilters, salary, setSalary }) => {
  
  
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <Card
      sx={{ padding: 2, width: "100%", border: "none", boxShadow: "none" }}
      elevation={0}
    >
      {Object.entries(filterOptions).map(([key, options]) => (
        <Accordion key={key} disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#4B5565", // You can adjust this to match your theme
                fontWeight: 500,
                textTransform: "capitalize",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {key.replace(/([A-Z])/g, " $1")}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl component="fieldset">
              <RadioGroup
                value={filters[key] || ""}
                onChange={(e) => updateFilter(key, e.target.value)}
              >
                {options.map((option) => {
                  const label =
                    typeof option === "string" ? option : option.label;
                  const value =
                    typeof option === "string" ? option : option.value;

                  return (
                    <FormControlLabel
                      key={value}
                      value={value}
                      control={<Radio />}
                      label={
                        <Typography
                          sx={{
                            fontSize: "14px",
                            color: "#4B5565",
                            fontWeight: 500,
                            fontFamily: "Poppins, sans-serif",
                            textTransform: "capitalize",
                          }}
                        >
                          {label}
                        </Typography>
                      }
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      ))}

      <Accordion disableGutters>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#4B5565",
              fontWeight: 500,
              fontFamily: "Poppins, sans-serif",
              textTransform: "capitalize",
            }}
          >
            Salary
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#4B5565", 
              fontWeight: 500,
              textTransform: "capitalize",
            }}
          >
            Up to ₹{salary}
          </Typography>
          <Slider
            value={salary}
            onChange={(e, value) => {
              setSalary(value)
              setFilters((prev) => ({ ...prev, "salaryMax": salary }))
            }
            }
            min={30000}
            max={150000}
            step={5000}
            valueLabelDisplay="auto"
          />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default Sidebar;
