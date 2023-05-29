// import React, {Component, createContext} from "react";
// import FetchTours from "../fetch-data/fetch-data";
// import DataTours from "../datatours/data-tours";
// import Select from "react-select";
// import axios from 'axios';
// import Modal from 'react-bootstrap/Modal';




// // export default class FetchTourDestinations extends Component {

// //     constructor(props){
// //       super(props)
// //       this.state = {
// //         selectTours : [],
// //         id: '',
// //         label: ''
// //       }
// //     }
  
// //    async getTours(){
// //       const res = await axios.get('http://localhost:3000/tours')
// //       const data = res.data
  
// //       const tours = data.map(data => ({
// //         "value" : data.id,
// //         "label" : data.label
  
// //       }))
  
// //       this.setState({selectTours: tours})
  
// //     }
  
// //     handleChange(e){
// //       console.log(e)
// //      this.setState({id:e.value, label:e.label})
// //     }
  
// //     componentDidMount(){
// //         this.getTours()
// //     }
  
// //     render() {

// //         const {selectTours} = this.props;
// //         console.log(this.state.selectTours)
// //         return (
// //             <div>
            
// //                 <Select options={this.state.selectTours} onChange={this.handleChange.bind(this)} selection={selectTours}/>
                
                
                    
// //                 <div>
// //                     <p>Направление: <strong>{this.state.label}</strong>, id: <strong>{this.state.id}</strong></p>
// //                 </div>
// //             </div>
// //         )
// //     }
// //   }



// export default class FetchTourDestinations extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [],
//             modal: [],
//             selection: ""
//         }
//     }

//     filterTour(tours, filter) {
//         if(filter.id === this.selected_value) {
//             return tours.filter(tour => tour.id)
//         } else {
//             return tours
//         }
//     }

//     onUpdateFilter(value) {
//         this.setState({
//             filter: value
//         })
//     }

//     // FetchData

//     getTours = new FetchTours();

//     toursData = (data) => {
//         this.setState({
//             modal: data
//         })
//     }


//     handleChange(e) {
        
//         console.log(e.target.value);
//         this.setState({
//             selection: e.target.value
//         })
       
//     }

//     componentDidMount() {
//         this.getTours.getAllTours()
//         .then(singleData => {
//             this.toursData(singleData)
//         })
//     }

//     render() {
//         const {selection, data, modal} = this.state;
     
//         return(
//             <Select 
//                 name="selecttours"
//                 onChange={this.handleChange}
//                 options={modal}
//                 // value={values.selecttours}
//             />
                
//                 // <select 
//                 //     selection={selection} 
//                 //     onChange={this.handleChange} 
//                 //     className="custom-select">
//                 //     {modal.map((tour) => (
//                 //         <option key={tour.id} 
//                 //         value={tour.id}
//                 //         >{tour.label}</option>))}
//                 // </select>

//         )
//     }
// }

