import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompanyNameFilter } from "./redux/companyNameFilterSlice";
import Box from "@mui/material/Box";

import HourglassFullTwoToneIcon from "@mui/icons-material/HourglassFullTwoTone";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [filters, setFilters] = useState({
    role: "",
    employees: "",
    experience: "",
    location: "",
    remote: "",
    salary: ""
  });
  const [loading, setLoading] = useState(false);

  const [isExpanded, setIsExpanded] = React.useState({});

  const toggleExpand = (index) => {
    // Toggle the expand/collapse state of the clicked view job
    setIsExpanded((prevIsExpanded) => ({
      ...prevIsExpanded,
      [index]: !prevIsExpanded[index]
    }));
  };

  const companyNameFilter = useSelector((state) => state.companyNameFilter);
  const dispatch = useDispatch();

  // Check if job data is available

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [jobs, filters, companyNameFilter]); // React to filter changes

  const fetchJobs = async (pageNumber) => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            limit: 10,
            offset: (pageNumber - 1) * 10
          })
        }
      );
      const data = await response.json();
      setJobs((prevJobs) => [...prevJobs, ...data.jdList]); // Append new jobs
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };

  const applyFilters = () => {
    const filtered = jobs.filter((job) => {
      const roleMatch =
        !filters.role ||
        (job.jobRole && job.jobRole.toLowerCase().includes(filters.role));
      const expMatch =
        !filters.experience ||
        (job.minExp !== undefined &&
          job.maxExp !== undefined &&
          parseInt(filters.experience) >= job.minExp &&
          parseInt(filters.experience) <= job.maxExp);
      const remoteMatch =
        !filters.remote ||
        (job.location && job.location.toLowerCase().includes(filters.remote));
      const salaryMatch =
        !filters.salary ||
        (job.maxJdSalary !== undefined &&
          parseInt(filters.salary) <= job.maxJdSalary);
      const companyMatch =
        !companyNameFilter ||
        (job.companyName &&
          job.companyName
            .toLowerCase()
            .includes(companyNameFilter.toLowerCase()));

      return (
        roleMatch && expMatch && remoteMatch && salaryMatch && companyMatch
      );
    });
    setFilteredJobs(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "companyName") {
      dispatch(setCompanyNameFilter(value.toLowerCase()));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value.toLowerCase()
      }));
    }
  };

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      fetchJobs();
    }
  };

  const textStyle = {
    textTransform: "capitalize" // Capitalize the first letter of each word
  };

  const formatSalary = (salary) => {
    return salary ? `${salary}` : "0"; // Add '$' sign if salary exists, otherwise display 'Not available'
  };

  const handleApplyButtonClick = async (jdLink) => {
    try {
      const response = await fetch(jdLink);
      if (!response.ok) {
        throw new Error("Failed to fetch job details");
      }
      const jobDetails = await response.json();
      // Do something with the fetched job details, such as displaying them in a modal
      console.log(jobDetails);
    } catch (error) {
      console.error("Error fetching job details:", error);
      // Handle error, e.g., show a message to the user
    }
  };

  return (
    <>
      <div className="MainContainer">
        <div className="Content">
          <div className="filters">
            <div className="filter">
              <select name="role" onChange={handleFilterChange}>
                <option>Roles</option>
                <option>Backend</option>
                <option>Frontend</option>
                <option>Fullstack</option>
                <option> Flutter</option>
                <option>Android</option>
                <option>Hr</option>
                <option> Legal</option>
                <option>Finance</option>
              </select>
            </div>

            <div className="filter">
              <select name="employees" onChange={handleFilterChange}>
                <option>Number Of Employees</option>
                <option>1-10</option>
                <option>11-20</option>
                <option>21-50</option>
                <option>51-100</option>
                <option>101-200</option>
                <option>201-500</option>
                <option>500+</option>
              </select>
            </div>
            <div className="filter">
              <select name="experience" onChange={handleFilterChange}>
                <option>Experience</option>
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3 Years</option>

                <option>4 Years</option>
                <option>5 Years</option>
                <option>6 Years</option>
                <option>7 Years</option>
                <option>8 Years</option>
                <option>9 Years</option>
                <option>10 Years</option>
              </select>
            </div>

            <div className="filter">
              <input
                type="text"
                placeholder="Location"
                name="remote"
                onChange={handleFilterChange}
              />
            </div>
            <div className="filter">
              <select name="remote" onChange={handleFilterChange}>
                <option>Remote</option>
                <option>Hybrid</option>
                <option>On-site</option>
              </select>
            </div>

            <div className="filter">
              <select name="salary" onChange={handleFilterChange}>
                <option>Minimum Base Pay Salary</option>
                <option>0L</option>
                <option>10L</option>
                <option>20L</option>
                <option>30L</option>
                <option>40L</option>
                <option>50L</option>
                <option>60L</option>
                <option>70L</option>
              </select>
            </div>
            <div className="filter">
              <input
                type="text"
                placeholder="Search Company Name"
                name="companyName"
                value={companyNameFilter}
                onChange={handleFilterChange}
              />
            </div>
          </div>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            marginTop={{ lg: 5 }}
          >
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <Grid key={index} item xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      margin: 2,
                      boxShadow: 2,
                      border: "1px solid #d7dbd8",
                      borderRadius: 5
                    }}
                    key={`${job.jdUid}-${index}`}
                  >
                    <Box
                      sx={{
                        padding: "16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left"
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            border: "2px solid #d7dbd8",
                            borderRadius: 4,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            width: "50%",
                            pl: 1
                          }}
                          md={{ width: "40%" }}
                          xs={{ width: "33%" }}
                        >
                          <HourglassFullTwoToneIcon sx={{ fontSize: 13 }} />
                          <Typography sx={{ fontSize: 13 }}>
                            Posted {job.maxJdSalary} days ago
                          </Typography>
                        </Box>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "20px"
                          }}
                        >
                          <img
                            src={job.logoUrl}
                            alt="Company Logo"
                            style={{
                              width: "60px",
                              height: "70px",
                              marginRight: "16px"
                            }}
                          />
                          <div>
                            <Typography
                              color="textSecondary"
                              gutterBottom
                              style={textStyle}
                            >
                              {job.companyName}
                            </Typography>
                            <Typography
                              variant="h6"
                              component="h1"
                              color="textSecondary"
                              gutterBottom
                              style={textStyle}
                            >
                              {job.jobRole}
                            </Typography>
                            <Typography
                              variant="h5"
                              component="h2"
                              gutterBottom
                              style={textStyle}
                            >
                              {job.location}
                            </Typography>
                          </div>
                        </div>
                        <div style={{ marginTop: "10px" }}>
                          <Typography variant="body2" component="p">
                            Estimated Salary Range: ₹
                            {formatSalary(job.minJdSalary)} -{" "}
                            {formatSalary(job.maxJdSalary)} LPA
                          </Typography>
                        </div>
                        <div style={{ marginTop: "20px", textAlign: "left" }}>
                          <Typography
                            variant="body2"
                            component="p"
                            sx={{ fontWeight: "normal", fontSize: "20px" }}
                          >
                            About Company:
                          </Typography>
                          <Typography
                            variant="body2"
                            component="p"
                            sx={{ fontWeight: "bold", fontSize: "16px" }}
                          >
                            About us
                          </Typography>
                          <Typography
                            variant="body2"
                            component="p"
                            gutterBottom
                          >
                            {isExpanded[index] // Check if the current card is expanded
                              ? job.jobDetailsFromCompany // Render full description if expanded
                              : `${job.jobDetailsFromCompany.slice(
                                  0,
                                  300
                                )}...`}{" "}
                            {/* Render truncated description otherwise */}
                          </Typography>
                          <div
                            style={{
                              textAlign: "center",
                              alignItems: "center"
                            }}
                          >
                            {!isExpanded[index] && ( // Check if the current card is not expanded
                              <Button
                                onClick={() => toggleExpand(index)} // Pass index to toggleExpand
                                variant="text"
                                color="primary"
                                style={{
                                  textAlign: "center",
                                  alignItems: "center",
                                  textTransform: "capitalize"
                                }}
                              >
                                View job
                              </Button>
                            )}
                          </div>
                          <Typography
                            style={{
                              fontWeight: "300",
                              color: "gray",
                              paddingTop: "20px"
                            }}
                          >
                            Minimum Experience
                          </Typography>
                          <Typography
                            variant="body2"
                            component="p"
                            style={{ fontWeight: "500" }}
                          >
                            {job.minExp > 0 ? `${job.minExp} years` : "NA"}
                          </Typography>
                        </div>
                      </CardContent>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => handleApplyButtonClick(job.jdLink)}
                        style={{
                          textTransform: "capitalize",
                          backgroundColor: "#13ebc3",
                          width: "100%",
                          color:"#000",
                          fontWeight:"bold",
                          borderRadius: "10px"
                        }}
                      >
                        <BoltIcon
                          style={{
                            backgroundColor: "#13ebc3",
                            fontSize: "2rem",
                            color:"orange"
                          }}
                        />
                        Easy Apply
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "#5D3FD3",
                          width: "100%",
                          borderRadius: "10px",
                          marginTop: "15px",
                          textTransform: "capitalize",
                         
                        }}
                      >
                        <AccountCircleIcon style={{ fontSize: "2rem", marginRight:"5px" }} />
                        <AccountCircleIcon style={{ fontSize: "2rem", marginRight:"10px" }} />
                        Unlock referral asks
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))
            ) : (
              <div className="no-jobs-container">
                <h2>No Data Available</h2>
              </div>
            )}
          </Grid>

          {loading && <p>Loading More...</p>}
        </div>
      </div>
    </>
  );
};

export default Home;
