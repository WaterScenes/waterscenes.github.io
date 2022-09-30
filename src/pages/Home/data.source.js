import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header0-logo',
    children: 'https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航一', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
          {
            name: 'sub1',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航二', name: 'text' }],
        },
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航三', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '导航四', name: 'text' }],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3' },
  textWrapper: {
    className: 'banner3-text-wrapper',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en',
        children: 'Seeking Experience & Engineering Conference',
      },
      {
        name: 'slogan',
        className: 'banner3-slogan',
        children:
          'Radar-Camera Fusion for Object Detection and Semantic Segmentation in Autonomous Driving: A Review',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name',
        children: '探索极致用户体验与最佳工程实践探索',
      },
      { name: 'button', className: 'banner3-button', children: '立即报名' },
      {
        name: 'time',
        className: 'banner3-time',
        children: '2018.01.06 / 中国·杭州',
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
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      { name: 'title', children: '丰富的特色展台', className: 'title-h1' },
      {
        name: 'content',
        children: (
          <span>
            <p>[1]&nbsp; xxxxx</p>
            <p>[2] xxxx</p>
            <p>[3] xxxx</p>
          </span>
        ),
        className: 'title-content l4pmd64c3o-editor_css',
      },
      {
        name: 'content2',
        children: '现场问诊，为你答疑解难',
        className: 'title-content',
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2018 <a href="https://motion.ant.design">Ant Motion</a> All Rights
        Reserved
      </span>
    ),
  },
};
