import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';


type BasicBreadcrumbsProps = {
  activePage: string
}

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function BasicBreadcrumbs({activePage}:BasicBreadcrumbsProps) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link  to="/" style={{fontSize: "16px", fontWeight: 500, color: "black"}}>
          Home
        </Link>
        <Typography sx={{ color: 'inherit' }}>{activePage}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbs 
