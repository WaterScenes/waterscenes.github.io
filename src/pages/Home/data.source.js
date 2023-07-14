import React from 'react';
import logo from './images/logo.png';

export const Nav00DataSource = {
  isScrollLink: true,
  wrapper: { className: 'header2 home-page-wrapper jrhtw9ph4a-editor_css' },
  page: { className: 'home-page' },
  logo: {
    className: 'header2-logo',
    children:
      logo,
  },
  LinkMenu: {
    className: 'header2-menu',
    children: [
      {
        name: 'linkNav',
        to: 'WaterScenes',
        children: 'WaterScenes Dataset',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'USV',
        children: 'USV Setup',
        className: 'menu-item',
      },
      {
        name: 'linkNav',
        to: 'Citation',
        children: 'Citation',
        className: 'menu-item',
      },
    ],
  },
  mobileMenu: { className: 'header2-mobile-menu' },
  Menu: {
    children: [
      {
        name: 'Banner3_0',
        to: 'Banner3_0',
        children: '首页',
        className: 'active menu-item',
      },
      {
        name: 'Content8_0',
        to: 'Content8_0',
        children: '特邀嘉宾',
        className: 'menu-item',
      },
      {
        name: 'Content9_0',
        to: 'Content9_0',
        children: '会议日程',
        className: 'menu-item',
      },
      {
        name: 'Content10_0',
        to: 'Content10_0',
        children: '大会地址',
        className: 'menu-item',
      },
      {
        name: 'Content11_0',
        to: 'Content11_0',
        children: '展台展示',
        className: 'menu-item',
      },
      {
        name: 'Content12_0',
        to: 'Content12_0',
        children: '特别鸣谢',
        className: 'menu-item',
      },
    ],
  },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children:
          'WaterScenes: A Multi-Task 4D Radar-Camera Fusion Dataset for Autonomous Driving on Water Surfaces',
        // texty: true,
      },
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Shanliang Yao, Runwei Guan, Zhaodong Wu, Yi Ni, Zixian Zhang, Zile Huang',
      },
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Xiaohui Zhu, Yutao Yue, Yong Yue, Hyungjoon Seo, Ka Lok Man',
      },
      
      // {
      //   name: 'name',
      //   className: 'banner3-name',
      //   children: '探索极致用户体验与最佳工程实践探索',
      // },
      // { name: 'button', className: 'banner3-button', children: '立即报名' },
      {
        name: 'time',
        className: 'banner3-time',
        children: 'University of Liverpool, Xi‘an Jiaotong-Liverpool University, Institute of Deep Perception Technology, JITRI',
      },
      {
        name: 'button',
        className: 'banner3-button',
        children: 'GitHub: https://github.com/WaterScenes/WaterScenes',
        type: 'primary',
        href: 'https://github.com/WaterScenes/WaterScenes',
        target: '_blank',
      },
    ],
  },
};
export const Content130DataSource = {
  OverPack: {
    className: 'home-page-wrapper content13-wrapper',
    playScale: 0.3,
  },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
    //   {
    //     name: 'image',
    //     children:
    //       'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
    //     className: 'title-image',
    //   },
    //   { name: 'title', children: '丰富的特色展台', className: 'title-h1' },
      
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.01 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2023 <a href="https://github.com/WaterScenes">WaterScenes</a> All Rights Reserved
      </span>
    ),
  },
};

export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper content6-wrapper' },
  OverPack: { className: 'home-page content6' },
  textWrapper: { className: 'content6-text', xs: 24, md: 8 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: '蚂蚁金融云提供专业的服务',
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: '基于阿里云计算强大的基础资源',
      },
    ],
  },
  img: {
    children: 'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
    className: 'content6-img',
    xs: 24,
    md: 16,
  },
  block: {
    children: [
      {
        name: 'block0',
        img: {
          children:
            'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          className: 'content6-icon',
        },
        title: { className: 'content6-title', children: '技术' },
        content: {
          className: 'content6-content',
          children:
            '丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
        },
      },
      {
        name: 'block1',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        },
        title: { className: 'content6-title', children: '融合' },
        content: {
          className: 'content6-content',
          children:
            '解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。解放业务及技术生产力，推动金融服务底层创新。',
        },
      },
      {
        name: 'block2',
        img: {
          className: 'content6-icon',
          children:
            'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        },
        title: { className: 'content6-title', children: '开发' },
        content: {
          className: 'content6-content',
          children:
            '符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
        },
      },
    ],
  },
};