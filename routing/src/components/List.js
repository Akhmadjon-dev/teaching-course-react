import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import { AiFillEdit, AiOutlineDelete, AiOutlineFundView } from "react-icons/ai";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  routeHandler = (id) => {
    this.props.history.push(`/users/${id}`);
  };

  render() {
    const { data } = this.props;
    return (
      <>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company Name</th>
              <th>City</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.company?.name}</td>
                <td>{user.address?.city}</td>
                <td>
                  <Button
                    onClick={() => this.routeHandler(user.id)}
                    style={{ marginRight: "8px" }}
                  >
                    <AiOutlineFundView />
                  </Button>
                  <Button>
                    <AiOutlineDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
