import React, { useEffect, useState, FormEvent } from "react";
import { Formik } from 'formik';
import Button from './Button'
import Input from './Input'


const CadastrarCliente = () => {


    const [user, setUser] = useState({ 
        nomecliente: "", 
        endereco: "",
        numresidencia: "",
        phone: "",
        dtcadastro: "",
        dtanascimento: "",
        email: '',
    });
    const handleBlur = (name, e) =>
    setUser({ ...user, [name]: e.currentTarget.value });

    

    console.log(user.nomecliente)

    function getProdutos(){
        return <>
            <li>{user.nomecliente}</li>
            <li>{user.endereco}</li>
            <li>{user.numresidencia}</li>
            <li>{user.phone}</li>
            <li>{user.dtcadastro}</li>
            <li>{user.dtanascimento}</li>
            <li>{user.email}</li>
            </>  
    }

 




    return (
    <>
    <br/>
    <Formik>
        <form >
        <fieldset className="fieldset">
        <div className="field">
            <label className="label">Nome do Cliente</label><br/><br/>
                <Input 
                    type="text" 
                    name='nomecliente'
                    onBlur={(e) => handleBlur("nomecliente", e)}
                    >
                </Input>
        </div>
        <div className="field-group">
            <label className="label">Endereço </label>
                <Input 
                    type="text" 
                    name='endereco'
                    onBlur={(e) => handleBlur("endereco", e)}
                    >

                </Input>
            <label className="label">Numero Residência </label>
                <Input 
                    type="text" 
                    name='numresidencia'
                    onBlur={(e) => handleBlur("numresidencia", e)}
                    >

                </Input>
            <label className="label">Telefone </label>
                <Input 
                    type="text" 
                    name='phone'
                    onBlur={(e) => handleBlur("phone", e)}
                    >
                </Input>
        </div>
   
        <div className="field-group">
            <label  className="label">Data Cadastro </label>
                <Input 
                    type="date" 
                    name='dtcadastro'
                    onBlur={(e) => handleBlur("dtcadastro", e)}
                    >

                </Input>

            <label  className="label">Data Nascimento </label>
                <Input 
                    type="date" 
                    name='dtanascimento'
                    onBlur={(e) => handleBlur("dtanascimento", e)}
                    >
                </Input>
                <label  className="label">E-mail </label>
                <Input 
                    type="email" 
                    name='email'
                    onBlur={(e) => handleBlur("email", e)}
                    >
                </Input>
        </div>
           
            <br/>
            <Button nameButton ="Cadastrar" type="submit" ></Button>
        </fieldset>
        </form>
        </Formik>
        <br/>
        <br/>
        <div>
        <h2 className="label">Repetição</h2>
            <ul className="label">
                {getProdutos()}
            </ul>
       
        </div>

 
    </>
    )
    }
    
    export default CadastrarCliente