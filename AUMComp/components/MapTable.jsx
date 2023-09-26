import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#34a1eb",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '.8rem',
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(region, sip_count, sip_book) {
    return { region, sip_count, sip_book };
}

const rows = [
    createData('North', 159, 6.0),
    createData('South', 237, 9.0),
    createData('East', 262, 16.0),
    createData('West', 305, 3.7),

];

export default function MapTable() {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: "85%",marginInline: 2, boxShadow: "0px 1px 16px 1px rgba(0,0,0,0.52)" }} >
            <Table aria-label="customized table" size="small">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Region</StyledTableCell>
                        <StyledTableCell align="right">SIP Count</StyledTableCell>
                        <StyledTableCell align="right">SIP Book (Cr.)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.region} >
                            <StyledTableCell component="th" scope="row">
                                {row.region}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.sip_count}</StyledTableCell>
                            <StyledTableCell align="right">{row.sip_book}</StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}