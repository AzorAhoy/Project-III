import React, { Component } from 'react';

class ListItemTeacher extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ và tên</th>
                            <th>Ngày sinh</th>
                            <th>Địa chỉ</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nguyễn Văn Nhật</td>
                            <td>23-10-1998</td>
                            <td>Hà Nội</td>
                            <td>0338014326</td>
                            <td>nhat.nv23101998@gmail.com</td>
                            <td>Nam</td>
                            <td> 
                              <button type="button" className="btn btn-info">xóa</button>
                              <button type="button" className="btn btn-warning">edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nguyễn Văn Nhật</td>
                            <td>23-10-1998</td>
                            <td>Hà Nội</td>
                            <td>0338014326</td>
                            <td>nhat.nv23101998@gmail.com</td>
                            <td>Nam</td>
                            <td>
                            <button type="button" className="btn btn-info">xóa</button>
                            <button type="button" className="btn btn-warning">edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nguyễn Văn Nhật</td>
                            <td>23-10-1998</td>
                            <td>Hà Nội</td>
                            <td>0338014326</td>
                            <td>nhat.nv23101998@gmail.com</td>
                            <td>Nam</td>
                            <td>
                            <button type="button" className="btn btn-info">xóa</button>
                            <button type="button" className="btn btn-warning">edit</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default ListItemTeacher;