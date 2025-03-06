import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

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
        <Link underline="hover" color="text.primary" href="/">
          Home
        </Link>
        <Typography sx={{ color: 'inherit' }}>{activePage}</Typography>
      </Breadcrumbs>
    </div>
  );
}

export default BasicBreadcrumbs 
