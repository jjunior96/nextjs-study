// import { Component } from 'react';
// import { Table, Tag, Radio, Space, Menu, Dropdown, Icon, Button , Modal } from 'antd';
// import { Link } from 'next/link';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
//   {
//     title: 'Tags',
//     key: 'tags',
//     dataIndex: 'tags',
//     render: tags => (
//       <span>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? 'geekblue' : 'green';
//           if (tag === 'loser') {
//             color = 'volcano';
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </span>
//     ),
//   },
//   {
//     title: 'Action',
//     key: 'action',
//     fixed: 'right',
//     render: (text, record) => {      
//       const menu = (
//         <Menu>
//           <Menu.Item onClick={ () => console.log("Teste") } >
//             Ver detalhes
//           </Menu.Item>
//         </Menu>
//       );

//       return (
//         <Dropdown overlay={menu} >
//           <Button size="small" >
//             Ações
//             <Modal>
//               Teste
//             </Modal>
//           </Button>
//         </Dropdown>
//       )
//     },
//   },
// ];

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser', 'nice', 'dev', ],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

// export default class Demo extends Component {
//   state = {
//     top: 'topLeft',
//     bottom: 'bottomRight',
//     visible: false,
//   };

//   showModal = () => {
//     this.setState({ visible: true });
//   }

//   handleOk = e => {
//     this.setState({ visible: false });
//   }

//   render() {
//     return (
//       <>
//         <Table
//           columns={columns}
//           pagination={{ position: [this.state.top, this.state.bottom] }}
//           dataSource={data}
//           modal={
//             <Modal  
//               title="Teste"
//               visible={this.state.visible}
//               onOk={this.handleOk}
//             >
//               Teste
//             </Modal>
//           }
//         />
//       </>
//     );
//   }
// }

// // import { Component } from 'react';
// // import { Modal, Button } from 'antd';
// // import { Link } from 'next/link';


// // import { Table, Tag, Radio, Space, Menu, Dropdown, Icon, Button , Modal } from 'antd';
// // import { Link } from 'next/link';

// // const columns = [
// //   {
// //     title: 'Name',
// //     dataIndex: 'name',
// //     key: 'name',
// //     render: text => <a>{text}</a>,
// //   },
// //   {
// //     title: 'Age',
// //     dataIndex: 'age',
// //     key: 'age',
// //   },
// //   {
// //     title: 'Address',
// //     dataIndex: 'address',
// //     key: 'address',
// //   },
// //   {
// //     title: 'Tags',
// //     key: 'tags',
// //     dataIndex: 'tags',
// //     render: tags => (
// //       <span>
// //         {tags.map(tag => {
// //           let color = tag.length > 5 ? 'geekblue' : 'green';
// //           if (tag === 'loser') {
// //             color = 'volcano';
// //           }
// //           return (
// //             <Tag color={color} key={tag}>
// //               {tag.toUpperCase()}
// //             </Tag>
// //           );
// //         })}
// //       </span>
// //     ),
// //   },
// //   {
// //     title: 'Action',
// //     key: 'action',
// //     fixed: 'right',
// //     render: (text, record) => {      
// //       const menu = (
// //         <Menu>
// //           <Menu.Item onClick={ () => onEdit(e) } >
// //             Ver detalhes
// //           </Menu.Item>
// //         </Menu>
// //       );

// //       return (
// //         <Dropdown overlay={menu} >
// //           <Button size="small" >
// //             Ações
// //             <Modal>
// //               Teste
// //             </Modal>
// //           </Button>
// //         </Dropdown>
// //       )
// //     },
// //   },
// // ];

// // const data = [
// //   {
// //     key: '1',
// //     name: 'John Brown',
// //     age: 32,
// //     address: 'New York No. 1 Lake Park',
// //     tags: ['nice', 'developer'],
// //   },
// //   {
// //     key: '2',
// //     name: 'Jim Green',
// //     age: 42,
// //     address: 'London No. 1 Lake Park',
// //     tags: ['loser', 'nice', 'dev', ],
// //   },
// //   {
// //     key: '3',
// //     name: 'Joe Black',
// //     age: 32,
// //     address: 'Sidney No. 1 Lake Park',
// //     tags: ['cool', 'teacher'],
// //   },
// // ];

// // export default class App extends Component {
// //   state = { visible: false };

// //   showModal = () => {
// //     this.setState({
// //       visible: true,
// //     });
// //   };

// //   handleOk = e => {
// //     console.log(e);
// //     this.setState({
// //       visible: false,
// //     });
// //   };

// //   render() {
// //     return (
// //       <>
// //         <Button type="primary" onClick={this.showModal}>
// //           Open Modal
// //         </Button>
// //         <Modal
// //           title="Detalhes"
// //           visible={this.state.visible}
// //           onOk={this.handleOk}
// //           onCancel={this.handleOk}
// //         >
// //           <a href="./posts/first-post" >
// //             Clica
// //           </a>
// //         </Modal>
// //       </>
// //     );
// //   }
// // }

import { Link } from 'next/link';
import { Modal, Button } from 'antd';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <a href="/post/first-post" >
            Aqui
          </a>
          
        </Modal>
      </>
    );
  }
}

export default App;