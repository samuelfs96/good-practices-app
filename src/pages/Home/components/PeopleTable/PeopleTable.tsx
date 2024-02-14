import { Checkbox } from "@mui/material";
import { DataGrid, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useMemo } from "react";
import usePeopleTable from "./hooks/usePeopleTable";

export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
  const { findPerson, handleChange, pageSize, statePeople } = usePeopleTable();
  const colums = useMemo(
    () => [
      {
        field: "actions",
        type: "actions",
        sortable: false,
        headerName: "",
        width: 50,
        renderCell: (params: GridRenderCellParams) => (
          <>
            {
              <Checkbox
                size="small"
                checked={findPerson(params.row)}
                onChange={() => handleChange(params.row)}
              />
            }
          </>
        ),
      },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
        minWidth: 150,
        renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
      },
      {
        field: "category",
        headerName: "Categories",
        flex: 1,
        renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
      },
      {
        field: "company",
        headerName: "Company",
        flex: 1,
        renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
      },
      {
        field: "levelOfHappiness",
        headerName: "Level of happiness",
        flex: 1,
        renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
      },
    ],
    [findPerson, handleChange]
  );

  return (
    <DataGrid
      rows={statePeople}
      columns={colums}
      disableColumnSelector
      disableRowSelectionOnClick
      autoHeight
      initialState={{
        pagination: { paginationModel: { pageSize: pageSize } },
      }}
      pageSizeOptions={[pageSize]}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      getRowId={(row: any) => row.id}
    />
  );
};

export default PeopleTable;
