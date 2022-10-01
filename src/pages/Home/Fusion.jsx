import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { Table } from 'antd';

class Fusion extends React.PureComponent {
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
          let content = text.toString().split(',');
          console.log(content);
          return <div>{content[0]} [{content[1].replace(/\s+/g, "")}]</div>;
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
        onFilter: (value, record) => record.address.startsWith(value),
        filterSearch: true,
        width: '10%',
        render: (text, record) => {
          let content = text.toString().split('|');
          let html = '';
          for (let i = 0; i < content.length; i++) {
            if (i == 0) {
              html = content[i];
            } else {
              html = <span>{html}<br></br>{content[i]}</span>;
            }
          }
          return <div>{html}</div>;
        },
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
        render: (text, record) => {
          let content = text.toString().split('|');
          let html = '';
          for (let i = 0; i < content.length; i++) {
            if (i == 0) {
              html = content[i];
            } else {
              html = <span>{html}<br></br>{content[i]}</span>;
            }
          }
          return <div>{html}</div>;
        },
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
        render: (text, record) => {
          let content = text.toString().split('|');
          let html = '';
          for (let i = 0; i < content.length; i++) {
            if (i == 0) {
              html = content[i];
            } else {
              html = <span>{html}<br></br>{content[i]}</span>;
            }
          }
          return <div>{html}</div>;
        },
      },
      {
        title: 'Projection',
        dataIndex: 'projection',
      },
      {
        title: 'Fusion Level',
        dataIndex: 'fusion_level',
      },
      {
        title: 'Fusion Operation',
        dataIndex: 'fusion_operation',
        render: (text, record) => {
          let content = text.toString().split('|');
          let html = '';
          for (let i = 0; i < content.length; i++) {
            if (i == 0) {
              html = content[i];
            } else {
              html = <span>{html}<br></br>{content[i]}</span>;
            }
          }
          return <div>{html}</div>;
        },
      },
      {
        title: 'Network',
        dataIndex: 'network',
      },
      {
        title: 'Dataset',
        dataIndex: 'dataset',
      },
      {
        title: 'Evaluation Metrics',
        dataIndex: 'evaluation_metrics',
      },
      {
        title: 'Conference/Journal',
        dataIndex: 'conference_journal',
      },
      {
        title: 'Source Code',
        dataIndex: 'source_code',
        render: (text, record) => {
          return <div><a target='_blank' href={text}></a></div>;
        },
      },
      // {
      //   title: 'Record Area',
      //   dataIndex: 'record_area',
      // },
      // {
      //   title: 'Record Time',
      //   dataIndex: 'record_time',
      // },
      

    ];
    const data = [
      {
        key: '1',
        name: 'Distant vehicle detection using radar and vision, 1',
        year: 2019,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Addition | Concatenation',
        network: 'One-stage network based on ResNet',
        dataset: 'Self-Recorded',
        evaluation_metrics: 'AP',
        conference_journal: '2019 International Conference on Robotics and Automation (ICRA)',
        source_code: ''
      },
      {
        key: '2',
        name: 'Distant vehicle detection using radar and vision, 2',
        year: 2019,
        task: '',
        annotation: '',
        radar_data_representation: '',
        projection: '',
        fusion_level: '',
        fusion_operation: '',
        network: '',
        dataset: '',
        evaluation_metrics: '',
        conference_journal: '',
        source_code: ''
      },
      {
        key: '2',
        name: 'Distant vehicle detection using radar and vision, 2',
        year: 2019,
        task: '',
        annotation: '',
        radar_data_representation: '',
        projection: '',
        fusion_level: '',
        fusion_operation: '',
        network: '',
        dataset: '',
        evaluation_metrics: '',
        conference_journal: '',
        source_code: ''
      },
      {
        key: '2',
        name: 'Distant vehicle detection using radar and vision, 2',
        year: 2019,
        task: '',
        annotation: '',
        radar_data_representation: '',
        projection: '',
        fusion_level: '',
        fusion_operation: '',
        network: '',
        dataset: '',
        evaluation_metrics: '',
        conference_journal: '',
        source_code: ''
      },
      {
        key: '2',
        name: 'Distant vehicle detection using radar and vision, 2',
        year: 2019,
        task: '',
        annotation: '',
        radar_data_representation: '',
        projection: '',
        fusion_level: '',
        fusion_operation: '',
        network: '',
        dataset: '',
        evaluation_metrics: '',
        conference_journal: '',
        source_code: ''
      },
      {
        key: '2',
        name: 'Distant vehicle detection using radar and vision, 2',
        year: 2019,
        task: '',
        annotation: '',
        radar_data_representation: '',
        projection: '',
        fusion_level: '',
        fusion_operation: '',
        network: '',
        dataset: '',
        evaluation_metrics: '',
        conference_journal: '',
        source_code: ''
      },
      {
        key: '2',
        name: 'Distant vehicle detection using radar and vision, 2',
        year: 2019,
        task: '',
        annotation: '',
        radar_data_representation: '',
        projection: '',
        fusion_level: '',
        fusion_operation: '',
        network: '',
        dataset: '',
        evaluation_metrics: '',
        conference_journal: '',
        source_code: ''
      },

    ];

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper}>
        <div className="title-wrapper">
          <h1 name="title" className="title-h1">Fusion Methods</h1>
        </div>
        <Table bordered columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
}

export default Fusion;
