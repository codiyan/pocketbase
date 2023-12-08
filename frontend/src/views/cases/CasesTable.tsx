import React, { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
// icons
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { downloadCSV } from "../../lib/utils";
import { useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
type Patient = {
  id: string;
  name: string;
  dob: string;
  status: string;
};

type OrderTableProps = {
  patients: Patient[];
};

export default function CasesTable({ patients }: OrderTableProps) {
  const navigate = useNavigate();
  // const [filteredPatients, setFilteredPatients] = useState<Patient[]>([]);
  const [page, setPage] = useState(1);
  const [patientsData, setPatientsData] = useState<Patient[]>([]);
  const itemsPerPage = 10; // Adjust as needed

  const navigateToCase = (id: string) => {
    navigate(`/cases/details/${id}`);
  }
  const [pagePatients, setPagePatients] = useState<Patient[]>([]);

  useEffect
    (() => {
      setPatientsData(patients);
    }, [patients]);
  useEffect(() => {


    // Calculate the start and end indices based on the current page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    // Slice the patients array based on the indices
    const slicedPatients = patientsData.slice(startIndex, endIndex);

    // Update the filteredPatients state with the sliced patients
    setPagePatients(slicedPatients);


  }, [patientsData, page]);


  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    if (value.trim() === "") {
      // If the search input is empty, show all patients
      setPatientsData(patients);
    } else {
      // If there is a search input, filter patients based on the input
      const filteredPatientsResult = patients.filter((patient) => {
        return (
          patient.name.toLowerCase().includes(value) ||
          patient.dob.toLowerCase().includes(value) ||
          patient.status.toLowerCase().includes(value)
        );
      });
      setPatientsData(filteredPatientsResult);
    }

    // Reset the page to 1 when searching
    setPage(1);
  }


  return (
    <React.Fragment>

      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: {
            xs: "none",
            sm: "flex",
          },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: {
              xs: "120px",
              md: "160px",
            },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search for order</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
            onChange={handleSearch}
          />
        </FormControl>

      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: "none", sm: "initial" },
          width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
          }}
        >
          <thead>
            <tr>

              <th style={{ width: 180, padding: "12px 6px" }}>
                ID
              </th>
              <th style={{ width: 140, padding: "12px 6px" }}>Name</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Date of birth</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Status</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pagePatients && pagePatients.map((row) => (
              <tr key={row.id}>

                <td>
                  <Typography level="body-xs">{row.id}</Typography>
                </td>

                <td>
                  <Typography level="body-xs">{row.name}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{row.dob}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{row.status}</Typography>
                </td>
                <td>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Link
                      level="body-xs"
                      component="button"
                      onClick={() => navigateToCase(row.id)}
                    >
                      <IconButton title='Schedule' variant="soft" color="primary" size="sm" >
                        <VisibilityIcon />
                      </IconButton >
                    </Link>
                    {/* <RowMenu row={row} navigate={navigateToCase}/> */}
                  </Box>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeftIcon />}
          disabled={page === 1}
          onClick={() => handleChangePage(page - 1)}
        >
          Previous
        </Button>
        <Box sx={{ flex: 1 }} />
        {Array.from({ length: Math.ceil(patientsData.length / itemsPerPage) }).map((_, index) => (
          <IconButton
            key={index + 1}  // Use index + 1 as the key
            size="sm"
            variant={Number(index + 1) ? "outlined" : "plain"}  // Use index + 1 as the condition
            color="neutral"
            onClick={() => handleChangePage(index + 1)}
          >
            {index + 1}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />

        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRightIcon />}
          disabled={page === Math.ceil(patientsData.length / itemsPerPage)}
          onClick={() => handleChangePage(page + 1)}
        >
          Next
        </Button>
      </Box>
    </React.Fragment >
  );
}
