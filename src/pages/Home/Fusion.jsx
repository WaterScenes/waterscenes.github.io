import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { Table, Divider, Tag } from 'antd';

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
          return <div>{content[0]} [<a href='#references'>{parseInt(content[1].trim()) + 19}</a>]</div>;
        },
      },
      {
        title: 'Short Name',
        dataIndex: 'short_name',
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
        onFilter: (value, record) => record.task.includes(value),
        filterSearch: true,
        width: '10%',
        render: (text, record) => {
          let content = text.toString().split('|');
          console.log(content)
          let tags = []
          content.map(tag => {
              tag = tag.trim();
              let color = '';
              switch (tag) {
                case 'Object Detection': color = '#1890ff'; break;
                case 'Semantic Segmentation': color = '#fa541c'; break;
                case 'Object Tracking': color = '#fa8c16'; break;
                case 'Localization': color = '#13c2c2'; break;
                case 'Planning': color = '#52c41a'; break;
                case 'Prediction': color = '#f5222d'; break;
                case 'Object Classification': color = '#eb2f96'; break;
                // case '': color = '#eb2f96'; break;
                // case '': color = '#722ed1'; break;
                default: color = 'blue-inverse';
              }
              tags.push(<Tag color={color} key={tag}>
                {tag}
              </Tag>);
            })
          return tags
        }
      },
      {
        title: 'Annotation',
        dataIndex: 'annotation',
        filters: [
          {
            text: '2D box-level',
            value: '2D box-level',
          },
          {
            text: '3D box-level',
            value: '3D box-level',
          },
          {
            text: '2D pixel-level',
            value: '2D pixel-level',
          },
          {
            text: '3D point-level',
            value: '3D point-level',
          },
        ],
        onFilter: (value, record) => record.annotation.includes(value),
        filterSearch: true,
        render: (text, record) => {
          let content = text.toString().split('|');
          let tags = []
          content.map(tag => {
            tag = tag.trim();
              let color = '';
              switch (tag) {
                case '2D box-level': color = '#1890ff'; break;
                case '3D box-level': color = '#fa541c'; break;
                case '2D pixel-level': color = '#fa8c16'; break;
                case '2D point-level': color = '#13c2c2'; break;
                default: color = 'blue-inverse';
              }
              tags.push(<Tag color={color} key={tag}>
                {tag}
              </Tag>);
            })
          return tags
        }
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
            text: 'Range-Doppler Tensor',
            value: 'Range-Doppler Tensor',
          },
          {
            text: 'Range-Azimuth Tensor',
            value: 'Range-Azimuth Tensor',
          },
          {
            text: 'Range-Azimuth-Doppler Tensor',
            value: 'Range-Azimuth-Doppler Tensor',
          },
        ],
        onFilter: (value, record) => record.radar_data_representation.includes(value),
        filterSearch: true,
        // width: '20%',
        render: (text, record) => {
          let content = text.toString().split('|');
          let tags = []
          content.map(tag => {
            tag = tag.trim();
              let color = '';
              switch (tag) {
                case 'Point Cloud': color = '#108ee9'; break;
                case 'ADC Signal': color = '#f50'; break;
                case 'Range-Doppler Tensor': color = '#2db7f5'; 
                case 'Range-Azimuth Tensor': color = '#2db7f5'; 
                case 'Range-Azimuth-Doppler Tensor': color = '#2db7f5';
                default: color = 'blue-inverse';
              }
              tags.push(<Tag color={color} key={tag}>
                {tag}
              </Tag>);
            })
          return tags
        }
      },
      {
        title: 'Fusion Level',
        dataIndex: 'fusion_level',
        filters: [
          {
            text: 'Object Level',
            value: 'Object Level',
          },
          {
            text: 'Data Level',
            value: 'Data Level',
          },
          {
            text: 'Feature Level',
            value: 'Feature Level',
          },
          {
            text: 'Mixed Level',
            value: 'Mixed Level',
          },
        ],
        onFilter: (value, record) => record.fusion_level.includes(value),
        filterSearch: true,
        // width: '20%',
        render: (text, record) => {
          let content = text.toString().split('|');
          let tags = []
          content.map(tag => {
            tag = tag.trim();
              let color = '';
              switch (tag) {
                case 'Object Level': color = '#1890ff'; break;
                case 'Data Level': color = '#fa541c'; break;
                case 'Feature Level ': color = '#fa8c16'; break;
                case 'Mixed Level': color = '#13c2c2'; break;
                default: color = 'blue-inverse';
              }
              tags.push(<Tag color={color} key={tag}>
                {tag}
              </Tag>);
            })
          return tags
        }
        
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
        title: 'Projection',
        dataIndex: 'projection',
      },
      {
        title: 'Dataset',
        dataIndex: 'dataset',
        filters: [
          {
            text: 'nuScenes',
            value: 'nuScenes',
          },
        ],
        onFilter: (value, record) => record.dataset.includes(value),
        filterSearch: true,
        render: (text, record) => {
          let content = text.toString().split('|');
          let tags = []
          content.map(tag => {
            tags.push(<div><span>{tag}</span><br/></div>);

            })
          return tags
        }
      },
      {
        title: 'Evaluation Metrics',
        dataIndex: 'evaluation_metrics',
        render: (text, record) => {
          let content = text.toString().split('|');
          let tags = []
          content.map(tag => {
              tags.push(<div><span>{tag}</span><br/></div>);
            })
          return tags
        }
      },
      {
        title: 'Conference/Journal',
        dataIndex: 'conference_journal',
      },
      {
        title: 'Source Code',
        dataIndex: 'source_code',
        render: (text, record) => {
          console.log(text)
          if (text != '-') {
            return <a target='_blank' href={text}>{text}</a>;
          }
        },
      },


    ];
    const data = [
      {
        key: '1',
        name: 'Distant vehicle detection using radar and vision, 1',
        short_name: '',
        year: 2019,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Addition | Concatenation',
        network: 'One-stage network based on ResNet',
        dataset: 'Self-Recorded',
        evaluation_metrics: 'AP',
        conference_journal: '2019 International Conference on Robotics and Automation (ICRA)',
        source_code: '-'
      },

      {
        key: '2',
        name: 'RRPN: Radar Region Proposal Network for Object Detection in Autonomous Vehicles, 2',
        short_name: 'RRPN',
        year: 2019,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar proposal to image plane',
        fusion_level: 'Data Level',
        fusion_operation: 'Transformation matrix',
        network: 'RRPN',
        dataset: 'nuScenes',
        evaluation_metrics: 'AP | AR',
        conference_journal: 'ICIP',
        source_code: 'https://github.com/mrnabati/RRPN'
      },
      {
        key: '3',
        name: 'Object Detection and Identification using Vision and Radar Data Fusion System for Ground-based Navigation, 3',
        year: 2019,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Object Level',
        fusion_operation: 'Transformation matrix',
        network: 'YOLOv3',
        dataset: 'Self-Recorded',
        evaluation_metrics: '-',
        conference_journal: '2019 6th International Conference on Signal Processing and Integrated Networks (SPIN)',
        source_code: '-'
      },

      {
        key: '4',
        name: 'Automotive radar and camera fusion using Generative Adversarial Networks, 4',
        year: 2019,
        task: 'Semantic Segmentation',
        annotation: '2D point-level',
        radar_data_representation: 'Grid Map',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Addition',
        network: 'CMGGAN',
        dataset: 'Self-Recorded',
        evaluation_metrics: 'TP',
        conference_journal: 'Elsevier CVIU (Computer Vision and Image Understanding)',
        source_code: '-'
      },

      {
        key: '5',
        name: 'Deep Learning Based 3D Object Detection for Automotive Radar and Camera, 5',
        year: 2019,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to BEV',
        fusion_level: 'Data Level',
        fusion_operation: 'Transformation matrix',
        network: 'A 3D region proposal network based on VGG',
        dataset: 'Astyx',
        evaluation_metrics: 'AP | PRC',
        conference_journal: '16th European Radar Conference',
        source_code: '-'
      },

      {
        key: '6',
        name: 'RVNet: Deep Sensor Fusion of Monocular Camera and Radar for Image-Based Obstacle Detection in Challenging Environments, 6',
        year: 2019,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'RVNet based on YOLOv3',
        dataset: 'nuScenes',
        evaluation_metrics: 'AP | mAP',
        conference_journal: 'PSIVT 2019 (Pacific-Rim Symposium on Image and Video Technology)',
        source_code: '-'
      },

      {
        key: '7',
        name: 'Radar and Camera Early Fusion for Vehicle Detection in Advanced Driver Assistance Systems, 7',
        year: 2019,
        task: 'Object Detection | Object Classification',
        annotation: '2D box-level',
        radar_data_representation: 'Range-Azimuth Tensor',
        projection: 'Image to BEV',
        fusion_level: 'Feature-Level',
        fusion_operation: 'Concatenation',
        network: 'FusionNet inspired by SSD',
        dataset: 'Self-Recorded',
        evaluation_metrics: 'mAP',
        conference_journal: '33rd Conference on Neural Information Processing Systems',
        source_code: '-'
      },


      {
        key: '8',
        name: 'SO-Net: Joint Semantic Segmentation and Obstacle Detection Using Deep Fusion of Monocular Camera and Radar, 8',
        year: 2020,
        task: 'Object Detection | Semantic Segmentation',
        annotation: '2D box-level | 2D pixel-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'SO-Net based on the RVNet',
        dataset: 'nuScenes',
        evaluation_metrics: 'AP',
        conference_journal: 'PSIVT 2019 (Pacific-Rim Symposium on Image and Video Technology)',
        source_code: '-'
      },



      {
        key: '9',
        name: 'Spatial Attention Fusion for Obstacle Detection Using MmWave Radar and Vision Sensor, 9',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Addition | Multiplication',
        network: 'SAF based on FCOS',
        dataset: 'nuScenes',
        evaluation_metrics: 'AP',
        conference_journal: 'Sensors',
        source_code: 'https://github.com/Singingkettle/SAF-FCOS'
      },


   {
        key: '10',
        name: 'A Deep learning-based radar and camera sensor fusion architecture for object detection, 10',
        year: 2019,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Data Level',
        fusion_operation: 'Concatenation',
        network: 'CRF-Net based on RetinaNet',
        dataset: 'nuScenes | Self-Recorded',
        evaluation_metrics: 'mAP',
        conference_journal: 'SDF',
        source_code: 'https://github.com/TUMFTM/CameraRadarFusionNet'
      },



      {
        key: '11',
        name: 'Seeing Through Fog Without Seeing Fog: Deep Multimodal Sensor Fusion in Unseen Adverse Weather, 11',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation | Re-weight',
        network: 'A modified VGG backbone and SSD blocks',
        dataset: 'DENSE',
        evaluation_metrics: 'AP',
        conference_journal: 'CVPR 2020',
        source_code: 'https://github.com/princeton-computational-imaging/SeeingThroughFog'
      },



      {
        key: '12',
        name: 'Radar+RGB Attentive Fusion for Robust Object Detection in Autonomous Vehicles, 12',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Addition',
        network: 'RANet and BIRANet based on ResNet',
        dataset: 'nuScenes',
        evaluation_metrics: '-',
        conference_journal: 'arXiv',
        source_code: 'https://github.com/RituYadav92/Radar-RGB-Attentive-Multimodal-Object-Detection'
      },


      {
        key: '13',
        name: 'Radar-Camera Sensor Fusion for Joint Object Detection and Distance Estimation in Autonomous Vehicles, 13',
        year: 2020,
        task: 'Object Detection | Depth Estimation',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar proposal to image plane',
        fusion_level: 'Mixed Level',
        fusion_operation: '-',
        network: 'FPN with ResNet as backbone, and RPN in Faster R-CNN',
        dataset: 'nuScenes',
        evaluation_metrics: 'AP | AR',
        conference_journal: 'arXiv',
        source_code: '-'
      },


  {
        key: '14',
        name: 'YOdar: Uncertainty-based Sensor Fusion for Vehicle Detection with Camera and Radar Sensors, 14',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'YOdar based on YOLOv3',
        dataset: 'nuScenes',
        evaluation_metrics: 'AP | mAP',
        conference_journal: 'arXiv',
        source_code: '-'
      },


      {
        key: '15',
        name: 'CenterFusion: Center-based Radar and Camera Fusion for 3D Object Detection, 15',
        year: 2020,
        task: 'Object Detection',
        annotation: '3D box-level',
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
        key: '16',
        name: 'RODNet: Radar Object Detection Using Cross-Modal Supervision, 16',
        year: 2020,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Range-Azimuth Tensor',
        projection: 'Camera image to radar range-azimuth coordinates',
        fusion_level: 'Feature Level',
        fusion_operation: '-',
        network: 'RODNet',
        dataset: 'CRUW',
        evaluation_metrics: 'AP | AR | OLS',
        conference_journal: 'WACV 2021',
        source_code: 'https://github.com/yizhou-wang/RODNet'
      },


      {
        key: '17',
        name: 'RAMP-CNN: A Novel Neural Network for Enhanced Automotive Radar Object Recognition, 17',
        year: 2021,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Range-Azimuth-Doppler Tensor',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'RAMP-CNN',
        dataset: 'CRUW',
        evaluation_metrics: '-',
        conference_journal: 'IEEE Sensors',
        source_code: '-'
      },


      {
        key: '18',
        name: 'A Feature Pyramid Fusion Detection Algorithm Based on Radar and Camera Sensor, 18',
        year: 2021,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Multiplication | Concatenation',
        network: 'A network based on YOLOv3',
        dataset: 'nuScenes',
        evaluation_metrics: '-',
        conference_journal: 'ICSP 2020',
        source_code: '-'
      },


     {
        key: '19',
        name: 'Low-level Sensor Fusion Network for 3D Vehicle Detection using Radar Range-Azimuth Heatmap and Monocular Image, 19',
        year: 2020,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Range-Azimuth Tensor',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'A network based on VGG and FPN',
        dataset: 'Self-Recorded',
        evaluation_metrics: '-',
        conference_journal: 'ACCV 2020',
        source_code: '-'
      },



    {
        key: '20',
        name: 'Radar Camera Fusion via Representation Learning in Autonomous Driving, 20',
        year: 2021,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Object Level',
        fusion_operation: 'Transformation matrix | Concatenation',
        network: 'AssociationNet',
        dataset: 'Self-Recorded',
        evaluation_metrics: '-',
        conference_journal: 'WACV 2021',
        source_code: '-'
      },



     {
        key: '21',
        name: 'Radar Voxel Fusion for 3D Object Detection, 21',
        year: 2021,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Point Cloud',
        projection: '-',
        fusion_level: 'Data Level',
        fusion_operation: 'Concatenation',
        network: 'RVF-Net based on VoxelNet',
        dataset: 'nuScenes',
        evaluation_metrics: 'AP',
        conference_journal: 'MDPI Apply Science',
        source_code: '-'
      },



      {
        key: '22',
        name: '3D Detection and Tracking for On-road Vehicles with a Monovision Camera and Dual Low-cost 4D mmWave Radars, 22',
        year: 2021,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane | Radar point to BEV',
        fusion_level: 'Mixed Level',
        fusion_operation: 'Concatenation',
        network: 'CNN with SSMA block',
        dataset: 'Astyx',
        evaluation_metrics: 'mAP | Average Heading Similarity (AHS)',
        conference_journal: 'ITSC 2021',
        source_code: '-'
      },


     {
        key: '23',
        name: 'Robust Small Object Detection on the Water Surface through Fusion of Camera and Millimeter Wave Radar, 23',
        year: 2021,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation | Addition | Multiplication',
        network: 'RISFNet based on CSPdarknet53 and VGG',
        dataset: 'FloW',
        evaluation_metrics: '-',
        conference_journal: 'ICCV 2020',
        source_code: '-'
      },



      {
        key: '24',
        name: 'GRIF Net: Gated Region of Interest Fusion Network for Robust 3D Object Detection from Radar Point Cloud and Monocular Image, 24',
        year: 2021,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Point Cloud',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Re-weight',
        network: 'GRIF Net based on FPN and SBNet',
        dataset: 'nuScenes',
        evaluation_metrics: 'AP',
        conference_journal: 'IROS 2020',
        source_code: '-'
      },



      {
        key: '25',
        name: 'Fusion Point Pruning for Optimized 2D Object Detection with Radar-Camera Fusion, 25',
        year: 2021,
        task: 'Object Detection',
        annotation: '2D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Addition | Concatenation',
        network: 'A network based on RetinaNet architecture with a ResNet backbone',
        dataset: 'nuScenes',
        evaluation_metrics: '-',
        conference_journal: 'WACV 2022',
        source_code: '-'
      },



      {
        key: '26',
        name: 'A Simple Baseline for BEV Perception Without LiDAR, 26',
        year: 2021,
        task: 'Semantic Segmentation',
        annotation: '2D pixel-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to BEV | Camera image to image plane',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'A network with a ResNet backbone',
        dataset: 'nuScenes',
        evaluation_metrics: 'IOU',
        conference_journal: 'arXiv',
        source_code: '-'
      },


    {
        key: '27',
        name: 'RadSegNet: A Reliable Approach to Radar Camera Fusion, 27',
        year: 2022,
        task: 'Object Detection',
        annotation: '2D box-level | 2D pixel-level',
        radar_data_representation: 'Point Cloud | Range-Azimuth Tensor',
        projection: 'Radar point to BEV | Radar point in 3D Cartesian coordinates',
        fusion_level: 'Data-Level',
        fusion_operation: 'Concatenation',
        network: 'RadSegNet',
        dataset: 'Astyx | RADIATE',
        evaluation_metrics: '-',
        conference_journal: 'arXiv',
        source_code: '-'
      },


    {
        key: '28',
        name: 'Bridging the View Disparity of Radar and Camera Features for Multi-modal Fusion 3D Object Detection, 28',
        year: 2022,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Point Cloud',
        projection: 'Radar point to BEV | Image to BEV',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'RCBEV with Swin Transformer as backbone and FPN as neck',
        dataset: 'nuScenes',
        evaluation_metrics: 'mAP | MTP | NDS',
        conference_journal: 'arXiv',
        source_code: '-'
      },



       {
        key: '29',
        name: 'CRAFT: Camera-Radar 3D Object Detection with Spatio-Contextual Fusion Transformer, 29',
        year: 2022,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Point Cloud',
        projection: '-',
        fusion_level: 'Data Level',
        fusion_operation: 'Concatenation',
        network: 'RCBEV with Swin Transformer as backbone and FPN as neck',
        dataset: 'nuScenes',
        evaluation_metrics: '-',
        conference_journal: 'arXiv',
        source_code: '-'
      },



       {
        key: '30',
        name: 'DeepFusion: A Robust and Modular 3D Object Detector for Lidars, Cameras and Radar, 30',
        year: 2022,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Point Cloud',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Concatenation',
        network: 'DeepFusion',
        dataset: 'Self-reorded | nuScenes',
        evaluation_metrics: '-',
        conference_journal: 'arXiv',
        source_code: '-'
      },


       {
        key: '31',
        name: 'CramNet: Camera-Radar Fusion with Ray-Constrained Cross-Attention for Robust 3D Object Detection, 31',
        year: 2022,
        task: 'Object Detection',
        annotation: '3D box-level',
        radar_data_representation: 'Range-Azimuth Tensor',
        projection: '-',
        fusion_level: 'Feature Level',
        fusion_operation: 'Re-weight',
        network: 'CramNet',
        dataset: 'RADIATE',
        evaluation_metrics: '-',
        conference_journal: 'arXiv',
        source_code: '-'
      },
      

    ]

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="methods">
        <div className="title-wrapper">
        <h2 name="title" className="title-h1">Radar-Camera Fusion Methods</h2>
          
        </div>
        <Table bordered scroll={{x: '200px'}} columns={columns} dataSource={data} onChange={onChange} />
      </div>
    );
  }
}

export default Fusion;
