import React, {Fragment, useState } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../styles/grid.css';
import { useDispatch } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ImageGridItem = (props) => {

  const [text, setTextValue] = useState(0)
  const dispatch = useDispatch()

  const id = props.id;
  const changeText =
    () => {
    setTextValue(!text)
    dispatch({ type: 'TOGGLE_COMPARE', payload: {id}}
  )}

  return (
    console.log(props),
    <Fragment>
      <Grid item xs={2}>
        <Item>
          <img src={props.image} title={props.title} className="image-width" alt="not found" />
          <p>Title: {props.title}</p>
          <p>ID: {props.id}</p>
          <p>URL: <a href={props.image}>{props.image}</a></p>
          <Button variant="contained" onClick={changeText}>
            {text ? 'Remove' : 'Compare'}
          </Button>
        </Item>
      </Grid>
    </Fragment>
    );
}

export default ImageGridItem;
