// import "antd/dist/antd.css";
import "./App.css";
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

function Blogs() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingblog, seteditingblog] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      subject: "Houssem",
      description: "Hou@gmail.com",
      date: "El Eulma",
    },
    {
      subject: "Zakarya",
      description: "david@gmail.com",
      date: "Jijel",
    },
    {
      subject: "Sohaib",
      description: "james@gmail.com",
      date: "Tajnent",
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
      title: "subject",
      dataIndex: "subject",
    },
    {
      key: "3",
      title: "description",
      dataIndex: "description",
    },
    {
      key: "4",
      title: "date",
      dataIndex: "date",
    },
    {
      key: "5",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditingblog(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteblog(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddblog = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newblog = {
      subject: "subject " + randomNumber,
      description: randomNumber + "@gmail.com",
      date: "date " + randomNumber,
    };
    setDataSource((pre) => {
      return [...pre, newblog];
    });
  };
  const onDeleteblog = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this blog?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((blog) => blog.id !== record.id);
        });
      },
    });
  };
  const onEditingblog = (record) => {
    setIsEditing(true);
    seteditingblog({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    seteditingblog(null);
  };
  return (
    <div classsubject="App">
      <header classsubject="App-header">
        <h2>Blogs </h2>
        <tr>
          <Button>List all post</Button>
          <Button onClick={onAddblog}>Create post</Button>
        </tr>

        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit blog"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((blog) => {
                if (blog.id === editingblog.id) {
                  return editingblog;
                } else {
                  return blog;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input
            value={editingblog?.subject}
            onChange={(e) => {
              seteditingblog((pre) => {
                return { ...pre, subject: e.target.value };
              });
            }}
          />
          <Input
            value={editingblog?.description}
            onChange={(e) => {
              seteditingblog((pre) => {
                return { ...pre, description: e.target.value };
              });
            }}
          />
          <Input
            value={editingblog?.date}
            onChange={(e) => {
              seteditingblog((pre) => {
                return { ...pre, date: e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

export default Blogs;
