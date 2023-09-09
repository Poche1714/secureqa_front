import React, { useState } from 'react';
import { Badge, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import './footer.scss';
//import { useTranslation } from 'react-i18next';
import { setSelectMenu } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBoxSharp, Checklist, Home, NetworkCheck, NewReleases, Settings, TabTwoTone, TableBarOutlined, TableBarSharp } from '@mui/icons-material';


interface ChildProps {
    //name: string;
    //image: string;
}
const Footer: React.FC<ChildProps> = (props: any) => {
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
    return (
        <div>
            <Grid container border={2} className='footer_menu'>
                <Grid xs={2}  marginLeft={2} >
                    <div className='footer_menu_item'>
                        <Grid marginTop={3} onClick={()=> dispatch(setSelectMenu('home'))}>
                            <Home fontSize='large'  className={select=== 'home'? '_select': ''}  />
                        </Grid>
                        <Grid marginTop={-2} marginBottom={2}>
                            <p className='footer_menu_text'>Home</p>
                        </Grid>
                    </div>
                </Grid>
                <Grid xs={2}  marginLeft={1} >
                    <div className='footer_menu_item'>
                        <Grid marginTop={3} onClick={()=> dispatch(setSelectMenu('test plan'))}>
                            <TabTwoTone fontSize='large'  className={select=== 'test plan'? '_select': ''} />
                        </Grid>
                        <Grid marginTop={-2} marginBottom={2}>
                            <p className='footer_menu_text'>Test plan</p>
                        </Grid>
                    </div>
                </Grid>
                <Grid xs={2}  marginLeft={1} >
                    <div className='footer_menu_item'>
                        <Grid marginTop={3} onClick={()=> dispatch(setSelectMenu('tests'))}>
                            <Checklist fontSize='large'  className={select=== 'tests'? '_select': ''} />
                        </Grid>
                        <Grid marginTop={-2} marginBottom={1}>
                            <p className='footer_menu_text'>Tests</p>
                        </Grid>
                    </div>
                </Grid>
                <Grid xs={2}  marginLeft={1} >
                    <div className='footer_menu_item'>
                        <Grid marginTop={3} onClick={()=> dispatch(setSelectMenu('news'))}>
                            <NewReleases fontSize='large'  className={select=== 'news'? '_select': ''}/>
                        </Grid>
                        <Grid marginTop={-2} marginBottom={1}>
                            <p className='footer_menu_text'>News</p>
                        </Grid>
                    </div>
                </Grid>
                <Grid xs={2}  marginLeft={1} >
                    <div className='footer_menu_item'>
                        <Grid marginTop={3} onClick={()=> dispatch(setSelectMenu('setting'))}>
                            <Settings fontSize='large'  className={select=== 'setting'? '_select': ''} />
                        </Grid>
                        <Grid marginTop={-2} marginBottom={1}>
                            <p className='footer_menu_text'>Setting</p>
                        </Grid>
                    </div>
                </Grid>
            </Grid>

        </div>
    );
};

export default Footer;





