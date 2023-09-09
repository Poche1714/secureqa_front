import React, { useState } from 'react';
import { Badge, Button, Divider, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import './card.scss';
//import { useTranslation } from 'react-i18next';
import { setSelectMenu } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { AddAlert, AddAlertSharp, Alarm, AlarmOn, CrisisAlert, Dangerous, Download, FireplaceTwoTone, RailwayAlert, Warning } from '@mui/icons-material';


interface ChildProps {
    //name: string;
    cards: any;
}
const Card: React.FC<ChildProps> = (props: any) => {
    const select = useSelector((state: any) => state.streams.menu); // Accede al estado global
    const dispatch = useDispatch(); // Obtiene la función dispatch
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
    //  const { t } = useTranslation();
    /*
        <TextField
                    id="input-with-icon-textfield"
                    label={t('i_email')}
                    placeholder={t('i_p_email')}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
    */
    const cards = () => {
        let cards_array: any[] = [];
        props.cards.map((item: any) => {
            cards_array.push(<div>
                <Grid border={1} className='_border' margin={0.6} >
                    <Grid xs={12} container marginTop={3} marginBottom={3}>
                        <Grid xs={3}>
                            <Grid>
                                <img className='image_profile' src={item.image}></img>
                            </Grid>
                            <Grid marginTop={-5} marginLeft={5}>
                                <p className='_index'>1</p>
                            </Grid>
                        </Grid>
                        <Grid xs={6} className='_left'>
                            <Grid xs={12} marginTop={-2}>
                                <p className='_size_color'>Test plan 1</p>
                            </Grid>
                            <Grid xs={12} marginTop={-2} >
                                <a className='_tag'>Funcionalidad de pagos</a>
                            </Grid>
                        </Grid>
                        <Grid xs={3} marginLeft={-1}>
                            <Button size='small' className='btn _third'>Detail</Button>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid className='_left' marginLeft={3} marginRight={3}>
                            <Grid>
                                <p className='_description'>Esta nueva funcionalidad permitira conectar la aplicaion con las diferentes plataformas de pago ...</p>
                            </Grid>
                            <Grid marginTop={-1}>
                                <a className='_link'>See more</a>
                            </Grid>
                        </Grid>
                        <Grid margin={2}>
                            <img className='_image' src={item.image}></img>
                        </Grid>
                        <Grid container>
                            <Grid xs={6} container marginLeft={2}>
                                <Grid xs={3} ><FireplaceTwoTone color='error' /></Grid>
                                <Grid className='_left' xs={9} marginTop={-1.5}>
                                    <p className='_results'>Medium</p>
                                </Grid>
                            </Grid>
                            <Grid xs={5}>
                                <Grid className='_right' xs={11} marginTop={-2}>
                                    <p className='_results'>90%  Coverage</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Grid container marginTop={2}>
                            <Grid xs={4} container marginLeft={4}>
                                <Grid xs={3} ><Warning color='disabled' /></Grid>
                                <Grid className='_left' xs={9} marginTop={-1.5}>
                                    <p className='_results'>Alerts</p>
                                </Grid>
                            </Grid>
                            <Grid xs={4} marginLeft={9} container className='_left'>
                                <Grid xs={3} className='_left'><Download color='disabled' /></Grid>
                                <Grid className='_left' xs={7} marginTop={-1.5}>
                                    <p className='_results _left'>Download</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>)
        })
        return cards_array;
    }
    return (<>{cards()}</>);
   };

export default Card;





