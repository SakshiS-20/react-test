import React, {Fragment } from 'react';
import Grid from '@mui/material/Grid';
import ImageGridItem from './image-grid-item';
import { connect } from 'react-redux';
import { fetchImages } from '../actions';

class ImagesList extends React.Component {

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
    .then(res => res.json())
    .then(
      (result) => {
        this.props.fetchImages(result)
      }
    )
  }

  render() {
      const images = this.props.images
      return (
        <Fragment>
          <Grid container spacing={2}>
            {
              images.map(image => (
                <ImageGridItem key={image.id} image={image.url} title={image.title} id={image.id} ></ImageGridItem>
              ))
            }
          </Grid>
        </Fragment>
      );
    // }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { images: state.list.images };
};

export default connect(
  mapStateToProps,
  { fetchImages }
)(ImagesList);
