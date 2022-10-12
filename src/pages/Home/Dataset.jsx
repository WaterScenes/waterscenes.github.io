import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
// import * as G2Plot from '@antv/g2plot'
import { Column } from '@ant-design/plots';

import { Table, Tag, Affix } from 'antd';
import { each, groupBy } from '@antv/util';

class Dataset extends React.PureComponent {

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;


    const chart_data = [
      {
        "type": "ADC Signal",
        "x": "nuScenes",
        "y": 1000
      },
      {
        "type": "Frequency Tensor",
        "x": "nuScenes",
        "y": 100
      },
      {
        "type": "Point Cloud",
        "y": null,
        "x": "nuScenes"
      },
      {
        "y": null,
        "type": "ADC Signal"
      },
      {
        "y": null,
        "type": "Frequency Tensor"
      },
      {
        "y": null,
        "type": "Point Cloud"
      },
      {
        "x": "Column2",
        "y": 831,
        "type": "门店一"
      },
      {
        "x": "Column2",
        "y": 995,
        "type": "门店二"
      },
      {
        "x": "Column2",
        "y": 56,
        "type": "Row1"
      },
      {
        "x": "Column3",
        "y": 645,
        "type": "门店一"
      },
      {
        "x": "Column3",
        "y": 325,
        "type": "门店二"
      },
      {
        "x": "Column3",
        "y": 735,
        "type": "Row1"
      },
      {
        "x": "Column4",
        "y": 21,
        "type": "门店一"
      },
      {
        "x": "Column4",
        "y": 746,
        "type": "门店二"
      },
      {
        "x": "Column4",
        "y": 708,
        "type": "Row1"
      },
      {
        "x": "Column5",
        "y": 705,
        "type": "门店一"
      },
      {
        "x": "Column5",
        "y": 169,
        "type": "门店二"
      },
      {
        "x": "Column5",
        "y": 565,
        "type": "Row1"
      },
      {
        "x": "Column6",
        "y": 515,
        "type": "门店一"
      },
      {
        "x": "Column6",
        "y": 578,
        "type": "门店二"
      },
      {
        "x": "Column6",
        "y": 118,
        "type": "Row1"
      },
      {
        "x": "Column7",
        "y": 600,
        "type": "门店一"
      },
      {
        "x": "Column7",
        "y": 774,
        "type": "门店二"
      },
      {
        "x": "Column7",
        "y": 324,
        "type": "Row1"
      },
      {
        "x": "Column8",
        "y": 204,
        "type": "门店一"
      },
      {
        "x": "Column8",
        "y": 835,
        "type": "门店二"
      },
      {
        "x": "Column8",
        "y": 525,
        "type": "Row1"
      },
      {
        "x": "Column9",
        "y": 554,
        "type": "门店一"
      },
      {
        "x": "Column9",
        "y": 693,
        "type": "门店二"
      },
      {
        "x": "Column9",
        "y": 8,
        "type": "Row1"
      },
      {
        "x": "Column10",
        "y": 25,
        "type": "门店一"
      },
      {
        "x": "Column10",
        "y": 195,
        "type": "门店二"
      },
      {
        "x": "Column10",
        "y": 248,
        "type": "Row1"
      },
      {
        "x": "Column11",
        "y": 549,
        "type": "门店一"
      },
      {
        "x": "Column11",
        "y": 550,
        "type": "门店二"
      },
      {
        "x": "Column11",
        "y": 641,
        "type": "Row1"
      },
      {
        "x": "Column12",
        "y": 831,
        "type": "门店一"
      },
      {
        "x": "Column12",
        "y": 531,
        "type": "门店二"
      },
      {
        "x": "Column12",
        "y": 517,
        "type": "Row1"
      },
      {
        "x": "Column13",
        "y": 346,
        "type": "门店一"
      },
      {
        "x": "Column13",
        "y": 331,
        "type": "门店二"
      },
      {
        "x": "Column13",
        "y": 862,
        "type": "Row1"
      },
      {
        "x": "Column14",
        "y": 421,
        "type": "门店一"
      },
      {
        "x": "Column14",
        "y": 310,
        "type": "门店二"
      },
      {
        "x": "Column14",
        "y": 348,
        "type": "Row1"
      },
      {
        "x": "Column15",
        "y": 905,
        "type": "门店一"
      },
      {
        "x": "Column15",
        "y": 351,
        "type": "门店二"
      },
      {
        "x": "Column15",
        "y": 561,
        "type": "Row1"
      },
      {
        "x": "Column16",
        "y": 462,
        "type": "门店一"
      },
      {
        "x": "Column16",
        "y": 226,
        "type": "门店二"
      },
      {
        "x": "Column16",
        "y": 510,
        "type": "Row1"
      },
      {
        "x": "Column17",
        "y": 55,
        "type": "门店一"
      },
      {
        "x": "Column17",
        "y": 627,
        "type": "门店二"
      },
      {
        "x": "Column17",
        "y": 940,
        "type": "Row1"
      }
    ];
    const annotations = [];
    each(groupBy(chart_data, 'x'), (values, k) => {
      const value = values.reduce((a, b) => a + b.y, 0);
      annotations.push({
        type: 'text',
        position: [k, value],
        content: `${value}k`,
        style: {
          textAlign: 'center',
          fontSize: 14,
          fill: 'rgba(0,0,0,0.85)',
        },
        offsetY: -10,
      })
    });

    const config = {
      data: chart_data,
      isStack: true,
      legend: {
        layout: 'horizontal',
        position: 'bottom'
      },
      xAxis: {
        label: {
          autoRotate: true,
          rotate: '100',
          offset: 20,
        },
      },
      yAxis: {
        // "title": null,
      },
      autoFit: true,
      appendPadding: [0, 300, 10 , 300],
      "xField": "x",
      "yField": "y",
      seriesField: 'type',
      "columnSize": 10,
      "color": [
        "#5B8FF9",
        "#5AD8A6",
        "#5D7092",
        "#5b8ff9",
        "#5d7092",
        "#e8684a"
      ],
      label: {
        content: (originData) => {
          const val = parseFloat(originData.value);

          if (val < 0.05) {
            return (val * 100).toFixed(1) + '%';
          }
        },
        offset: 10,
      },
      tooltip: {
        // fields: ['x', 'y'],
        showContent: true,
        customItems: (originalItems: TooltipItem[]) => {
          // process originalItems, 
          return originalItems;
        },
        formatter: (datum: Datum) => {
          console.log(datum)
          return { name: datum.type, value: '✅' };
        },
      },
      annotations,
      // annotations: [{
      //   type: 'text',
      //   position: [0, 1200],
      //   content: '12k',
      //   style: { textAlign: 'center' },
      // }, {
      //   type: 'text',
      //   position: [1, 2000],
      //   content: '12k',
      //   style: { textAlign: 'center' },
      // }, {
      //   type: 'text',
      //   position: [2, 1700],
      //   content: '12k',
      //   style: { textAlign: 'center' },
      // },
      // ],

    }



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
              switch (tag) {
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
              switch (tag) {
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
              switch (tag) {
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
        name: ['Astyx', 'http://www.astyx.net', '2'],
        year: 2019,
        task: ['Object Detection'],
        annotation: ['3D Bounding Box'],
        radar_data_representation: ['Point Cloud'],
        category_number: 7,
        categories: 'Cyclist, Car, Bus, Motocyclist, Person, Trailer, Truck',
        size: '500',
        scenarios: ['-'],
        record_area: 'South of Germany',
        record_time: '-',
        affiliation: 'Technical University of Munich',
      },
      {
        key: '3',
        name: ['DENSE', 'https://www.uni-ulm.de/en/in/driveu/projects/dense-datasets/', '3'],
        year: 2020,
        task: ['Object Detection'],
        annotation: ['2D Bounding Box', '3D Bounding Box'],
        radar_data_representation: ['Point Cloud'],
        category_number: 4,
        categories: 'Pedestrian, Passenger Car, Large Vehicle, Ridable Vehicle',
        size: '12k',
        scenarios: ['Pedestrian zone, residential area, construction area and highway, daytime and street condition',
          'under all weather conditions. Severe weather – such as snow, heavy rain or fog'],
        record_area: 'Germany, Sweden, Denmark, and Finland',
        record_time: 'February and December 2019',
        affiliation: 'Mercedes-Benz AG',
      },

      {
        key: '4',
        name: ['CARRADA', 'https://github.com/valeoai/carrada_dataset', '4'],
        year: 2020,
        task: ['Object Detection', 'Semantic Segmentation',
          'Object Tracking', 'Trajectory Prediction'],
        annotation: ['2D Bounding Box', 'Pointwise'],
        radar_data_representation: ['Frequency Tensor (Range-Doppler Map)',
          'Frequency Tensor (Range-Azimuth Map)'],
        category_number: 3,
        categories: 'Pedestrian, Cyclist, Car',
        size: '12k',
        scenarios: ['Urban driving scenarios', 'adverse weather conditions'],
        record_area: 'Canada',
        record_time: '-',
        affiliation: 'Télécom Paris',
      },

      {
        key: '5',
        name: ['Zendar', 'http://zendar.io/dataset', '5'],
        year: 2020,
        task: ['Object Detection', 'Mapping', 'Localization'],
        annotation: ['2D Bounding Box'],
        radar_data_representation: ['Frequency Tensor (Range-Doppler Map)',
          'Frequency Tensor (Range-Azimuth Map)', 'Point Cloud'],
        category_number: 1,
        categories: 'Car',
        size: '11k',
        scenarios: ['Complex urban driving scenarios'],
        record_area: '-',
        record_time: '-',
        affiliation: 'Zendar',
      },

      {
        key: '6',
        name: ['HawkEye', 'https://github.com/JaydenG1019/HawkEye-Data-Code', '6'],
        year: 2020,
        task: ['Semantic Segmentation'],
        annotation: ['Pointwise'],
        radar_data_representation: ['Point Cloud'],
        category_number: 9,
        categories: 'Sub-compact, Compact, Mid-sized, Full-sized, Sports, SUVs, Jeep, Vans, Trucks',
        size: '3k',
        scenarios: ['327 scenes of cars in 3 types of backgrounds: indoor parking garage, outdoor lot, and outdoor house drive-through.'],
        record_area: '-',
        record_time: '-',
        affiliation: 'University of Illinois at Urbana-Champaign',
      },

      {
        key: '7',
        name: ['RADIATE', 'http://pro.hw.ac.uk/radiate/', '7'],
        year: 2020,
        task: ['Object Detection', 'Object Tracking', 'SLAM', 'Scene Understanding'],
        annotation: ['2D Bounding Box'],
        radar_data_representation: ['Frequency Tensor (Range-Azimuth Map)', 'Radar Scans'],
        category_number: 8,
        categories: 'Pedestrian, Car, Bus, Truck, Van, Motobike, Bicycle, A group of pedestrians',
        size: '44k',
        scenarios: ['driving scenarios (e.g., parked, urban, motorway and suburban)',
          'a variety of weather conditions (e.g., sun, night, rain, fog and snow)'],
        record_area: 'Edinburgh',
        record_time: 'Between February 2019 and February 2020',
        affiliation: 'Heriot-Watt University',
      },

      {
        key: '8',
        name: ['AIODrive', 'http://www.aiodrive.org/', '8'],
        year: 2020,
        task: ['Object Detection', 'Object Tracking', 'Semantic Segmentation', 'Trajectory Prediction', 'Depth Estimation'],
        annotation: ['2D Bounding Box', '3D Bounding Box'],
        radar_data_representation: ['Point Cloud'],
        category_number: 12,
        categories: 'Pedestrian, Car, Cyclist, Vehicle, Motocyclist, Building, Road, Sidewalk, Wall, Traffic Sign, Pole, Fence',
        size: '50k',
        scenarios: ['Crowded scenes, people running, high-speed driving, violations of the traffic rule, and car accidents.',
          'Adverse weather and lighting.'],
        record_area: 'one of eight cities from Carla assets',
        record_time: '-',
        affiliation: 'Carnegie Mellon University',
      },

      {
        key: '9',
        name: ['CRUW', 'https://www.cruwdataset.org/', '9'],
        year: 2021,
        task: ['Object Detection'],
        annotation: ['2D Bounding Box'],
        radar_data_representation: ['Frequency Tensor (Range-Azimuth Map)'],
        category_number: 3,
        categories: 'Pedestrian, Cyclist, Car',
        size: '400k',
        scenarios: ['Area: parking lot, campus road, city street, and highway. Several vision-fail scenarios where the image qualities are pretty bad, i.e., dark, strong light, blur, etc.',
          'strong/weak lighting condition'],
        record_area: '-',
        record_time: '-',
        affiliation: 'University of Washington',
      },

      {
        key: '10',
        name: ['RaDICaL', 'https://publish.illinois.edu/radicaldata/', '10'],
        year: 2021,
        task: ['Object Detection'],
        annotation: ['2D Bounding Box'],
        radar_data_representation: ['ADC Signal'],
        category_number: 2,
        categories: 'Pedestrian, Car',
        size: '17k',
        scenarios: ['Indoor: people, static clutter; outdoor: neighborhood, suburban, highways and city roads.'],
        record_area: '-',
        record_time: '-',
        affiliation: 'University of Illinois at Urbana-Champaign',
      },

      {
        key: '11',
        name: ['RadarScenes', 'https://radar-scenes.com/', '11'],
        year: 2021,
        task: ['Object Detection', 'Semantic Segmentation'],
        annotation: ['2D Bounding Box', 'Pointwise'],
        radar_data_representation: ['Point Cloud'],
        category_number: 11,
        categories: 'Pedestrian, Car, Bus, Truck, Bicycle, Large Vehicle, Train, Motorized Two-wheeler, Pedestrian Group, Animal, Other',
        size: '40k',
        scenarios: ['Inner city, T-junction, commercial area, urban area, country road, road works'],
        record_area: 'Ulm, Germany',
        record_time: 'Between 2016 and 2018',
        affiliation: 'Mercedes-Benz AG, Stuttgart, Germany',
      },

      {
        key: '12',
        name: ['RADDet', 'https://github.com/ZhangAoCanada/RADDet', '12'],
        year: 2021,
        task: ['Object Detection'],
        annotation: ['2D Bounding Box'],
        radar_data_representation: ['Frequency Tensor (Range-Azimuth-Doppler Map)'],
        category_number: 6,
        categories: 'Car, Bus, Motocyclist, Person, Truck, Bicycle',
        size: '10k',
        scenarios: ['Sidewalks', 'sunny weather conditions'],
        record_area: '-',
        record_time: 'September to October 2020',
        affiliation: 'University of Ottawa',
      },

      {
        key: '13',
        name: ['FloW', 'https://www.orca-tech.cn/datasets/FloW/FloW-RI', '13'],
        year: 2021,
        task: ['Object Detection'],
        annotation: ['2D Bounding Box'],
        radar_data_representation: ['Frequency Tensor (Range-Doppler Map)', 'Point Cloud'],
        category_number: 1,
        categories: 'Bottle',
        size: '4k',
        scenarios: ['Inland water surface'],
        record_area: '-',
        record_time: '-',
        affiliation: 'ORCA-Uboat',
      },

      {
        key: '14',
        name: ['RADIal', 'https://github.com/valeoai/RADIal', '14'],
        year: 2021,
        task: ['Object Detection', 'Free Space Segmentation'],
        annotation: ['2D Bounding Box', 'Pointwise'],
        radar_data_representation: ['ADC Signal', 'Frequency Tensor (Range-Doppler Map)', 'Frequency Tensor (Range-Azimuth Map)',
          'Frequency Tensor (Range-Azimuth-Doppler Map)', 'Point Cloud'],
        category_number: 1,
        categories: 'Vehicle',
        size: '8k',
        scenarios: ['City street, highway, countryside road'],
        record_area: '-',
        record_time: '-',
        affiliation: 'Valeo.ai, Paris, France',
      },

      {
        key: '15',
        name: ['VoD', 'https://tudelft-iv.github.io/view-of-delft-dataset/', '15'],
        year: 2022,
        task: ['Object Detection'],
        annotation: ['2D Bounding Box', '3D Bounding Box'],
        radar_data_representation: ['Point Cloud'],
        category_number: 4,
        categories: 'Pedestrian, Cyclist, Car, Truck, Motobike, Rider, Unused Bicycle, Bicycle Rack, Human Depiction, Moped or Scooter, Ride Other, Vehicle Other, Ride Uncertain',
        size: '8k',
        scenarios: ['Campus, suburb and old-town locations. With a preference for scenarios containing vulnerable road users'],
        record_area: 'City of Delft (The Netherlands)',
        record_time: '-',
        affiliation: 'TU Delft, The Netherlands',
      },

      {
        key: '16',
        name: ['Boreas', 'https://www.boreas.utias.utoronto.ca/', '16'],
        year: 2022,
        task: ['Object Detection', 'Localization', 'Odometry'],
        annotation: ['2D Bounding Box'],
        radar_data_representation: ['Frequency Tensor (Range-Azimuth Map)', 'Radar Scans'],
        category_number: 4,
        categories: 'Pedestrian, Cyclist, Car, Misc',
        size: '7k',
        scenarios: ['a repeated route near the University of Toronto Institute for Aerospace Studies (UTIAS)', 'various weather conditions (sun, cloud, rain, night, snow) and seasons.'],
        record_area: 'University of Toronto Institute for Aerospace Studies (UTIAS)',
        record_time: 'November, 2020 and ﬁnishing in November, 2021',
        affiliation: 'University of Toronto',
      },

      {
        key: '17',
        name: ['TJ4DRadSet', '-', '17'],
        year: 2022,
        task: ['Object Detection', 'Object Tracking'],
        annotation: ['3D Bounding Box'],
        radar_data_representation: ['Point Cloud'],
        category_number: 8,
        categories: 'Pedestrian, Cyclist, Car, Bus, Motocyclist, Truck, Engineering Vehicle, Tricyclist',
        size: '40k',
        scenarios: ['various driving scenarios, different road types, such as urban roads, elevated roads, industrial zones, etc.',
          'various lighting conditions, such as normal lighting, bright light and darkness, and different road types, such as urban roads, elevated roads, industrial zones, etc. Complex scenarios such as object-dense intersections, and simple scenarios such as one-way streets with a few objects.'],
        record_area: 'Suzhou, China',
        record_time: 'Fourth quarter of 2021',
        affiliation: 'Tongji University',
      },

      {
        key: '18',
        name: ['K-Radar', 'https://github.com/kaist-avelab/k-radar', '18'],
        year: 2022,
        task: ['Object Detection', 'Object Tracking', 'SLAM'],
        annotation: ['3D Bounding Box'],
        radar_data_representation: ['Frequency Tensor (Range-Doppler Map)', 'Frequency Tensor (Range-Azimuth Map)', 'Frequency Tensor (Range-Azimuth-Doppler Map)'],
        category_number: 5,
        categories: 'Pedestrian, Motobike, Bicycle, Sedan, Bus or Truck',
        size: '35k',
        scenarios: ['adverse weathers (fog, rain, and snow)', 'various road structures (urban, suburban roads, alleyways, and highways).'],
        record_area: 'Daejeon of the Republic of Korea',
        record_time: '-',
        affiliation: 'KAIST',
      },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
      console.log('params', pagination, filters, sorter, extra);
    };

    return (
      <div {...props} {...dataSource.wrapper} id="datasets">
        <div className="title-wrapper">
          <h1 name="title" className="title-h1">Datasets</h1>

        <div className="chart">
          <Column {...config} style={{ textAlign: 'center' }} />
        </div>
        <Table bordered pagination={{ pageSize: 30, hideOnSinglePage: true }} columns={columns} dataSource={data} onChange={onChange} />;
      </div>
      </div>
    );
  }
}

export default Dataset;
