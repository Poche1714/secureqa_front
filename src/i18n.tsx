import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    messag_intro: 'Design, testing and validate your security',
                    sign_in: 'Sign in',
                    sign_out: 'Sign out',
                    sign_continue: 'Or continue with',
                    sign_register: "Don't have an account?",
                    sign_cta_register: "Sign up",
                    forget_pass: 'Forget Password',
                    hello: 'Hello',
                    wellcome: 'Wellcome',
                    i_email: 'Email',
                    i_p_email: 'Enter email',
                    i_password: 'Password',
                   
                },
            },
            es: {
                translation: {
                    messag_intro: 'Diseña, prueba y valida tu seguridad ',
                    sign_in: 'Ingresar',
                    sign_out: 'Salir',
                    sign_continue: 'Continua con',
                    forget_pass: 'Recuperar contraseña',
                    sign_register: "No tengo cuenta",
                    sign_cta_register: "registrate",
                    hello: 'Hola',
                    wellcome: 'Bienvenido',
                    i_email: 'Correo electronico',
                    i_p_email: 'Ingresa correo electonico',
                    i_password: 'Contraseña',
                },
            },
        },
        lng: 'en', // idioma predeterminado
        fallbackLng: 'en', // idioma de respaldo
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;