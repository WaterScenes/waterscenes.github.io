import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import { Table } from 'antd';


class Dataset extends React.PureComponent {
  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;


    return (
      <div className="home-page-wrapper content12-wrapper">
        <div className="content12">
        <h1 id="references"  name="title" className="title-h1">Citation</h1>
          {/* <div class="title-wrapper" data-edit="titleWrapper"> */}
          <pre><code>
         
</code>
          </pre>
        {/* </div> */}
        </div>

        <div className="content12">
        <h1 id="references"  name="title" class="title-h1">References</h1>
          {/* <div class="title-wrapper" data-edit="titleWrapper"> */}
          <span>
            <p>[1] H. Caesar et al., “nuScenes: A multimodal dataset for autonomous driving,” 2020 Ieee Cvf Conf Comput Vis Pattern Recognit Cvpr, vol. 00, pp. 11618–11628, 2020, doi: 10.1109/cvpr42600.2020.01164.</p>
            <p>[2] xxxx</p>
            <p>[3] xxxx</p>
          </span>
        {/* </div> */}
        </div>
    </div>
    )
  }
}

export default Dataset;
