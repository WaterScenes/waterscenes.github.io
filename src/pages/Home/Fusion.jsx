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
        evaluation_metrics: 'Average Precision (AP)',
        conference_journal: '2019 International Conference on Robotics and Automation (ICRA)',
        source_code: '-'
      },
      {
        key: '2',
        name: 'Object Detection and Identification using Vision and Radar Data Fusion System for Ground-based Navigation, 2',
        year: 2019,
        task: 'Object Detection',
        annotation: '-',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Object Level',
        fusion_operation: '-',
        network: 'YOLOv3',
        dataset: '-',
        evaluation_metrics: '-',
        conference_journal: '2019 6th International Conference on Signal Processing and Integrated Networks (SPIN)',
        source_code: '-'
      },

      {
        key: '3',
        name: 'Automotive radar and camera fusion using Generative Adversarial Networks, 3',
        year: 2019,
        task: 'Semantic Segmentation',
        annotation: '2D Point Cloud',
        radar_data_representation: 'Grid Map',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Feature fusion and semantic fusion',
        network: 'CMGGAN',
        dataset: 'Self-Recorded',
        evaluation_metrics: 'TP',
        conference_journal: 'Elsevier CVIU (Computer Vision and Image Understanding)',
        source_code: '-'
      },

      {
        key: '4',
        name: 'Deep Learning Based 3D Object Detection for Automotive Radar and Camera, 4',
        year: 2019,
        task: 'Object Detection',
        annotation: '3D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to BEV',
        fusion_level: 'Data Level | Proposal Level',
        fusion_operation: '-',
        network: 'A 3D region proposal network based on VGG',
        dataset: 'Astyx',
        evaluation_metrics: 'Average Precision (AP) | Precision-recall Curve',
        conference_journal: '16th European Radar Conference',
        source_code: '-'
      },

      {
        key: '5',
        name: 'RVNet: Deep Sensor Fusion of Monocular Camera and Radar for Image-Based Obstacle Detection in Challenging Environments, 5',
        year: 2019,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'RVNet based on YOLOv3',
        dataset: 'nuScenes',
        evaluation_metrics: 'Average Precision (AP) | mAP',
        conference_journal: 'PSIVT 2019 (Pacific-Rim Symposium on Image and Video Technology)',
        source_code: '-'
      },

      {
        key: '6',
        name: 'Radar and Camera Early Fusion for Vehicle Detection in Advanced Driver Assistance Systems, 6',
        year: 2019,
        task: 'Object Detection, Object Classification',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Frequency Image (Range-Azimuth Map)',
        projection: 'Image to BEV',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'FusionNet inspired by SSD',
        dataset: 'Self-Recorded',
        evaluation_metrics: 'mAP',
        conference_journal: '33rd Conference on Neural Information Processing Systems',
        source_code: '-'
      },

      {
        key: '7',
        name: 'SO-Net: Joint Semantic Segmentation and Obstacle Detection Using Deep Fusion of Monocular Camera and Radar, 7',
        year: 2020,
        task: 'Object Detection, Semantic Segmentation',
        annotation: '2D Bounding Box | 2D Point Cloud',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'SO-Net based on the RVNet',
        dataset: 'nuScenes',
        evaluation_metrics: 'Accuracy',
        conference_journal: 'PSIVT 2019 (Pacific-Rim Symposium on Image and Video Technology)',
        source_code: '-'
      },

      {
        key: '8',
        name: 'YOdar: Uncertainty-based Sensor Fusion for Vehicle Detection with Camera and Radar Sensors, 8',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'YOdar based on YOLOv3',
        dataset: 'nuScenes',
        evaluation_metrics: 'Average Precision (AP), mAP',
        conference_journal: 'arXiv',
        source_code: '-'
      },

      {
        key: '9',
        name: 'RRPN: Radar Region Proposal Network for Object Detection in Autonomous Vehicles, 9',
        year: 2019,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar proposal to image plane',
        fusion_level: 'Data Level',
        fusion_operation: 'Region Proposal',
        network: 'RRPN',
        dataset: 'nuScenes',
        evaluation_metrics: 'Average Precision (AP) | Average Recall',
        conference_journal: 'ICIP',
        source_code: 'https://github.com/mrnabati/RRPN'
      },

      {
        key: '10',
        name: 'A Deep learning-based radar and camera sensor fusion architecture for object detection, 10',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Data Level',
        fusion_operation: 'Concatenation',
        network: 'CRF-Net based on RetinaNet with a VGG backbone',
        dataset: 'nuScenes | Self-Recorded',
        evaluation_metrics: 'mAP',
        conference_journal: 'SDF',
        source_code: 'https://github.com/TUMFTM/CameraRadarFusionNet'
      },

      {
        key: '11',
        name: 'Radar-Camera Sensor Fusion for Joint Object Detection and Distance Estimation in Autonomous Vehicles, 11',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar proposal to image plane',
        fusion_level: 'Mixed Level',
        fusion_operation: '-',
        network: '-',
        dataset: 'nuScenes',
        evaluation_metrics: 'Average Precision (AP) | Average Recall',
        conference_journal: 'arXiv',
        source_code: '-'
      },

      {
        key: '12',
        name: 'CenterFusion: Center-based Radar and Camera Fusion for 3D Object Detection, 12',
        year: 2021,
        task: 'Object Detection',
        annotation: '3D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'CenterNet with DLA backbone',
        dataset: 'nuScenes',
        evaluation_metrics: 'mAP',
        conference_journal: 'WACV 2021',
        source_code: 'https://github.com/mrnabati/CenterFusion'
      },


      {
        key: '13',
        name: 'Spatial Attention Fusion for Obstacle Detection Using MmWave Radar and Vision Sensor, 13',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Spatial attention fusion | Re-weight',
        network: 'SAF based on FCOS',
        dataset: 'nuScenes',
        evaluation_metrics: 'Average Precision (AP)',
        conference_journal: 'Sensors',
        source_code: 'https://github.com/Singingkettle/SAF-FCOS'
      },


      {
        key: '14',
        name: 'Seeing Through Fog Without Seeing Fog: Deep Multimodal Sensor Fusion in Unseen Adverse Weather, 14',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'A modified VGG backbone and SSD  blocks',
        dataset: 'DENSE',
        evaluation_metrics: 'Average Precision (AP)',
        conference_journal: 'CVPR 2020',
        source_code: 'https://github.com/princeton-computational-imaging/SeeingThroughFog'
      },


      {
        key: '15',
        name: 'RODNet: Radar Object Detection Using Cross-Modal Supervision, 15',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Frequency Image (Range-Azimuth Map)',
        projection: 'Camera image to radar range-azimuth coordinates',
        fusion_level: 'Feature Level',
        fusion_operation: 'Camera-radar fusion (CRF) cross-modal supervision',
        network: 'RODNet',
        dataset: 'CRUW',
        evaluation_metrics: 'Average Precision (AP) | Average Recall, OLS',
        conference_journal: 'WACV 2021',
        source_code: 'https://github.com/yizhou-wang/RODNet'
      },



      {
        key: '16',
        name: '3D Detection and Tracking for On-road Vehicles with a Monovision Camera and Dual Low-cost 4D mmWave Radars, 16',
        year: 2021,
        task: 'Object Detection',
        annotation: '3D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane | Radar point to BEV',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'CNN with SSMA  block',
        dataset: 'Astyx',
        evaluation_metrics: 'mAP | Average Heading Similarity (AHS)',
        conference_journal: 'ITSC 2021',
        source_code: '-'
      },



      {
        key: '17',
        name: 'Radar-Camera Pixel Depth Association for Depth Completion, 17',
        year: 2021,
        task: 'Depth Completion',
        annotation: '-',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Data Level',
        fusion_operation: '-',
        network: 'RC-PDA',
        dataset: 'nuScenes',
        evaluation_metrics: '-',
        conference_journal: 'CVPR 2021',
        source_code: 'https://github.com/longyunf/rc-pda'
      },


      {
        key: '18',
        name: 'Radar Camera Fusion via Representation Learning in Autonomous Driving, 18',
        year: 2021,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Object Level',
        fusion_operation: 'Feature fusion and semantic fusion',
        network: 'AssociationNet',
        dataset: 'Self-Recorded',
        evaluation_metrics: '-',
        conference_journal: 'WACV 2021',
        source_code: '-'
      },


      {
        key: '19',
        name: 'Robust Small Object Detection on the Water Surface through Fusion of Camera and Millimeter Wave Radar, 19',
        year: 2021,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: '-',
        network: '-',
        dataset: 'FloW',
        evaluation_metrics: '-',
        conference_journal: 'ICCV 2020',
        source_code: '-'
      },


      {
        key: '20',
        name: 'Radar+RGB Attentive Fusion for Robust Object Detection in Autonomous Vehicles, 20',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Addition',
        network: 'RANet and BIRANet',
        dataset: 'nuScenes',
        evaluation_metrics: 'Average Precision (AP) | Average Recall',
        conference_journal: 'arXiv',
        source_code: 'https://github.com/RituYadav92/Radar-RGB-Attentive-Multimodal-Object-Detection'
      },

      {
        key: '21',
        name: 'Low-level Sensor Fusion Network for 3D Vehicle Detection using Radar Range-Azimuth Heatmap and Monocular Image, 21',
        year: 2020,
        task: 'Object Detection',
        annotation: '3D Bounding Box',
        radar_data_representation: 'Frequency Image (Range-Azimuth Map)',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'The radar and image backbone has a modiﬁed VGG16 model and a feature pyramid network (FPN)',
        dataset: 'Self-Recorded',
        evaluation_metrics: '-',
        conference_journal: 'ACCV 2020',
        source_code: '-'
      },

      {
        key: '22',
        name: 'GRIF Net: Gated Region of Interest Fusion Network for Robust 3D Object Detection from Radar Point Cloud and Monocular Image, 22',
        year: 2021,
        task: 'Object Detection',
        annotation: '3D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Mixture of Experts',
        network: 'Image Backbone: Feature Pyramid Network(FPN) | Radar Backbone: FPN and Sparse Block Network(SBNet)',
        dataset: 'nuScenes',
        evaluation_metrics: 'Average Precision(AP)',
        conference_journal: 'IROS 2020',
        source_code: '-'
      },


      {
        key: '23',
        name: 'Radar Voxel Fusion for 3D Object Detection, 23',
        year: 2021,
        task: 'Object Detection',
        annotation: '-',
        radar_data_representation: 'Point Cloud',
        projection: '-',
        fusion_level: 'Data Level',
        fusion_operation: '-',
        network: 'RadarVoxelFusionNet (RVF-Net) ',
        dataset: 'nuScenes',
        evaluation_metrics: 'Average Precision(AP)',
        conference_journal: 'MDPI Apply Science',
        source_code: '-'
      },


      {
        key: '24',
        name: 'Pedestrian Detection Based on Fusion of Millimeter Wave Radar and Vision, 24',
        year: 2018,
        task: 'Object Detection',
        annotation: '2D Bounding Box',
        radar_data_representation: 'Point Cloud',
        projection: '-',
        fusion_level: 'Data Level',
        fusion_operation: '-',
        network: '-',
        dataset: 'Self-Recorded',
        evaluation_metrics: '-',
        conference_journal: 'AIPR 2018',
        source_code: '-'
      },


      {
        key: '25',
        name: 'Fusion Point Pruning for Optimized 2D Object Detection with Radar-Camera Fusion, 25',
        year: 2022,
        task: 'Object Detection',
        annotation: '-',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Addition | Concatenation',
        network: 'RetinaNet | ResNet | FPN',
        dataset: 'nuScenes',
        evaluation_metrics: '-',
        conference_journal: 'WACV 2022',
        source_code: '-'
      },


      {
        key: '26',
        name: 'A Feature Pyramid Fusion Detection Algorithm Based on Radar and Camera Sensor, 26',
        year: 2020,
        task: 'Object Detection',
        annotation: '-',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Multiplication | Concatenation',
        network: 'YOLOv3',
        dataset: 'nuScenes',
        evaluation_metrics: '-',
        conference_journal: 'ICSP 2020',
        source_code: '-'
      },


      {
        key: '27',
        name: 'A Simple Baseline for BEV Perception Without LiDAR, 27',
        year: 2022,
        task: 'Semantic Segmentation',
        annotation: '-',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to BEV | Camera image to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: '-',
        dataset: '-',
        evaluation_metrics: 'IOU',
        conference_journal: 'arXiv',
        source_code: '-'
      },


      {
        key: '28',
        name: 'RadSegNet: A Reliable Approach to Radar Camera Fusion, 28',
        year: 2022,
        task: 'Object Detection',
        annotation: '-',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to BEV | Radar point in 3D Cartesian coordinates',
        fusion_level: 'Data Level',
        fusion_operation: 'Concatenation',
        network: 'DeepLabV3+',
        dataset: 'Astyx | RADIATE',
        evaluation_metrics: '-',
        conference_journal: 'arXiv',
        source_code: '-'
      },


      {
        key: '29',
        name: 'Bridging the View Disparity of Radar and Camera Features for Multi-modal Fusion 3D Object Detection, 29',
        year: 2022,
        task: 'Object Detection',
        annotation: '-',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to BEV | Image to BEV',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: '-',
        dataset: 'nuScenes',
        evaluation_metrics: 'mAP | MTP | NDS',
        conference_journal: 'arXiv',
        source_code: '-'
      },


      {
        key: '30',
        name: 'Warping of Radar Data into Camera Image for Cross-Modal Supervision in Automotive Applications, 30',
        year: 2020,
        task: 'Depth Completion | Scene Flow Estimation',
        annotation: '-',
        radar_data_representation: 'Frequency Image (Range-Doppler Map)',
        projection: '-',
        fusion_level: '-',
        fusion_operation: '-',
        network: '-',
        dataset: '-',
        evaluation_metrics: '-',
        conference_journal: 'IEEE Transactions on Vehicle Technology',
        source_code: '-'
      },

    ]

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="methods">
        <div className="title-wrapper">
          <h1 name="title" className="title-h1">Fusion Methods</h1>
        </div>
        <Table bordered columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
}

export default Fusion;
