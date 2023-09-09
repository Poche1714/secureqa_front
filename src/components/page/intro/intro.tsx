import * as React from 'react';
import { connect } from 'react-redux';
//import moment from 'moment';
import './intro.scss';
import { Button, Grid } from '@mui/material';
import { Translation } from 'react-i18next';
import logo from '../../../images/Image 1.png'
export class Intro extends React.Component<any> {


    state = {};

    public render() {

        return (
            <div>
                <Grid container direction="column"
                    justifyContent="center"
                    alignItems="center"
                    className='container_test'
                >
                    <Grid style={{ flex: 1 }}>
                        <Grid xs={12} className='center_logo-position'>
                            <img src={logo}></img>
                        </Grid>
                        <Grid xs={12} marginTop={3}>
                            <p><Translation>{(t) => <p>{t('messag_intro')}</p>}</Translation></p>
                        </Grid>
                    </Grid>
                    <Grid marginBottom={5}>
                        <Grid xs={12}>
                            <Button className='btn _primary' size="large" style={{ width: "250px" }} variant="contained"><Translation>{(t) => <p>{t('sign_in')}</p>}</Translation></Button>
                        </Grid>
                        <Grid xs={12} marginTop={3}>
                            <Button className='btn _secundary' size="large" style={{ width: "250px" }} variant="outlined"><Translation>{(t) => <p>{t('sign_out')}</p>}</Translation></Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => ({

});


export default connect<any, any, any>(mapStateToProps)(Intro);