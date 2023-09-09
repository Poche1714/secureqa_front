import React, { useState } from 'react';
import { Badge, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import './header.scss';
//import { useTranslation } from 'react-i18next';
import {setTypeModal} from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';
import { CommentSharp, EmailOutlined, Search } from '@mui/icons-material';


interface ChildProps {
    name: string;
    image: string;
}
const Header: React.FC<ChildProps> = (props: any) => {
    const count = useSelector((state: any) => state.streams.value); // Accede al estado global
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
            <Grid container border={2} className='header_border'>
                <Grid xs={1} marginLeft={5} marginTop={1} marginBottom={1}>
                    <img className='image_profile' src={props.image}></img>
                </Grid>
                <Grid xs={4}>
                    <p className='name_profile'>{props.name}</p>
                </Grid>
                <Grid xs={3} marginLeft={7} marginTop={2} container>
                    <Grid xs={2} >
                        <IconButton onClick={toggleSearch}>
                            <Search />
                        </IconButton>
                        {isSearchOpen && (
                            <div className='field_search'>
                                <TextField
                                    label="Buscar"
                                    variant="outlined"
                                    fullWidth
                                    className='field_search'
                                    onKeyDown={(e: any) => {
                                        if (e.key === 'Enter') {
                                            // Tu lógica aquí para manejar la tecla Enter
                                            console.log(count);
                                            dispatch(setTypeModal(count !== undefined? count: "xx"));
                                            toggleSearch();
                                            console.log('Se presionó la tecla Enter');
                                        }
                                    }}

                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment onClick={toggleSearch} position="end">
                                                <Search />
                                            </InputAdornment>
                                        ),
                                    }}
                                // Aquí puedes agregar más props de TextField según tus necesidades
                                />
                            </div>
                        )}
                    </Grid>
                    <Grid xs={2} marginLeft={5}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={2} color="info">
                                <CommentSharp />
                            </Badge>
                        </IconButton>
                    </Grid>

                </Grid>

            </Grid>

        </div>
    );
};

export default Header;





