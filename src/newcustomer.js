import React , {Component} from 'react';
import axios from 'axios';

class Newcustomer extends Component{
    constructor(){
        super();
        this.state={
            fields:{},
            message:""
        }
    }

    processInput = (obj) =>{
        let fields = this.state.fields;
        fields[obj.target.name] = obj.target.value
        this.setState({
            fields
        })
    }
      // let url = "http://firstenquiry.com/api/react/customerlist.php";
    save = () =>{
        let input = JSON.stringify(this.state.fields);
        let url = "http://firstenquiry.com/api/react/save.php";
        axios.post(url , input).then(response=>{
            this.setState({
                message:response.data.status,
                fields:{}
            })
        })
    }

    render(){
        return(
            <div className="container">
    <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
            <h2 className="text-primary"> Save Contact </h2>
        </div>
    </div>
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12"></div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group">
            <label>Contact Name:</label>
            <input
                type="text"
                className="form-control"
                name="fname"
            />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group"></div>
    </div>
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12"></div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group">
            <label>Contact no.:</label>
            <input
                type="text"
                className="form-control"
                name="contactno"
            />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group"></div>
    </div>
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12"></div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group">
            <label>Email ID:</label>
            <input
                type="text"
                className="form-control"
                name="email"
            />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group"></div>
    </div>
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12"></div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group">
            <label>Address</label>
            <input
                type="text"
                className="form-control"
                name="address"
            />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group"></div>
    </div>
    <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12"></div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group">
            <button className="btn btn-primary">
            Save Contact
            </button>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 form-group"></div>
    </div>
</div>
        )
    }
}

export default Newcustomer;