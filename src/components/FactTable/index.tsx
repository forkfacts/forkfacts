import React from "react"
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { Box, Text } from "@chakra-ui/react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: "black",
      color: "white",
    },
    "& .MuiDataGrid-sortIcon": {
      fill: "white",
    },
    "& .MuiDataGrid-columnSeparator": {
      backgroundColor: "black",
    },
    "& .MuiDataGrid-iconSeparator": {
      fill: "black",
    },
  },
}))

const rows: GridRowsProp = [
  { id: 1, nutrient: "Hello", amount: "World", dailyValue: "2.68%" },
  { id: 2, nutrient: "DataGridPro", amount: "is Awesome", dailyValue: "4.5 %" },
  { id: 3, nutrient: "MUI", amount: "is Amazing" },
  /*
      {id: 4, nutrient: "MUI", amount: "is Amazing", dailyValue: "9.1 %"},
      {id: 5, nutrient: "MUI", amount: "is Amazing", dailyValue: "9.1 %"},
      {id: 6, nutrient: "MUI", amount: "is Amazing", dailyValue: "9.1 %"},
  */
]

const getHeader = (name: string) => <Text fontWeight={"bold"}>{name}</Text>
const columns: GridColDef[] = [
  {
    field: "nutrient",
    flex: 1,
    renderHeader: params => getHeader("Nutrient"),
  },
  {
    field: "amount",
    width: 150,
    renderHeader: params => getHeader("Amount"),
  },
  {
    field: "dailyValue",
    flex: 1,
    renderHeader: params => getHeader("% Daily Value"),
  },
]

export const FactTable = () => {
  const classes = useStyles()
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        autoHeight={true}
        rows={rows}
        columns={columns}
        className={classes.root}
        components={{
          // https://mui.com/api/data-grid/data-grid/#slots-2
          Footer: () => (
            <Box py={4} pl={3}>
              <Text fontSize={"xs"} color={"gray.500"}>
                27 Nutrients
              </Text>
            </Box>
          ),
        }}
      />
    </div>
  )
}
