// import React, { Component } from "react";
// <<<<<<< HEAD
// import "react-image-lightbox/style.css";

// =======
// import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";

// const images = [
//   "https://jonathanlaing.co.uk/wp-content/uploads/2016/09/Book-Cover.jpeg"
// ];

// >>>>>>> 897a40d07088c2edc94e249b1e97007a5c7812a7
// export default class BannerPhoto extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
// <<<<<<< HEAD
//       src: props.cover
// =======
//       photoIndex: 0,
//       isOpen: false
// >>>>>>> 897a40d07088c2edc94e249b1e97007a5c7812a7
//     };
//   }

//   render() {
// <<<<<<< HEAD
//     return (
//       <div>
//         <a>
//           <img
// <<<<<<< HEAD
// <<<<<<< HEAD
// <<<<<<< HEAD
//             src={this.props.cover}
// =======
//             src={images[0]}
// >>>>>>> Added Banner under navbar
// =======
//             src={this.props.cover}
// >>>>>>> Added a header for recent releases for the homepage, wishlist using a mock database must implement delete list, change between list, move to cart and improve the ui
// =======
//             src={this.state.src}
// >>>>>>> Added wishlist
// =======
//     const { photoIndex, isOpen } = this.state;

//     return (
//       <div>
//         <a type="button" onClick={() => this.setState({ isOpen: true })}>
//           <img
//             src={this.props.cover}
// >>>>>>> 897a40d07088c2edc94e249b1e97007a5c7812a7
//             height="150"
//             width="100"
//             padding="20px"
//             alt="book cover"
//           />
//         </a>
// <<<<<<< HEAD
// =======
//         {isOpen && (
//           <Lightbox
//             mainSrc={images[photoIndex]}
//             nextSrc={images[(photoIndex + 1) % images.length]}
//             prevSrc={images[(photoIndex + images.length - 1) % images.length]}
//             onCloseRequest={() => this.setState({ isOpen: false })}
//             onMovePrevRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + images.length - 1) % images.length
//               })
//             }
//             onMoveNextRequest={() =>
//               this.setState({
//                 photoIndex: (photoIndex + 1) % images.length
//               })
//             }
//           />
//         )}
// >>>>>>> 897a40d07088c2edc94e249b1e97007a5c7812a7
//       </div>
//     );
//   }
// }
