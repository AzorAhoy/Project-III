import React, { Component } from 'react';
import axios from 'axios';

class AddModal extends Component {
    state = {
        name: '',
      }
    
      handleChange = event => {
        this.setState({ name: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const user = {
          name: this.state.name,
          email: this.state.email,
          

        };
    
        axios.post('http://localhost:5000/api/auth/register', { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    render() {
        return (
            <div>
                <div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Thêm Người Dùng
                    </button>
                    
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            
                            <div className="modal-header">
                            <h4 className="modal-title">Thêm Người Dùng</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            
                            <div className="modal-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name" className="col-form-label">Tên Người Dùng:</label>
                                        <input type="text" className="form-control" id="name" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Email:</label>
                                        <input type="text" className="form-control" id="email" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Vai Trò:</label>
                                        <input type="text" className="form-control" id="role" onChange={this.handleChange} />
                                    </div>
                                </form>

                            </div>
                            
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Thêm</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddModal;