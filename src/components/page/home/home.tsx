import { Grid } from '@mui/material';
import * as React from 'react';
import { connect } from 'react-redux';
import Header from '../../../elements/header/header';
import logo from '../../../images/Image 1.png'
import Footer from '../../../elements/footer_menu/footer';
import Card from '../../../elements/card/card';
//import moment from 'moment';
import './home.scss';
export class Home extends React.Component<any> {


  state = {}
  public render() {
    let cards = [];
    cards.push({ image: logo });
    cards.push({ image: logo });

    return (
      <Grid className='home_page' >

        <Header name={"Jose"} image={logo} ></Header>
        <div className='_container_card'>
          <Card cards={cards}></Card>
        </div>
        <Footer ></Footer>
      </Grid>
    )
  }
}
const mapStateToProps = (state: any) => ({

});


export default connect<any, any, any>(mapStateToProps)(Home);