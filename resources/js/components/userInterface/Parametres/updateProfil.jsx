import { Grid, Text, Button, Input } from '@nextui-org/react'
import { useState, useContext, useEffect } from 'react'
import { BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { postWithAxios } from '../../api/axios'
import { UserContext } from '../../userContext'




const UpdateProfil = () => {

  const {user, setUser} = useContext(UserContext)

  const [userInformations, setUserInformations] = useState(user)

  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const getName = (e) => {
    const name = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      nom: name,
    }))
  }

  const getEmail = (e) => {
    const email = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      email: email,
    }))
  }

  const getPrenom = (e) => {
    const prenom = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      prenoms: prenom,
    }))
  }

  const getPseudo = (e) => {
    const pseudo = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      pseudo: pseudo,
    }))
  }

  const getPassword = (e) => {
    const password = e.target.value
    setUserInformations((previous) => ({
      ...previous,
      mot_de_passe : password,
    }))
  }

  const notifySuccess = ()=>toast('Vos informations ont été mises à jour avec success', {
    hideProgressBar:true,
    type: 'success'
  })


  const updateSuccessfull = (user) => {
    setUser(user)
    notifySuccess();
    window.location.reload(true)
  }
 

  const updateUserInformations = async () => {


    const res = await postWithAxios('/update_user_informations', userInformations)

    res.errors ? setErrors(res.errors) : updateSuccessfull(res.user)

  }

  useEffect(()=>{
    setUserInformations(user)
  },[user])


  return (
    <div className="w-full ">
      <ToastContainer/>
    <div className="flex  items-center justify-center ">
      <Text b className="text-gray-500 text-center">
        Mettre votre profil à jour{' '}
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
                    Nom 
                  </Text>
                  <Input
                    placeholder={user?.nom}
                    onChange={getName}
                    aria-label={'Nom'}
                    color={'primary'}
                    helperText={errors?.nom}
                    helperColor="error"
                  />
                </div>
                <div className="grid">
                  <Text
                    b
                    className="text-sm ml-4 mb-2 text-gray-500 "
                  >
                    {' '}
                    Prénoms
                  </Text>
                  <Input
                    placeholder={user?.prenoms }
                    aria-label={'prenoms'}
                    onChange={getPrenom}
                    helperText={errors?.prenoms}
                    helperColor="error"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="grid">
                  <Text
                    b
                    className="text-sm ml-4 mb-2 text-gray-500 "
                  >
                    Email
                  </Text>
                  <Input
                    placeholder={user?.email}
                    aria-label={'email'}
                    color={'primary'}
                    onChange={getEmail}
                    helperText={errors?.email}
                    helperColor="error"
                  />
                </div>
                <div className="grid">
                  <Text
                    b
                    className="text-sm ml-4 mb-2 text-gray-500 "
                  >
                    Pseudo
                  </Text>
                  <Input
                    placeholder={user?.pseudo}
                    onChange={getPseudo}
                    aria-label={'Pseudo'}
                    color={'primary'}
                    helperText={errors?.pseudo}
                    helperColor="error"
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
                    helperText={errors?.mot_de_passe}
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
          onClick={() => hideUpdateForm(false)}
        >
          <p className="text-white">retour</p>
        </Button>
        <Button
          auto
          flat
          type={null}
          css={{ background:"#BF7B2A" }}
          onPress={updateUserInformations}
        >
          <p className="text-white">Modifier mes informations</p>
        </Button>
      </div>
    </div>
  </div>
  )
}

export default UpdateProfil
