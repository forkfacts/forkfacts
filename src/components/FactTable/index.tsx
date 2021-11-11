import React from "react"
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { Box, Flex, Text } from "@chakra-ui/react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((/*theme*/) => ({
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

const getHeader = (name: string) => <Text fontWeight={"bold"}>{name}</Text>
const columns: GridColDef[] = [
  {
    field: "nutrient",
    flex: 1,
    renderHeader: (/*params*/) => getHeader("Nutrient"),
  },
  {
    field: "amount",
    type: "number",
    width: 150,
    renderHeader: (/*params*/) => getHeader("Amount"),
    renderCell: (params: GridRenderCellParams) => {
      const row: FactTableRow = params.row as FactTableRow
      return (
        <Flex>
          <Text w={100}>{row.amount}</Text>
          <Text pl={1}>{row.amountUnit}</Text>
        </Flex>
      )
    },
  },
  {
    field: "dailyValue",
    flex: 1,
    renderHeader: (/*params*/) => getHeader("% Daily Value"),
    renderCell: (params: GridRenderCellParams) => {
      const row: FactTableRow = params.row as FactTableRow
      return (
        <Flex ml={4}>
          <Text>{row.dailyValue && <>{row.dailyValue} %</>}</Text>
        </Flex>
      )
    },
  },
]

export interface FactTableRow {
  id: number
  nutrient: string
  amount: number
  amountUnit: string
  dailyValue?: number
}
interface FactTableProps {
  rows: FactTableRow[]
}
export const FactTable = ({ rows }: FactTableProps) => {
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
                {rows.length} Nutrients
              </Text>
            </Box>
          ),
        }}
      />
    </div>
  )
}
