import { FormControl, Button, Box, Typography, Stack, Paper,  } from "@mui/material"
import TextField from "@mui/material/TextField"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "../../Context";
import Logo from "../../assets/images/Logo 1.svg"
import { Formik, Form , Field, useFormik, ErrorMessage} from "formik";
import { NavLink, useNavigate } from "react-router-dom";


export const Login = () => {
    const date = new Date
    const {setToken, setUser} = useContext(Context)
    const navigator = useNavigate()    
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (event) => {
            const jsons = await axios({
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {...event, date:` ${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes()} Login-At` },
                url: "http://localhost:1111/login"
            }).catch(error => console.log(error))
            let response = await jsons.data
            if(response){
                const {accessToken, user} = response
                if(accessToken !== undefined || accessToken !== null){
                    setToken(accessToken)
                    setUser(user)
                    navigator("/")
                }
            }
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Email invalid").required("Email i'ts required"),
            password: Yup.string().min(3, "Minimum 3").max(12, "Maximum 12").required("Password it's required")
        })
    })
    const handleSubmit = (event) => {
        console.log(event)
    }
    return(
        <div className="w-100 d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
            <Box className="text-center w-100">
            <img src={Logo} className="pb-4" alt="Logo"  />
            <Typography variant="h3" className="pb-5">Аутентификация</Typography>
            <Paper className="w-50 mx-auto p-2 py-4 shadow">
            <form onSubmit={formik.handleSubmit}>
            <Stack spacing={3}>
            <Box>
            <TextField error={formik.errors?.email? true :false} {...formik.getFieldProps("email")} className="w-75" label="Email" placeholder="Email" />
            {formik.errors?.email? <Typography variant="body2" className="text-danger">{formik.errors.email}</Typography>: ""}
            </Box>
            <Box>
            <TextField error={formik.errors?.password? true :false} {...formik.getFieldProps("password")} className="w-75" label="Пароль" placeholder="Пароль"/>
            {formik.errors?.password? <Typography variant="body2" className="text-danger">{formik.errors.password}</Typography>: ""}
            </Box>
            <Box className="d-flex justify-content-center">
                <Button  type="submit" variant="contained">Войти</Button>
                <Box className="px-2">
                    <Typography variant="body1">Еще нет аккаунта?</Typography>
                    <NavLink to={"/register"} className="text-decoration-none text-secondary">Регистрация</NavLink>
                </Box>
            </Box>
            </Stack>
            </form>
            </Paper>
            </Box>
        </div>  
    )
}