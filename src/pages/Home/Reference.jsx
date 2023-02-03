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


    const data_dataset = [
      'H. Caesar, V. Bankiti, A. H. Lang, S. Vora, V. E. Liong, Q. Xu, A. Krishnan, Y. Pan, G. Baldan, and O. Beijbom, nuScenes: A multi- modal dataset for autonomous driving, 2020 IEEE/CVFConference on Computer Vision and Pattern Recognition (CVPR), vol. 00, pp. 11618 11628, 2020, nuScenes.',
      'H. Caesar et al., “nuScenes: A multimodal dataset for autonomous driving,” 2020 Ieee Cvf Conf Comput Vis Pattern Recognit Cvpr, vol. 00, pp. 11618–11628, 2020, doi: 10.1109/cvpr42600.2020.01164.'
    ];

    const data_fusion = [
      'H. Caesar et al., “nuScenes: A multimodal dataset for autonomous driving,” 2020 Ieee Cvf Conf Comput Vis Pattern Recognit Cvpr, vol. 00, pp. 11618–11628, 2020, doi: 10.1109/cvpr42600.2020.01164.',
      'H. Caesar et al., “nuScenes: A multimodal dataset for autonomous driving,” 2020 Ieee Cvf Conf Comput Vis Pattern Recognit Cvpr, vol. 00, pp. 11618–11628, 2020, doi: 10.1109/cvpr42600.2020.01164.'
    ];

    const references_dataset = data_dataset.map((item, key) => {
      return (
        <p>
          [{key + 1}] {item}
        </p>
      );
    });
    const references_fusion = data_dataset.map((item, key) => {
      return (
        <p>
          [{key + 1 + data_dataset.length}] {item}
        </p>
      );
    });

    return (
      <div className="home-page-wrapper content12-wrapper" id="references">
        <div className="content12 citation">
          {/* <h1 name="title" className="title-h1">Citation</h1>
          <div style={{ backgroundColor: '#ffffff', padding: '20px'}}>
            <pre><code>
              111
            </code>
            </pre>
          </div> */}

          {/* </div> */}
        </div>
        {/* <div style={{ backgroundColor: '#e6f7ff', height: '40px' }}>11</div> */}
        <div className="content12">
          <h1  name="title" class="title-h1">References</h1>
          <span>
            {references_dataset}
            {references_fusion}
          </span>
        </div>
      </div>
    )
  }
}

export default Dataset;
