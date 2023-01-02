// import "antd/dist/antd.css";
import "./App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Contact() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingcontact, seteditingcontact] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      name: "Houssem",
      email: "Hou@gmail.com",
      phoneNumber: "El Eulma",
    },
    {
      name: "Zakarya",
      email: "david@gmail.com",
      phoneNumber: "Jijel",
    },
    {
      name: "Sohaib",
      email: "james@gmail.com",
      phoneNumber: "Tajnent",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "phoneNumber",
      dataIndex: "phoneNumber",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditingcontact(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeletecontact(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddContact = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newcontact = {
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      phoneNumber: "phoneNumber " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newcontact];
    });
  };
  const onDeletecontact = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this contact?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((contact) => contact.id !== record.id);
        });
      },
    });
  };
  const onEditingcontact = (record) => {
    setIsEditing(true);
    seteditingcontact({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    seteditingcontact(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Contact </h2>
        <tr>
          <Button>Display contact</Button>
          <Button onClick={onAddContact}>Add a new contact</Button>
        </tr>

        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit contact"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((contact) => {
                if (contact.id === editingcontact.id) {
                  return editingcontact;
                } else {
                  return contact;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingcontact?.name}
            onChange={(e) => {
              seteditingcontact((pre) => {
                return { ...pre, name: e.target.value };
              });
            }}
          />
          <Input
            value={editingcontact?.email}
            onChange={(e) => {
              seteditingcontact((pre) => {
                return { ...pre, email: e.target.value };
              });
            }}
          />
          <Input
            value={editingcontact?.phoneNumber}
            onChange={(e) => {
              seteditingcontact((pre) => {
                return { ...pre, phoneNumber: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default Contact;
