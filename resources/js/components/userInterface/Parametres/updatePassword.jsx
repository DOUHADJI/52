import { Button, Grid, Input, Text } from "@nextui-org/react"
import { useState } from "react"
import { BsPerson } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { postWithAxios } from "../../api/axios"


const UpdatePassword = () => {
   

    const [password, setPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [confirmedPassword, setConfirmedPassword] = useState()
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

  
    const getPassword = (e) => {
        const value = e.target.value
        setPassword(value)
     
    }
  
    const getNewPassword = (e) => {
      const value = e.target.value
      setNewPassword(value)
    }
  
    const getConfirmedPassword = (e) => {
        const value = e.target.value
        setConfirmedPassword(value)
      }
  
  
    const notifySuccess = ()=>toast('Votre mot de passe a  été changé avec success', {
      hideProgressBar:true,
      type: 'success'
    })
  
  
    const updateSuccessfull = (user) => {
      setUser(user)
      notifySuccess();
      window.location.reload()
    }
   
  
    const UpdatePassword = async () => {
  
        const data = {
            password: password,
            newPassword: newPassword,
            newPassword_confirmation: confirmedPassword
        }
        const res = await postWithAxios('/change_password', data)
 
        res.errors ? setErrors(res.errors) : updateSuccessfull(res.user)

    
  
    }

    const returnBack = () => {
        navigate('/backoffice/mon_compte/informations_utilisateur')
    }
  
    return(
    
    <div className="w-full ">
      <ToastContainer />
    <div className="flex  items-center justify-center ">
      <Text b className="text-gray-500 text-center">
        Mettre votre mot de passe à jour{' '}
      </Text>
    </div>

    <div className="mt-6 w-full rounded-[20px]  p-4 bg-gray-300 ">
      <div>
        <Grid.Container gap={2}>
          <Grid sm={4} className="w-full">
            <div className='flex w-full border-4 border-black rounded-[20px] items-center justify-center'>
              <BsPerson className='text-5xl text-center'/>
            </div>
          </Grid>

          <Grid sm={8} className="w-full">
            <div className="grid gap-3 w-full ">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid">
                  <Text
                    b
                    className="text-sm ml-4 mb-2 text-gray-500 "
                  >
                    {' '}
                    Nouveau mot de passe
                  </Text>
                  <Input
                    placeholder={'nouveau mot de passe'}
                    onChange={getNewPassword}
                    aria-label={'Nom'}
                    color={'primary'}
                    helperText={errors?.newPassword}
                    helperColor="error"
                    type={"password"}
                  />
                </div>
                <div className="grid">
                  <Text
                    b
                    className="text-sm ml-4 mb-2 text-gray-500 "
                  >
                    {' '}
                    Confirmer nouveau mot de passe
                  </Text>
                  <Input
                    placeholder={'confirmer nouveau mot de passe' }
                    aria-label={'confirmedPassword'}
                    onChange={getConfirmedPassword}
                    helperText={errors?.newPassword_confirmation}
                    helperColor="error"
                    type={"password"}
                  />
                </div>
              </div>
             
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid">
            
                </div>
                <div className="grid">
                  <Text
                    b
                    className="text-sm ml-4 mb-2 text-gray-500 "
                  >
                    {' '}
                    Entrez votre mot de passe pour confirmer{' '}
                  </Text>
                  <Input
                    placeholder={"mot de passe"}
                    onChange={getPassword}
                    aria-label={'password'}
                    color={'primary'}
                    helperText={errors?.password}
                    helperColor="error"
                    type={"password"}
                  />
                </div>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </div>
      <div className="flex justify-end items-center mt-4 w-full gap-4">
        <Button
          auto
          type={null}
          className="bg-red-600 text-white dark:bg-red-800 text-gray-300"
          onClick={returnBack}
        >
          <p className="text-white">retour</p>
        </Button>
        <Button
          auto
          flat
          type={null}
          css={{ background:"#BF7B2A" }}
          onPress={UpdatePassword}
        >
          <p className="text-white">Mettre mot de passe à jour</p>
        </Button>
      </div>
    </div>
  </div>
  
    )
}

export default UpdatePassword