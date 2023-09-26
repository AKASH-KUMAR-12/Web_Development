import  React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const columns = [
    {
        id: 'Scheme', 
        label: 'Scheme Name',
        bgColor: '#69b8f4',
        minWidth: 50,
        align: 'center',
        color:'white',
        format: (value) => value.toLocaleString('en-US'),
      },
  {
    id: 'AUM',
    label: 'AUM',
    bgColor: '#69b8f4',
    minWidth: 150,
    align: 'center',
    color:'white',
    format: (value) => value.toLocaleString('en-US'),
  },
 
  {
    id: 'PAN',
    label: 'PAN Count',
    bgColor: '#69b8f4',
    minWidth: 150,
    align: 'center',
    color:'white',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(Scheme,AUM,PAN) {
  return { Scheme,AUM,PAN };
}

const rows = [
  createData('Small Cap Fund','500 Cr',450),
  createData('Mid Cap Fund','200 Cr',180),
  createData('Large Cap Fund','250 Cr',230),
  createData('Flexible Cap Fund','570 Cr',540),
  createData('Multi Cap Fund','620 Cr',618),
  createData('Large & Mid Cap Fund','230 Cr',180),
  createData('Focused Fund','400 Cr',200),
  createData('Nifty 50 Index Fund','180 Cr',240),
  createData('Balanced Advantage Fund','600 Cr',150),
  createData('Gold Fund','200 Cr',300),
];

export default function Scheme() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#f4f9ff',
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className='scheme_content'>
    <p>Scheme Details</p>
    <hr/>
    <Paper sx={{ width:  window.innerWidth <=390 ? '87%':'95%', overflow: 'hidden', margin:'1.5rem',}}>
      <TableContainer  sx={{maxHeight: 320,borderBottom:'none',
    "&::-webkit-scrollbar": {
	  width: 10
    },
    "&::-webkit-scrollbar-track": {
	  backgroundColor: "#dee6f2"
    },
    "&::-webkit-scrollbar-thumb": {
	  backgroundColor: "#2057a6",
	  borderRadius: 2
    }
  }}>
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth:column.minWidth,color:column.color,backgroundColor:column.bgColor }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
    </div>
  );
}