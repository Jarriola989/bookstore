// import React, { Component } from "react";
// import BannerPhoto from "./BannerPhoto";

// function BannerCard(props) {
//   console.log(props.title);
//   return (
//     <div class="col-sm">
//       <div class="card text-center">
//         <div class="card-body">
//           <BannerPhoto cover={props.cover} />
//           <h5 class="card-title"> {props.title} </h5>
//         </div>
//       </div>
//     </div>
//   );
// }
// <<<<<<< HEAD
// <<<<<<< HEAD
// =======
// import BannerCard from "./BannerCard";
// >>>>>>> Added Banner under navbar
// =======
// >>>>>>> Added a header for recent releases for the homepage, wishlist using a mock database must implement delete list, change between list, move to cart and improve the ui
// =======
// >>>>>>> 897a40d07088c2edc94e249b1e97007a5c7812a7

// class Banner extends Component {
//   constructor() {
//     super();
//     this.state = {
// <<<<<<< HEAD
// <<<<<<< HEAD
// <<<<<<< HEAD
// =======
// >>>>>>> 897a40d07088c2edc94e249b1e97007a5c7812a7
//       book: []
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:8090/api/books/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ book: data });
//       });
//   }

//   render() {
//     console.log(this.state.book);
//     //let bannerCard = this.state.book.map(item => (
//     //<BannerCard
//     // key={this.state.book.id}
//     // cover={this.state.book.img_url}
//     //  title={this.state.book.title}
//     ///>;
//     //));
//     return (
//       <div
//         class="jumbotron jumbtron-fluid-sm transparent"
//         style={{ height: "50" }}
//       >
//         <h1>Recent Releases</h1>
//         <div class="row">
//           <BannerCard
//             key={this.state.book.id}
//             cover={this.state.book.img_url}
//             title={this.state.book.title}
//           />
// <<<<<<< HEAD
// =======
//       Books: [],
//       isLoading: false
// =======
//       book: []
// >>>>>>> Added a header for recent releases for the homepage, wishlist using a mock database must implement delete list, change between list, move to cart and improve the ui
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:8090/api/books/1")
//       .then(response => response.json())
//       .then(data => {
//         this.setState({ book: data });
//       });
//   }

//   render() {
//     console.log(this.state.book);
//     //let bannerCard = this.state.book.map(item => (
//     //<BannerCard
//     // key={this.state.book.id}
//     // cover={this.state.book.img_url}
//     //  title={this.state.book.title}
//     ///>;
//     //));
//     return (
//       <div
//         class="jumbotron jumbtron-fluid-sm transparent"
//         style={{ height: "50" }}
//       >
//         <h1>Recent Releases</h1>
//         <div class="row">
// <<<<<<< HEAD
//           <BannerCard />
//           <BannerCard />
//           <BannerCard />
//           <BannerCard />
// >>>>>>> Added Banner under navbar
// =======
//           <BannerCard
//             key={this.state.book.id}
//             cover={this.state.book.img_url}
//             title={this.state.book.title}
//           />
// >>>>>>> Added a header for recent releases for the homepage, wishlist using a mock database must implement delete list, change between list, move to cart and improve the ui
// =======
// >>>>>>> 897a40d07088c2edc94e249b1e97007a5c7812a7
//         </div>
//       </div>
//     );
//   }
// }

// export default Banner;
