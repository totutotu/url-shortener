import * as React from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { addClick } from '../services/clickService';

const UrlTable = ({ urls }) => {
    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell>Short Url</TableCell>
                    <TableCell align='right'>Created</TableCell>
                    <TableCell align='right'>Original Url</TableCell>
                    <TableCell align='right'></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {urls.map((row) => (
                <TableRow
                    key={row.short_url}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component='th' scope='row'>
                    <a 
                        onClick={(e) => addClick(e.target.id)}
                        id={row.id}
                        href={row.short_url}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {row.short_url}
                    </a>
                </TableCell>
                <TableCell align='right'>{row.createdTimeStamp}</TableCell>
                <TableCell align='right'>{row.original_url}</TableCell>
                <TableCell align='right'>
                    <Link to={`/stats/${row.id}`}>
                        <Button>Show Stats</Button>
                    </Link>
                </TableCell>

                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  );
}


export default UrlTable;
