import React, {Component} from 'react';
import Container from '../../components/Container/Container';
import WarningBanner from '../../components/WarningBanner/WarningBanner';
import './Preview.css';

export default class Preview extends Component {
    render() {
        return (
          <div>
              <Container>
                  <div className='preview'>
                    <WarningBanner iconName='iconWarning' textContent='This is only a preview. Please click the Continue button to complete the test'/>
                  </div>
              </Container>
          </div>
        );
    }
}
