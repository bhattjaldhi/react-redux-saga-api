import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchShipment } from "../store/actions/shipment";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginTop: 20
  },
  container: {
    maxHeight: 440,
  },
});

const columns = [
  { id: "id", label: "ID" },
  { id: "name", label: "Name" },
  { id: "type", label: "Type" },
  { id: "total", label: "Total" },
];

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { shipment } = useSelector((state) => state.home);

  const [page, setPage] = React.useState(0);
  const [text, setText] = React.useState(null);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const TOTAL_RECORDS_FROM_API = 24;

  useEffect(() => {
    fetchShipments();
  }, [page, rowsPerPage, text]);

  const fetchShipments = () => {
    let _params = {
      _page: page + 1,
      _limit: rowsPerPage,
    };

    if(text){
      _params.type = text
    }

    dispatch(fetchShipment(_params));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className="pages home">
        <TextField
          id="outlined-basic"
          label="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          variant="outlined"

        />

        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {shipment
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25]}
            component="div"
            count={TOTAL_RECORDS_FROM_API}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
};

export default Home;
