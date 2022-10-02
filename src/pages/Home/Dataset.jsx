import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { Table } from 'antd';
import { Tag } from 'antd';

class Dataset extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;

    const columns = [
      {
        title: 'Id',
        dataIndex: 'key',
        width: '10px',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        width: '10%',
        render: (text, record) => {
          return <div><a target='_blank' href={text[1]}>{text[0]}</a> [<a href='#references'>{text[2]}</a>]</div>;
        },
      },
      {
        title: 'Year',
        dataIndex: 'year',
        sorter: (a, b) => a.year - b.year,
      },
      {
        title: 'Task',
        dataIndex: 'task',
        filters: [
          {
            text: 'Object Detection',
            value: 'Object Detection',
          },
          {
            text: 'Semantic Segmentation',
            value: 'Semantic Segmentation',
          },
        ],
        onFilter: (value, record) => record.task.indexOf(value) >= 0,
        filterSearch: true,
        render: (text, record) => (
          <span>
            {text.map(tag => {
              let color = '';
              switch(tag) {
                case 'Object Detection': color = '#1890ff'; break;
                case 'Semantic Segmentation': color = '#fa541c'; break;
                case 'Object Tracking': color = '#fa8c16'; break;
                case 'Localization': color = '#13c2c2'; break;
                case 'Planning': color = '#52c41a'; break;
                case 'Prediction': color = '#f5222d'; break;
                case '': color = '#722ed1'; break;
                case '': color = '#eb2f96'; break;
                case '': color = '#722ed1'; break;
                default: color = 'blue-inverse';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: 'Annotation',
        dataIndex: 'annotation',
        filters: [
          {
            text: '3D Bounding Box',
            value: '3D Bounding Box',
          },
          {
            text: '2D Bounding Box',
            value: '2D Bounding Box',
          },
        ],
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        // width: '20%',
        render: (text, record) => (
          <span>
            {text.map(tag => {
              let color = '';
              switch(tag) {
                case 'Object Detection': color = '#1890ff'; break;
                case 'Semantic Segmentation': color = '#fa541c'; break;
                case 'Object Tracking': color = '#fa8c16'; break;
                case 'Localization': color = '#13c2c2'; break;
                case 'Planning': color = '#52c41a'; break;
                case 'Prediction': color = '#f5222d'; break;
                case '': color = '#722ed1'; break;
                case '': color = '#eb2f96'; break;
                case '': color = '#722ed1'; break;
                default: color = 'blue-inverse';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: 'Radar Data Representation',
        dataIndex: 'radar_data_representation',
        filters: [
          {
            text: 'Point Cloud',
            value: 'Point Cloud',
          },
          {
            text: 'Frequency Tensor',
            value: 'Frequency Tensor',
          },
        ],
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        // width: '20%',
        // render: (text, record) => {
        //   let content = text.toString().split('|');
        //   let html = '';
        //   for (let i = 0; i < content.length; i++) {
        //     if (i == 0) {
        //       html = content[i];
        //     } else {
        //       html = <span>{html}<br></br>{content[i]}</span>;
        //     }
        //   }
        //   return <div>{html}</div>;
        // },
        render: (text, record) => (
          <span>
            {text.map(tag => {
              let color = '';
              switch(tag) {
                case 'Point Cloud': color = '#108ee9'; break;
                case 'ADC Signal': color = '#f50'; break;
                case 'Frequency Tensor': color = '#2db7f5'; break;
                case 'Grid Map': color = '#87d068'; break;
                default: color = '#108ee9';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
          </span>
        )
      },
      {
        title: 'Category Number',
        dataIndex: 'category_number',
      },
      {
        title: 'Categories',
        dataIndex: 'categories',
      },
      {
        title: 'Size',
        dataIndex: 'size',
      },
      {
        title: 'Scenarios',
        dataIndex: 'scenarios',
        render: (text, record) => (
          <span>
            {text.map(tag => {
              return (
                <div>
                  {tag}
                </div>
              );
            })}
          </span>
        )
      },
      {
        title: 'Record Area',
        dataIndex: 'record_area',
      },
      {
        title: 'Record Time',
        dataIndex: 'record_time',
      },
      {
        title: 'Affiliation',
        dataIndex: 'affiliation',
      },

    ];
    const data = [
      {
        key: '1',
        name: ['nuScenes', 'https://nuscenes.org/nuscenes', '1'],
        year: 2019,
        task: ['Object Detection', 'Object Tracking', 'Localization', 'Planning', 'Prediction'],
        annotation: ['3D Bounding Box'],
        radar_data_representation: ['Point Cloud'],
        category_number: 23,
        categories: 'Pedestrain, Vehicle, Movable Object, Static Object',
        size: '1000 scenes, 1.4M boxes, 40k frames, 5.5 hours',
        scenarios: ['A diverse set of locations (urban, residential, nature and industrial), times (day and night)', 'sun, rain and clouds'],
        record_area: 'Boston, Singapore',
        record_time: 'September 2018',
        affiliation: 'nuTonomy',
      },
      {
        key: '2',
        name: [],
        year: 2019,
        task: [],
        annotation: [],
        radar_data_representation: [],
        category_number: 0,
        categories: '',
        size: '',
        scenarios: [],
        record_area: '',
        record_time: '',
        affiliation: '',
      },
      {
        key: '3',
        name: [],
        year: 2019,
        task: [],
        annotation: [],
        radar_data_representation: [],
        category_number: 0,
        categories: '',
        size: '',
        scenarios: [],
        record_area: '',
        record_time: '',
        affiliation: '',
      },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="datasets">
        <div className="title-wrapper">
          <h1 name="title" className="title-h1">Datasets</h1>
        </div>
        <Table bordered pagination={{hideOnSinglePage: true}} columns={columns} dataSource={data} onChange={onChange} />;
      </div>
    );
  }
}

export default Dataset;
