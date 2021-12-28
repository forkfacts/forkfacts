import React from "react"
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridSortModel,
} from "@mui/x-data-grid"
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
    minWidth: 220,
    renderHeader: (/*params*/) => getHeader("Nutrient"),
    renderCell: (params: GridRenderCellParams) => {
      const row: FactTableRow = params.row as FactTableRow
      return <Text flexWrap={"wrap"}>{row.nutrient}</Text>
    },
  },
  {
    field: "dailyValue",
    width: 155,
    renderHeader: (/*params*/) => getHeader("% Daily Value"),
    renderCell: (params: GridRenderCellParams) => {
      const row: FactTableRow = params.row as FactTableRow
      // todo: shall we move .toFixed(2) up?
      return (
        <Flex ml={4}>
          <Text>{row.dailyValue && <>{row.dailyValue.toFixed(2)} %</>}</Text>
        </Flex>
      )
    },
  },
  {
    field: "amount",
    width: 100,
    type: "number",
    sortable: false,
    renderHeader: (/*params*/) => getHeader("Amount"),
    renderCell: (params: GridRenderCellParams) => {
      const row: FactTableRow = params.row as FactTableRow
      return (
        <Flex>
          <Text>{row.amount}</Text>
          <Text pl={1}>{row.amountUnit === "ug" ? "µg" : row.amountUnit}</Text>
        </Flex>
      )
    },
  },
  {
    field: "rdi",
    width: 100,
    type: "number",
    sortable: false,
    renderHeader: (/*params*/) => getHeader("RDI"),
    renderCell: (params: GridRenderCellParams) => {
      const row: FactTableRow = params.row as FactTableRow
      return row.rdiAmount ? (
        <Flex>
          <Text>{row?.rdiAmount}</Text>
          <Text pl={1}>
            {row?.rdiUnit?.toLowerCase() === "ug"
              ? "µg"
              : row?.rdiUnit?.toLowerCase()}
          </Text>
        </Flex>
      ) : null
    },
  },
]

export interface FactTableRow {
  id: number
  nutrient: string
  amount: number
  rdiAmount?: number
  rdiUnit?: string
  amountUnit: string
  dailyValue?: number
}

interface FactTableProps {
  rows: FactTableRow[]
  nutrientsFilterApplied?: boolean
}

export const FactTable = ({
  rows,
  nutrientsFilterApplied = false,
}: FactTableProps) => {
  const classes = useStyles()

  // https://mui.com/components/data-grid/sorting/#basic-sorting
  const [sortModel, setSortModel] = React.useState<GridSortModel>([
    {
      field: "dailyValue",
      sort: "desc",
    },
  ])

  return (
    <div style={{ height: 500, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            autoHeight={nutrientsFilterApplied}
            rows={rows}
            columns={columns}
            className={classes.root}
            components={{
              // https://mui.com/api/data-grid/data-grid/#slots-2
              Footer: () => (
                <Box py={4} pl={3}>
                  <Text fontSize={"xs"} color={"gray.700"}>
                    {rows.length} Nutrients
                  </Text>
                </Box>
              ),
            }}
            sortModel={sortModel}
            onSortModelChange={model => setSortModel(model)}
          />
        </div>
      </div>
    </div>
  )
}
