import * as React from 'react';
import { connect } from 'react-redux';
//import moment from 'moment';
import './signin.scss';
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Translation } from 'react-i18next';
import logo from '../../../images/Image 1.png'
import { EmailOutlined, PasswordRounded, Visibility, VisibilityOff } from '@mui/icons-material';


export class Signin extends React.Component<any> {


  public handleClickShowPassword = () => this.setState({ showpassword: !this.state.showpassword });



  state = { showpassword: null };

  public render() {
    console.log(<Translation>{(t) => t('i_p_email')}</Translation>);
    return (
      <div>
        <Grid container direction="column"
          justifyContent="center"
          alignItems="center"
          className='container_test'
        >
          <Grid style={{ flex: 1 }}>
          <Grid marginTop={5} >
            <Grid xs={12} >
              <Grid>
                <Translation>{(t) => <h1>{t('hello')}</h1>}</Translation>
              </Grid>
              <Grid>
                <Translation>{(t) => <h3>{t('wellcome')}</h3>}</Translation>
              </Grid>
            </Grid>
            <Grid xs={12} marginTop={3}>
              <TextField
                id="input-with-icon-textfield"
                label={<Translation>{(t) => t('i_email')}</Translation>}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} marginTop={3}>
              <FormControl  >
                <InputLabel htmlFor="outlined-adornment-password"><Translation>{(t) => t('i_password')}</Translation></InputLabel>
                <OutlinedInput

                  id="outlined-adornment-password"
                  type={this.state.showpassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        onMouseDown={this.handleClickShowPassword}
                        edge="end"
                      >
                        {this.state.showpassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label={<Translation>{(t) => t('i_password')}</Translation>}
                />
              </FormControl>
            </Grid>
            <Grid xs={12} marginLeft={15} marginTop={1}>
              <Translation>{(t) => <a className='link_underline'>{t('forget_pass')}</a>}</Translation>
            </Grid>
          </Grid>
          <Grid xs={12} marginTop={5}>
            <Button className='btn _primary' size="medium" style={{ width: "250px" }} variant="contained"><Translation>{(t) => <p>{t('sign_in')}</p>}</Translation></Button>
          </Grid>
          <Grid xs={12} container marginTop={2}>
            <Grid xs={12} >
              <Translation>{(t) => <p>{t('sign_continue')}</p>}</Translation>
            </Grid>
            <Grid xs={2} marginLeft={11}>
              <a >
                <img className='icon_signin' src={logo}>
                </img>
              </a>
            </Grid>
            <Grid xs={2} marginLeft={1}>
              <a >
                <img className='icon_signin' src={logo}>
                </img>
              </a>
            </Grid>
            <Grid xs={2} marginLeft={1}>
              <a >
                <img className='icon_signin' src={logo}>
                </img>
              </a>
            </Grid>
          </Grid>
          </Grid>
          <Grid marginBottom={2}>
            <Grid container xs={12}>
            <Translation>{(t) => <p >{t('sign_register')}</p>}</Translation>
            <Translation>{(t) => <a className='link_underline _position'>{t('sign_cta_register')}</a>}</Translation>
            
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  }
}
const mapStateToProps = (state: any) => ({

});


export default connect<any, any, any>(mapStateToProps)(Signin);